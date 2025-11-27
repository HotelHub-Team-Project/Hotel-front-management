import { Navigate } from "react-router-dom";
import BusinessLayout from "../components/layout/BusinessLayout";
import BusinessLoginPage from "../pages/auth/BusinessLoginPage";
import BusinessDashboardPage from "../pages/business/BusinessDashboardPage";
import BusinessMyHotelPage from "../pages/business/BusinessMyHotelPage";
import BusinessBookingPage from "../pages/business/BusinessBookingPage";
import BusinessReviewPage from "../pages/business/BusinessReviewPage";

const businessRoutes = [
  {
    path: "/business/login",
    element: <BusinessLoginPage />,
  },
  {
    path: "/business",
    element: <BusinessLayout />, 
    children: [
      { index: true, element: <Navigate to="/business/dashboard" replace /> },
      { path: "dashboard", element: <BusinessDashboardPage /> },
      { path: "my-hotel", element: <BusinessMyHotelPage /> },
      { path: "bookings", element: <BusinessBookingPage /> },
      { path: "reviews", element: <BusinessReviewPage /> },
      // 설정, 내 정보는 기존 컴포넌트 재사용 가능 (여기선 생략하거나 Admin과 동일하게 연결)
    ],
  },
];

export default businessRoutes;