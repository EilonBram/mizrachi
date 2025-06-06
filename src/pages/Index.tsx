
import { useEffect } from 'react';
import LoginForm from '@/components/LoginForm';

const Index = () => {
  useEffect(() => {
    // Set the document title dynamically
    document.title = 'כניסה לחשבון - מזרחי טפחות';
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
