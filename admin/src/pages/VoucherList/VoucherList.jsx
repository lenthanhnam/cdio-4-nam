// import React, { useEffect, useState } from 'react';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import './VoucherList.css';

// function VoucherList() {
//   const [vouchers, setVouchers] = useState([]);

//   useEffect(() => {
//     const fetchVouchers = async () => {
//       try {
//         const response = await fetch('http://localhost:4000/api/vouchers');
//         if (response.ok) {
//           const data = await response.json();
//           console.log('Dữ liệu voucher:', data);  // Kiểm tra dữ liệu trả về từ API
//           setVouchers(data);  // Lưu dữ liệu vào state
//         } else {
//           console.error('Lỗi khi lấy danh sách voucher.');
//         }
//       } catch (error) {
//         console.error('Lỗi kết nối:', error);
//       }
//     };
  
//     fetchVouchers();
//   }, []);
  

//   const handleDelete = (id) => {
//     const toastId = toast(
//       <div>
//         <p>Xác nhận xóa voucher này?</p>
//         <button
//           onClick={async () => {
//             await confirmDelete(id, toastId); // Gọi confirmDelete để xử lý xóa
//           }}
//           style={{ marginRight: '10px' }}
//         >
//           Xác nhận
//         </button>
//         <button onClick={() => toast.dismiss(toastId)}>Hủy</button>
//       </div>,
//       {
//         position: 'top-right',
//         autoClose: false,
//         closeOnClick: false,
//         closeButton: false,
//         draggable: false,
//       }
//     );
//   };
  
//   const confirmDelete = async (id, toastId) => {
//     try {
//       const response = await fetch(`http://localhost:4000/api/vouchers/${id}`, {
//         method: 'DELETE',
//       });
  
//       if (response.ok) {
//         // Sau khi xóa thành công, cập nhật lại danh sách voucher trong state
//         setVouchers((prevVouchers) => {
//           return prevVouchers.filter((voucher) => voucher._id !== id);
//         });
//         toast.dismiss(toastId);
//         toast.success('Voucher đã được xóa thành công!', {
//           autoClose: 3000,
//         });
//       } else {
//         toast.error('Lỗi khi xóa voucher.');
//       }
//     } catch (error) {
//       toast.error('Lỗi kết nối đến server.');
//     }
//   };
  

//   return (
//     <div className="container">
//       <h2>Danh sách Voucher</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>Mã Voucher</th>
//             <th>Giá trị giảm</th>
//             <th>Mức tiền tối thiểu</th>
//             <th>Ngày bắt đầu</th>
//             <th>Ngày kết thúc</th>
//             <th>Số lượt sử dụng</th>
//             <th>Số lượng còn lại</th> {/* Hiển thị số lượt còn lại */}
//             <th>Hành động</th>
//           </tr>
//         </thead>
//         <tbody>
//           {vouchers.map((voucher) => (
//             <tr key={voucher._id}>
//               <td>{voucher.code}</td>
//               <td>{voucher.discount}</td>
//               <td>{voucher.minimumAmount}</td>
//               <td>{new Date(voucher.startDate).toLocaleString()}</td>
//               <td>{new Date(voucher.endDate).toLocaleString()}</td>
//               <td>{voucher.usageLimit}</td>  {/* Hiển thị số lượt sử dụng */}
//               <td>{voucher.usageLeft || 0}</td>   {/* Hiển thị số lượng còn lại */}
//               <td>
//                 <button onClick={() => handleDelete(voucher._id)}>Xóa</button>
//               </td>
//             </tr>
//           ))}

//         </tbody>
//       </table>
//       <ToastContainer />
//     </div>
//   );
// }

// export default VoucherList;




// thêm trường giảm tối đa


// import React, { useEffect, useState } from 'react';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import './VoucherList.css';

// function VoucherList() {
//   const [vouchers, setVouchers] = useState([]);

