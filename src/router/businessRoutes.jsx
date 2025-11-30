import { Navigate } from "react-router-dom";
import BusinessLayout from "../components/layout/BusinessLayout";
import BusinessLoginPage from "../pages/auth/BusinessLoginPage";
import BusinessSignupPage from "../pages/auth/BusinessSignupPage";
import BusinessDashboardPage from "../pages/business/BusinessDashboardPage";
import BusinessMyHotelPage from "../pages/business/BusinessMyHotelPage";
import BusinessBookingPage from "../pages/business/BusinessBookingPage";
import BusinessReviewPage from "../pages/business/BusinessReviewPage";
import BusinessCouponPage from "../pages/business/BusinessCouponPage";
import AdminSettingsPage from "../pages/admin/AdminSettingsPage"; // 재사용
import AdminMyProfilePage from "../pages/admin/AdminMyProfilePage"; // 재사용

const businessRoutes = [
  { path: "/business/login", element: <BusinessLoginPage /> },
  { path: "/business/signup", element: <BusinessSignupPage /> },
  {
    path: "/business",
    element: <BusinessLayout />,
    children: [
      { index: true, element: <Navigate to="/business/dashboard" replace /> },
      { path: "dashboard", element: <BusinessDashboardPage /> },
      { path: "my-hotel", element: <BusinessMyHotelPage /> },
      { path: "bookings", element: <BusinessBookingPage /> },
      { path: "reviews", element: <BusinessReviewPage /> },
      { path: "coupons", element: <BusinessCouponPage /> },
      { path: "settings", element: <AdminSettingsPage /> }, // 기능 동일하여 재사용
      { path: "me", element: <AdminMyProfilePage /> }, // 기능 동일하여 재사용
    ],
  },
];

export default businessRoutes;