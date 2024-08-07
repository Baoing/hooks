import useEventListener from './useEventListener';

const usePageLeave = (onPageLeave: () => void) => {
  if (!onPageLeave) {
    return;
  }

  const handler = (event) => {
    event = event ? event : (window.event as any);
    const from = event.relatedTarget || event.toElement;
    if (!from || (from as any).nodeName === 'HTML') {
      onPageLeave();
    }
  };

  useEventListener('mouseout', handler, document);
};

export default usePageLeave;