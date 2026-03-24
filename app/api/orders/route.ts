import { NextResponse } from 'next/server';

// Mock database for storing orders
let orders = [];

// Create an order
export async function POST(request) {
    const order = await request.json();
    orders.push(order);
    return NextResponse.json(order, { status: 201 });
}

// Get all orders
export async function GET() {
    return NextResponse.json(orders);
}