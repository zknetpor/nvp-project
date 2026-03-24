// login endpoint for authentication
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    const body = await request.json();
    const { username, password } = body;

    // Here you would add your authentication logic, such as checking a database
    // For example purposes, let's assume a simple check:
    if (username === 'admin' && password === 'password') {
        return NextResponse.json({ message: 'Login successful' });
    }

    return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 });
}