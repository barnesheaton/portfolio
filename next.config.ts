import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true,
    // rules: {
    //   "@typescript-eslint/no-explicit-any": "off",
    //   "no-unused-vars": "warn",
    //   "no-console": "off",
    //   "react/prop-types": "off",
    //   "semi": ["error", "always"],
    //   "quotes": ["error", "single"],
    // },
    // dirs: ['pages', 'utils'], // Only run ESLint on the 'pages' and 'utils' directories during production builds (next build)
  },
};

export default nextConfig;
