import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname, hash } = useLocation(); // Get hash as well

  useEffect(() => {
    // Scroll to top immediately on path change
    window.scrollTo(0, 0);

    // Handle hash scrolling after a short delay
    if (hash) {
      // Use setTimeout to allow the element to render before scrolling
      const timer = setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100); // 100ms delay, adjust if needed

      // Cleanup the timer if the component unmounts or dependencies change
      return () => clearTimeout(timer);
    }
  }, [pathname, hash]); // Rerun effect if pathname or hash changes

  return null; // This component doesn't render anything
}