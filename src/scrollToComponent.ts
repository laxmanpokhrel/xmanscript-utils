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

export default function scrollToComponent({
  componentId,
  focusAfterScroll = false,
  scrollDelay,
  focusDelay,
  align = 'center',
}: scrollToComponentProps) {
  // eslint-disable-next-line no-undef
  const element = document.getElementById(componentId);

  if (element) {
    // scroll after delay
    if (scrollDelay) {
      setTimeout(() => {
        element.scrollIntoView({
          behavior: 'smooth',
          block: align,
        });
      }, scrollDelay);
    }
    // scroll without delay
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    });
    // focus to element
    if (focusAfterScroll) {
      // focus after delay
      if (focusDelay)
        setTimeout(() => {
          element.focus();
        }, focusDelay || 300);
      // focus without delay
      else element.focus();
    }
  }
}
