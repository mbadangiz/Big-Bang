import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { InnerPagesLayout } from "../Components/InnerPages/InnerPagesLayout/Index";
import { Landing } from "../Screens/Landing/Index";
import Test from "../Components/InnerPages/Test";
import { ArticleAndNews } from "../Screens/ArticleAndNews/ArticleAndNews";
import { ArticleAndNewsDetail } from "../Screens/ArticleAndNewsDetail/ArticleAndNewsDetail";
import { Courses } from "../Screens/Courses/Courses";
import { CoursesDetails } from "../Screens/CoursesDetails/CoursesDetails";
import { Page404 } from "../Screens/Page404/Page404";
import { UserPanel } from "../Screens/UserPanel/UserPanel";
import { LoginRegisterForgetpassLayout } from "../Components/User/LoginRegisterForgetpass/LoginRegisterForgetpassLayout/index";
import { LoginHolder } from "../Components/User/LoginRegisterForgetpass/LoginHolder/index";
import { RegisterHolder } from "../Components/User/LoginRegisterForgetpass/RegisterHolder/index";
import { ForgetpassHolder } from "../Components/User/LoginRegisterForgetpass/ForgetpassHolder/index";
import { ForgetpassChangepassHolder } from "../Components/User/LoginRegisterForgetpass/ForgetpassHolder/ForgetpassChangepassHolder/index";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <InnerPagesLayout />,
      children: [
        { path: "/", element: <Landing /> },
        { path: "/ArticleAndNews", element: <ArticleAndNews /> },
        { path: "/ArticleAndNewsDetail", element: <ArticleAndNewsDetail /> },
        { path: "/Courses", element: <Courses /> },
        { path: "/CoursesDetails", element: <CoursesDetails /> },
      ],
    },
    {
      path: "/User",
      element: <LoginRegisterForgetpassLayout />,
      children: [
        { path: "/User/Login", element: <LoginHolder /> },
        { path: "/User/Register", element: <RegisterHolder /> },
        {
          path: "/User/Forgetpass",
          element: <ForgetpassHolder />,
        },
        {
          path: "/User/Forgetpass/Changepass",
          element: <ForgetpassChangepassHolder />,
        },
      ],
    },
    { path: "/test", element: <Test /> },
    { path: "/Profile", element: <UserPanel /> },
    { path: "*", element: <Page404 /> },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
