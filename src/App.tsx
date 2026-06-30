import { Theme } from './settings/types';
import { LuminaLandingPage } from './components/generated/LuminaLandingPage';

let theme: Theme = 'light';

function App() {
  function setTheme(theme: Theme) {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }

  setTheme(theme);

  return <LuminaLandingPage />;
}

export default App;
