import { NextResponse } from 'next/server';

// Dummy product data
let products = [{ id: 1, name: 'Product A' }, { id: 2, name: 'Product B' }];

// GET: Retrieve a product by id
export async function GET(request, { params }) {
    const { id } = params;
    const product = products.find(p => p.id === parseInt(id));
    if (product) {
        return NextResponse.json(product);
    }
    return NextResponse.json({ message: 'Product not found' }, { status: 404 });
}

// PUT: Update a product by id
export async function PUT(request, { params }) {
    const { id } = params;
    const productIndex = products.findIndex(p => p.id === parseInt(id));
    const updatedData = await request.json();
    if (productIndex >= 0) {
        products[productIndex] = { ...products[productIndex], ...updatedData };
        return NextResponse.json(products[productIndex]);
    }
    return NextResponse.json({ message: 'Product not found' }, { status: 404 });
}

// DELETE: Delete a product by id
export async function DELETE(request, { params }) {
    const { id } = params;
    const productIndex = products.findIndex(p => p.id === parseInt(id));
    if (productIndex >= 0) {
        products.splice(productIndex, 1);
        return NextResponse.json({ message: 'Product deleted' });
    }
    return NextResponse.json({ message: 'Product not found' }, { status: 404 });
}
