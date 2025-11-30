import { useState, useEffect } from "react";
import { mockReviewApi } from "../../api/mockApi";
import AdminReviewTable from "../../components/admin/reviews/AdminReviewTable";

const BusinessReviewPage = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    mockReviewApi.getReviews().then(res => setReviews(res.reviews));
  }, []);

  // 삭제 기능 대신 신고 기능으로 대체
  const handleReport = (id) => {
    const reason = prompt("신고 사유를 입력해주세요:");
    if (reason) {
      alert("신고가 접수되었습니다. 관리자가 검토 후 처리합니다.");
      // 실제론 API 호출
      setReviews(reviews.map(r => r.id === id ? { ...r, reported: true, reportReason: reason } : r));
    }
  };

  return (
    <div>
      <div className="page-header"><h1>⭐ 리뷰 관리</h1></div>
      <div className="card table-wrapper">
        <table className="admin-table">
          <thead><tr><th>작성자</th><th>내용</th><th>별점</th><th>관리</th></tr></thead>
          <tbody>
            {reviews.map(r => (
              <tr key={r.id}>
                <td>{r.guestName}</td>
                <td>
                    <div style={{fontWeight:'bold', color:'#2563eb'}}>{r.title}</div>
                    <div style={{fontSize:'0.9rem'}}>{r.comment}</div>
                    {r.reported && <span style={{color:'red', fontSize:'0.8rem'}}>🚨 신고 접수됨 ({r.reportReason})</span>}
                </td>
                <td style={{color:'#f59e0b'}}>{"⭐".repeat(r.rating)}</td>
                <td>
                  {!r.reported ? (
                    <button className="btn btn-warning-sm" onClick={() => handleReport(r.id)}>🚨 신고</button>
                  ) : (
                    <span style={{fontSize:'0.8rem', color:'#64748b'}}>검토중</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BusinessReviewPage;