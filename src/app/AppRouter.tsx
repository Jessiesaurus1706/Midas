import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { ROUTES } from './routes';

import LoginPage from '../presentation/modules/auth/pages/LoginPage';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={ROUTES.LOGIN}
          element={<LoginPage />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;