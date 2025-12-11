'use client';

import { CldImage, CldImageProps } from 'next-cloudinary';

// Simple wrapper component for Cloudinary Images
// You can customize default props here if needed
const CloudinaryImage = (props: CldImageProps) => {
    return (
        <CldImage
            {...props}
            // Default quality and format for optimization
            quality="auto"
            format="auto"
        />
    );
};

export default CloudinaryImage;
