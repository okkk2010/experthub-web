import { createBrowserRouter } from "react-router-dom";
import { AppLayout } from "../components/layout/AppLayout";
import Home from "../pages/Home";
import Categories from "../pages/Categories";
import QuestionsList from "../pages/Questions/QuestionsList";
import QuestionDetail from "../pages/Questions/QuestionDetail";
import AskQuestion from "../pages/Questions/AskQuestion";
import ExpertsList from "../pages/Experts/ExpertsList";
import ExpertDetail from "../pages/Experts/ExpertDetail";
import AppointmentCreate from "../pages/Appointment/AppointmentCreate";
import MyDashboard from "../pages/My/MyDashboard";
import ExpertDashboard from "../pages/My/ExpertDashboard";
import Login from "../pages/Auth/Login";
import OAuthCallback from "../pages/Auth/OAuthCallback";
import NotFound from "../pages/NotFound";

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/categories", element: <Categories /> },
      { path: "/c/:categoryId/questions", element: <QuestionsList /> },
      { path: "/questions/:questionId", element: <QuestionDetail /> },
      { path: "/ask", element: <AskQuestion /> },
      { path: "/experts", element: <ExpertsList /> },
      { path: "/experts/:expertId", element: <ExpertDetail /> },
      { path: "/appointments/:expertId", element: <AppointmentCreate /> },
      { path: "/my", element: <MyDashboard /> },
      { path: "/expert", element: <ExpertDashboard /> },
      { path: "/auth/login", element: <Login /> },
      { path: "/auth/callback", element: <OAuthCallback /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
