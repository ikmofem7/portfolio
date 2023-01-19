import { createRoot } from 'react-dom/client';
import App from './App';
import './global.scss';
import 'react-toastify/dist/ReactToastify.css';

const root = createRoot(document.getElementById('root') as Element);
root.render(<App />);
