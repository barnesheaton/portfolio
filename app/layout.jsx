import "./globals.css";
import { Inter } from "next/font/google";
import { ConfigProvider } from "antd";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Adam Heaton - Software Engineering Portfolio",
  description: "A software engineering portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: "#2e7d32",
              borderRadius: 6,
            },
          }}
        >
          {children}
        </ConfigProvider>
      </body>
    </html>
  );
}
