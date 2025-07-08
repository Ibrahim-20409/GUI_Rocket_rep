import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Auto-enter fullscreen on page load
const enterFullscreen = () => {
  const elem = document.documentElement;
  if (elem.requestFullscreen) {
    elem.requestFullscreen().catch(console.error);
  } else if ((elem as any).webkitRequestFullscreen) {
    (elem as any).webkitRequestFullscreen();
  } else if ((elem as any).msRequestFullscreen) {
    (elem as any).msRequestFullscreen();
  }
};

// Enter fullscreen immediately when the page loads
document.addEventListener('DOMContentLoaded', () => {
  // Small delay to ensure the page is fully loaded
  setTimeout(enterFullscreen, 100);
});

// Also try to enter fullscreen when the user first interacts with the page
document.addEventListener('click', enterFullscreen, { once: true });
document.addEventListener('keydown', enterFullscreen, { once: true });

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
