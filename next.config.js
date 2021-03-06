/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: [
      'cdn.discordapp.com',
      'discord.com',
    ]
  },
  experimental: {
    outputStandalone: true,
  }
}
