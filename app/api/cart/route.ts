import { NextResponse } from 'next/server';

let cart = [];

// GET endpoint to retrieve the cart
export async function GET() {
    return NextResponse.json(cart);
}

// POST endpoint to add an item to the cart
export async function POST(request) {
    const body = await request.json();
    cart.push(body);
    return NextResponse.json(cart);
}

// DELETE endpoint to remove an item from the cart
export async function DELETE(request) {
    const body = await request.json();
    cart = cart.filter(item => item.id !== body.id);
    return NextResponse.json(cart);
}