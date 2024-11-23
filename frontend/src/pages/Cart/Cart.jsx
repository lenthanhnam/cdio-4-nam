// // import React, { useContext } from "react";
// // import "./Cart.css";
// // import { StoreContext } from "../../context/StoreContext";
// // import { useNavigate } from "react-router-dom";

// // const Cart = () => {
// //   const { cartItems, food_list, removeFromCart, getTotalCartAmount, url } = useContext(StoreContext);
// //   const navigate = useNavigate();

// //   // Kiểm tra xem food_list có phải là một mảng hợp lệ không
// //   if (!food_list || !Array.isArray(food_list)) {
// //     return <p>No food items available.</p>;
// //   }

// //   return (
// //     <div className="cart">
// //       <div className="cart-items">
// //         <div className="cart-items-title">
// //           <p>Items</p>
// //           <p>Title</p>
// //           <p>Price</p>
// //           <p>Quantity</p>
// //           <p>Total</p>
// //           <p>Remove</p>
// //         </div>
// //       </div>
// //       <br />
// //       <hr />
// //       {food_list.map((item) => {
// //         // Kiểm tra nếu item có _id hợp lệ trước khi tiếp tục
// //         if (!item || !item._id) {
// //           console.error("Item missing _id:", item); // Log lỗi nếu không có _id
// //           return null; // Bỏ qua item không hợp lệ
// //         }

// //         // Kiểm tra số lượng của item trong cartItems
// //         const quantity = cartItems[item._id] || 0;
// //         if (quantity > 0) {
// //           return (
// //             <div key={item._id}>
// //               <div className="cart-items-title cart-items-item">
// //                 <img src={`${url}/images/${item.image}`} alt={item.name} />
// //                 <p>{item.name}</p>
// //                 <p>${item.price}</p>
// //                 <p>{quantity}</p>
// //                 <p>${item.price * quantity}</p>
// //                 <p onClick={() => removeFromCart(item._id)} className="cross">
// //                   x
// //                 </p>
// //               </div>
// //               <hr />
// //             </div>
// //           );
// //         }
// //         return null;
// //       })}

// //       <div className="cart-bottom">
// //         <div className="cart-total">
// //           <h2>Cart Totals</h2>
// //           <div>
// //             <div className="cart-total-details">
// //               <p>Subtotal</p>
// //               <p>${getTotalCartAmount()}</p>
// //             </div>
// //             <hr />
// //             <div className="cart-total-details">
// //               <p>Delivery Fee</p>
// //               <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
// //             </div>
// //             <hr />
// //             <div className="cart-total-details">
// //               <b>Total</b>
// //               <p>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</p>
// //             </div>
// //           </div>
// //           <button onClick={() => navigate("/order")}>PROCESS TO CHECKOUT</button>
// //         </div>
// //         <div className="cart-promocode">
// //           <div>
// //             <p>If you have a promo code, enter it here</p>
// //             <div className="cart-promocode-input">
// //               <input type="text" placeholder="promo code" />
// //               <button>Submit</button>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Cart;










// // import React, { useContext, useState } from "react";
// // import "./Cart.css";
// // import { StoreContext } from "../../context/StoreContext";
// // import { useNavigate } from "react-router-dom";

// // const Cart = () => {
// //   const { cartItems, food_list, removeFromCart, getTotalCartAmount, url } = useContext(StoreContext);
// //   const navigate = useNavigate();
// //   const [voucherCode, setVoucherCode] = useState("");
// //   const [message, setMessage] = useState("");

// //   const handleVoucherSubmit = async () => {
// //     try {
// //       const response = await fetch(`http://localhost:4000/api/vouchers/code/${voucherCode}`);
// //       if (response.ok) {
// //         setMessage("Voucher applied successfully!");
// //       } else {
// //         setMessage("Voucher does not exist.");
// //       }
// //     } catch (error) {
// //       setMessage("Error connecting to the server.");
// //     }
// //   };

// //   return (
// //     <div className="cart">
// //       <div className="cart-items">
// //         <div className="cart-items-title">
// //           <p>Items</p>
// //           <p>Title</p>
// //           <p>Price</p>
// //           <p>Quantity</p>
// //           <p>Total</p>
// //           <p>Remove</p>
// //         </div>
// //         {food_list.map((item) => {
// //           const quantity = cartItems[item._id] || 0;
// //           if (quantity > 0) {
// //             return (
// //               <div key={item._id} className="cart-items-item">
// //                 <img src={`${url}/images/${item.image}`} alt={item.name} />
// //                 <p>{item.name}</p>
// //                 <p>${item.price}</p>
// //                 <p>{quantity}</p>
// //                 <p>${item.price * quantity}</p>
// //                 <p onClick={() => removeFromCart(item._id)} className="cross">x</p>
// //               </div>
// //             );
// //           }
// //           return null;
// //         })}
// //       </div>
// //       <br />
// //       <hr />
// //       <div className="cart-bottom">
// //         <div className="cart-total">
// //           <h2>Cart Totals</h2>
// //           <div>
// //             <div className="cart-total-details">
// //               <p>Subtotal</p>
// //               <p>${getTotalCartAmount()}</p>
// //             </div>
// //             <hr />
// //             <div className="cart-total-details">
// //               <p>Delivery Fee</p>
// //               <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
// //             </div>
// //             <hr />
// //             <div className="cart-total-details">
// //               <b>Total</b>
// //               <p>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</p>
// //             </div>
// //           </div>
// //           <button onClick={() => navigate("/order")}>PROCESS TO CHECKOUT</button>
// //         </div>
// //         <div className="cart-promocode">
// //           <div>
// //             <p>If you have a promo code, enter it here</p>
// //             <div className="cart-promocode-input">
// //               <input
// //                 type="text"
// //                 placeholder="promo code"
// //                 value={voucherCode}
// //                 onChange={(e) => setVoucherCode(e.target.value)}
// //               />
// //               <button onClick={handleVoucherSubmit}>Submit</button>
// //             </div>
// //             {message && <p>{message}</p>}
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Cart;





