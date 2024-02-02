import { Navigate, createBrowserRouter, RouterProvider } from "react-router-dom"
import Login from "./compnents/Login";


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
