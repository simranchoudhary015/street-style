const Product = require("../model/Product");


const addProductController = async (req, res) => {
  try {
    const {
      name,
      description,
      category,
      price,
      oldPrice,
      stock,
      discount,
      size,
      rating,
      location,
    } = req.body;

    const image = req.file ? req.file.filename : null;

    const product = await Product.create({
      name,
      description,
      category,
      price,
      oldPrice,
      stock,
      discount,
      size,
      rating,
      location,
      image,
    });

    res.status(200).json({
      msg: "Product added successfully",
      product,
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Server error", error });
  }

};
// const fetchaddProducts = async (req, res) => {
//   try {
//     const addproducts = await Product.find();  
//     return res.status(200).json({
//       msg: "products fetched successfully",
//       addproducts,
//     });
//   } catch (err) {
//     console.error("Fetch products Error:", err);
//     res.status(500).json({ msg: "Server error" });
//   }     
// };
const fetchaddProducts = async (req, res) => {
  try {
    const { category } = req.query;

    // Case-insensitive exact match if category is provided
    const filter = category
      ? { category: { $regex: new RegExp(`^${category}$`, "i") } }
      : {};

    const addproducts = await Product.find(filter);

    return res.status(200).json({
      msg: "Products fetched successfully",
      addproducts,
    });
  } catch (err) {
    console.error("Fetch products Error:", err);
    res.status(500).json({ msg: "Server error" });
  }     
};


const deleteProduct = async (req, res) => {
  try {
    const userId = req.params.id;
    const deletedProduct = await Product.findByIdAndDelete(userId);

    if (!deletedProduct) {
      return res.status(404).send('Product not found');
    }

    res.status(200).send('Product deleted successfully');
  } catch (error) {
    res.status(500).send('Server error');
  }
};



module.exports = { addProductController,fetchaddProducts,deleteProduct};
