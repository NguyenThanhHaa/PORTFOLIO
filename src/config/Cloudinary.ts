import { Cloudinary } from '@cloudinary/url-gen';

const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;

export const cloudinaryConfig = new Cloudinary({
  cloud: {
    cloudName: cloudName
  },
  url: {
    secure: true
  }
});