// // import React, { useContext, useState } from "react";
// // import "./Cart.css";
// // import { StoreContext } from "../../context/StoreContext";
// // import { useNavigate } from "react-router-dom";

// // const Cart = () => {
// //   const { cartItems, food_list, removeFromCart, getTotalCartAmount, url } = useContext(StoreContext);
// //   const navigate = useNavigate();
// //   const [voucherCode, setVoucherCode] = useState("");
// //   const [message, setMessage] = useState("");
// //   const [voucherDiscount, setVoucherDiscount] = useState(0); // State for voucher discount percentage

// //   const handleVoucherSubmit = async () => {
// //     try {
// //       const response = await fetch(`http://localhost:4000/api/vouchers/code/${voucherCode}`);
// //       if (response.ok) {
// //         const data = await response.json();
// //         setVoucherDiscount(data.discount); // Set the discount percentage
// //         setMessage("Voucher applied successfully!");
// //       } else {
// //         setMessage("Voucher does not exist.");
// //       }
// //     } catch (error) {
// //       setMessage("Error connecting to the server.");
// //     }
// //   };

// //   return (
// //     <div className="cart">
// //       <div className="cart-items">
// //         <div className="cart-items-title">
// //           <p>Items</p>
// //           <p>Title</p>
// //           <p>Price</p>
// //           <p>Quantity</p>
// //           <p>Total</p>
// //           <p>Remove</p>
// //         </div>
// //         {food_list.map((item) => {
// //           const quantity = cartItems[item._id] || 0;
// //           if (quantity > 0) {
// //             return (
// //               <div key={item._id} className="cart-items-item">
// //                 <img src={`${url}/images/${item.image}`} alt={item.name} />
// //                 <p>{item.name}</p>
// //                 <p>${item.price}</p>
// //                 <p>{quantity}</p>
// //                 <p>${item.price * quantity}</p>
// //                 <p onClick={() => removeFromCart(item._id)} className="cross">x</p>
// //               </div>
// //             );
// //           }
// //           return null;
// //         })}
// //       </div>
// //       <br />
// //       <hr />
// //       <div className="cart-bottom">
// //         <div className="cart-total">
// //           <h2>Cart Totals</h2>
// //           <div>
// //             <div className="cart-total-details">
// //               <p>Subtotal</p>
// //               <p>${getTotalCartAmount()}</p>
// //             </div>
// //             <hr />
// //             <div className="cart-total-details">
// //               <p>Delivery Fee</p>
// //               <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
// //             </div>
// //             <hr />
// //             <div className="cart-total-details">
// //               <p>Voucher (%)</p>
// //               <p>{voucherDiscount}%</p>
// //             </div>
// //             <hr />
// //             <div className="cart-total-details">
// //               <b>Total</b>
// //               <p>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</p>
// //             </div>
// //           </div>
// //           <button onClick={() => navigate("/order")}>PROCESS TO CHECKOUT</button>
// //         </div>
// //         <div className="cart-promocode">
// //           <div>
// //             <p>If you have a promo code, enter it here</p>
// //             <div className="cart-promocode-input">
// //               <input
// //                 type="text"
// //                 placeholder="promo code"
// //                 value={voucherCode}
// //                 onChange={(e) => setVoucherCode(e.target.value)}
// //               />
// //               <button onClick={handleVoucherSubmit}>Submit</button>
// //             </div>
// //             {message && <p>{message}</p>}
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Cart;








// // Thêm hàm tính toán voucher

// import React, { useContext, useState } from "react";
// import "./Cart.css";
// import { StoreContext } from "../../context/StoreContext";
// import { useNavigate } from "react-router-dom";

// const Cart = () => {
//   const { cartItems, food_list, removeFromCart, getTotalCartAmount, url } = useContext(StoreContext);
//   const navigate = useNavigate();
//   const [voucherCode, setVoucherCode] = useState("");
//   const [message, setMessage] = useState("");
//   const [voucherDiscount, setVoucherDiscount] = useState(0); // State for voucher discount percentage

//   const handleVoucherSubmit = async () => {
//     try {
//       const response = await fetch(`http://localhost:4000/api/vouchers/code/${voucherCode}`);
//       if (response.ok) {
//         const data = await response.json();
//         setVoucherDiscount(data.discount); // Set the discount percentage
//         setMessage("Voucher applied successfully!");
//       } else {
//         setMessage("Voucher does not exist.");
//       }
//     } catch (error) {
//       setMessage("Error connecting to the server.");
//     }
//   };

