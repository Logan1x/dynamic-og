import { ImageResponse } from "next/og";
import { PreviewImage } from "@/components/PreviewImage";

// Route segment config
export const runtime = "edge";

// Image metadata
export const alt = "About Acme";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

// Image generation
export default async function Image({ params }) {
  return new ImageResponse(<PreviewImage name={params.name} />);
}
