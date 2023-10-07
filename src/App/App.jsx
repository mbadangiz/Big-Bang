import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { InnerPagesLayout } from "../Components/InnerPages/InnerPagesLayout/Index";
import { Landing } from "../Screens/Landing/Index";
import Test from "../Components/InnerPages/Test";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <InnerPagesLayout />,
      children: [{ path: "/", element: <Landing /> }],
    },
    { path: "/test", element: <Test /> },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
