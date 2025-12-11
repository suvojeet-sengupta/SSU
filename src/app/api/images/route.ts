import { NextResponse } from 'next/server';

export const runtime = 'edge';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const tag = searchParams.get('tag');

    if (!tag) {
        return NextResponse.json({ error: 'Tag is required' }, { status: 400 });
    }

    const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
    const apiKey = process.env.CLOUDINARY_API_KEY;
    const apiSecret = process.env.CLOUDINARY_API_SECRET;

    if (!cloudName || !apiKey || !apiSecret) {
        console.error('Missing Cloudinary credentials in API route');
        return NextResponse.json({ error: 'Server configuration error' }, { status: 500 });
    }

    const url = `https://api.cloudinary.com/v1_1/${cloudName}/resources/search`;

    // Basic Auth header for Cloudinary API
    const auth = btoa(`${apiKey}:${apiSecret}`);

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Authorization': `Basic ${auth}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                expression: `tags=${tag}`,
                sort_by: [{ created_at: 'desc' }],
                max_results: 30
            }),
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error('Cloudinary API Error:', errorText);
            return NextResponse.json({ error: 'Failed to fetch images' }, { status: response.status });
        }

        const data = await response.json();
        return NextResponse.json(data.resources || []);

    } catch (error) {
        console.error('API Route Error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
