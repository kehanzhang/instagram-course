import athensLogo from './assets/icon.png'

function App() {
  return (
    <div className='min-h-screen w-screen flex flex-col justify-center items-center'>
      <img src={athensLogo}  alt="Athens logo" className="h-24 w-24 my-2" />
      <p className='text-2xl font-bold'>hello world</p>
      <p className='text-lg text-gray-600'>wow this is so cool!</p>
      <div className='pt-4'>
        <p>
          Edit <code>src/App.jsx</code> and save to begin!
        </p>
      </div>
      <p>this text won't be styled</p>
    </div>
  )
}

export default App
