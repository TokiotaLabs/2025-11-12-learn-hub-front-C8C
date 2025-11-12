import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStateProvider } from './store/GlobalStateContext';

const rootElement = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(rootElement);

root.render(
  <GlobalStateProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </GlobalStateProvider>
);
