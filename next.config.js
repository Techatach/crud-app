/** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     domains: ["fastly.picsum.photos", "alupkame.info"],
//   },
// };
// export default nextConfig;

//Install PWA
const withPWA = require("next-pwa")({
  dest: "public",
});
const nextConfig = {
  images: {
    domains: ["fastly.picsum.photos", "alupkame.info"],
  },
};

module.exports = withPWA(nextConfig);
