const { Schema , mongoose } = require('mongoose');

const ProductSchema = new Schema(
    {
      productName: {
        type: String,
        required: [true, "Name is required"],
      },
      productCode: {
        type: String,
        required: [true, "code is required"],
      },
      img: {
        type: String,
        required: [true, "img is required"],
      },
      unitPrice: {
        type: String,
        required: [true, "unit price is required"],
      },
      quantity: {
        type: String,
        required: [true, "quantity is required"],
      },
      totalPrice: {
        type: String,
        required: [true, "total price is required"],
      },
    },
    {
      versionKey: false,
      timestamps: true,
    }
  );

const ProductModel = mongoose.model("products", ProductSchema);

module.exports = ProductModel;