import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

export async function GET() {
	return new NextResponse(JSON.stringify({ status: 'ok' }), {
		status: 200,
		headers: {
			'Content-Type': 'application/json',
		},
	});
}