//   const calculateTotal = () => {
//     const subtotal = getTotalCartAmount();
//     const deliveryFee = subtotal === 0 ? 0 : 2;
//     const discountAmount = (subtotal + deliveryFee) * (voucherDiscount / 100);
//     const total = subtotal + deliveryFee - discountAmount;
//     return total.toFixed(2);
//   };

//   return (
//     <div className="cart">
//       <div className="cart-items">
//         <div className="cart-items-title">
//           <p>Items</p>
//           <p>Title</p>
//           <p>Price</p>
//           <p>Quantity</p>
//           <p>Total</p>
//           <p>Remove</p>
//         </div>
//         {food_list.map((item) => {
//           const quantity = cartItems[item._id] || 0;
//           if (quantity > 0) {
//             return (
//               <div key={item._id} className="cart-items-item">
//                 <img src={`${url}/images/${item.image}`} alt={item.name} />
//                 <p>{item.name}</p>
//                 <p>${item.price}</p>
//                 <p>{quantity}</p>
//                 <p>${item.price * quantity}</p>
//                 <p onClick={() => removeFromCart(item._id)} className="cross">x</p>
//               </div>
//             );
//           }
//           return null;
//         })}
//       </div>
//       <br />
//       <div className="cart-bottom">
//         <div className="cart-total">
//           <h2>Cart Totals</h2>
//           <div>
//             <div className="cart-total-details">
//               <p>Subtotal</p>
//               <p>${getTotalCartAmount()}</p>
//             </div>
//             <hr />
//             <div className="cart-total-details">
//               <p>Delivery Fee</p>
//               <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
//             </div>
//             <hr />
//             <div className="cart-total-details">
//               <p>Voucher Discount</p>
//               <p>{voucherDiscount}%</p>
//             </div>
//             <hr />
//             <div className="cart-total-details">
//               <b>Total</b>
//               <p>${calculateTotal()}</p>
//             </div>
//           </div>
//           <button onClick={() => navigate("/order")}>PROCESS TO CHECKOUT</button>
//         </div>
//         <div className="cart-promocode">
//           <div>
//             <p>If you have a promo code, enter it here</p>
//             <div className="cart-promocode-input">
//               <input
//                 type="text"
//                 placeholder="promo code"
//                 value={voucherCode}
//                 onChange={(e) => setVoucherCode(e.target.value)}
//               />
//               <button onClick={handleVoucherSubmit}>Submit</button>
//             </div>
//             {message && <p>{message}</p>}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cart;



//  Nút sử dụng voucher

// import React, { useContext, useState } from "react";
// import "./Cart.css";
// import { StoreContext } from "../../context/StoreContext";
// import { useNavigate } from "react-router-dom";

// const Cart = () => {
//   const { cartItems, food_list, removeFromCart, getTotalCartAmount, url, voucherCode, setVoucherCode } = useContext(StoreContext);
//   const navigate = useNavigate();
//   const [message, setMessage] = useState("");
//   const [voucherDiscount, setVoucherDiscount] = useState(0); // State for voucher discount percentage

//   const handleVoucherSubmit = async () => {
//     try {
//       const response = await fetch(`http://localhost:4000/api/vouchers/code/${voucherCode}`);
//       if (response.ok) {
//         const data = await response.json();
//         setVoucherDiscount(data.discount); // Set the discount percentage
//         setMessage("Voucher applied successfully!");
//       } else {
//         setMessage("Voucher does not exist.");
//       }
//     } catch (error) {
//       setMessage("Error connecting to the server.");
//     }
//   };

//   const calculateTotal = () => {
//     const subtotal = getTotalCartAmount();
//     const deliveryFee = subtotal === 0 ? 0 : 2;
//     const discountAmount = (subtotal + deliveryFee) * (voucherDiscount / 100);
//     const total = subtotal + deliveryFee - discountAmount;
//     return total.toFixed(2);
//   };

//   return (
//     <div className="cart">
//       <div className="cart-items">
//         <div className="cart-items-title">
//           <p>Items</p>
//           <p>Title</p>
//           <p>Price</p>
//           <p>Quantity</p>
//           <p>Total</p>
//           <p>Remove</p>
//         </div>
//         {food_list && food_list.map((item) => {
//           const quantity = cartItems && cartItems[item._id] ? cartItems[item._id] : 0;
//           if (quantity > 0) {
//             return (
//               <div key={item._id} className="cart-items-item">
//                 <img src={`${url}/images/${item.image}`} alt={item.name} />
//                 <p>{item.name}</p>
//                 <p>${item.price}</p>
//                 <p>{quantity}</p>
//                 <p>${item.price * quantity}</p>
//                 <p onClick={() => removeFromCart(item._id)} className="cross">x</p>
//               </div>
//             );
//           }
//           return null;
//         })}
//       </div>
//       <br />
//       <div className="cart-bottom">
//         <div className="cart-total">
//           <h2>Cart Totals</h2>
//           <div>
//             <div className="cart-total-details">
//               <p>Subtotal</p>
//               <p>${getTotalCartAmount()}</p>
//             </div>
//             <hr />
//             <div className="cart-total-details">
//               <p>Delivery Fee</p>
//               <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
//             </div>
//             <hr />
//             <div className="cart-total-details">
//               <p>Voucher Discount</p>
//               <p>{voucherDiscount}%</p>
//             </div>
//             <hr />
//             <div className="cart-total-details">
//               <b>Total</b>
//               <p>${calculateTotal()}</p>
//             </div>
//           </div>
//           <button onClick={() => navigate("/order")}>PROCESS TO CHECKOUT</button>
//         </div>
//         <div className="cart-promocode">
//           <div>
//             <p>If you have a promo code, enter it here</p>
//             <div className="cart-promocode-input">
//               <input
//                 type="text"
//                 placeholder="promo code"
//                 value={voucherCode}
//                 onChange={(e) => setVoucherCode(e.target.value)} // Cập nhật mã voucher khi nhập
//               />
//               <button onClick={handleVoucherSubmit}>Submit</button>
//             </div>
//             {message && <p>{message}</p>}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cart;





