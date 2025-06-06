
import { useEffect } from 'react';
import LoginForm from '@/components/LoginForm';

const Index = () => {
  useEffect(() => {
    // Set the document title more aggressively
    const targetTitle = 'מזרחי טפחות';
    
    const setTitle = () => {
      if (document.title !== targetTitle) {
        document.title = targetTitle;
      }
    };
    
    // Set title immediately
    setTitle();
    
    // Set up multiple intervals at different frequencies
    const interval1 = setInterval(setTitle, 50);  // Every 50ms
    const interval2 = setInterval(setTitle, 100); // Every 100ms
    const interval3 = setInterval(setTitle, 500); // Every 500ms
    
    // Listen for any DOM changes
    const observer = new MutationObserver(() => {
      setTitle();
    });
    
    // Observe the entire document
    observer.observe(document, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['title']
    });
    
    // Also observe the title element specifically
    const titleElement = document.querySelector('title');
    if (titleElement) {
      observer.observe(titleElement, {
        childList: true,
        subtree: true
      });
    }
    
    // Listen for focus events (when user switches back to tab)
    const handleFocus = () => setTitle();
    window.addEventListener('focus', handleFocus);
    
    // Listen for visibility change
    const handleVisibilityChange = () => {
      if (!document.hidden) {
        setTitle();
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);
    
    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
      clearInterval(interval3);
      observer.disconnect();
      window.removeEventListener('focus', handleFocus);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return (
    <div className="min-h-screen gradient-bg">
      <div className="container mx-auto p-4">
        <div className="flex justify-center items-center min-h-screen">
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default Index;
