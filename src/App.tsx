import './styles/index.scss';
import Pages from './pages/Pages';
import Header from './layout/Header/Header';
import AuthWrapper from './components/auth/AuthWrapper/AuthWrapper';

function App() {
  return (
    <div className="app">
      <Header />
      <AuthWrapper>
        <Pages />
      </AuthWrapper>
    </div>
  );
}

export default App;
