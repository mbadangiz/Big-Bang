import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { InnerPagesLayout } from "../Components/InnerPages/InnerPagesLayout/Index";
import { Landing } from "../Screens/Landing/Index";
import Test from "../Components/InnerPages/Test";
import { LoginHolder } from "../Components/LoginRegisterForgetpass/LoginHolder/index";
import { LoginRegisterForgetpassLayout } from "../Components/LoginRegisterForgetpass/LoginRegisterForgetpassLayout";
import { LoginForm } from "../Components/LoginRegisterForgetpass/LoginHolder/LoginForm/LoginForm";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <InnerPagesLayout />,
      children: [{ path: "/", element: <Landing /> }],
    },
    {
      path: "/User",
      element: <LoginRegisterForgetpassLayout />,
      children: [{ path: "/User/Login", element: <LoginHolder /> }],
    },
    { path: "/test", element: <Test /> },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
