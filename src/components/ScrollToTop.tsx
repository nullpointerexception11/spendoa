import { useEffect, memo } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = memo(() => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
});

ScrollToTop.displayName = 'ScrollToTop';

export default ScrollToTop;
