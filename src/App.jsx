import HomePage from './screens/homePage';
import BottomNavBar from './components/bottomNavbar';

function App() {
  return (
    <div className='min-h-screen w-screen flex flex-col items-center'>
      <HomePage/>
      <BottomNavBar />
    </div>
  )
}

export default App
