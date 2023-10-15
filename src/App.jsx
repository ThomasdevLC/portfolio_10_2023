import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import Home from "./pages/home/Home";
import BikeShop from "./pages/works/BikeShop";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Home />}>
        <Route path="/bikeshop/:id" element={<BikeShop />}></Route>
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
