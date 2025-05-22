import axios from 'axios';

// TODO: Replace <your-heroku-backend> with your actual Heroku backend URL
export async function loginWithEmailPassword(email: string, password: string) {
  const response = await axios.post('https://twiinz-beard-website-ff3fce7fad2d.herokuapp.com/auth/login/', {
    email,
    password,
  });
  return response.data;
}