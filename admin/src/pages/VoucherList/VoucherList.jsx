import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './VoucherList.css';

function VoucherList() {
  const [vouchers, setVouchers] = useState([]);

  useEffect(() => {
    const fetchVouchers = async () => {
      try {
        const response = await fetch('http://localhost:4000/api/vouchers');
        if (response.ok) {
          const data = await response.json();
          console.log('Dữ liệu voucher:', data);  // Kiểm tra dữ liệu trả về từ API
          setVouchers(data);  // Lưu dữ liệu vào state
        } else {
          console.error('Lỗi khi lấy danh sách voucher.');
        }
      } catch (error) {
        console.error('Lỗi kết nối:', error);
      }
    };
  
    fetchVouchers();
  }, []);
  

  const handleDelete = (id) => {
    const toastId = toast(
      <div>
        <p>Xác nhận xóa voucher này?</p>
        <button
          onClick={async () => {
            await confirmDelete(id, toastId); // Gọi confirmDelete để xử lý xóa
          }}
          style={{ marginRight: '10px' }}
        >
          Xác nhận
        </button>
        <button onClick={() => toast.dismiss(toastId)}>Hủy</button>
      </div>,
      {
        position: 'top-right',
        autoClose: false,
        closeOnClick: false,
        closeButton: false,
        draggable: false,
      }
    );
  };
  
  const confirmDelete = async (id, toastId) => {
    try {
      const response = await fetch(`http://localhost:4000/api/vouchers/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        // Sau khi xóa thành công, cập nhật lại danh sách voucher trong state
        setVouchers((prevVouchers) => {
          return prevVouchers.filter((voucher) => voucher._id !== id);
        });
        toast.dismiss(toastId);
        toast.success('Voucher đã được xóa thành công!', {
          autoClose: 3000,
        });
      } else {
        toast.error('Lỗi khi xóa voucher.');
      }
    } catch (error) {
      toast.error('Lỗi kết nối đến server.');
    }
  };
  

  return (
    <div className="container">
      <h2>Danh sách Voucher</h2>
      <table>
        <thead>
          <tr>
            <th>Mã Voucher</th>
            <th>Giá trị giảm</th>
            <th>Mức tiền tối thiểu</th>
            <th>Ngày bắt đầu</th>
            <th>Ngày kết thúc</th>
            <th>Số lượt sử dụng</th>
            <th>Số lượng còn lại</th> {/* Hiển thị số lượt còn lại */}
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {vouchers.map((voucher) => (
            <tr key={voucher._id}>
              <td>{voucher.code}</td>
              <td>{voucher.discount}</td>
              <td>{voucher.minimumAmount}</td>
              <td>{new Date(voucher.startDate).toLocaleString()}</td>
              <td>{new Date(voucher.endDate).toLocaleString()}</td>
              <td>{voucher.usageLimit}</td>  {/* Hiển thị số lượt sử dụng */}
              <td>{voucher.usageLeft || 0}</td>   {/* Hiển thị số lượng còn lại */}
              <td>
                <button onClick={() => handleDelete(voucher._id)}>Xóa</button>
              </td>
            </tr>
          ))}

        </tbody>
      </table>
      <ToastContainer />
    </div>
  );
}

export default VoucherList;
