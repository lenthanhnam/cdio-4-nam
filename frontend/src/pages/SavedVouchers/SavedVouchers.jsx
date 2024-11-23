
// import React, { useState, useEffect } from 'react';
// import './SavedVouchers.css';

// const SavedVouchers = () => {
//   const [voucherCode, setVoucherCode] = useState(''); // Trạng thái lưu mã voucher nhập vào
//   const [voucherData, setVoucherData] = useState([]); // Trạng thái lưu danh sách voucher
//   const [errorMessage, setErrorMessage] = useState(''); // Trạng thái lưu thông báo lỗi

//   // Đọc dữ liệu voucher từ localStorage khi component được tải
//   useEffect(() => {
//     const savedVouchers = JSON.parse(localStorage.getItem('vouchers')) || []; // Đọc dữ liệu từ localStorage
//     setVoucherData(savedVouchers); // Gán dữ liệu đã lưu vào state
//   }, []);

//   // Handle fetching a voucher by its code
//   const handleFetchVoucherByCode = async () => {
//     if (voucherCode.trim() === '') {
//       setErrorMessage('Vui lòng nhập mã voucher!');
//       return;
//     }

//     // Kiểm tra nếu mã voucher đã tồn tại
//     const existingVoucher = voucherData.find((voucher) => voucher.code === voucherCode);
//     if (existingVoucher) {
//       setErrorMessage('Voucher này đã được thêm rồi!');
//       return;
//     }

//     try {
//       console.log('Fetching voucher with code:', voucherCode); // Debug mã voucher nhập
//       const response = await fetch(`http://localhost:4000/api/vouchers/code/${voucherCode}`);
//       console.log('Response status:', response.status); // Kiểm tra trạng thái phản hồi
//       if (response.ok) {
//         const data = await response.json();
//         console.log('Voucher data:', data); // Debug dữ liệu trả về
//         const updatedData = [...voucherData, data]; // Thêm voucher mới vào danh sách
//         setVoucherData(updatedData); // Cập nhật state
//         localStorage.setItem('vouchers', JSON.stringify(updatedData)); // Lưu vào localStorage
//         setErrorMessage(''); // Reset thông báo lỗi nếu có
//       } else {
//         setErrorMessage('Voucher không tồn tại trong hệ thống.');
//       }
//     } catch (error) {
//       console.error('Error fetching voucher:', error);
//       setErrorMessage('Đã xảy ra lỗi khi kết nối đến máy chủ.');
//     }
//   };

//   // Xóa voucher khỏi danh sách và localStorage
//   const handleDeleteVoucher = (code) => {
//     const updatedData = voucherData.filter((voucher) => voucher.code !== code); // Lọc bỏ mã voucher
//     setVoucherData(updatedData); // Cập nhật lại state
//     localStorage.setItem('vouchers', JSON.stringify(updatedData)); // Lưu lại vào localStorage
//     setErrorMessage(''); // Reset thông báo lỗi nếu có
//   };

//   // Handle using a voucher
//   const handleUseVoucher = (code) => {
//     alert(`Voucher ${code} đang được sử dụng!`); // Placeholder for the use action, you can implement a more complex use case.
//   };

//   return (
//     <div className="saved-vouchers">
//       <h1>Saved Vouchers</h1>

//       {/* Input and button for fetching a specific voucher by code */}
//       <div className="voucher-search">
//         <input
//           type="text"
//           value={voucherCode}
//           onChange={(e) => setVoucherCode(e.target.value)} // Cập nhật mã voucher khi nhập
//           placeholder="Nhập mã voucher"
//         />
//         <button onClick={handleFetchVoucherByCode}>Thêm</button>
//       </div>

//       {/* Display error message if any */}
//       {errorMessage && <p className="error-message">{errorMessage}</p>}

//       {/* Display voucher data */}
//       {voucherData.length > 0 && (
//         <div className="voucher-list">
//           {voucherData.map((voucher, index) => (
//             <div className="voucher-item" key={index}>
//               <h2>{voucher.code}</h2>
//               <p>Discount: {voucher.discount ? `${voucher.discount}%` : 'N/A'}</p>
//               <p>
//                 Valid From: {voucher.startDate ? new Date(voucher.startDate).toLocaleDateString() : 'N/A'} to{' '}
//                 {voucher.endDate ? new Date(voucher.endDate).toLocaleDateString() : 'N/A'}
//               </p>
//               <p>
//                 Min Order Value:{' '}
//                 {voucher.minimumAmount ? `${voucher.minimumAmount.toLocaleString('vi-VN')} VND` : 'N/A'}
//               </p>

//               {/* Buttons for using and deleting the voucher */}
//               <div className="voucher-actions">
//                 <button onClick={() => handleUseVoucher(voucher.code)}>Sử dụng</button>
//                 <button onClick={() => handleDeleteVoucher(voucher.code)}>Xóa</button>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default SavedVouchers;






