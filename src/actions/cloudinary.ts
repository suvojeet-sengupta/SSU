'use server';

// Using fetch for Edge Runtime compatibility
// Cloudinary Node SDK uses 'http' module which is not available in Edge
// Docs: https://cloudinary.com/documentation/search_api#search_api_reference

export async function getImagesByTag(tag: string) {
    const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
    const apiKey = process.env.CLOUDINARY_API_KEY;
    const apiSecret = process.env.CLOUDINARY_API_SECRET;

    if (!cloudName || !apiKey || !apiSecret) {
        console.error('Missing Cloudinary credentials');
        return [];
    }

    const url = `https://api.cloudinary.com/v1_1/${cloudName}/resources/search`;

    // Basic Auth header
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
            console.error('Cloudinary Search Error:', response.status, errorText);
            return [];
        }

        const data = await response.json();
        return data.resources || [];
    } catch (error) {
        console.error('Error fetching images:', error);
        return [];
    }
}