// Trả input về rỗng, đổi chữ Voucher Discount 




// import React, { useContext, useState } from "react";
// import "./Cart.css";
// import { StoreContext } from "../../context/StoreContext";
// import { useNavigate } from "react-router-dom";

// const Cart = () => {
//   const { cartItems, food_list, removeFromCart, getTotalCartAmount, url, voucherCode, setVoucherCode } = useContext(StoreContext);
//   const navigate = useNavigate();
//   const [message, setMessage] = useState("");
//   const [voucherDiscount, setVoucherDiscount] = useState(0); // State for voucher discount percentage
//   const [appliedVoucher, setAppliedVoucher] = useState(""); // State for applied voucher code

//   const handleVoucherSubmit = async () => {
//     try {
//       const response = await fetch(`http://localhost:4000/api/vouchers/code/${voucherCode}`);
//       if (response.ok) {
//         const data = await response.json();
//         setVoucherDiscount(data.discount); // Set the discount percentage
//         setAppliedVoucher(voucherCode); // Set the applied voucher code
//         setVoucherCode(""); // Clear the input field
//         setMessage("Voucher applied successfully!");
//       } else {
//         setMessage("Voucher does not exist.");
//       }
//     } catch (error) {
//       setMessage("Error connecting to the server.");
//     }
//   };

//   const calculateTotal = () => {
//     const subtotal = getTotalCartAmount();
//     const deliveryFee = subtotal === 0 ? 0 : 2;
//     const discountAmount = (subtotal + deliveryFee) * (voucherDiscount / 100);
//     const total = subtotal + deliveryFee - discountAmount;
//     return total.toFixed(2);
//   };

//   return (
//     <div className="cart">
//       <div className="cart-items">
//         <div className="cart-items-title">
//           <p>Items</p>
//           <p>Title</p>
//           <p>Price</p>
//           <p>Quantity</p>
//           <p>Total</p>
//           <p>Remove</p>
//         </div>
//         {food_list && food_list.map((item) => {
//           const quantity = cartItems && cartItems[item._id] ? cartItems[item._id] : 0;
//           if (quantity > 0) {
//             return (
//               <div key={item._id} className="cart-items-item">
//                 <img src={`${url}/images/${item.image}`} alt={item.name} />
//                 <p>{item.name}</p>
//                 <p>${item.price}</p>
//                 <p>{quantity}</p>
//                 <p>${item.price * quantity}</p>
//                 <p onClick={() => removeFromCart(item._id)} className="cross">x</p>
//               </div>
//             );
//           }
//           return null;
//         })}
//       </div>
//       <br />
//       <div className="cart-bottom">
//         <div className="cart-total">
//           <h2>Cart Totals</h2>
//           <div>
//             <div className="cart-total-details">
//               <p>Subtotal</p>
//               <p>${getTotalCartAmount()}</p>
//             </div>
//             <hr />
//             <div className="cart-total-details">
//               <p>Delivery Fee</p>
//               <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
//             </div>
//             <hr />
//             <div className="cart-total-details">
//               <p>Voucher: {appliedVoucher}</p>
//               <p>{voucherDiscount}%</p>
//             </div>
//             <hr />
//             <div className="cart-total-details">
//               <b>Total</b>
//               <p>${calculateTotal()}</p>
//             </div>
//           </div>
//           <button onClick={() => navigate("/order")}>PROCESS TO CHECKOUT</button>
//         </div>
//         <div className="cart-promocode">
//           <div>
//             <p>If you have a promo code, enter it here</p>
//             <div className="cart-promocode-input">
//               <input
//                 type="text"
//                 placeholder="promo code"
//                 value={voucherCode}
//                 onChange={(e) => setVoucherCode(e.target.value)} // Cập nhật mã voucher khi nhập
//               />
//               <button onClick={handleVoucherSubmit}>Submit</button>
//             </div>
//             {message && <p>{message}</p>}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cart;





// thêm hàm kiểm tra mức tiền tối thiểu và ngày áp dụng


// import React, { useContext, useState } from "react";
// import "./Cart.css";
// import { StoreContext } from "../../context/StoreContext";
// import { useNavigate } from "react-router-dom";

// const Cart = () => {
//   const { cartItems, food_list, removeFromCart, getTotalCartAmount, url, voucherCode, setVoucherCode } = useContext(StoreContext);
//   const navigate = useNavigate();
//   const [message, setMessage] = useState("");
//   const [voucherDiscount, setVoucherDiscount] = useState(0); // State for voucher discount percentage
//   const [appliedVoucher, setAppliedVoucher] = useState(""); // State for applied voucher code

