import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './screens/homePage';
import ExplorePage from './screens/explorePage';
import ProfileScreen from './screens/profileScreen';
import BottomNavBar from './components/bottomNavbar';

function App() {
  return (
    <Router>
      <div className='min-h-screen w-screen flex flex-col items-center'>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="/profile" element={<ProfileScreen />} />
        </Routes>
        <BottomNavBar />
      </div>
    </Router>
  )
}

export default App