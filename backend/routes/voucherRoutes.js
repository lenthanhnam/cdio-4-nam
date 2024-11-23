// const express = require('express');
// const Voucher = require('../models/Voucher');
// const router = express.Router();




// // API thêm voucher mới
// router.post('/api/vouchers', async (req, res) => {
//     const { code, discount, minimumAmount, startDate, endDate, usageLimit } = req.body;
  
//     try {
//       // Kiểm tra xem voucher có tồn tại hay không
//       const existingVoucher = await Voucher.findOne({ code });
//       if (existingVoucher) {
//         return res.status(400).json({ message: 'Voucher đã tồn tại.' });
//       }
  
//       // Tạo voucher mới
//       const newVoucher = new Voucher({
//         code,
//         discount,
//         minimumAmount,
//         startDate,
//         endDate,
//         usageLimit,
//         usageLeft: usageLimit, // Khởi tạo số lượt dùng còn lại bằng với usageLimit
//       });
  
//       await newVoucher.save();
//       res.status(201).json({ message: 'Voucher đã được lưu thành công.' });
//     } catch (error) {
//       console.error('Lỗi khi tạo voucher:', error);
//       res.status(500).json({ message: 'Đã xảy ra lỗi khi lưu voucher.' });
//     }
//   });

// // API trả về tất cả voucher
// router.get('/api/vouchers', async (req, res) => {
//     try {
//       const vouchers = await Voucher.find();  // Lấy tất cả voucher từ MongoDB
//       res.json(vouchers);  // Trả về danh sách voucher
//     } catch (error) {
//       console.error('Lỗi khi lấy voucher:', error);
//       res.status(500).json({ message: 'Đã xảy ra lỗi khi lấy danh sách voucher.' });
//     }
//   });
  
//     // API lấy voucher theo mã
//     router.get('/api/vouchers/code/:voucherCode', async (req, res) => {
//         try {
//           const { voucherCode } = req.params;
      
//           // Tìm voucher theo mã (case-sensitive)
//           const voucher = await Voucher.findOne({ code: voucherCode });
      
//           if (!voucher) {
//             return res.status(404).json({ message: 'Voucher không tồn tại.' });
//           }
      
//           // Trả về dữ liệu voucher nếu tìm thấy
//           res.status(200).json(voucher);
//         } catch (error) {
//           console.error('Lỗi khi tìm voucher:', error);
//           res.status(500).json({ message: 'Đã xảy ra lỗi.' });
//         }
//       });
      
  

//   // API xóa voucher
// router.delete('/api/vouchers/:id', async (req, res) => {
//     try {
//       const voucherId = req.params.id;
//       const deletedVoucher = await Voucher.findByIdAndDelete(voucherId);
  
//       if (!deletedVoucher) {
//         return res.status(404).json({ message: 'Voucher không tìm thấy.' });
//       }
  
//       res.status(200).json({ message: 'Voucher đã được xóa thành công.' });
//     } catch (error) {
//       console.error('Lỗi khi xóa voucher:', error);
//       res.status(500).json({ message: 'Đã xảy ra lỗi khi xóa voucher.' });
//     }
//   });
  

// module.exports = router;





                                // không giảm đi 1

// import express from 'express';
// import Voucher from '../models/Voucher.js';

// const router = express.Router();

// // API thêm voucher mới
// router.post('/api/vouchers', async (req, res) => {
//   const { code, discount, minimumAmount, startDate, endDate, usageLimit } = req.body;

//   try {
//     const existingVoucher = await Voucher.findOne({ code });
//     if (existingVoucher) {
//       return res.status(400).json({ message: 'Voucher đã tồn tại.' });
//     }

//     const newVoucher = new Voucher({
//       code,
//       discount,
//       minimumAmount,
//       startDate,
//       endDate,
//       usageLimit,
//       usageLeft: usageLimit,
//     });

//     await newVoucher.save();
//     res.status(201).json({ message: 'Voucher đã được lưu thành công.' });
//   } catch (error) {
//     console.error('Lỗi khi tạo voucher:', error);
//     res.status(500).json({ message: 'Đã xảy ra lỗi khi lưu voucher.' });
//   }
// });