//   const handleVoucherSubmit = async () => {
//     try {
//       const response = await fetch(`http://localhost:4000/api/vouchers/code/${voucherCode}`);
//       if (response.ok) {
//         const data = await response.json();
//         const currentDate = new Date();
//         const voucherStartDate = new Date(data.startDate);
//         const voucherEndDate = new Date(data.endDate);
//         const subtotal = getTotalCartAmount();

//         if (subtotal < data.minimumAmount) {
//           setMessage(`Đơn hàng phải có giá trị tối thiểu là ${data.minimumAmount} để áp dụng voucher này.`);
//         } else if (currentDate < voucherStartDate || currentDate > voucherEndDate) {
//           setMessage("Voucher này không còn hiệu lực.");
//         } else {
//           setVoucherDiscount(data.discount); // Set the discount percentage
//           setAppliedVoucher(voucherCode); // Set the applied voucher code
//           setVoucherCode(""); // Clear the input field
//           setMessage("Voucher applied successfully!");
//         }
//       } else {
//         setMessage("Voucher does not exist.");
//       }
//     } catch (error) {
//       setMessage("Error connecting to the server.");
//     }
//   };

//   const calculateTotal = () => {
//     const subtotal = getTotalCartAmount();
//     const deliveryFee = subtotal === 0 ? 0 : 2;
//     const discountAmount = (subtotal + deliveryFee) * (voucherDiscount / 100);
//     const total = subtotal + deliveryFee - discountAmount;
//     return total.toFixed(2);
//   };

//   return (
//     <div className="cart">
//       <div className="cart-items">
//         <div className="cart-items-title">
//           <p>Items</p>
//           <p>Title</p>
//           <p>Price</p>
//           <p>Quantity</p>
//           <p>Total</p>
//           <p>Remove</p>
//         </div>
//         {food_list && food_list.map((item) => {
//           const quantity = cartItems && cartItems[item._id] ? cartItems[item._id] : 0;
//           if (quantity > 0) {
//             return (
//               <div key={item._id} className="cart-items-item">
//                 <img src={`${url}/images/${item.image}`} alt={item.name} />
//                 <p>{item.name}</p>
//                 <p>${item.price}</p>
//                 <p>{quantity}</p>
//                 <p>${item.price * quantity}</p>
//                 <p onClick={() => removeFromCart(item._id)} className="cross">x</p>
//               </div>
//             );
//           }
//           return null;
//         })}
//       </div>
//       <br />
//       <div className="cart-bottom">
//         <div className="cart-total">
//           <h2>Cart Totals</h2>
//           <div>
//             <div className="cart-total-details">
//               <p>Subtotal</p>
//               <p>${getTotalCartAmount()}</p>
//             </div>
//             <hr />
//             <div className="cart-total-details">
//               <p>Delivery Fee</p>
//               <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
//             </div>
//             <hr />
//             <div className="cart-total-details">
//               <p>Voucher: {appliedVoucher}</p>
//               <p>{voucherDiscount}%</p>
//             </div>
//             <hr />
//             <div className="cart-total-details">
//               <b>Total</b>
//               <p>${calculateTotal()}</p>
//             </div>
//           </div>
//           <button onClick={() => navigate("/order")}>PROCESS TO CHECKOUT</button>
//         </div>
//         <div className="cart-promocode">
//           <div>
//             <p>If you have a voucher code, enter it here</p>
//             <div className="cart-promocode-input">
//               <input
//                 type="text"
//                 placeholder="voucher code"
//                 value={voucherCode}
//                 onChange={(e) => setVoucherCode(e.target.value)} // Cập nhật mã voucher khi nhập
//               />
//               <button onClick={handleVoucherSubmit}>Submit</button>
//             </div>
//             {message && <p>{message}</p>}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cart;






// Đổi sang tiếng anh


// import React, { useContext, useState } from "react";
// import "./Cart.css";
// import { StoreContext } from "../../context/StoreContext";
// import { useNavigate } from "react-router-dom";

// const Cart = () => {
//   const { cartItems, food_list, removeFromCart, getTotalCartAmount, url, voucherCode, setVoucherCode } = useContext(StoreContext);
//   const navigate = useNavigate();
//   const [message, setMessage] = useState("");
//   const [voucherDiscount, setVoucherDiscount] = useState(0);
//   const [appliedVoucher, setAppliedVoucher] = useState("");

//   const handleVoucherSubmit = async () => {
//     try {
//       const response = await fetch(`http://localhost:4000/api/vouchers/code/${voucherCode}`);
//       if (response.ok) {
//         const data = await response.json();
//         const currentDate = new Date();
//         const voucherStartDate = new Date(data.startDate);
//         const voucherEndDate = new Date(data.endDate);
//         const subtotal = getTotalCartAmount();

