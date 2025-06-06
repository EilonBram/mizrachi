
import LoginForm from '@/components/LoginForm';
import DataViewer from '@/components/DataViewer';

const Index = () => {
  return (
    <div className="min-h-screen gradient-bg">
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Login Form */}
          <div className="flex justify-center">
            <LoginForm />
          </div>
          
          {/* Data Viewer */}
          <div className="flex justify-center">
            <div className="w-full max-w-md">
              <DataViewer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
