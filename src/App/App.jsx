import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { InnerPagesLayout } from "../Components/InnerPages/InnerPagesLayout/Index";
import { Landing } from "../Screens/Landing/Index";
import Test from "../Components/InnerPages/Test";
import { ArticleAndNews } from "../Screens/ArticleAndNews/ArticleAndNews";
import { ArticleAndNewsDetail } from "../Screens/ArticleAndNewsDetail/ArticleAndNewsDetail";
import { Courses } from "../Screens/Courses/Courses";
import { CoursesDetails } from "../Screens/CoursesDetails/CoursesDetails";

import { LoginRegisterForgetpassLayout } from "../Components/User/LoginRegisterForgetpass/LoginRegisterForgetpassLayout/index";

import { Error404 } from "../Screens/Error404/Error404";
import { UserLogin } from "../Screens/UserLogin/UserLogin";
import { UserRegister } from "../Screens/UserRegister/UserRegister";
import { UserForgetpass } from "../Screens/UserForgetpass/UserForgetpass";
import { UserChangepass } from "../Screens/UserChangepass/UserChangepass";
import { PanelHolder } from "../Components/User/Panel/PanelHolder";
import { PanelDashboard } from "../Components/User/Panel/PanelDashboard/index";
import { PanelEditProfile } from "../Components/User/Panel/PanelEditProfile";
import { PanelChangePassword } from "../Components/User/Panel/PanelChangePassword";
import { MyCoursesList } from "../Components/User/Panel/PanelHolder/PanelContent/MyCoursesList/MyCoursesList";
import { PanelCoursesList } from "../Components/User/Panel/PanelHolder/PanelContent/PanelCoursesList/PanelCoursesList";

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
        { path: "/User/Login", element: <UserLogin /> },
        { path: "/User/Register", element: <UserRegister /> },
        {
          path: "/User/Forgetpass",
          element: <UserForgetpass />,
        },
        {
          path: "/User/Forgetpass/Changepass",
          element: <UserChangepass />,
        },
      ],
    },
    {
      path: "/User/Panel",
      element: <PanelHolder />,
      children: [
        { path: "/User/Panel/Dashboard", element: <PanelDashboard /> },
        { path: "/User/Panel/EditProfile", element: <PanelEditProfile /> },
        {
          path: "/User/Panel/ChangePassword",
          element: <PanelChangePassword />,
        },
        { path: "/User/Panel/MyCoursesList", element: <MyCoursesList /> },
        { path: "/User/Panel/CoursesList", element: <PanelCoursesList /> },
      ],
    },

    { path: "/test", element: <Test /> },
    { path: "*", element: <Error404 /> },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
