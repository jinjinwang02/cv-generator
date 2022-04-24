/** @type {import('next').NextConfig} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const withFonts = require('next-fonts');
const nextConfig = {
  reactStrictMode: true,
};

module.exports = withFonts(nextConfig);
