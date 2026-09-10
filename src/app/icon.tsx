import { ImageResponse } from "next/og";

export const size = {
  width: 512,
  height: 512,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "#0B0D10",
          color: "#FF6846",
          display: "flex",
          fontFamily: "Arial, sans-serif",
          fontSize: 148,
          fontWeight: 700,
          height: "100%",
          justifyContent: "center",
          width: "100%",
        }}
      >
        AK.
      </div>
    ),
    size,
  );
}