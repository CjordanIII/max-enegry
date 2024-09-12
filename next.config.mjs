/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.(svg)$/,
      use: [
        {
          loader: "svg-url-loader",
          options: { limit: 10000 },
        },
      ],
    });

    return config;
  },
};

export default nextConfig;

// webpackDevMiddleware: config => {
//   config.watchOptions = {
//     poll: 800,
//     aggregateTimeout: 300,
//   }
//   return config
// },
