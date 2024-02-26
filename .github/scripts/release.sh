# Change directory to the root of the project
cd "$(git rev-parse --show-toplevel)"

echo "=========================================================="
echo "=                                                        ="
echo "=========================================================="

# Declerations
RELEASE_CONFIG_FILE=null
VERSION_UPGRADE_TYPE=null
RELEASE_TYPE=''
TAG=null

PACKAGEJSON=$(cat package.json)
PACKAGE_NAME="$(echo $PACKAGEJSON | jq -r '.name')"
PACKAGE_VERSION="$(echo $PACKAGEJSON | jq -r '.version')"
PACKAGE_NPM_VERSION=null
FINAL_RELEASE_VERSION=null

# Check if release config file is available
echo "- reading config.json file"
if [ -f ".release/config.json" ]; then
    echo "- '.release/config.json' file found"
    RELEASE_CONFIG_FILE=$(cat .release/config.json)
else
    echo "- '.release/config.json' file not found"
    echo "- abort"
    exit 1
fi

# Check if release config file has `versionUpgradeType`
echo "- reading 'versionUpgradeType'"
if [ "$(echo "$RELEASE_CONFIG_FILE" | jq -r ".versionUpgradeType")" != "null" ]; then
    VERSION_UPGRADE_TYPE=$(echo "$RELEASE_CONFIG_FILE" | jq -r ".versionUpgradeType")
    echo "- 'versionUpgradeType': $VERSION_UPGRADE_TYPE"
else
    VERSION_UPGRADE_TYPE=null
    echo "- no 'versionUpgradeType' provided"
    echo "- abort"
    exit 1
fi

# Check if release config file has `releaseType`
echo "- reading 'releaseType'"
if [ "$(echo "$RELEASE_CONFIG_FILE" | jq -r ".releaseType")" != "null" ]; then
    RELEASE_TYPE=$(echo "$RELEASE_CONFIG_FILE" | jq -r ".releaseType")
    echo "- 'releaseType': $RELEASE_TYPE"
else
    RELEASE_TYPE=''
    echo "- no 'releaseType' provided"
    # echo "- abort"
    # exit 1
fi

# Check if npm view command succeeded or failed
echo "- reading package version from npm"
PACKAGE_NPM_VERSION=$(npm view $PACKAGE_NAME version 2>/dev/null)
if [ $? -eq 0 ]; then
    echo "- package npm version: $PACKAGE_NPM_VERSION"
    # if [ "$PACKAGE_VERSION" == "$PACKAGE_NPM_VERSION" ]; then
    #     echo "NPM version and package version matched."
    # fi
else
    echo "- no npm version of the package found"
    # FIRST_RELEASE=true
    PACKAGE_NPM_VERSION=null
    FINAL_RELEASE_VERSION=$PACKAGE_VERSION
fi

# Function to update version based on VERSION_UPGRADE_TYPE
update_version() {
    local current_version=$1
    local release_type=$2
    local major
    local minor
    local patch

    IFS='.' read -r major minor patch <<<"$current_version"

    case $release_type in
    "major")
        echo "$(($major + 1)).0.0"
        ;;
    "minor")
        echo "$major.$(($minor + 1)).0"
        ;;
    "patch")
        echo "$major.$minor.$(($patch + 1))"
        ;;
    *)
        echo "- invalid release type: $release_type"
        ;;
    esac
}

#  Logic for FINAL_RELEASE_VERSION
if [ "$PACKAGE_NPM_VERSION" == "null" ]; then
    FINAL_RELEASE_VERSION=$PACKAGE_VERSION
else
    case $VERSION_UPGRADE_TYPE in
    "major" | "minor" | "patch")
        echo "- analysing version"
        FINAL_RELEASE_VERSION=$(update_version "$PACKAGE_NPM_VERSION" "$VERSION_UPGRADE_TYPE") TAG=$FINAL_RELEASE_VERSION
        echo "- analysed deployable version $FINAL_RELEASE_VERSION"
        ;;
    *)
        echo "- invalid release type: $VERSION_UPGRADE_TYPE"
        ;;
    esac
fi

# Logic for TAG
echo "- reading custom tag"
if [ "$(echo "$RELEASE_CONFIG_FILE" | jq -r ".tag")" != "null" ]; then
    TAG=$(echo "$RELEASE_CONFIG_FILE" | jq -r ".tag")
    echo "- custom tag detected $TAG"
else
    echo "- no custom tag found"
    TAG="v-$FINAL_RELEASE_VERSION"
fi

# Check if release notes are available
echo "- reading release notes"
RELEASE_NOTES=$(cat .release/release-notes.txt)

if [ $? != 0 ]; then
    echo "- release notes not provided"
    RELEASE_NOTES=null
    # exit 1
fi

echo "---"
echo "- RELEASE_NOTES: $RELEASE_NOTES"
echo "- PACKAGE_NAME: $PACKAGE_NAME"
echo "- PACKAGE_VERSION: $PACKAGE_VERSION"
echo "- FINAL_RELEASE_VERSION: $FINAL_RELEASE_VERSION"
echo "- VERSION_UPGRADE_TYPE: $VERSION_UPGRADE_TYPE"
echo "- TAG: $TAG"
echo "- RELEASE_TYPE: $RELEASE_TYPE"

# Set output
echo "tag=$(echo $TAG)" >>$GITHUB_OUTPUT
echo "release-notes=$(echo $RELEASE_NOTES)" >>$GITHUB_OUTPUT
echo "final-release-version=$(echo $FINAL_RELEASE_VERSION)" >>$GITHUB_OUTPUT
echo "release-type=$(echo $VERSION_UPGRADE_TYPE)" >>$GITHUB_OUTPUT
echo "package-version=$(echo $PACKAGE_VERSION)" >>$GITHUB_OUTPUT
echo "release-type=$(echo $RELEASE_TYPE)" >>$GITHUB_OUTPUT
