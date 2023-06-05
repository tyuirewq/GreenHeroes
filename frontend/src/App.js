import './App.css';
// import Sidebar from './components/Sidebar';
// import Header from './components/Header';
import MainDashboard from './components/MainDashboard';
import LoginPage from './pages/LoginPage';
import RegistrationPage from './pages/RegistrationPage';
import EditProfilePage from './pages/EditProfilePage';
import RankingPage from './pages/RankingPage';
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
          <Route exact path='/Home' element={<MainDashboard />} />
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
