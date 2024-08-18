import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import HomePage from './screens/homePage';
import ExplorePage from './screens/explorePage';
import ProfileScreen from './screens/profileScreen';
import EditProfileScreen from './screens/editProfileScreen';
import BottomNavBar from './components/bottomNavbar';

function AppContent() {
  const location = useLocation();
  const showBottomNavBar = location.pathname !== '/editProfile';

  return (
    <div className='min-h-screen w-screen flex flex-col items-center'>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/profile" element={<ProfileScreen />} />
        <Route path="/editProfile" element={<EditProfileScreen />} />
      </Routes>
      {showBottomNavBar && <BottomNavBar />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;