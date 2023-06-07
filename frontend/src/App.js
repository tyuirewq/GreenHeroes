import './App.css';
import MainDashboard from './pages/MainDashboard';
import LoginPage from './pages/LoginPage';
import RegistrationPage from './pages/RegistrationPage';
import EditProfilePage from './pages/EditProfilePage';
import RankingPage from './pages/RankingPage';
import RulesPage from './pages/RulesPage';
import BenefitsPage from './pages/BenefitsPage';
import UploadPage from './pages/UploadPage';
import ActivityPage from './pages/ActivityPage';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App" >
      <Router>
        <Routes>
          <Route exact path='/' element={<LoginPage />} />
          <Route exact path='/registration' element={<RegistrationPage />} />
          <Route exact path='/edit' element={<EditProfilePage />} />
          <Route exact path='/rank' element={<RankingPage />} />
          <Route exact path='/rules' element={<RulesPage />} />
          <Route exact path='/upload' element={<UploadPage />} />
          <Route exact path='/benefits' element={<BenefitsPage />} />
          <Route exact path='/Home' element={<MainDashboard />} />
          <Route exact path='/activity' element={<ActivityPage />} />
          <Route exact path='/navbar' element={<Navbar />} />
          {/* <BrowserRouter>
      <Routes>
      <Route path='/' element={<MainContent/>}>
        <Route index element={<h1>Home</h1>}/>
        <Route path='sidebar' element={<Sidebar/> }/>
        <Route path='header' element={<Header/>}/>e
      </Route>
      kjdfg jdsf </Routes>
    </BrowserRouter> */}</Routes></Router>
    </div>
  );
}

export default App;
