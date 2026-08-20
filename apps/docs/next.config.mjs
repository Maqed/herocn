import { createMDX } from "fumadocs-mdx/next";

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
	serverExternalPackages: ["@takumi-rs/core"],
	output: "export",
	reactStrictMode: true,
};

export default withMDX(config);
