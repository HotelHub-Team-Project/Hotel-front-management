import { Link } from "react-router-dom";

const AdminReviewTable = ({ reviews, onStatusChange, onDelete }) => {
  return (
    <div className="table-wrapper card">
      <table className="admin-table">
        <thead>
          <tr>
            <th>호텔명</th>
            <th>내용 (신고 사유)</th> {/* 헤더 수정 */}
            <th>작성자</th>
            <th>별점</th>
            <th>상태</th>
            <th style={{width: '180px'}}>관리</th>
          </tr>
        </thead>
        <tbody>
          {reviews.map((review) => (
            <tr key={review.id}>
              <td>{review.hotelName}</td>
              <td>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <Link to={`/admin/reviews/${review.id}`} style={{ color: '#2563eb', textDecoration: 'none', fontWeight: 500 }}>
                    {review.title}
                  </Link>
                  <span style={{ fontSize: '0.85rem', color: '#64748b', marginTop: '2px' }}>{review.comment}</span>
                  {/* ★ 신고 내용 표시 추가 ★ */}
                  {review.reported && review.reportReason && (
                    <span style={{ color: '#ef4444', fontSize: '0.8rem', fontWeight: 'bold', marginTop: '4px' }}>
                      (🚨 신고: {review.reportReason})
                    </span>
                  )}
                </div>
              </td>
              <td>{review.guestName}</td>
              <td style={{ color: '#f59e0b' }}>{"⭐".repeat(review.rating)}</td>
              <td>
                <span className={`badge ${
                  review.status === 'approved' ? 'badge-success' : 
                  review.status === 'rejected' ? 'badge-danger' : 'badge-warning'
                }`}>
                  {review.status === 'approved' ? '승인됨' : review.status === 'rejected' ? '거부됨' : '대기중'}
                </span>
              </td>
              <td>
                <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
                  {review.status === 'pending' && (
                    <>
                      <button className="btn btn-primary" style={{padding:'4px 8px', fontSize:'0.8rem', background:'#10b981', border:'none'}} onClick={() => onStatusChange(review.id, 'approved')}>승인</button>
                      <button className="btn btn-primary" style={{padding:'4px 8px', fontSize:'0.8rem', background:'#f59e0b', border:'none'}} onClick={() => onStatusChange(review.id, 'rejected')}>거부</button>
                    </>
                  )}
                  <button className="btn btn-danger-sm" onClick={() => onDelete(review.id)}>삭제</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminReviewTable;