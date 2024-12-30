import { Outlet } from "react-router-dom"
import { Menubar } from "./components"
function App() {
  return (
    <div className="min-h-screen bg-gray-950">
      <Menubar />
      <div className="ml-16  text-white  bg-gray-950">
        <Outlet />
      </div>
    </div>
  )
}

export default App
