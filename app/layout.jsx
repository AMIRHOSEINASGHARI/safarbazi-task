import "./globals.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";

export const metadata = {
  title: "Safarbazi",
  description: "Front-End task for Safarbazi",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AntdRegistry>{children}</AntdRegistry>
      </body>
    </html>
  );
}
