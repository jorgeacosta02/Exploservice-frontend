import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import { store } from './redux/store.ts';
import './_main.module.scss';
import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:3001'

ReactDOM.createRoot(document.getElementById('root')!).render(
<Provider store={store}>
  <BrowserRouter> 
      <App />
  </BrowserRouter>
</Provider>
)
