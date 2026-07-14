import { ThemeProvider } from './presentation/providers/Theme';

import AppRouter from './app/AppRouter';

function App() {
  return (
    <ThemeProvider>
      <AppRouter />
    </ThemeProvider>
  );
}

export default App;