// import axios from "axios";
// import { createContext, useEffect, useState } from "react";
// // import { food_list } from "../assets/assets";

// export const StoreContext = createContext(null);
// const StoreContextProvider = (props) => {
//   const [cartItems, setcartItems] = useState({});
//   const url="http://localhost:4000"
//   const [token,setToken]=useState("")
//   const [food_list,setFoodList]=useState([])
//   const addTocart =async (itemId) => {
//     if (!cartItems[itemId]) {
//       setcartItems((prev) => ({ ...prev, [itemId]: 1 }));
//     } else {
//       setcartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
//     }
//     if(token){
//       await axios.post(url+"/api/cart/add",{itemId},{headers:{token}})
//     }
//   };
//   const removeFromCart =async (itemId) => {
//     setcartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
//     if(token){
//       await axios.post(url+"/api/cart/remove",{itemId},{headers:{token}})
//     }
//   };

//   const getTotalCartAmount = () => {
//     let totalAmount = 0;
//     for (const item in cartItems) {
//       if (cartItems[item] > 0) {
//         let itemInfo = food_list.find((product) => product._id === item);
        
       
//         if (itemInfo) {
//           totalAmount += itemInfo.price * cartItems[item];
//         } else {
//           console.error(`Không tìm thấy sản phẩm với ID: ${item}`);
//         }
//       }
//     }
//     return totalAmount;
//   };
  
//   const fetchFoodList=async()=>{
//     const response=await axios.get(url+'/api/food/list');
//     setFoodList(response.data.data);
//   }
//   const loadCartData=async(token)=> {
//     const response =await axios.post(url+"/api/cart/get",{},{headers:{token}})
//     setcartItems(response.data.cartData);
//   }
//   useEffect(() => {
//     // Đây là một hàm bất đồng bộ để lấy danh sách thực phẩm
//     async function loadData() {
//       await fetchFoodList();
//          if (localStorage.getItem('token')) {
//       setToken(localStorage.getItem('token'));
//       await loadCartData(localStorage.getItem("token"));
//     }
//     }
  

 
  
//     loadData();
//   }, []);
  

//   const contextValue = {
//     food_list,
//     cartItems,
//     setcartItems,
//     addTocart,
//     removeFromCart,
//     getTotalCartAmount,
//     url,
//     token,
//     setToken
//   };
//   return (
//     <StoreContext.Provider value={contextValue}>
//       {props.children}
//     </StoreContext.Provider>
//   );
// };
// export default StoreContextProvider;









// Nút sử dụng voucher


import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setcartItems] = useState({});
  const [voucherCode, setVoucherCode] = useState(""); // Thêm trạng thái mã voucher
  const url = "http://localhost:4000";
  const [token, setToken] = useState("");
  const [food_list, setFoodList] = useState([]);

  const addTocart = async (itemId) => {
    if (!cartItems[itemId]) {
      setcartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setcartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
    if (token) {
      await axios.post(url + "/api/cart/add", { itemId }, { headers: { token } });
    }
  };

  const removeFromCart = async (itemId) => {
    setcartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    if (token) {
      await axios.post(url + "/api/cart/remove", { itemId }, { headers: { token } });
    }
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = food_list.find((product) => product._id === item);
        if (itemInfo) {
          totalAmount += itemInfo.price * cartItems[item];
        }
      }
    }
    return totalAmount;
  };

  const fetchFoodList = async () => {
    const response = await axios.get(url + "/api/food/list");
    setFoodList(response.data.data);
  };

  const loadCartData = async (token) => {
    const response = await axios.post(url + "/api/cart/get", {}, { headers: { token } });
    setcartItems(response.data.cartData);
  };

  useEffect(() => {
    async function loadData() {
      await fetchFoodList();
      if (localStorage.getItem("token")) {
        setToken(localStorage.getItem("token"));
        await loadCartData(localStorage.getItem("token"));
      }
    }
    loadData();
  }, []);

  const contextValue = {
    food_list,
    cartItems,
    setcartItems,
    addTocart,
    removeFromCart,
    getTotalCartAmount,
    url,
    token,
    setToken,
    voucherCode, // Thêm voucherCode vào context
    setVoucherCode, // Thêm hàm setVoucherCode vào context
  };

  return <StoreContext.Provider value={contextValue}>{props.children}</StoreContext.Provider>;
};

export default StoreContextProvider;