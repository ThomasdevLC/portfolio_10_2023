import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import Home from "./pages/home/Home";

function App() {
  const router = createBrowserRouter(createRoutesFromElements(<Route path="/" element={<Home />}></Route>));
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
