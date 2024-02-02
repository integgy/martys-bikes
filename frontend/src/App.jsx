import { Navigate, createBrowserRouter, RouterProvider } from "react-router-dom"
import Login from "./compnents/session/Login";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>
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
