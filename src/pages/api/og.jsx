import { ImageResponse } from "next/og";
import { PreviewImage } from "../../components/PreviewImage";

export const config = {
  runtime: "edge",
};

const handler = async (req) => {
  try {
    const { searchParams } = new URL(req.url);

    const hasTitle = searchParams.has("name");
    const name = hasTitle ? searchParams.get("name") : undefined;

    return new ImageResponse(<PreviewImage name={name} />);
  } catch (e) {
    console.error(e);
    return new Response(e.message, { status: 500 });
  }
};

export default handler;