//  Nút sử dụng voucher

// import React, { useContext, useState, useEffect } from 'react';
// import './SavedVouchers.css';
// import { StoreContext } from '../../context/StoreContext';

// const SavedVouchers = () => {
//   const { setVoucherCode } = useContext(StoreContext); // Lấy hàm setVoucherCode từ context
//   const [voucherCodeInput, setVoucherCodeInput] = useState(''); // Trạng thái lưu mã voucher nhập vào
//   const [voucherData, setVoucherData] = useState([]); // Trạng thái lưu danh sách voucher
//   const [errorMessage, setErrorMessage] = useState(''); // Trạng thái lưu thông báo lỗi

//   // Đọc dữ liệu voucher từ localStorage khi component được tải
//   useEffect(() => {
//     const savedVouchers = JSON.parse(localStorage.getItem('vouchers')) || []; // Đọc dữ liệu từ localStorage
//     setVoucherData(savedVouchers); // Gán dữ liệu đã lưu vào state
//   }, []);

//   // Handle fetching a voucher by its code
//   const handleFetchVoucherByCode = async () => {
//     if (voucherCodeInput.trim() === '') {
//       setErrorMessage('Vui lòng nhập mã voucher!');
//       return;
//     }

//     // Kiểm tra nếu mã voucher đã tồn tại
//     const existingVoucher = voucherData.find((voucher) => voucher.code === voucherCodeInput);
//     if (existingVoucher) {
//       setErrorMessage('Voucher này đã được thêm rồi!');
//       return;
//     }

//     try {
//       const response = await fetch(`http://localhost:4000/api/vouchers/code/${voucherCodeInput}`);
//       if (response.ok) {
//         const data = await response.json();
//         const updatedData = [...voucherData, data]; // Thêm voucher mới vào danh sách
//         setVoucherData(updatedData); // Cập nhật state
//         localStorage.setItem('vouchers', JSON.stringify(updatedData)); // Lưu vào localStorage
//         setErrorMessage(''); // Reset thông báo lỗi nếu có
//       } else {
//         setErrorMessage('Voucher không tồn tại trong hệ thống.');
//       }
//     } catch (error) {
//       setErrorMessage('Đã xảy ra lỗi khi kết nối đến máy chủ.');
//     }
//   };

//   // Xóa voucher khỏi danh sách và localStorage
//   const handleDeleteVoucher = (code) => {
//     const updatedData = voucherData.filter((voucher) => voucher.code !== code); // Lọc bỏ mã voucher
//     setVoucherData(updatedData); // Cập nhật lại state
//     localStorage.setItem('vouchers', JSON.stringify(updatedData)); // Lưu lại vào localStorage
//     setErrorMessage(''); // Reset thông báo lỗi nếu có
//   };

//   // Handle using a voucher
//   const handleUseVoucher = (code) => {
//     setVoucherCode(code); // Cập nhật mã voucher trong context
//   };

//   return (
//     <div className="saved-vouchers">
//       <h1>Saved Vouchers</h1>

//       {/* Input and button for fetching a specific voucher by code */}
//       <div className="voucher-search">
//         <input
//           type="text"
//           value={voucherCodeInput}
//           onChange={(e) => setVoucherCodeInput(e.target.value)} // Cập nhật mã voucher khi nhập
//           placeholder="Nhập mã voucher"
//         />
//         <button onClick={handleFetchVoucherByCode}>Thêm</button>
//       </div>

//       {/* Display error message if any */}
//       {errorMessage && <p className="error-message">{errorMessage}</p>}

//       {/* Display voucher data */}
//       {voucherData.length > 0 && (
//         <div className="voucher-list">
//           {voucherData.map((voucher, index) => (
//             <div className="voucher-item" key={index}>
//               <h2>{voucher.code}</h2>
//               <p>Discount: {voucher.discount ? `${voucher.discount}%` : 'N/A'}</p>
//               <p>
//                 Valid From: {voucher.startDate ? new Date(voucher.startDate).toLocaleDateString() : 'N/A'} to{' '}
//                 {voucher.endDate ? new Date(voucher.endDate).toLocaleDateString() : 'N/A'}
//               </p>
//               <p>
//                 Min Order Value:{' '}
//                 {voucher.minimumAmount ? `${voucher.minimumAmount.toLocaleString('vi-VN')} VND` : 'N/A'}
//               </p>

//               {/* Buttons for using and deleting the voucher */}
//               <div className="voucher-actions">
//                 <button onClick={() => handleUseVoucher(voucher.code)}>Sử dụng</button>
//                 <button onClick={() => handleDeleteVoucher(voucher.code)}>Xóa</button>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default SavedVouchers;





// Hiện Toats và chuyển hướng


