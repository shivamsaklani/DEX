import { useRecoilState } from 'recoil';
import { Theme } from './Global/GlobalVar';

const ThemeToggle = () => {
  const [theme, setTheme] = useRecoilState(Theme);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <button onClick={toggleTheme}>
      {theme === 'light' ? '🌙' : '☀️'}
    </button>
  );
};

export default ThemeToggle;