import { useEffect } from 'react';

/**
 * Hook to handle custom domain routing on GitHub Pages.
 * Ensures the app handles the routing correctly when deploying to durgaprasad.me
 */
export const useCustomDomain = () => {
  useEffect(() => {
    // If GitHub pages redirects with a 404 query param hack (often used for SPAs on GH Pages):
    const params = new URLSearchParams(window.location.search);
    const redirectPath = params.get('q');
    
    if (redirectPath && window.history && window.history.replaceState) {
      window.history.replaceState(
        null, 
        '', 
        redirectPath + window.location.hash
      );
    }
  }, []);
};
