import { createRoot } from 'react-dom/client';
import App from '@components/App';

const rootNode = document.getElementById('root');

if (rootNode) {
  const root = createRoot(rootNode);

  root.render(<App />);
}
