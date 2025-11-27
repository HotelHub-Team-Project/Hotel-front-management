import { useNavigate } from "react-router-dom";
import { useAdminAuth } from "../../hooks/useAdminAuth";

const BusinessHeader = () => {
  const navigate = useNavigate();
  const { logout } = useAdminAuth(); // 로그아웃 기능은 공유

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/business/login");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <header className="admin-header">
      <div className="admin-header-inner">
        <div className="header-left">
          
          <h2>사업자 페이지</h2>
        </div>
        <div className="header-right">
          
          <span>홍길동 사장님</span>
          <button onClick={handleLogout} className="btn btn-outline">
            로그아웃
          </button>
        </div>
      </div>
    </header>
  );
};

export default BusinessHeader;