import { useEffect } from 'react';
import LoginForm from '@/components/LoginForm';

const Index = () => {
  useEffect(() => {
    // Set the document title more aggressively
    const setTitle = () => {
      document.title = 'מזרחי טפחות';
    };
    
    setTitle();
    
    // Set up an interval to keep overriding any title changes
    const interval = setInterval(setTitle, 100);
    
    // Also listen for any title changes and override them
    const observer = new MutationObserver(() => {
      if (document.title !== 'מזרחי טפחות') {
        document.title = 'מזרחי טפחות';
      }
    });
    
    observer.observe(document.querySelector('title') || document.head, {
      childList: true,
      subtree: true
    });
    
    return () => {
      clearInterval(interval);
      observer.disconnect();
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