//   useEffect(() => {
//     const fetchVouchers = async () => {
//       try {
//         const response = await fetch('http://localhost:4000/api/vouchers');
//         if (response.ok) {
//           const data = await response.json();
//           console.log('Dữ liệu voucher:', data);  // Kiểm tra dữ liệu trả về từ API
//           setVouchers(data);  // Lưu dữ liệu vào state
//         } else {
//           console.error('Lỗi khi lấy danh sách voucher.');
//         }
//       } catch (error) {
//         console.error('Lỗi kết nối:', error);
//       }
//     };
  
//     fetchVouchers();
//   }, []);
  

//   const handleDelete = (id) => {
//     const toastId = toast(
//       <div>
//         <p>Xác nhận xóa voucher này?</p>
//         <button
//           onClick={async () => {
//             await confirmDelete(id, toastId); // Gọi confirmDelete để xử lý xóa
//           }}
//           style={{ marginRight: '10px' }}
//         >
//           Xác nhận
//         </button>
//         <button onClick={() => toast.dismiss(toastId)}>Hủy</button>
//       </div>,
//       {
//         position: 'top-right',
//         autoClose: false,
//         closeOnClick: false,
//         closeButton: false,
//         draggable: false,
//       }
//     );
//   };
  
//   const confirmDelete = async (id, toastId) => {
//     try {
//       const response = await fetch(`http://localhost:4000/api/vouchers/${id}`, {
//         method: 'DELETE',
//       });
  
//       if (response.ok) {
//         // Sau khi xóa thành công, cập nhật lại danh sách voucher trong state
//         setVouchers((prevVouchers) => {
//           return prevVouchers.filter((voucher) => voucher._id !== id);
//         });
//         toast.dismiss(toastId);
//         toast.success('Voucher đã được xóa thành công!', {
//           autoClose: 3000,
//         });
//       } else {
//         toast.error('Lỗi khi xóa voucher.');
//       }
//     } catch (error) {
//       toast.error('Lỗi kết nối đến server.');
//     }
//   };

//   return (
//     <div className="container">
//       <h2>Danh sách Voucher</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>Mã Voucher</th>
//             <th>Giá trị giảm</th>
//             <th>Giảm tối đa</th> {/* Thêm cột Giảm tối đa */}
//             <th>Mức tiền tối thiểu</th>
//             <th>Ngày bắt đầu</th>
//             <th>Ngày kết thúc</th>
//             <th>Số lượt sử dụng</th>
//             <th>Số lượng còn lại</th> {/* Hiển thị số lượt còn lại */}
//             <th>Hành động</th>
//           </tr>
//         </thead>
//         <tbody>
//           {vouchers.map((voucher) => (
//             <tr key={voucher._id}>
//               <td>{voucher.code}</td>
//               <td>{voucher.discount}</td>
//               <td>{voucher.maximumDiscount}</td> {/* Hiển thị Giảm tối đa */}
//               <td>{voucher.minimumAmount}</td>
//               <td>{new Date(voucher.startDate).toLocaleString()}</td>
//               <td>{new Date(voucher.endDate).toLocaleString()}</td>
//               <td>{voucher.usageLimit}</td>  {/* Hiển thị số lượt sử dụng */}
//               <td>{voucher.usageLeft || 0}</td>   {/* Hiển thị số lượng còn lại */}
//               <td>
//                 <button onClick={() => handleDelete(voucher._id)}>Xóa</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <ToastContainer />
//     </div>
//   );
// }

// export default VoucherList;



// thêm nút chỉnh sửa

// import React, { useEffect, useState } from 'react';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import './VoucherList.css';

// function VoucherList() {
//   const [vouchers, setVouchers] = useState([]);

//   useEffect(() => {
//     const fetchVouchers = async () => {
//       try {
//         const response = await fetch('http://localhost:4000/api/vouchers');
//         if (response.ok) {
//           const data = await response.json();
//           console.log('Dữ liệu voucher:', data);  // Kiểm tra dữ liệu trả về từ API
//           setVouchers(data);  // Lưu dữ liệu vào state
//         } else {
//           console.error('Lỗi khi lấy danh sách voucher.');
//         }
//       } catch (error) {
//         console.error('Lỗi kết nối:', error);
//       }
//     };
  
