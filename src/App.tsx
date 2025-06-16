import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import Header from './components/Header';
import { AppRoutes } from './AppRoutes';

function App() {
  return (
    <Router>
      <LanguageProvider>
        <div className="min-h-screen">
          <Header />
          <Routes>
            {AppRoutes.map((route, index) => {
              const { element, ...rest } = route;
              return <Route key={index} {...rest} element={element} />;
            })}
          </Routes>
        </div>
      </LanguageProvider>
    </Router>
  );
}

export default App;