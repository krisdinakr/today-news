import { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { routes } from '@/presentation/router';
import Layout from '@/presentation/view/layout';

const App = () => (
  <Router>
    <Suspense>
      <Routes>
        <Route path="/" element={<Layout />}>
          {routes.map((route) => (
            <Route {...route} key={route.path as string} />
          ))}
        </Route>
      </Routes>
    </Suspense>
  </Router>
);

export default App;
