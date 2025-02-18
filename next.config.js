/** @type {import('next').NextConfig} */
const nextConfig = {

    images: {
        domains: ['res.cloudinary.com'], 
      },
}
    images:{
        remotePatterns:[
          {
            protocol:"http",
            hostname:"res.cloudinary.com",
          }
        ]
      }
};

module.exports = nextConfig