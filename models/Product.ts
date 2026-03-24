import mongoose, { Schema, Document } from 'mongoose';

// Define the Product interface
export interface IProduct extends Document {
    name: string;
    price: number;
    description: string;
    stock: number;
    category: string;
    createdAt: Date;
    updatedAt: Date;
}

// Create the Product schema
const ProductSchema: Schema = new Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    stock: { type: Number, required: true },
    category: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

// Update the updatedAt field on every save
ProductSchema.pre('save', function(this: IProduct, next) {
    this.updatedAt = new Date();
    next();
});

// Create the Product model
const Product = mongoose.model<IProduct>('Product', ProductSchema);

export default Product;