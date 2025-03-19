import { useState, useEffect } from "react";

import Image from "next/image";
import Link from "next/link";
import { Button, Typography, Tag, Avatar } from "antd";
import {
  GithubOutlined,
  LinkedinOutlined,
  MailOutlined,
  MenuOutlined,
  ArrowRightOutlined,
  EnvironmentOutlined,
  CodeOutlined,
  AppstoreOutlined,
  ClockCircleOutlined,
} from "@ant-design/icons";

const { Title, Text, Paragraph } = Typography;

export default function Header() {
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="text-green-600 text-2xl">
            <EnvironmentOutlined />
          </div>
          <span className="font-bold text-xl text-green-800">ABHDev</span>
        </div>

        {isMobile ? (
          <button onClick={toggleMenu} className="text-green-800 p-2">
            <MenuOutlined style={{ fontSize: "24px" }} />
          </button>
        ) : (
          <nav className="flex items-center gap-8">
            <Link
              href="#about"
              className="text-green-800 hover:text-green-600 transition-colors"
            >
              About
            </Link>
            <Link
              href="#stack"
              className="text-green-800 hover:text-green-600 transition-colors"
            >
              My Stack
            </Link>
            <Link
              href="#experience"
              className="text-green-800 hover:text-green-600 transition-colors"
            >
              Experience
            </Link>
            <Link
              href="#projects"
              className="text-green-800 hover:text-green-600 transition-colors"
            >
              Projects
            </Link>
            <Link
              href="#contact"
              className="text-green-800 hover:text-green-600 transition-colors"
            >
              Contact
            </Link>
            <Button
              type="primary"
              size="large"
              style={{
                background: "#2e7d32",
                borderColor: "#2e7d32",
                boxShadow: "0 2px 0 rgba(0, 0, 0, 0.045)",
              }}
            >
              Hire Me
            </Button>
          </nav>
        )}
      </div>

      {/* Mobile Menu */}
      {isMobile && menuOpen && (
        <div className="bg-white shadow-md py-4 px-6 absolute w-full">
          <nav className="flex flex-col gap-4">
            <Link
              href="#about"
              className="text-green-800 hover:text-green-600 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="#stack"
              className="text-green-800 hover:text-green-600 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              My Stack
            </Link>
            <Link
              href="#experience"
              className="text-green-800 hover:text-green-600 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Experience
            </Link>
            <Link
              href="#projects"
              className="text-green-800 hover:text-green-600 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Projects
            </Link>
            <Link
              href="#contact"
              className="text-green-800 hover:text-green-600 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>
            <Button
              type="primary"
              style={{
                background: "#2e7d32",
                borderColor: "#2e7d32",
                boxShadow: "0 2px 0 rgba(0, 0, 0, 0.045)",
              }}
            >
              Hire Me
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
