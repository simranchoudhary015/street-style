const Banner = require("../model/Banner");

const uploadBanner = async (req, res) => {
  try {
    const { discount } = req.body;
    console.log(discount)
    if (!req.file) {
      return res.status(400).json({ msg: "No file uploaded" });
    }

    if (!discount) {
      return res.status(400).json({ msg: "Discount is required" });
    }

    const newBanner = await Banner.create({
      image1: req.file.filename,
      discount,
    });

    res.status(200).json({
      msg: "Banner uploaded successfully",
      banner: newBanner,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Server error", error: error.message });
  }
};
const fetchaddBanners = async (req, res) => {
  try {
    const addbanners = await Banner.find();  
    return res.status(200).json({
      msg: "bannerss fetched successfully",
      addbanners,
    });
  } catch (err) {
    console.error("Fetch banners Error:", err);
    res.status(500).json({ msg: "Server error" });
  }     
};

const deleteBanner = async (req, res) => {
  try {
    const userId = req.params.id;
    const deletedBanner = await Banner.findByIdAndDelete(userId);

    if (!deletedBanner) {
      return res.status(404).send('Banner not found');
    }

    res.status(200).send('Banner deleted successfully');
  } catch (error) {
    res.status(500).send('Server error');
  }
}
module.exports = { uploadBanner,fetchaddBanners,deleteBanner};