//         if (subtotal < data.minimumAmount) {
//           setMessage(`The order must have a minimum value of ${data.minimumAmount} to apply this voucher.`);
//         } else if (currentDate < voucherStartDate || currentDate > voucherEndDate) {
//           setMessage("This voucher is no longer valid.");
//         } else {
//           setVoucherDiscount(data.discount);
//           setAppliedVoucher(voucherCode);
//           setVoucherCode("");
//           setMessage("Voucher applied successfully!");
//         }
//       } else {
//         setMessage("Voucher does not exist.");
//       }
//     } catch (error) {
//       setMessage("Error connecting to the server.");
//     }
//   };

//   const calculateTotal = () => {
//     const subtotal = getTotalCartAmount();
//     const deliveryFee = subtotal === 0 ? 0 : 2;
//     const discountAmount = (subtotal + deliveryFee) * (voucherDiscount / 100);
//     const total = subtotal + deliveryFee - discountAmount;
//     return total.toFixed(2);
//   };

//   return (
//     <div className="cart">
//       <div className="cart-items">
//         <div className="cart-items-title">
//           <p>Items</p>
//           <p>Title</p>
//           <p>Price</p>
//           <p>Quantity</p>
//           <p>Total</p>
//           <p>Remove</p>
//         </div>
//         {food_list && food_list.map((item) => {
//           const quantity = cartItems && cartItems[item._id] ? cartItems[item._id] : 0;
//           if (quantity > 0) {
//             return (
//               <div key={item._id} className="cart-items-item">
//                 <img src={`${url}/images/${item.image}`} alt={item.name} />
//                 <p>{item.name}</p>
//                 <p>${item.price}</p>
//                 <p>{quantity}</p>
//                 <p>${item.price * quantity}</p>
//                 <p onClick={() => removeFromCart(item._id)} className="cross">x</p>
//               </div>
//             );
//           }
//           return null;
//         })}
//       </div>
//       <br />
//       <div className="cart-bottom">
//         <div className="cart-total">
//           <h2>Cart Totals</h2>
//           <div>
//             <div className="cart-total-details">
//               <p>Subtotal</p>
//               <p>${getTotalCartAmount()}</p>
//             </div>
//             <hr />
//             <div className="cart-total-details">
//               <p>Delivery Fee</p>
//               <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
//             </div>
//             <hr />
//             <div className="cart-total-details">
//               <p>Voucher: {appliedVoucher}</p>
//               <p>{voucherDiscount}%</p>
//             </div>
//             <hr />
//             <div className="cart-total-details">
//               <b>Total</b>
//               <p>${calculateTotal()}</p>
//             </div>
//           </div>
//           <button onClick={() => navigate("/order")}>PROCESS TO CHECKOUT</button>
//         </div>
//         <div className="cart-promocode">
//           <div>
//             <p>If you have a promo code, enter it here</p>
//             <div className="cart-promocode-input">
//               <input
//                 type="text"
//                 placeholder="promo code"
//                 value={voucherCode}
//                 onChange={(e) => setVoucherCode(e.target.value)}
//               />
//               <button onClick={handleVoucherSubmit}>Submit</button>
//             </div>
//             {message && <p>{message}</p>}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cart;



// nếu mã nhập vào chưa đến ngày sửa dụng thì báo "voucher sẽ được áp dụng vào ngày <ngày trong database>" còn nếu quá nagỳ thì báo "voucher này đã hết hạn sử dụng"

// import React, { useContext, useState } from "react";
// import "./Cart.css";
// import { StoreContext } from "../../context/StoreContext";
// import { useNavigate } from "react-router-dom";

// const Cart = () => {
//   const { cartItems, food_list, removeFromCart, getTotalCartAmount, url, voucherCode, setVoucherCode } = useContext(StoreContext);
//   const navigate = useNavigate();
//   const [message, setMessage] = useState("");
//   const [voucherDiscount, setVoucherDiscount] = useState(0);
//   const [appliedVoucher, setAppliedVoucher] = useState("");

//   const handleVoucherSubmit = async () => {
//     try {
//       const response = await fetch(`http://localhost:4000/api/vouchers/code/${voucherCode}`);
//       if (response.ok) {
//         const data = await response.json();
//         const currentDate = new Date();
//         const voucherStartDate = new Date(data.startDate);
//         const voucherEndDate = new Date(data.endDate);
//         const subtotal = getTotalCartAmount();

//         if (subtotal < data.minimumAmount) {
//           setMessage(`The order must have a minimum value of ${data.minimumAmount} to apply this voucher.`);
//         } else if (currentDate < voucherStartDate) {
//           setMessage(`This voucher will be valid from ${voucherStartDate.toLocaleDateString()}.`);
//         } else if (currentDate > voucherEndDate) {
//           setMessage("This voucher has expired.");
//         } else {
//           setVoucherDiscount(data.discount);
//           setAppliedVoucher(voucherCode);
//           setVoucherCode("");
//           setMessage("Voucher applied successfully!");
//         }
//       } else {
//         setMessage("Voucher does not exist.");
//       }
//     } catch (error) {
//       setMessage("Error connecting to the server.");
//     }
//   };

//   const calculateTotal = () => {
//     const subtotal = getTotalCartAmount();
//     const deliveryFee = subtotal === 0 ? 0 : 2;
//     const discountAmount = (subtotal + deliveryFee) * (voucherDiscount / 100);
//     const total = subtotal + deliveryFee - discountAmount;
//     return total.toFixed(2);
//   };

