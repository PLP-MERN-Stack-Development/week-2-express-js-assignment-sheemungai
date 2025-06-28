const validateProduct = (req, res, next) => {
  const { name, description, price, category, inStock } = req.body;
  if (!name || !description || typeof price !== 'number' || !category || typeof inStock !== 'boolean') {
    return res.status(400).json({ message: 'Validation failed: Invalid product data' });
  }
  next();
};
module.exports = validateProduct;
