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
import { LoginHolder } from "../Components/LoginRegisterForgetpass/LoginHolder/index";
import { LoginRegisterForgetpassLayout } from "../Components/LoginRegisterForgetpass/LoginRegisterForgetpassLayout";
import { LoginForm } from "../Components/LoginRegisterForgetpass/LoginHolder/LoginForm/LoginForm";
import { RegisterHolder } from "../Components/LoginRegisterForgetpass/RegisterHolder";

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
      ],
    },
    { path: "/test", element: <Test /> },
    { path: "/Profile", element: <UserPanel /> },
    { path: "*", element: <Page404 /> },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
