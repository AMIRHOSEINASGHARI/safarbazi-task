// antd
import { ConfigProvider } from "antd";

const AntdesignConfigs = ({ children }) => {
  return (
    <ConfigProvider
      wave={{
        disabled: true,
      }}
      theme={{
        components: {
          Button: {
            algorithm: true,
            colorBgBase: "#1C2767",
            colorText: "#fff",
            defaultHoverBg: "#1C2767",
            colorPrimaryTextHover: "#fff",
            defaultHoverColor: "#fff",
            defaultHoverBorderColor: "#1C2767",
            borderRadius: "10px",
            paddingBlock: "0",
            paddingInline: "0",
            defaultActiveColor: "#fff",
          },
          Table: {
            borderColor: "#E2E2E2",
            cellPaddingBlock: "10px",
            cellPaddingInline: "17px",
          },
          Select: {
            colorText: "#000",
            defaultHoverBg: "#E2E2E2",
            borderRadius: "10px",
            colorBorder: "#E2E2E2",
          },
        },
        token: {
          motion: false,
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
};

export default AntdesignConfigs;
