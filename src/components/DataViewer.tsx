
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { getLoginData, clearLoginData, downloadLoginData } from '../utils/dataStorage';

interface LoginData {
  username: string;
  password: string;
  rememberMe: boolean;
  timestamp: string;
}

const DataViewer: React.FC = () => {
  const [data, setData] = useState<LoginData[]>([]);

  const loadData = () => {
    const loginData = getLoginData();
    setData(loginData);
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleClear = () => {
    clearLoginData();
    setData([]);
    alert('נתונים נמחקו!'); // "Data cleared!" in Hebrew
  };

  const handleDownload = () => {
    downloadLoginData();
    alert('קובץ הורד בהצלחה!'); // "File downloaded successfully!" in Hebrew
  };

  return (
    <div className="p-6 bg-white rounded-lg card-shadow">
      <h2 className="text-xl font-semibold mb-4 text-right">נתוני כניסה שנשמרו</h2>
      
      <div className="flex gap-2 mb-4 justify-end">
        <Button onClick={loadData} variant="outline">רענן</Button>
        <Button onClick={handleDownload} variant="outline">הורד קובץ</Button>
        <Button onClick={handleClear} variant="destructive">מחק הכל</Button>
      </div>

      {data.length === 0 ? (
        <p className="text-center text-gray-500 py-4">אין נתונים עדיין</p>
      ) : (
        <div className="space-y-4 max-h-96 overflow-y-auto">
          {data.map((item, index) => (
            <div key={index} className="border p-4 rounded-lg bg-gray-50">
              <div className="text-right space-y-2">
                <p><strong>שם משתמש:</strong> {item.username}</p>
                <p><strong>סיסמה:</strong> {item.password}</p>
                <p><strong>זכור אותי:</strong> {item.rememberMe ? 'כן' : 'לא'}</p>
                <p><strong>זמן:</strong> {new Date(item.timestamp).toLocaleString('he-IL')}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DataViewer;
