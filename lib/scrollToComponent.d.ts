type ScrollLogicalPosition = 'center' | 'end' | 'nearest' | 'start';
type scrollToComponentProps = {
    componentId: string;
    focusAfterScroll?: boolean;
    scrollDelay?: number;
    focusDelay?: number;
    align?: ScrollLogicalPosition;
};
/**
 * The scrollToComponent function scrolls to a specified component on the page and optionally focuses
 * on it after scrolling.
 * @param {scrollToComponentProps}  - - `componentId`: The id of the component to scroll to.
 *  'align': The alignment of the component after scrolling. It can be one of the following values:
 * 'start', 'center', or 'end'. The default value is 'center'.
 * 'delay': The delay in milliseconds before scrolling to the component.
 */
export default function scrollToComponent({ componentId, focusAfterScroll, scrollDelay, focusDelay, align, }: scrollToComponentProps): void;
export {};
