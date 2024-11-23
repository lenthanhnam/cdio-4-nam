import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './VoucherManagement.css';

function VoucherForm() {
  const [code, setCode] = useState('');
  const [discount, setDiscount] = useState('');
  const [minimumAmount, setMinimumAmount] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [usageLimit, setUsageLimit] = useState(''); // State cho số lượng sử dụng

  // Hàm kiểm tra tính hợp lệ của dữ liệu
  const validateForm = () => {
    // Kiểm tra các trường số âm hoặc 0
    if (parseInt(discount) <= 0 || parseInt(minimumAmount) <= 0 || parseInt(usageLimit) <= 0) {
      toast.error('Số lượt sử dụng phải lớn hơn 0.', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      return false;
    }

    const currentDate = new Date();
    const start = new Date(startDate);
    const end = new Date(endDate);

    // Kiểm tra ngày kết thúc trước ngày hôm nay
    if (end < currentDate) {
      toast.error('Ngày kết thúc không được trước ngày hiện tại.', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      return false;
    }

    // Kiểm tra ngày kết thúc trước hoặc bằng ngày bắt đầu
    if (end <= start) {
      toast.error('Ngày kết thúc phải sau ngày bắt đầu.', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Nếu dữ liệu không hợp lệ, dừng thực hiện
    if (!validateForm()) {
      return;
    }

    const voucher = { code, discount, minimumAmount, startDate, endDate, usageLimit };
    
    try {
      const response = await fetch('http://localhost:4000/api/vouchers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(voucher),
      });
      if (response.ok) {
        toast.success('Lưu voucher thành công!', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        // Reset form
        setCode('');
        setDiscount('');
        setMinimumAmount('');
        setStartDate('');
        setEndDate('');
        setUsageLimit('');
      } else {
        const errorData = await response.json();
        console.error('Lỗi từ server:', errorData);
        toast.error('Voucher đã tồn tại.', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      }
    } catch (error) {
      console.error('Lỗi kết nối:', error);
      toast.error('Không thể kết nối đến server.', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <label>
          Mã Voucher:
          <input
            type="text"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            required
          />
        </label>
        <label>
          Giá trị giảm:
          <input
            type="number"
            value={discount}
            onChange={(e) => setDiscount(e.target.value)}
            required
          />
        </label>
        <label>
          Mức tiền tối thiểu áp dụng:
          <input
            type="number"
            value={minimumAmount}
            onChange={(e) => setMinimumAmount(e.target.value)}
            required
          />
        </label>
        <label>
          Ngày giờ bắt đầu:
          <input
            type="datetime-local"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            required
          />
        </label>
        <label>
          Ngày giờ kết thúc:
          <input
            type="datetime-local"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            required
          />
        </label>
        <label>
          Số lượt sử dụng:
          <input
            type="number"
            value={usageLimit}
            onChange={(e) => setUsageLimit(e.target.value)}
            required
          />
        </label>
        <button type="submit">Lưu Voucher</button>
      </form>
      <ToastContainer />
    </div>
  );
}

export default VoucherForm;