// // API trả về tất cả voucher
// router.get('/api/vouchers', async (req, res) => {
//   try {
//     const vouchers = await Voucher.find();
//     res.json(vouchers);
//   } catch (error) {
//     console.error('Lỗi khi lấy voucher:', error);
//     res.status(500).json({ message: 'Đã xảy ra lỗi khi lấy danh sách voucher.' });
//   }
// });

// // API lấy voucher theo mã
// router.get('/api/vouchers/code/:voucherCode', async (req, res) => {
//   try {
//     const { voucherCode } = req.params;
//     const voucher = await Voucher.findOne({ code: voucherCode });

//     if (!voucher) {
//       return res.status(404).json({ message: 'Voucher không tồn tại.' });
//     }

//     res.status(200).json(voucher);
//   } catch (error) {
//     console.error('Lỗi khi tìm voucher:', error);
//     res.status(500).json({ message: 'Đã xảy ra lỗi.' });
//   }
// });

// // API xóa voucher
// router.delete('/api/vouchers/:id', async (req, res) => {
//   try {
//     const voucherId = req.params.id;
//     const deletedVoucher = await Voucher.findByIdAndDelete(voucherId);

//     if (!deletedVoucher) {
//       return res.status(404).json({ message: 'Voucher không tìm thấy.' });
//     }

//     res.status(200).json({ message: 'Voucher đã được xóa thành công.' });
//   } catch (error) {
//     console.error('Lỗi khi xóa voucher:', error);
//     res.status(500).json({ message: 'Đã xảy ra lỗi khi xóa voucher.' });
//   }
// });

// export default router;








                                    // giảm đi 1

// import express from 'express';
// import Voucher from '../models/Voucher.js';

// const router = express.Router();

// // API thêm voucher mới
// router.post('/api/vouchers', async (req, res) => {
//   const { code, discount, minimumAmount, startDate, endDate, usageLimit } = req.body;

//   try {
//     const existingVoucher = await Voucher.findOne({ code });
//     if (existingVoucher) {
//       return res.status(400).json({ message: 'Voucher đã tồn tại.' });
//     }

//     const newVoucher = new Voucher({
//       code,
//       discount,
//       minimumAmount,
//       startDate,
//       endDate,
//       usageLimit,
//       usageLeft: usageLimit,
//     });

//     await newVoucher.save();
//     res.status(201).json({ message: 'Voucher đã được lưu thành công.' });
//   } catch (error) {
//     console.error('Lỗi khi tạo voucher:', error);
//     res.status(500).json({ message: 'Đã xảy ra lỗi khi lưu voucher.' });
//   }
// });

// // API trả về tất cả voucher
// router.get('/api/vouchers', async (req, res) => {
//   try {
//     const vouchers = await Voucher.find();
//     res.json(vouchers);
//   } catch (error) {
//     console.error('Lỗi khi lấy voucher:', error);
//     res.status(500).json({ message: 'Đã xảy ra lỗi khi lấy danh sách voucher.' });
//   }
// });

// // API lấy voucher theo mã
// router.get('/api/vouchers/code/:voucherCode', async (req, res) => {
//   try {
//     const { voucherCode } = req.params;
//     const voucher = await Voucher.findOne({ code: voucherCode });

//     if (!voucher) {
//       return res.status(404).json({ message: 'Voucher không tồn tại.' });
//     }

//     res.status(200).json(voucher);
//   } catch (error) {
//     console.error('Lỗi khi tìm voucher:', error);
//     res.status(500).json({ message: 'Đã xảy ra lỗi.' });
//   }
// });

// // API xóa voucher
// router.delete('/api/vouchers/:id', async (req, res) => {
//   try {
//     const voucherId = req.params.id;
//     const deletedVoucher = await Voucher.findByIdAndDelete(voucherId);

//     if (!deletedVoucher) {
//       return res.status(404).json({ message: 'Voucher không tìm thấy.' });
//     }

//     res.status(200).json({ message: 'Voucher đã được xóa thành công.' });
//   } catch (error) {
//     console.error('Lỗi khi xóa voucher:', error);
//     res.status(500).json({ message: 'Đã xảy ra lỗi khi xóa voucher.' });
//   }
// });


// // API giảm số lượng còn lại của voucher
// router.post('/api/vouchers/redeem/:voucherCode', async (req, res) => {
//   try {
//     const { voucherCode } = req.params;
//     const voucher = await Voucher.findOne({ code: voucherCode });

