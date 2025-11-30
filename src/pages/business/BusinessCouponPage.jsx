import { useNavigate } from "react-router-dom";
import AdminCouponListPage from "../admin/AdminCouponListPage"; // 기존 관리자 컴포넌트 재사용

const BusinessCouponPage = () => {
  // 사업자는 본인이 발행한 쿠폰만 보거나 관리할 수 있음 (로직은 동일)
  return <AdminCouponListPage />;
};

export default BusinessCouponPage;