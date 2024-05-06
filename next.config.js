const path = require('path')
 
module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    domains: ['res.cloudinary.com', 'media.dev.to', 'cdn-images-1.medium.com', 'github-profile-summary-cards.vercel.app', 'github-readme-stats.vercel.app'],
    dangerouslyAllowSVG: true, // Add this line
  }
}