//     fetchVouchers();
//   }, []);
  

//   const handleDelete = (id) => {
//     const toastId = toast(
//       <div>
//         <p>Xác nhận xóa voucher này?</p>
//         <button
//           onClick={async () => {
//             await confirmDelete(id, toastId); // Gọi confirmDelete để xử lý xóa
//           }}
//           style={{ marginRight: '10px' }}
//         >
//           Xác nhận
//         </button>
//         <button onClick={() => toast.dismiss(toastId)}>Hủy</button>
//       </div>,
//       {
//         position: 'top-right',
//         autoClose: false,
//         closeOnClick: false,
//         closeButton: false,
//         draggable: false,
//       }
//     );
//   };
  
//   const confirmDelete = async (id, toastId) => {
//     try {
//       const response = await fetch(`http://localhost:4000/api/vouchers/${id}`, {
//         method: 'DELETE',
//       });
  
//       if (response.ok) {
//         // Sau khi xóa thành công, cập nhật lại danh sách voucher trong state
//         setVouchers((prevVouchers) => {
//           return prevVouchers.filter((voucher) => voucher._id !== id);
//         });
//         toast.dismiss(toastId);
//         toast.success('Voucher đã được xóa thành công!', {
//           autoClose: 3000,
//         });
//       } else {
//         toast.error('Lỗi khi xóa voucher.');
//       }
//     } catch (error) {
//       toast.error('Lỗi kết nối đến server.');
//     }
//   };

//   const handleEdit = (voucher) => {
//     // Implement the logic to handle editing the voucher
//     console.log('Editing voucher:', voucher);
//     // You can navigate to an edit page or open a modal with the voucher details
//   };

//   return (
//     <div className="container">
//       <h2>Danh sách Voucher</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>Mã Voucher</th>
//             <th>Giá trị giảm</th>
//             <th>Giảm tối đa</th> {/* Thêm cột Giảm tối đa */}
//             <th>Mức tiền tối thiểu</th>
//             <th>Ngày bắt đầu</th>
//             <th>Ngày kết thúc</th>
//             <th>Số lượt sử dụng</th>
//             <th>Số lượng còn lại</th> {/* Hiển thị số lượt còn lại */}
//             <th>Chỉnh sửa</th> {/* Thêm cột Chỉnh sửa */}
//             <th>Hành động</th>
//           </tr>
//         </thead>
//         <tbody>
//           {vouchers.map((voucher) => (
//             <tr key={voucher._id}>
              // <td>{voucher.code}</td>
              // <td>{voucher.discount}</td>
              // <td>{voucher.maximumDiscount}</td> {/* Hiển thị Giảm tối đa */}
              // <td>{voucher.minimumAmount}</td>
              // <td>{new Date(voucher.startDate).toLocaleString()}</td>
              // <td>{new Date(voucher.endDate).toLocaleString()}</td>
              // <td>{voucher.usageLimit}</td>  {/* Hiển thị số lượt sử dụng */}
              // <td>{voucher.usageLeft || 0}</td>   {/* Hiển thị số lượng còn lại */}
//               <td>
//                 <button onClick={() => handleEdit(voucher)}>Chỉnh sửa</button>
//               </td>
//               <td>
//                 <button onClick={() => handleDelete(voucher._id)}>Xóa</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <ToastContainer />
//     </div>
//   );
// }

// export default VoucherList;





// Viết hàm chỉnh sửa

import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './VoucherList.css';

