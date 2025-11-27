import { useState } from "react";
import { useNavigate } from "react-router-dom";

const BusinessLoginPage = () => {
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    // 로그인 로직 후
    navigate("/business/dashboard");
  };

  return (
    <div className="login-page" style={{background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)'}}>
        <div className="login-container">
            <h2>파트너 센터 로그인</h2>
            <form onSubmit={handleLogin}>
                <div className="form-group"><label>이메일</label><input type="email" required /></div>
                <div className="form-group"><label>비밀번호</label><input type="password" required /></div>
                <button className="btn btn-primary" style={{width:'100%'}}>로그인</button>
            </form>
        </div>
    </div>
  );
};
export default BusinessLoginPage;