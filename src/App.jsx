import './App.css'
import Navbar from './components/Navbar/Navbar'

function App() {
  const URL = import.meta.env.VITE_APP_API_URL;
  alert(URL);

  return (
    <div>
      <Navbar />
    </div>
  )
}

export default App
