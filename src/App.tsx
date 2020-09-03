import React from 'react';
import { AuthProvider } from './hooks/AuthContext';
import GlobalStyle from './styles/global';
import SignIn from './pages/SignIn';

const App: React.FC = () => {
  return (
    <>
      <AuthProvider>
        <SignIn />
      </AuthProvider>
      <GlobalStyle />
    </>
  );
};

export default App;
