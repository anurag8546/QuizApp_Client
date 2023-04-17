import './styles/App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Quiz from './components/Quiz';
import Result from './components/Result';
import Main from './components/Main';

// create routes

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>
  },
  {
    path: '/quiz',
    element: <Quiz></Quiz>
  },
  {
    path: '/result',
    element: <Result></Result>
  },
])

function App() {
  return (
    <>
      <RouterProvider router={routes} />

    </>
  );
}

export default App;

