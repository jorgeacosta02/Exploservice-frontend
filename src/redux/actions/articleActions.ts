// actions.ts
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// import { IArticleFormDB } from '../../Interfaces/articleInterfaces';


export const getAllArticlesAction: any = createAsyncThunk('user/loginUser', async () => {
  try {
    const response = await axios.get('http://localhost:5001/article');
    console.log('response.data en getAllArticlesAction: ', response.data);
    const data = response.data;
    // localStorage.setItem('accessLogin', JSON.stringify(data));
    return data;
  } catch (error) {
    throw new Error('Error en la solicitud de inicio de sesión');
  }
});