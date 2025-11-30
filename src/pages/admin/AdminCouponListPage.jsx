import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AdminCouponTable from "../../components/admin/coupons/AdminCouponTable";
import { adminCouponApi } from "../../api/adminCouponApi"; // API 연결
import Loader from "../../components/common/Loader";

const AdminCouponListPage = () => {
  const navigate = useNavigate();
  const [coupons, setCoupons] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCoupons();
  }, []);

  const fetchCoupons = async () => {
    try {
      setLoading(true);
      const data = await adminCouponApi.getCoupons();
      setCoupons(data.coupons);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (couponId) => {
    if (!confirm("정말 쿠폰을 삭제하시겠습니까?")) return;
    try {
      await adminCouponApi.deleteCoupon(couponId);
      fetchCoupons();
    } catch (err) {
      alert("삭제 실패");
    }
  };

  if (loading) return <Loader fullScreen />;

  return (
    <div className="admin-coupon-list-page">
      <div className="page-header">
        <h1>🎫 쿠폰 관리</h1>
        <button
          onClick={() => navigate("/admin/coupons/new")}
          className="btn btn-primary"
        >
          + 쿠폰 생성
        </button>
      </div>
      <AdminCouponTable coupons={coupons} onDelete={handleDelete} />
    </div>
  );
};

export default AdminCouponListPage;