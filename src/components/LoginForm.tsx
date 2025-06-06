
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import ToggleSwitch from './ToggleSwitch';

const LoginForm: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login attempt:', { username, password, rememberMe });
    // Here you would typically handle the login logic
  };

  return (
    <div className="min-h-screen gradient-bg flex items-center justify-center p-4">
      <div className="w-full max-w-md animate-slide-in">
        <div className="bg-white rounded-3xl card-shadow p-8 space-y-6">
          {/* Toggle Switch */}
          <div className="flex justify-center mb-8">
            <ToggleSwitch 
              defaultChecked={rememberMe}
              onChange={setRememberMe}
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
              />
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <Input
                type="password"
                placeholder="סיסמממממממממממה"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full h-12 px-4 text-right border-gray-200 rounded-lg focus:border-orange focus:ring-orange transition-colors duration-200"
                dir="rtl"
              />
            </div>

            {/* Login Button */}
            <div className="pt-4">
              <Button
                type="submit"
                className="w-full h-12 bg-orange hover:bg-orange-hover text-white font-medium rounded-lg transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]"
              >
                כניסה לחשבון
              </Button>
            </div>
          </form>

          {/* Additional Options */}
          <div className="text-center pt-4">
            <a 
              href="#" 
              className="text-orange hover:text-orange-hover transition-colors duration-200 text-sm"
            >
              כניסה ללקוחות שכנותא בלבד
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
