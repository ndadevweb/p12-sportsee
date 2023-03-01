import './App.css'
import { Outlet } from 'react-router-dom'
import { Primary as NavigationHorizontal, Secondary as NavigationVertical } from './components/'

function App() {
  return (
    <div className="container">
      <NavigationHorizontal />
      <NavigationVertical />
      <main className="grid-item-3">
        <Outlet />
      </main>
    </div>
  )
}

export default App;