//     if (!voucher) {
//       return res.status(404).json({ message: 'Voucher không tồn tại.' });
//     }

//     if (voucher.usageLeft <= 0) {
//       return res.status(400).json({ message: 'Voucher đã hết lượt sử dụng.' });
//     }

//     voucher.usageLeft -= 1;
//     await voucher.save();

//     res.status(200).json({ message: 'Voucher đã được áp dụng thành công.' });
//   } catch (error) {
//     console.error('Lỗi khi áp dụng voucher:', error);
//     res.status(500).json({ message: 'Đã xảy ra lỗi khi áp dụng voucher.' });
//   }
// });


// export default router;                              




// thêm trường giảm tối đa

import express from 'express';
import Voucher from '../models/Voucher.js';

const router = express.Router();

// API thêm voucher mới
router.post('/api/vouchers', async (req, res) => {
  const { code, discount, maximumDiscount, minimumAmount, startDate, endDate, usageLimit } = req.body;

  try {
    const existingVoucher = await Voucher.findOne({ code });
    if (existingVoucher) {
      return res.status(400).json({ message: 'Voucher đã tồn tại.' });
    }

    const newVoucher = new Voucher({
      code,
      discount,
      maximumDiscount,
      minimumAmount,
      startDate,
      endDate,
      usageLimit,
      usageLeft: 0,
    });

    await newVoucher.save();
    res.status(201).json({ message: 'Voucher đã được lưu thành công.' });
  } catch (error) {
    console.error('Lỗi khi tạo voucher:', error);
    res.status(500).json({ message: 'Đã xảy ra lỗi khi lưu voucher.' });
  }
});

// API trả về tất cả voucher
router.get('/api/vouchers', async (req, res) => {
  try {
    const vouchers = await Voucher.find();
    res.json(vouchers);
  } catch (error) {
    console.error('Lỗi khi lấy voucher:', error);
    res.status(500).json({ message: 'Đã xảy ra lỗi khi lấy danh sách voucher.' });
  }
});

// API lấy voucher theo mã
router.get('/api/vouchers/code/:voucherCode', async (req, res) => {
  try {
    const { voucherCode } = req.params;
    const voucher = await Voucher.findOne({ code: voucherCode });

    if (!voucher) {
      return res.status(404).json({ message: 'Voucher không tồn tại.' });
    }

    res.status(200).json(voucher);
  } catch (error) {
    console.error('Lỗi khi tìm voucher:', error);
    res.status(500).json({ message: 'Đã xảy ra lỗi.' });
  }
});

// API xóa voucher
router.delete('/api/vouchers/:id', async (req, res) => {
  try {
    const voucherId = req.params.id;
    const deletedVoucher = await Voucher.findByIdAndDelete(voucherId);

    if (!deletedVoucher) {
      return res.status(404).json({ message: 'Voucher không tìm thấy.' });
    }

    res.status(200).json({ message: 'Voucher đã được xóa thành công.' });
  } catch (error) {
    console.error('Lỗi khi xóa voucher:', error);
    res.status(500).json({ message: 'Đã xảy ra lỗi khi xóa voucher.' });
  }
});

// API giảm số lượng còn lại của voucher
router.post('/api/vouchers/redeem/:voucherCode', async (req, res) => {
  try {
    const { voucherCode } = req.params;
    const voucher = await Voucher.findOne({ code: voucherCode });

    if (!voucher) {
      return res.status(404).json({ message: 'Voucher không tồn tại.' });
    }

    if (voucher.usageLeft >= voucher.usageLimit) {
      return res.status(400).json({ message: 'Voucher đã hết lượt sử dụng.' });
    }

    voucher.usageLeft += 1;
    await voucher.save();

    res.status(200).json({ message: 'Voucher đã được áp dụng thành công.' });
  } catch (error) {
    console.error('Lỗi khi áp dụng voucher:', error);
    res.status(500).json({ message: 'Đã xảy ra lỗi khi áp dụng voucher.' });
  }
});


// API chỉnh sửa voucher
router.put('/api/vouchers/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const updatedVoucher = await Voucher.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedVoucher) {
      return res.status(404).json({ message: 'Voucher not found.' });
    }
    res.status(200).json(updatedVoucher);
  } catch (error) {
    console.error('Error updating voucher:', error);
    res.status(500).json({ message: 'Error updating voucher.' });
  }
});

export default router;