//   return (
//     <div className="cart">
//       <div className="cart-items">
//         <div className="cart-items-title">
//           <p>Items</p>
//           <p>Title</p>
//           <p>Price</p>
//           <p>Quantity</p>
//           <p>Total</p>
//           <p>Remove</p>
//         </div>
//         {food_list && food_list.map((item) => {
//           const quantity = cartItems && cartItems[item._id] ? cartItems[item._id] : 0;
//           if (quantity > 0) {
//             return (
//               <div key={item._id} className="cart-items-item">
//                 <img src={`${url}/images/${item.image}`} alt={item.name} />
//                 <p>{item.name}</p>
//                 <p>${item.price}</p>
//                 <p>{quantity}</p>
//                 <p>${item.price * quantity}</p>
//                 <p onClick={() => removeFromCart(item._id)} className="cross">x</p>
//               </div>
//             );
//           }
//           return null;
//         })}
//       </div>
//       <br />
//       <div className="cart-bottom">
//         <div className="cart-total">
//           <h2>Cart Totals</h2>
//           <div>
//             <div className="cart-total-details">
//               <p>Subtotal</p>
//               <p>${getTotalCartAmount()}</p>
//             </div>
//             <hr />
//             <div className="cart-total-details">
//               <p>Delivery Fee</p>
//               <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
//             </div>
//             <hr />
//             <div className="cart-total-details">
//               <p>Voucher: {appliedVoucher}</p>
//               <p>{voucherDiscount}%</p>
//             </div>
//             <hr />
//             <div className="cart-total-details">
//               <b>Total</b>
//               <p>${calculateTotal()}</p>
//             </div>
//           </div>
//           <button onClick={() => navigate("/order")}>PROCESS TO CHECKOUT</button>
//         </div>
//         <div className="cart-promocode">
//           <div>
//             <p>If you have a promo code, enter it here</p>
//             <div className="cart-promocode-input">
//               <input
//                 type="text"
//                 placeholder="promo code"
//                 value={voucherCode}
//                 onChange={(e) => setVoucherCode(e.target.value)}
//               />
//               <button onClick={handleVoucherSubmit}>Submit</button>
//             </div>
//             {message && <p>{message}</p>}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cart;




// giảm đi 1 khi submit


// import React, { useContext, useState } from "react";
// import "./Cart.css";
// import { StoreContext } from "../../context/StoreContext";
// import { useNavigate } from "react-router-dom";

// const Cart = () => {
//   const { cartItems, food_list, removeFromCart, getTotalCartAmount, url, voucherCode, setVoucherCode } = useContext(StoreContext);
//   const navigate = useNavigate();
//   const [message, setMessage] = useState("");
//   const [voucherDiscount, setVoucherDiscount] = useState(0);
//   const [appliedVoucher, setAppliedVoucher] = useState("");

//   const handleVoucherSubmit = async () => {
//     try {
//       const response = await fetch(`http://localhost:4000/api/vouchers/code/${voucherCode}`);
//       if (response.ok) {
//         const data = await response.json();
//         const currentDate = new Date();
//         const voucherStartDate = new Date(data.startDate);
//         const voucherEndDate = new Date(data.endDate);
//         const subtotal = getTotalCartAmount();

//         if (subtotal < data.minimumAmount) {
//           setMessage(`The order must have a minimum value of ${data.minimumAmount} to apply this voucher.`);
//         } else if (currentDate < voucherStartDate) {
//           setMessage(`This voucher will be valid from ${voucherStartDate.toLocaleDateString()}.`);
//         } else if (currentDate > voucherEndDate) {
//           setMessage("This voucher has expired.");
//         } else {
//           // Giảm số lượng còn lại của voucher
//           const updateResponse = await fetch(`http://localhost:4000/api/vouchers/redeem/${voucherCode}`, {
//             method: "POST",
//             headers: {
//               "Content-Type": "application/json",
//             },
//           });

//           if (updateResponse.ok) {
//             setVoucherDiscount(data.discount);
//             setAppliedVoucher(voucherCode);
//             setVoucherCode("");
//             setMessage("Voucher applied successfully!");
//           } else {
//             const updateData = await updateResponse.json();
//             setMessage(updateData.message || "Failed to redeem the voucher.");
//           }
//         }
//       } else {
//         setMessage("Voucher does not exist.");
//       }
//     } catch (error) {
//       setMessage("Error connecting to the server.");
//     }
//   };

//   const calculateTotal = () => {
//     const subtotal = getTotalCartAmount();
//     const deliveryFee = subtotal === 0 ? 0 : 2;
//     const discountAmount = (subtotal + deliveryFee) * (voucherDiscount / 100);
//     const total = subtotal + deliveryFee - discountAmount;
//     return total.toFixed(2);
//   };

