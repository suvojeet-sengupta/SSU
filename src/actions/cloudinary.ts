'use server';

import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
    cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true,
});

export async function getImagesByTag(tag: string) {
    try {
        const result = await cloudinary.search
            .expression(`tags=${tag}`)
            .sort_by('created_at', 'desc')
            .max_results(30)
            .execute();

        return result.resources;
    } catch (error) {
        console.error('Error fetching images:', error);
        return [];
    }
}
