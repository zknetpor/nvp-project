import React from 'react';
import { ProductCard } from '../components/ProductCard';
import { products } from '../data/products';

const ShopListingPage = () => {
    return (
        <div>
            <h1>Shop Listing</h1>
            <div className="product-list">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default ShopListingPage;