// import React, { useContext, useState, useEffect } from 'react';
// import './SavedVouchers.css';
// import { StoreContext } from '../../context/StoreContext';
// import { useNavigate } from 'react-router-dom';
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const SavedVouchers = () => {
//   const { setVoucherCode } = useContext(StoreContext); // Lấy hàm setVoucherCode từ context
//   const [voucherCodeInput, setVoucherCodeInput] = useState(''); // Trạng thái lưu mã voucher nhập vào
//   const [voucherData, setVoucherData] = useState([]); // Trạng thái lưu danh sách voucher
//   const [errorMessage, setErrorMessage] = useState(''); // Trạng thái lưu thông báo lỗi
//   const navigate = useNavigate();

//   // Đọc dữ liệu voucher từ localStorage khi component được tải
//   useEffect(() => {
//     const savedVouchers = JSON.parse(localStorage.getItem('vouchers')) || []; // Đọc dữ liệu từ localStorage
//     setVoucherData(savedVouchers); // Gán dữ liệu đã lưu vào state
//   }, []);

//   // Handle fetching a voucher by its code
//   const handleFetchVoucherByCode = async () => {
//     if (voucherCodeInput.trim() === '') {
//       setErrorMessage('Vui lòng nhập mã voucher!');
//       return;
//     }

//     // Kiểm tra nếu mã voucher đã tồn tại
//     const existingVoucher = voucherData.find((voucher) => voucher.code === voucherCodeInput);
//     if (existingVoucher) {
//       setErrorMessage('Voucher này đã được thêm rồi!');
//       return;
//     }

//     try {
//       const response = await fetch(`http://localhost:4000/api/vouchers/code/${voucherCodeInput}`);
//       if (response.ok) {
//         const data = await response.json();
//         const updatedData = [...voucherData, data]; // Thêm voucher mới vào danh sách
//         setVoucherData(updatedData); // Cập nhật state
//         localStorage.setItem('vouchers', JSON.stringify(updatedData)); // Lưu vào localStorage
//         setErrorMessage(''); // Reset thông báo lỗi nếu có
//       } else {
//         setErrorMessage('Voucher không tồn tại trong hệ thống.');
//       }
//     } catch (error) {
//       setErrorMessage('Đã xảy ra lỗi khi kết nối đến máy chủ.');
//     }
//   };

//   // Xóa voucher khỏi danh sách và localStorage
//   const handleDeleteVoucher = (code) => {
//     const updatedData = voucherData.filter((voucher) => voucher.code !== code); // Lọc bỏ mã voucher
//     setVoucherData(updatedData); // Cập nhật lại state
//     localStorage.setItem('vouchers', JSON.stringify(updatedData)); // Lưu lại vào localStorage
//     setErrorMessage(''); // Reset thông báo lỗi nếu có
//   };

//   // Handle using a voucher
//   const handleUseVoucher = (code) => {
//     setVoucherCode(code); // Cập nhật mã voucher trong context
//     toast.success('Voucher đã được áp dụng thành công!', {
//       autoClose: 500, // Thời gian hiển thị toast là 0.5 giây
//       onClose: () => {
//         handleDeleteVoucher(code); // Xóa voucher sau khi sử dụng
//         navigate('/cart'); // Chuyển hướng sang trang Cart
//       },
//     });
//   };

//   return (
//     <div className="saved-vouchers">
//       <ToastContainer />
//       <h1>My Vouchers</h1>

//       {/* Input and button for fetching a specific voucher by code */}
//       <div className="voucher-search">
//         <input
//           type="text"
//           value={voucherCodeInput}
//           onChange={(e) => setVoucherCodeInput(e.target.value)} // Cập nhật mã voucher khi nhập
//           placeholder="Nhập mã voucher"
//         />
//         <button onClick={handleFetchVoucherByCode}>Thêm</button>
//       </div>

//       {/* Display error message if any */}
//       {errorMessage && <p className="error-message">{errorMessage}</p>}

//       {/* Display voucher data */}
//       {voucherData.length > 0 && (
//         <div className="voucher-list">
//           {voucherData.map((voucher, index) => (
//             <div className="voucher-item" key={index}>
//               <h2>{voucher.code}</h2>
//               <p>Discount: {voucher.discount ? `${voucher.discount}%` : 'N/A'}</p>
//               <p>
//                 Valid From: {voucher.startDate ? new Date(voucher.startDate).toLocaleDateString() : 'N/A'} to{' '}
//                 {voucher.endDate ? new Date(voucher.endDate).toLocaleDateString() : 'N/A'}
//               </p>
//               <p>
//                 Min Order Value:{' '}
//                 {voucher.minimumAmount ? `${voucher.minimumAmount.toLocaleString('vi-VN')} VND` : 'N/A'}
//               </p>

//               {/* Buttons for using and deleting the voucher */}
//               <div className="voucher-actions">
//                 <button onClick={() => handleUseVoucher(voucher.code)}>Sử dụng</button>
//                 <button onClick={() => handleDeleteVoucher(voucher.code)}>Xóa</button>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default SavedVouchers;



// Đổi sang tiếng anh


// import React, { useContext, useState, useEffect } from 'react';
// import './SavedVouchers.css';
// import { StoreContext } from '../../context/StoreContext';
// import { useNavigate } from 'react-router-dom';
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const SavedVouchers = () => {
//   const { setVoucherCode } = useContext(StoreContext);
//   const [voucherCodeInput, setVoucherCodeInput] = useState('');
//   const [voucherData, setVoucherData] = useState([]);
//   const [errorMessage, setErrorMessage] = useState('');

//   const navigate = useNavigate();

//   useEffect(() => {
//     const savedVouchers = JSON.parse(localStorage.getItem('vouchers')) || [];
//     setVoucherData(savedVouchers);
//   }, []);

//   const handleFetchVoucherByCode = async () => {
//     if (voucherCodeInput.trim() === '') {
//       setErrorMessage('Please enter a voucher code!');
//       return;
//     }

//     const existingVoucher = voucherData.find((voucher) => voucher.code === voucherCodeInput);
//     if (existingVoucher) {
//       setErrorMessage('This voucher has already been added!');
//       return;
//     }

//     try {
//       const response = await fetch(`http://localhost:4000/api/vouchers/code/${voucherCodeInput}`);
//       if (response.ok) {
//         const data = await response.json();
//         const updatedData = [...voucherData, data];
//         setVoucherData(updatedData);
//         localStorage.setItem('vouchers', JSON.stringify(updatedData));
//         setErrorMessage('');
//       } else {
//         setErrorMessage('Voucher does not exist in the system.');
//       }
//     } catch (error) {
//       setErrorMessage('An error occurred while connecting to the server.');
//     }
//   };

//   const handleDeleteVoucher = (code) => {
//     const updatedData = voucherData.filter((voucher) => voucher.code !== code);
//     setVoucherData(updatedData);
//     localStorage.setItem('vouchers', JSON.stringify(updatedData));
//     setErrorMessage('');
//   };

//   const handleUseVoucher = (code) => {
//     setVoucherCode(code);
//     toast.success('Voucher applied successfully!', {
//       autoClose: 500,
//       onClose: () => {
//         handleDeleteVoucher(code);
//         navigate('/cart');
//       },
//     });
//   };

//   return (
//     <div className="saved-vouchers">
//       <ToastContainer />
//       <h1>My Vouchers</h1>

//       <div className="voucher-search">
//         <input
//           type="text"
//           value={voucherCodeInput}
//           onChange={(e) => setVoucherCodeInput(e.target.value)}
//           placeholder="Enter voucher code"
//         />
//         <button onClick={handleFetchVoucherByCode}>Add</button>
//       </div>

//       {errorMessage && <p className="error-message">{errorMessage}</p>}

//       {voucherData.length > 0 && (
//         <div className="voucher-list">
//           {voucherData.map((voucher, index) => (
//             <div className="voucher-item" key={index}>
//               <h2>{voucher.code}</h2>
//               <p>Discount: {voucher.discount ? `${voucher.discount}%` : 'N/A'}</p>
//               <p>
//                 Valid From: {voucher.startDate ? new Date(voucher.startDate).toLocaleDateString() : 'N/A'} to{' '}
//                 {voucher.endDate ? new Date(voucher.endDate).toLocaleDateString() : 'N/A'}
//               </p>
//               <p>
//                 Min Order Value: {voucher.minimumAmount ? `${voucher.minimumAmount.toLocaleString('vi-VN')} VND` : 'N/A'}
//               </p>

//               <div className="voucher-actions">
//                 <button onClick={() => handleUseVoucher(voucher.code)}>Use</button>
//                 <button onClick={() => handleDeleteVoucher(voucher.code)}>Delete</button>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default SavedVouchers;




// sau khi bấm add thì trả input về rỗng


// import React, { useContext, useState, useEffect } from 'react';
// import './SavedVouchers.css';
// import { StoreContext } from '../../context/StoreContext';
// import { useNavigate } from 'react-router-dom';
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const SavedVouchers = () => {
//   const { setVoucherCode } = useContext(StoreContext);
//   const [voucherCodeInput, setVoucherCodeInput] = useState('');
//   const [voucherData, setVoucherData] = useState([]);
//   const [errorMessage, setErrorMessage] = useState('');

//   const navigate = useNavigate();

//   useEffect(() => {
//     const savedVouchers = JSON.parse(localStorage.getItem('vouchers')) || [];
//     setVoucherData(savedVouchers);
//   }, []);

//   const handleFetchVoucherByCode = async () => {
//     if (voucherCodeInput.trim() === '') {
//       setErrorMessage('Please enter a voucher code!');
//       return;
//     }

//     const existingVoucher = voucherData.find((voucher) => voucher.code === voucherCodeInput);
//     if (existingVoucher) {
//       setErrorMessage('This voucher has already been added!');
//       return;
//     }

//     try {
//       const response = await fetch(`http://localhost:4000/api/vouchers/code/${voucherCodeInput}`);
//       if (response.ok) {
//         const data = await response.json();
//         const updatedData = [...voucherData, data];
//         setVoucherData(updatedData);
//         localStorage.setItem('vouchers', JSON.stringify(updatedData));
//         setVoucherCodeInput(''); // Clear the input field
//         setErrorMessage('');
//         toast.success('Voucher applied successfully!');
//       } else {
//         setErrorMessage('Voucher does not exist in the system.');
//       }
//     } catch (error) {
//       setErrorMessage('An error occurred while connecting to the server.');
//     }
//   };

//   const handleDeleteVoucher = (code) => {
//     const updatedData = voucherData.filter((voucher) => voucher.code !== code);
//     setVoucherData(updatedData);
//     localStorage.setItem('vouchers', JSON.stringify(updatedData));
//     setErrorMessage('');
//   };

//   const handleUseVoucher = (code) => {
//     setVoucherCode(code);
//     toast.success('Voucher applied successfully!', {
//       autoClose: 500,
//       onClose: () => {
//         handleDeleteVoucher(code);
//         navigate('/cart');
//       },
//     });
//   };

//   return (
//     <div className="saved-vouchers">
//       <ToastContainer />
//       <h1>My Vouchers</h1>

//       <div className="voucher-search">
//         <input
//           type="text"
//           value={voucherCodeInput}
//           onChange={(e) => setVoucherCodeInput(e.target.value)}
//           placeholder="Enter voucher code"
//         />
//         <button onClick={handleFetchVoucherByCode}>Add</button>
//       </div>

//       {errorMessage && <p className="error-message">{errorMessage}</p>}

//       {voucherData.length > 0 && (
//         <div className="voucher-list">
//           {voucherData.map((voucher, index) => (
//             <div className="voucher-item" key={index}>
//               <h2>{voucher.code}</h2>
//               <p>Discount: {voucher.discount ? `${voucher.discount}%` : 'N/A'}</p>
//               <p>
//                 Valid From: {voucher.startDate ? new Date(voucher.startDate).toLocaleDateString() : 'N/A'} to{' '}
//                 {voucher.endDate ? new Date(voucher.endDate).toLocaleDateString() : 'N/A'}
//               </p>
//               <p>
//                 Min Order Value: {voucher.minimumAmount ? `${voucher.minimumAmount.toLocaleString('vi-VN')} VND` : 'N/A'}
//               </p>

//               <div className="voucher-actions">
//                 <button onClick={() => handleUseVoucher(voucher.code)}>Use</button>
//                 <button onClick={() => handleDeleteVoucher(voucher.code)}>Delete</button>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default SavedVouchers;







// đổi hết sang toats

// import React, { useContext, useState, useEffect } from 'react';
// import './SavedVouchers.css';
// import { StoreContext } from '../../context/StoreContext';
// import { useNavigate } from 'react-router-dom';
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const SavedVouchers = () => {
//   const { setVoucherCode } = useContext(StoreContext);
//   const [voucherCodeInput, setVoucherCodeInput] = useState('');
//   const [voucherData, setVoucherData] = useState([]);
//   const [errorMessage, setErrorMessage] = useState('');

//   const navigate = useNavigate();

//   useEffect(() => {
//     const savedVouchers = JSON.parse(localStorage.getItem('vouchers')) || [];
//     setVoucherData(savedVouchers);
//   }, []);

//   const handleFetchVoucherByCode = async () => {
//     if (voucherCodeInput.trim() === '') {
//       toast.error('Please enter a voucher code!');
//       return;
//     }

//     const existingVoucher = voucherData.find((voucher) => voucher.code === voucherCodeInput);
//     if (existingVoucher) {
//       toast.error('This voucher has already been added!');
//       return;
//     }

//     try {
//       const response = await fetch(`http://localhost:4000/api/vouchers/code/${voucherCodeInput}`);
//       if (response.ok) {
//         const data = await response.json();
//         const updatedData = [...voucherData, data];
//         setVoucherData(updatedData);
//         localStorage.setItem('vouchers', JSON.stringify(updatedData));
//         setVoucherCodeInput(''); // Clear the input field
//         toast.success('Voucher applied successfully!');
//       } else {
//         toast.error('Voucher does not exist in the system.');
//       }
//     } catch (error) {
//       toast.error('An error occurred while connecting to the server.');
//     }
//   };

//   const handleDeleteVoucher = (code) => {
//     const updatedData = voucherData.filter((voucher) => voucher.code !== code);
//     setVoucherData(updatedData);
//     localStorage.setItem('vouchers', JSON.stringify(updatedData));
//     setErrorMessage('');
//   };

//   const handleUseVoucher = (code) => {
//     setVoucherCode(code);
//     toast.success('Voucher applied successfully!', {
//       autoClose: 500,
//       onClose: () => {
//         handleDeleteVoucher(code);
//         navigate('/cart');
//       },
//     });
//   };

//   return (
//     <div className="saved-vouchers">
//       <ToastContainer />
//       <h1>My Vouchers</h1>

//       <div className="voucher-search">
//         <input
//           type="text"
//           value={voucherCodeInput}
//           onChange={(e) => setVoucherCodeInput(e.target.value)}
//           placeholder="Enter voucher code"
//         />
//         <button onClick={handleFetchVoucherByCode}>Add</button>
//       </div>

//       {voucherData.length > 0 && (
//         <div className="voucher-list">
//           {voucherData.map((voucher, index) => (
//             <div className="voucher-item" key={index}>
//               <h2>{voucher.code}</h2>
//               <p>Discount: {voucher.discount ? `${voucher.discount}%` : 'N/A'}</p>
//               <p>
//                 Valid From: {voucher.startDate ? new Date(voucher.startDate).toLocaleDateString() : 'N/A'} to{' '}
//                 {voucher.endDate ? new Date(voucher.endDate).toLocaleDateString() : 'N/A'}
//               </p>
//               <p>
//                 Min Order Value: {voucher.minimumAmount ? `${voucher.minimumAmount.toLocaleString('vi-VN')} VND` : 'N/A'}
//               </p>

//               <div className="voucher-actions">
//                 <button onClick={() => handleUseVoucher(voucher.code)}>Use</button>
//                 <button onClick={() => handleDeleteVoucher(voucher.code)}>Delete</button>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default SavedVouchers;






// Thêm hàm xác nhận xóa

// import React, { useContext, useState, useEffect } from 'react';
// import './SavedVouchers.css';
// import { StoreContext } from '../../context/StoreContext';
// import { useNavigate } from 'react-router-dom';
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const SavedVouchers = () => {
//   const { setVoucherCode } = useContext(StoreContext);
//   const [voucherCodeInput, setVoucherCodeInput] = useState('');
//   const [voucherData, setVoucherData] = useState([]);
//   const [errorMessage, setErrorMessage] = useState('');

//   const navigate = useNavigate();

//   useEffect(() => {
//     const savedVouchers = JSON.parse(localStorage.getItem('vouchers')) || [];
//     setVoucherData(savedVouchers);
//   }, []);

//   const handleFetchVoucherByCode = async () => {
//     if (voucherCodeInput.trim() === '') {
//       toast.error('Please enter a voucher code!');
//       return;
//     }

//     const existingVoucher = voucherData.find((voucher) => voucher.code === voucherCodeInput);
//     if (existingVoucher) {
//       toast.error('This voucher has already been added!');
//       return;
//     }

//     try {
//       const response = await fetch(`http://localhost:4000/api/vouchers/code/${voucherCodeInput}`);
//       if (response.ok) {
//         const data = await response.json();
//         const updatedData = [...voucherData, data];
//         setVoucherData(updatedData);
//         localStorage.setItem('vouchers', JSON.stringify(updatedData));
//         setVoucherCodeInput(''); // Clear the input field
//         toast.success('Voucher applied successfully!');
//       } else {
//         toast.error('Voucher does not exist in the system.');
//       }
//     } catch (error) {
//       toast.error('An error occurred while connecting to the server.');
//     }
//   };

//   const handleDeleteVoucher = (code) => {
//     const toastId = toast(
//       <div>
//         <p>Are you sure you want to delete this voucher?</p>
//         <button
//           onClick={() => {
//             const updatedData = voucherData.filter((voucher) => voucher.code !== code);
//             setVoucherData(updatedData);
//             localStorage.setItem('vouchers', JSON.stringify(updatedData));
//             toast.dismiss(toastId);
//             toast.success('Voucher deleted successfully!');
//           }}
//           style={{ marginRight: '10px' }}
//         >
//           Confirm
//         </button>
//         <button onClick={() => toast.dismiss(toastId)}>Cancel</button>
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

//   const handleUseVoucher = (code) => {
//     setVoucherCode(code);
//     toast.success('Voucher applied successfully!', {
//       autoClose: 500,
//       onClose: () => {
//         handleDeleteVoucher(code);
//         navigate('/cart');
//       },
//     });
//   };

//   return (
//     <div className="saved-vouchers">
//       <ToastContainer />
//       <h1>My Vouchers</h1>

//       <div className="voucher-search">
//         <input
//           type="text"
//           value={voucherCodeInput}
//           onChange={(e) => setVoucherCodeInput(e.target.value)}
//           placeholder="Enter voucher code"
//         />
//         <button onClick={handleFetchVoucherByCode}>Add</button>
//       </div>

//       {errorMessage && <p className="error-message">{errorMessage}</p>}

//       {voucherData.length > 0 && (
//         <div className="voucher-list">
//           {voucherData.map((voucher, index) => (
//             <div className="voucher-item" key={index}>
//               <h2>{voucher.code}</h2>
//               <p>Discount: {voucher.discount ? `${voucher.discount}%` : 'N/A'}</p>
//               <p>
//                 Valid From: {voucher.startDate ? new Date(voucher.startDate).toLocaleDateString() : 'N/A'} to{' '}
//                 {voucher.endDate ? new Date(voucher.endDate).toLocaleDateString() : 'N/A'}
//               </p>
//               <p>
//                 Min Order Value: {voucher.minimumAmount ? `${voucher.minimumAmount.toLocaleString('vi-VN')} VND` : 'N/A'}
//               </p>

//               <div className="voucher-actions">
//                 <button onClick={() => handleUseVoucher(voucher.code)}>Use</button>
//                 <button onClick={() => handleDeleteVoucher(voucher.code)}>Delete</button>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default SavedVouchers;





// Thêm class css cho Xác nhận xóa

// import React, { useContext, useState, useEffect } from 'react';
// import './SavedVouchers.css';
// import { StoreContext } from '../../context/StoreContext';
// import { useNavigate } from 'react-router-dom';
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const SavedVouchers = () => {
//   const { setVoucherCode } = useContext(StoreContext);
//   const [voucherCodeInput, setVoucherCodeInput] = useState('');
//   const [voucherData, setVoucherData] = useState([]);
//   const [errorMessage, setErrorMessage] = useState('');

//   const navigate = useNavigate();

//   useEffect(() => {
//     const savedVouchers = JSON.parse(localStorage.getItem('vouchers')) || [];
//     setVoucherData(savedVouchers);
//   }, []);

//   const handleFetchVoucherByCode = async () => {
//     if (voucherCodeInput.trim() === '') {
//       toast.error('Please enter a voucher code!');
//       return;
//     }

//     const existingVoucher = voucherData.find((voucher) => voucher.code === voucherCodeInput);
//     if (existingVoucher) {
//       toast.error('This voucher has already been added!');
//       return;
//     }

//     try {
//       const response = await fetch(`http://localhost:4000/api/vouchers/code/${voucherCodeInput}`);
//       if (response.ok) {
//         const data = await response.json();
//         const updatedData = [...voucherData, data];
//         setVoucherData(updatedData);
//         localStorage.setItem('vouchers', JSON.stringify(updatedData));
//         setVoucherCodeInput(''); // Clear the input field
//         toast.success('Voucher applied successfully!');
//       } else {
//         toast.error('Voucher does not exist in the system.');
//       }
//     } catch (error) {
//       toast.error('An error occurred while connecting to the server.');
//     }
//   };

//   const handleDeleteVoucher = (code) => {
//     const toastId = toast(
//       <div className="toast-confirmation">
//         <p>Are you sure you want to delete this voucher?</p>
//         <div className="button-group">
//           <button
//             className="confirm-button"
//             onClick={() => {
//               const updatedData = voucherData.filter((voucher) => voucher.code !== code);
//               setVoucherData(updatedData);
//               localStorage.setItem('vouchers', JSON.stringify(updatedData));
//               toast.dismiss(toastId);
//               toast.success('Voucher deleted successfully!');
//             }}
//           >
//             Confirm
//           </button>
//           <button className="cancel-button" onClick={() => toast.dismiss(toastId)}>Cancel</button>
//         </div>
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

//   const handleUseVoucher = (code) => {
//     setVoucherCode(code);
//     toast.success('Voucher applied successfully!', {
//       autoClose: 500,
//       onClose: () => {
//         handleDeleteVoucher(code);
//         navigate('/cart');
//       },
//     });
//   };

//   return (
//     <div className="saved-vouchers">
//       <ToastContainer />
//       <h1>My Vouchers</h1>

//       <div className="voucher-search">
//         <input
//           type="text"
//           value={voucherCodeInput}
//           onChange={(e) => setVoucherCodeInput(e.target.value)}
//           placeholder="Enter voucher code"
//         />
//         <button onClick={handleFetchVoucherByCode}>Add</button>
//       </div>

//       {errorMessage && <p className="error-message">{errorMessage}</p>}

//       {voucherData.length > 0 && (
//         <div className="voucher-list">
//           {voucherData.map((voucher, index) => (
//             <div className="voucher-item" key={index}>
//               <h2>{voucher.code}</h2>
//               <p>Discount: {voucher.discount ? `${voucher.discount}%` : 'N/A'}</p>
//               <p>
//                 Valid From: {voucher.startDate ? new Date(voucher.startDate).toLocaleDateString() : 'N/A'} to{' '}
//                 {voucher.endDate ? new Date(voucher.endDate).toLocaleDateString() : 'N/A'}
//               </p>
//               <p>
//                 Min Order Value: {voucher.minimumAmount ? `${voucher.minimumAmount.toLocaleString('vi-VN')} VND` : 'N/A'}
//               </p>

//               <div className="voucher-actions">
//                 <button onClick={() => handleUseVoucher(voucher.code)}>Use</button>
//                 <button onClick={() => handleDeleteVoucher(voucher.code)}>Delete</button>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default SavedVouchers;





// sửa lại chuyển trang xong tự xóa

import React, { useContext, useState, useEffect } from 'react';
import './SavedVouchers.css';
import { StoreContext } from '../../context/StoreContext';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SavedVouchers = () => {
  const { setVoucherCode } = useContext(StoreContext);
  const [voucherCodeInput, setVoucherCodeInput] = useState('');
  const [voucherData, setVoucherData] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    const savedVouchers = JSON.parse(localStorage.getItem('vouchers')) || [];
    setVoucherData(savedVouchers);
  }, []);

  const handleFetchVoucherByCode = async () => {
    if (voucherCodeInput.trim() === '') {
      toast.error('Please enter a voucher code!');
      return;
    }

    const existingVoucher = voucherData.find((voucher) => voucher.code === voucherCodeInput);
    if (existingVoucher) {
      toast.error('This voucher has already been added!');
      return;
    }

    try {
      const response = await fetch(`http://localhost:4000/api/vouchers/code/${voucherCodeInput}`);
      if (response.ok) {
        const data = await response.json();
        const updatedData = [...voucherData, data];
        setVoucherData(updatedData);
        localStorage.setItem('vouchers', JSON.stringify(updatedData));
        setVoucherCodeInput(''); // Clear the input field
        toast.success('Voucher applied successfully!');
      } else {
        toast.error('Voucher does not exist in the system.');
      }
    } catch (error) {
      toast.error('An error occurred while connecting to the server.');
    }
  };

  const handleDeleteVoucher = (code) => {
    const toastId = toast(
      <div className="toast-confirmation">
        <p>Are you sure you want to delete this voucher?</p>
        <div className="button-group">
          <button
            className="confirm-button"
            onClick={() => {
              const updatedData = voucherData.filter((voucher) => voucher.code !== code);
              setVoucherData(updatedData);
              localStorage.setItem('vouchers', JSON.stringify(updatedData));
              toast.dismiss(toastId);
              toast.success('Voucher deleted successfully!');
            }}
          >
            Confirm
          </button>
          <button className="cancel-button" onClick={() => toast.dismiss(toastId)}>Cancel</button>
        </div>
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

  const handleUseVoucher = (code) => {
    console.log("Setting voucher code:", code); // Debug log
    setVoucherCode(code);
    toast.success('Voucher applied successfully!', {
      autoClose: 500,
      onClose: () => {
        const updatedData = voucherData.filter((voucher) => voucher.code !== code);
        setVoucherData(updatedData);
        localStorage.setItem('vouchers', JSON.stringify(updatedData));
        navigate('/cart');
      },
    });
  };

  return (
    <div className="saved-vouchers">
      <ToastContainer />
      <h1>My Vouchers</h1>

      <div className="voucher-search">
        <input
          type="text"
          value={voucherCodeInput}
          onChange={(e) => setVoucherCodeInput(e.target.value)}
          placeholder="Enter voucher code"
        />
        <button onClick={handleFetchVoucherByCode}>Add</button>
      </div>

      {errorMessage && <p className="error-message">{errorMessage}</p>}

      {voucherData.length > 0 && (
        <div className="voucher-list">
          {voucherData.map((voucher, index) => (
            <div className="voucher-item" key={index}>
              <h2>{voucher.code}</h2>
              <p>Discount: {voucher.discount ? `${voucher.discount}%` : 'N/A'}</p>
              <p>
                Min Order Value: {voucher.minimumAmount ? `${voucher.minimumAmount.toLocaleString('vi-VN')} USD` : 'N/A'}
              </p>
              <p>
                Max Discount: {voucher.maximumDiscount ? `${voucher.maximumDiscount.toLocaleString('vi-VN')} USD` : 'N/A'}
              </p>
              <p>
                Valid From: {voucher.startDate ? new Date(voucher.startDate).toLocaleDateString() : 'N/A'} to{' '}
                {voucher.endDate ? new Date(voucher.endDate).toLocaleDateString() : 'N/A'}
              </p>
              <div className="voucher-actions">
                <button onClick={() => handleUseVoucher(voucher.code)}>Use</button>
                <button onClick={() => handleDeleteVoucher(voucher.code)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SavedVouchers;