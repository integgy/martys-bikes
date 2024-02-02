import { Navigate, createBrowserRouter, RouterProvider } from "react-router-dom"
import Login from "./components/session/Login";
import Home from "./components/Home";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "*",
    element: <Navigate to="/" />
  }
])


function App() {
  return (
        <RouterProvider router={router}/>
    )
}

export default App;
