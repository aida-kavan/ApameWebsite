import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import AppLayout from '../src/layout/AppLayout.tsx';
import Home from './layout/Home.tsx';


/*import Dashboard from './pages/Dashboard';
import Account from './pages/Account';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Offset from './features/prints/Offset';
import Lazer from './features/board/Lazer';
import Cut from './features/board/Cut';
import Login from './pages/Login';
import SignUp from './pages/signUp';
import Order from './pages/Order';
import VisitCard from './features/prints/offsetsub/VisiteCard';
import Digitalp from './features/prints/Digitalp';
import Sublimission from './features/prints/Sublimission';
import AfterPrint from './features/prints/AfterPrint';
import WebDesign from './features/web/WebDesign';
import Seo from './features/web/Seo';
import Youtube from './features/socialmedia/Youtube';
import Instagram from './features/socialmedia/Instagram';
import PhotoGraphy from './features/shooting/PhotoGraphy';
import SubFrame from "./orderform/prints/sublimition/SubFrame"
import SubPuzzle from './orderform/prints/sublimition/SubPuzzel'
import SubGlass from './orderform/prints/sublimition/SubGlass'
//import Print from './ui/Print';
//import Web from './ui/Web';
//import SocialMedia from './ui/SocialMedia';
//import Board from './ui/Board';
//import Graphic from './ui/Graphic';
//import Shooting from './ui/Shooting';*/

const queryClient = new QueryClient();

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Home />} />
            <Route path='/home' element={<Home />} />
          </Route>
          
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;

