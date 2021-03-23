import React, { Suspense } from 'react';
import { Route, Switch } from 'wouter';
import { DogsContextProvider } from './contexts/DogsContext'
import './App.css';
import Spinner from './components/Spinner';

// Load pages in lazy mode.
const LazyHome = React.lazy(() => import('./pages/Home'))
const LazyDogDetail = React.lazy(() => import('./pages/DogDetail'))
const LazyErrorPage = React.lazy(() => import('./pages/ErrorPage'))

function App() {
  return (
    <div className="App">
      <section className="App-content">
      <DogsContextProvider>
          <Suspense fallback={<Spinner loading />}>
            <Switch>
              <Route component={LazyHome} path="/" />
              <Route component={LazyDogDetail} path="/dog/:breed/:id/:ext" />
              <Route component={LazyErrorPage} />
            </Switch>
          </Suspense>
        </DogsContextProvider>
        </section>
    </div>
  );
}

export default App;
