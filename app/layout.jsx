// css
import "./globals.css";
// antd configs
import AntdesignConfigs from "@/configs/AntdesignConfigs";
import { AntdRegistry } from "@ant-design/nextjs-registry";
// fonts
import yekan from "@/utils/fonts";

export const metadata = {
  title: "Safarbazi",
  description: "Front-End task for Safarbazi",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl" className={yekan.variable}>
      <body>
        <AntdRegistry>
          <AntdesignConfigs>{children}</AntdesignConfigs>
        </AntdRegistry>
      </body>
    </html>
  );
}
