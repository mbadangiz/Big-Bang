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
import { UserResetpass } from "../Screens/UserResetpass/UserResetpass";
import { PanelHolder } from "../Components/User/Panel/PanelHolder";
import { PanelDashboard } from "../Components/User/Panel/PanelDashboard/index";
import { PanelEditProfile } from "../Components/User/Panel/PanelEditProfile";
import { PanelChangePassword } from "../Components/User/Panel/PanelChangePassword";
import { MyCoursesList } from "../Components/User/Panel/PanelHolder/PanelContent/MyCoursesList/MyCoursesList";
import { PanelCoursesList } from "../Components/User/Panel/PanelHolder/PanelContent/PanelCoursesList/PanelCoursesList";
import { Provider } from "react-redux";
import store from "../redux/store";
import { RegisterFormStep1 } from "../Components/User/LoginRegisterForgetpass/RegisterHolder/RegisterForms/RegisterFormStep1";
import { RegisterFormStep2 } from "../Components/User/LoginRegisterForgetpass/RegisterHolder/RegisterForms/RegisterFormStep2";
import { RegisterFormStep3 } from "../Components/User/LoginRegisterForgetpass/RegisterHolder/RegisterForms/RegisterFormStep3";
import { FavoriteItem } from "../Components/User/Panel/PanelHolder/PanelContent/FavoriteItem/FavoriteItem";
import Aos from "aos";
import "aos/dist/aos.css";
import { PanelSecuritySetting } from "../Components/User/Panel/PanelSecuritySetting";
import { LoginForm } from "../Components/User/LoginRegisterForgetpass/LoginHolder/LoginForm/LoginForm";
import { LoginVerifyCodeForm } from "../Components/User/LoginRegisterForgetpass/LoginHolder/LoginVerifyCodeForm";
import { PanelLogOutModal } from "../Components/User/Panel/PanelLogOutModal";

Aos.init();
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
        {
          path: "/User/Login",
          element: <UserLogin />,
          children: [
            { path: "/User/Login", element: <LoginForm /> },
            {
              path: "/User/Login/VerifyCode",
              element: <LoginVerifyCodeForm />,
            },
          ],
        },
        {
          path: "/User/Register",
          element: <UserRegister />,
          children: [
            { path: "/User/Register/Step1", element: <RegisterFormStep1 /> },
            { path: "/User/Register/Step2", element: <RegisterFormStep2 /> },
            { path: "/User/Register/Step3", element: <RegisterFormStep3 /> },
          ],
        },
        {
          path: "/User/Forgetpass",
          element: <UserForgetpass />,
        },
        {
          path: "/User/Forgetpass/Resetpass/:configValue",
          element: <UserResetpass />,
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
        { path: "/User/Panel/FavoriteSection", element: <FavoriteItem /> },
        {
          path: "/User/Panel/SecuritySetting",
          element: <PanelSecuritySetting />,
        },
        {
          path: "/User/Panel/LogOut",
          element: <PanelLogOutModal />,
        },
      ],
    },

    { path: "/test", element: <Test /> },
    { path: "*", element: <Error404 /> },
  ]);

  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
