import athensLogo from './assets/icon.png'

function App() {
  return (
    <div className='min-h-screen w-screen flex flex-col justify-center items-center'>
      <img src={athensLogo}  alt="Athens logo" className="h-24 w-24 my-2" />
      <p className='text-2xl font-bold'>Welcome to Athens</p>
      <p className='text-lg text-gray-600'>Course: Build Instagram clone with react</p>
      <div className='pt-4'>
        <p>
          Edit <code>src/App.jsx</code> and save to begin!
        </p>
      </div>
    </div>
  )
}

export default App
