import { NextResponse } from 'next/server';
import { createUser } from '@/lib/db';

export async function POST(req: Request) {
    const body = await req.json();
    const { username, password, email } = body;

    if (!username || !password || !email) {
        return NextResponse.json({ message: 'Missing fields' }, { status: 400 });
    }

    try {
        const user = await createUser({ username, password, email });
        return NextResponse.json({ message: 'User registered successfully', user }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ message: 'Error registering user', error }, { status: 500 });
    }
}