function VoucherList() {
  const [vouchers, setVouchers] = useState([]);
  const [editingVoucher, setEditingVoucher] = useState(null);
  const [editFormData, setEditFormData] = useState({
    code: '',
    discount: '',
    maximumDiscount: '',
    minimumAmount: '',
    startDate: '',
    endDate: '',
    usageLimit: '',
    usageLeft: '',
  });

  useEffect(() => {
    const fetchVouchers = async () => {
      try {
        const response = await fetch('http://localhost:4000/api/vouchers');
        if (response.ok) {
          const data = await response.json();
          setVouchers(data);
        } else {
          console.error('Error fetching vouchers.');
        }
      } catch (error) {
        console.error('Error connecting to server:', error);
      }
    };

    fetchVouchers();
  }, []);

  const handleEdit = (voucher) => {
    setEditingVoucher(voucher._id);
    setEditFormData({
      code: voucher.code,
      discount: voucher.discount,
      maximumDiscount: voucher.maximumDiscount,
      minimumAmount: voucher.minimumAmount,
      startDate: voucher.startDate,
      endDate: voucher.endDate,
      usageLimit: voucher.usageLimit,
      usageLeft: voucher.usageLeft,
    });
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

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

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:4000/api/vouchers/${editingVoucher}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editFormData),
      });
  
      if (response.ok) {
        const updatedVoucher = await response.json();
        setVouchers((prevVouchers) =>
          prevVouchers.map((voucher) =>
            voucher._id === editingVoucher ? updatedVoucher : voucher
          )
        );
        setEditingVoucher(null);
        toast.success('Voucher updated successfully!');
      } else {
        toast.error('Error updating voucher.');
      }
    } catch (error) {
      toast.error('Error connecting to the server.');
    }
  };

  return (
    <div className="container">
      <h2>Voucher List</h2>
      <table>
        <thead>
          <tr>
            <th>Code</th>
            <th>Discount(%)</th>
            <th>Max Discount(USD)</th>
            <th>Min Order Value</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Usage Limit</th>
            <th>Used</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {vouchers.map((voucher) => (
            <tr key={voucher._id}>
              <td>{voucher.code}</td>
              <td>{voucher.discount}</td>
              <td>{voucher.maximumDiscount}</td> {/* Hiển thị Giảm tối đa */}
              <td>{voucher.minimumAmount}</td>
              <td>{new Date(voucher.startDate).toLocaleString()}</td>
              <td>{new Date(voucher.endDate).toLocaleString()}</td>
              <td>{voucher.usageLimit}</td>  {/* Hiển thị số lượt sử dụng */}
              <td>{voucher.usageLeft || 0}</td>   {/* Hiển thị số lượng còn lại */}
              <td className="sua-xoa">
                <button onClick={() => handleEdit(voucher)}>Edit</button>
                <button onClick={() => handleDelete(voucher._id)}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {editingVoucher && (
        <div className="edit-form">
          <h3>Edit Voucher</h3>
          <form onSubmit={handleEditSubmit}>
            <label>
              Code:
              <input
                type="text"
                name="code"
                value={editFormData.code}
                onChange={handleEditChange}
                required
              />
            </label>
            <label>
              Discount:
              <input
                type="number"
                name="discount"
                value={editFormData.discount}
                onChange={handleEditChange}
                required
              />
            </label>
            <label>
              Max Discount:
              <input
                type="number"
                name="maximumDiscount"
                value={editFormData.maximumDiscount}
                onChange={handleEditChange}
                required
              />
            </label>
            <label>
              Min Order Value:
              <input
                type="number"
                name="minimumAmount"
                value={editFormData.minimumAmount}
                onChange={handleEditChange}
                required
              />
            </label>
            <label>
              Start Date:
              <input
                type="datetime-local"
                name="startDate"
                value={new Date(editFormData.startDate).toISOString().slice(0, 16)}
                onChange={handleEditChange}
                required
              />
            </label>
            <label>
              End Date:
              <input
                type="datetime-local"
                name="endDate"
                value={new Date(editFormData.endDate).toISOString().slice(0, 16)}
                onChange={handleEditChange}
                required
              />
            </label>
            <label>
              Usage Limit:
              <input
                type="number"
                name="usageLimit"
                value={editFormData.usageLimit}
                onChange={handleEditChange}
                required
              />
            </label>
            <button type="submit">Save</button>
            <button type="button" onClick={() => setEditingVoucher(null)}>
              Cancel
            </button>
          </form>
        </div>
      )}

      <ToastContainer />
    </div>
  );
}

export default VoucherList;