const mongoose = require("mongoose");

const bannerSchema = new mongoose.Schema(
  {
    image1: {
      type: String,       // stores filename from multer
      required: true,
    },

    // optional fields (safe to keep or remove)
    isActive: {
      type: Boolean,
      default: true,
    },

    discount:{
        type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Banner", bannerSchema);
