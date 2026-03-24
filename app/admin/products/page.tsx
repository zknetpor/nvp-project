import React from 'react';
import { useEffect, useState } from 'react';

const AdminProductsPage = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Fetch products from an API or context
        const fetchProducts = async () => {
            // Simulation of an API call
            const response = await fetch('/api/products');
            const data = await response.json();
            setProducts(data);
        };

        fetchProducts();
    }, []);

    return (
        <div>
            <h1>Admin Products Management</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr key={product.id}>
                            <td>{product.id}</td>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td>
                                <button>Edit</button>
                                <button>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AdminProductsPage;