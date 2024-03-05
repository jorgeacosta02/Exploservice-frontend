// userSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getAllArticlesAction } from '../actions/articleActions';
import { IArticleData, IArticleFormDB } from '../../Interfaces/articleInterfaces';


interface ArticleState {
    data: IArticleData | null;
    loading: boolean;
    error: string | null;
}

const initialState: ArticleState = {
    data: null,
    loading: false,
    error: null,
};

const articleSlice = createSlice({
    name: 'articles',
    initialState,
    reducers: {
      // cleanUser : (state) => {
      //   state.data = null
      // }
    },
    extraReducers: (builder) => {
        builder
        .addCase(
          getAllArticlesAction.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(
          getAllArticlesAction.fulfilled, (state, action: PayloadAction<IArticleFormDB>) => {
          state.loading = false;
          console.log('action.payload.user :', action.payload);
          state.data = action.payload;
          console.log('state.data en la slice: ', state.data)
          // if (action.payload.message === 'El usuario no existe') {
          //   // El servidor devolvió un mensaje indicando que el usuario no existe
          //   // Puedes manejar esto de acuerdo a tus necesidades
          // }
        })
        .addCase(
          getAllArticlesAction.rejected,
          (state, action: any) => {
            state.loading = false;
            state.error = action.error.message || 'Error desconocido en la solicitud de inicio de sesión';
          }
        );
    },
});

// export const { cleanUser } = articleSlice.actions;

export default articleSlice.reducer;

export const selectArticlesState = (state:any) => state.articles;
