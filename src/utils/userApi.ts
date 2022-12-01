export interface User {
  email: string;
  password: string;
}

export const loginAPI = async ({ email, password }: User): Promise<string> => {
  return await new Promise((resolve, reject) => {
    if (email === 'frontend@isawesome.com' && password === 'cool') {
      return resolve('Logged in');
    } else {
      return reject(new Error('Wrong email or password'));
    }
  });
};
