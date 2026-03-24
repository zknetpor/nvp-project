import { NextResponse } from 'next/server';

let products = []; // Temporary in-memory storage

// GET endpoint to fetch all products
export async function GET() {
    return NextResponse.json(products);
}

// POST endpoint to create a new product
export async function POST(request: Request) {
    const newProduct = await request.json();
    products.push(newProduct);
    return NextResponse.json(newProduct, { status: 201 });
}