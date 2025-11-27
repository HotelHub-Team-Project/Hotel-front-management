const BusinessDashboardPage = () => {
  // 실제 데이터 연동 시 API 호출 필요
  return (
    <div className="admin-dashboard-page">
      <div className="page-header">
        <h1>📊 사업자 대시보드</h1>
        <p>내 호텔의 현황을 확인하세요.</p>
      </div>
      <div className="stats-grid" style={{gridTemplateColumns: 'repeat(3, 1fr)'}}>
        <div className="stat-card">
           <div className="stat-header"><span className="stat-title">오늘 예약</span></div>
           <div className="stat-value">3건</div>
        </div>
        <div className="stat-card">
           <div className="stat-header"><span className="stat-title">이번 달 매출</span></div>
           <div className="stat-value">₩4,500,000</div>
        </div>
         <div className="stat-card">
           <div className="stat-header"><span className="stat-title">리뷰 평점</span></div>
           <div className="stat-value">4.8</div>
        </div>
      </div>
    </div>
  );
};
export default BusinessDashboardPage;