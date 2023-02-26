import './App.css'
import { Outlet } from 'react-router-dom'
import Primary from './components/Navigation/Primary/Primary'

function App() {
  return (
    <div className="container">
      <Primary />
      <main>
          <Outlet />
      </main>
    </div>
  )
}

export default App;
