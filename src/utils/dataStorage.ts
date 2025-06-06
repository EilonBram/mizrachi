
interface LoginData {
  username: string;
  password: string;
  rememberMe: boolean;
  timestamp: string;
}

export const saveLoginData = (data: LoginData) => {
  // Get existing data from localStorage
  const existingData = getLoginData();
  
  // Add new data to the array
  const updatedData = [...existingData, data];
  
  // Save back to localStorage
  localStorage.setItem('loginData', JSON.stringify(updatedData));
  
  console.log('Data saved to localStorage:', data);
};

export const getLoginData = (): LoginData[] => {
  const stored = localStorage.getItem('loginData');
  return stored ? JSON.parse(stored) : [];
};

export const clearLoginData = () => {
  localStorage.removeItem('loginData');
};

export const downloadLoginData = () => {
  const data = getLoginData();
  const dataStr = JSON.stringify(data, null, 2);
  const dataBlob = new Blob([dataStr], { type: 'application/json' });
  
  const url = URL.createObjectURL(dataBlob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'login_data.json';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};
