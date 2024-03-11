import './App.css';
import Root from '../src/pages/Root';
import AboutMe from './pages/AboutMe';
import MealSuggestor from './pages/MealSuggester';
import PlaylistCreator from './pages/PlaylistCreator';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Projects from './pages/projects';
import ContactMe from './pages/contactMe';
import RedditExplorer from './bestofreddit/pages/redditExplorer';
import SolarChecker from './SolarChecker/pages/solarChecker';

const appRouter = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Root />}>
    <Route path='' element={<AboutMe />} />
    <Route path='projects' element={<Projects />} />
    <Route path='contact' element={<ContactMe />} />
    <Route path='meal-suggestor' element={<MealSuggestor />} />
    <Route path='playlist-creator' element={<PlaylistCreator />} />
    <Route path='reddit-explorer' element={<RedditExplorer />} />
    <Route path='solar-checker' element={<SolarChecker />} />
  </Route>
));

function App() {

  return (
    <RouterProvider router={appRouter} />
  );
}

export default App;