//   return (
//     <div className="cart">
//       <div className="cart-items">
//         <div className="cart-items-title">
//           <p>Items</p>
//           <p>Title</p>
//           <p>Price</p>
//           <p>Quantity</p>
//           <p>Total</p>
//           <p>Remove</p>
//         </div>
//         {food_list && food_list.map((item) => {
//           const quantity = cartItems && cartItems[item._id] ? cartItems[item._id] : 0;
//           if (quantity > 0) {
//             return (
//               <div key={item._id} className="cart-items-item">
//                 <img src={`${url}/images/${item.image}`} alt={item.name} />
//                 <p>{item.name}</p>
//                 <p>${item.price}</p>
//                 <p>{quantity}</p>
//                 <p>${item.price * quantity}</p>
//                 <p onClick={() => removeFromCart(item._id)} className="cross">x</p>
//               </div>
//             );
//           }
//           return null;
//         })}
//       </div>
//       <br />
//       <div className="cart-bottom">
//         <div className="cart-total">
//           <h2>Cart Totals</h2>
//           <div>
//             <div className="cart-total-details">
//               <p>Subtotal</p>
//               <p>${getTotalCartAmount()}</p>
//             </div>
//             <hr />
//             <div className="cart-total-details">
//               <p>Delivery Fee</p>
//               <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
//             </div>
//             <hr />
//             <div className="cart-total-details">
//               <p>Voucher: {appliedVoucher}</p>
//               <p>{voucherDiscount}%</p>
//             </div>
//             <hr />
//             <div className="cart-total-details">
//               <b>Total</b>
//               <p>${calculateTotal()}</p>
//             </div>
//           </div>
//           <button onClick={() => navigate("/order")}>PROCESS TO CHECKOUT</button>
//         </div>
//         <div className="cart-promocode">
//           <div>
//             <p>If you have a promo code, enter it here</p>
//             <div className="cart-promocode-input">
//               <input
//                 type="text"
//                 placeholder="promo code"
//                 value={voucherCode}
//                 onChange={(e) => setVoucherCode(e.target.value)}
//               />
//               <button onClick={handleVoucherSubmit}>Submit</button>
//             </div>
//             {message && <p>{message}</p>}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cart;





// Viết hàm kiểm tra giảm tối đa

import React, { useContext, useState } from "react";
import "./Cart.css";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const {voucherCode, cartItems, food_list, removeFromCart, setVoucherCode, getTotalCartAmount, url } = useContext(StoreContext);
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [voucherDiscount, setVoucherDiscount] = useState(0); // State for voucher discount percentage
  const [maximumDiscount, setMaximumDiscount] = useState(0); // State for maximum discount
  const [appliedVoucher, setAppliedVoucher] = useState("");

  const handleVoucherSubmit = async () => {
    try {
      const response = await fetch(`http://localhost:4000/api/vouchers/code/${voucherCode}`);
      if (response.ok) {
        const data = await response.json();
        const currentDate = new Date();
        const voucherStartDate = new Date(data.startDate);
        const voucherEndDate = new Date(data.endDate);
        const subtotal = getTotalCartAmount();

        if (subtotal < data.minimumAmount) {
          setMessage(`The order must have a minimum value of ${data.minimumAmount} USD to apply this voucher.`);
        } else if (currentDate < voucherStartDate) {
          setMessage(`This voucher will be valid from ${voucherStartDate.toLocaleDateString()}.`);
        } else if (currentDate > voucherEndDate) {
          setMessage("This voucher has expired.");
        } else {
          // Giảm số lượng còn lại của voucher
          const updateResponse = await fetch(`http://localhost:4000/api/vouchers/redeem/${voucherCode}`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
          });

          if (updateResponse.ok) {
            setVoucherDiscount(data.discount);
            setMaximumDiscount(data.maximumDiscount); // Set the maximum discount
            setAppliedVoucher(voucherCode);
            setVoucherCode("");
            setMessage("Voucher applied successfully!");
          } else {
            const updateData = await updateResponse.json();
            setMessage(updateData.message || "Failed to redeem the voucher.");
          }
        }
      } else {
        setMessage("Voucher does not exist.");
      }
    } catch (error) {
      setMessage("Error connecting to the server.");
    }
  };

  const calculateTotal = () => {
    const subtotal = getTotalCartAmount();
    const deliveryFee = subtotal === 0 ? 0 : 2;
    const discountAmount = Math.min((subtotal + deliveryFee) * (voucherDiscount / 100), maximumDiscount);
    const total = subtotal + deliveryFee - discountAmount;
    return total.toFixed(2);
  };

  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        {food_list && food_list.map((item) => {
          const quantity = cartItems && cartItems[item._id] ? cartItems[item._id] : 0;
          if (quantity > 0) {
            return (
              <div key={item._id} className="cart-items-item">
                <img src={`${url}/images/${item.image}`} alt={item.name} />
                <p>{item.name}</p>
                <p>${item.price}</p>
                <p>{quantity}</p>
                <p>${item.price * quantity}</p>
                <p onClick={() => removeFromCart(item._id)} className="cross">x</p>
              </div>
            );
          }
          return null;
        })}
      </div>
      <br />
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Voucher: {appliedVoucher}</p>
              <p>{voucherDiscount}%</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <p>${calculateTotal()}</p>
            </div>
          </div>
          <button onClick={() => navigate("/order")}>PROCESS TO CHECKOUT</button>
        </div>
        <div className="cart-promocode">
          <div>
            <p>If you have a promo code, enter it here</p>
            <div className="cart-promocode-input">
              <input
                type="text"
                placeholder="promo code"
                value={voucherCode}
                onChange={(e) => setVoucherCode(e.target.value)}
              />
              <button onClick={handleVoucherSubmit}>Submit</button>
            </div>
            {message && <p>{message}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;