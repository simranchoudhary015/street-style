const express = require("express");
const router = express.Router();
const upload = require("../middleware/upload");
const { uploadBanner,fetchaddBanners,deleteBanner} = require("../controllers/bannerController");

router.post(
  "/upload-image",
  upload.single("image1"), 
  uploadBanner
);
router.get('/fetchbanners',fetchaddBanners)
router.delete('/delete/:id',deleteBanner)
module.exports = router;
