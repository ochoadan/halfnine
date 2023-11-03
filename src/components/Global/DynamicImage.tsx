// DynamicImage.tsx 

import dynamic from 'next/dynamic';

// Create a dynamic version of the Image component
const DynamicImage = dynamic(
  () => import('next/image'), 
  { 
    loading: () => <p>Loading image...</p>, 
    ssr: false  // Ensures it only loads on the client side 
  }
);

export default DynamicImage;