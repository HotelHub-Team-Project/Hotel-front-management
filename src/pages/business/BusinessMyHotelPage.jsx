import AdminHotelForm from "../../components/admin/hotels/AdminHotelForm";

const BusinessMyHotelPage = () => {
    // 내 호텔 정보만 불러와서 폼에 채워줌
  return (
    <div>
      <div className="page-header"><h1>🏨 내 호텔 관리</h1></div>
      <AdminHotelForm onSubmit={() => alert('수정 요청됨')} onCancel={()=>{}} />
    </div>
  );
};
export default BusinessMyHotelPage;