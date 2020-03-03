import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

import Routes from '../../config/routes';

const NotFoundPage = lazy(() => import('./NotFoundPage/NotFoundPage'));
const HomePage = lazy(() => import('../Home/Home'));

const App: React.FC = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Switch>
      <Route exact path={Routes.HOME} component={HomePage} />
      <Route component={NotFoundPage} />
    </Switch>
  </Suspense>
);

export default App;
