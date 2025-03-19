"use client";

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

import Projects from "@/app/components/projects";

export default function Home() {
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
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-blue-50">
      {/* Particles/Nature Elements Background */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-10">
        <div className="absolute top-20 left-20 w-8 h-8 rounded-full bg-green-500"></div>
        <div className="absolute top-40 right-40 w-12 h-12 rounded-full bg-green-300"></div>
        <div className="absolute bottom-20 left-1/3 w-10 h-10 rounded-full bg-blue-300"></div>
        <div className="absolute top-1/3 right-20 w-6 h-6 rounded-full bg-yellow-300"></div>
        <div className="absolute bottom-40 right-1/4 w-8 h-8 rounded-full bg-green-400"></div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="text-green-600 text-2xl">
              <EnvironmentOutlined />
            </div>
            <span className="font-bold text-xl text-green-800">NatureDev</span>
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

      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section id="about" className="py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                Software Engineer
              </div>
              <Title
                level={1}
                style={{
                  color: "#2e7d32",
                  fontSize: "3.5rem",
                  lineHeight: 1.2,
                  margin: 0,
                }}
              >
                FRONTEND
                <br />
                <span className="text-gray-700">DEVELOPER</span>
              </Title>
              <Paragraph className="text-lg text-gray-600">
                Hi! I'm <span className="font-bold">Adam</span>. A creative
                Frontend Developer with a passion for building high-performance,
                scalable, and responsive web solutions inspired by nature.
              </Paragraph>
              <div className="flex flex-wrap gap-4">
                <Button
                  type="primary"
                  size="large"
                  style={{
                    background: "#2e7d32",
                    borderColor: "#2e7d32",
                    height: "48px",
                    paddingLeft: "24px",
                    paddingRight: "24px",
                    fontSize: "16px",
                  }}
                >
                  HIRE ME
                </Button>
                <Button
                  size="large"
                  style={{
                    borderColor: "#2e7d32",
                    color: "#2e7d32",
                    height: "48px",
                    paddingLeft: "24px",
                    paddingRight: "24px",
                    fontSize: "16px",
                  }}
                >
                  Download CV
                </Button>
              </div>
            </div>
            <div className="flex justify-center md:justify-end">
              <div className="relative">
                <div className="absolute -z-10 w-72 h-72 rounded-full bg-green-200 -top-6 -right-6"></div>
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Developer"
                  width={400}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mt-16 max-w-3xl">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600">6+</div>
              <div className="text-gray-600">Years of Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600">12+</div>
              <div className="text-gray-600">Completed Projects</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600">8K+</div>
              <div className="text-gray-600">Hours Worked</div>
            </div>
          </div>
        </section>

        {/* My Stack Section */}
        <section id="stack" className="py-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="text-green-600 text-2xl">
              <CodeOutlined />
            </div>
            <Title level={2} style={{ margin: 0, color: "#2e7d32" }}>
              MY STACK
            </Title>
          </div>

          <div className="space-y-12">
            <div>
              <Title
                level={3}
                className="text-4xl font-bold text-gray-700 mb-8"
              >
                FRONTEND
              </Title>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {[
                  {
                    name: "JavaScript",
                    icon: "/placeholder.svg?height=60&width=60",
                  },
                  {
                    name: "React",
                    icon: "/placeholder.svg?height=60&width=60",
                  },
                  {
                    name: "Next.js",
                    icon: "/placeholder.svg?height=60&width=60",
                  },
                  {
                    name: "Tailwind CSS",
                    icon: "/placeholder.svg?height=60&width=60",
                  },
                  {
                    name: "Redux",
                    icon: "/placeholder.svg?height=60&width=60",
                  },
                  {
                    name: "TypeScript",
                    icon: "/placeholder.svg?height=60&width=60",
                  },
                  { name: "SASS", icon: "/placeholder.svg?height=60&width=60" },
                  { name: "GSAP", icon: "/placeholder.svg?height=60&width=60" },
                  {
                    name: "Framer Motion",
                    icon: "/placeholder.svg?height=60&width=60",
                  },
                  {
                    name: "Bootstrap",
                    icon: "/placeholder.svg?height=60&width=60",
                  },
                ].map((tech, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm"
                  >
                    <Image
                      src={tech.icon || "/placeholder.svg"}
                      alt={tech.name}
                      width={60}
                      height={60}
                      className="rounded"
                    />
                    <span className="font-medium">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <Title
                level={3}
                className="text-4xl font-bold text-gray-700 mb-8"
              >
                BACKEND
              </Title>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {[
                  {
                    name: "Node.js",
                    icon: "/placeholder.svg?height=60&width=60",
                  },
                  {
                    name: "Express",
                    icon: "/placeholder.svg?height=60&width=60",
                  },
                  {
                    name: "MongoDB",
                    icon: "/placeholder.svg?height=60&width=60",
                  },
                  {
                    name: "Firebase",
                    icon: "/placeholder.svg?height=60&width=60",
                  },
                  {
                    name: "PostgreSQL",
                    icon: "/placeholder.svg?height=60&width=60",
                  },
                ].map((tech, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm"
                  >
                    <Image
                      src={tech.icon || "/placeholder.svg"}
                      alt={tech.name}
                      width={60}
                      height={60}
                      className="rounded"
                    />
                    <span className="font-medium">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="text-green-600 text-2xl">
              <ClockCircleOutlined />
            </div>
            <Title level={2} style={{ margin: 0, color: "#2e7d32" }}>
              MY EXPERIENCE
            </Title>
          </div>

          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <Text className="text-gray-500">NatureWeb Inc</Text>
              <Title
                level={3}
                className="text-3xl font-bold text-gray-700 mt-1 mb-2"
              >
                Senior Frontend Developer
              </Title>
              <Text className="text-gray-500 block mb-4">
                Jan 2023 - Present
              </Text>
              <Paragraph className="text-gray-600">
                Led the development of responsive web applications using React,
                Next.js, and Tailwind CSS. Implemented state management
                solutions with Redux and Context API. Collaborated with
                designers to create intuitive user interfaces and experiences.
              </Paragraph>
              <div className="flex flex-wrap gap-2 mt-4">
                <Tag color="green">React</Tag>
                <Tag color="green">Next.js</Tag>
                <Tag color="green">Tailwind CSS</Tag>
                <Tag color="green">Redux</Tag>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <Text className="text-gray-500">EcoTech Solutions</Text>
              <Title
                level={3}
                className="text-3xl font-bold text-gray-700 mt-1 mb-2"
              >
                Frontend Developer
              </Title>
              <Text className="text-gray-500 block mb-4">
                Mar 2021 - Dec 2022
              </Text>
              <Paragraph className="text-gray-600">
                Developed and maintained web applications for environmental
                monitoring systems. Worked with React, JavaScript, and CSS to
                create responsive interfaces. Collaborated with backend
                developers to integrate APIs and optimize performance.
              </Paragraph>
              <div className="flex flex-wrap gap-2 mt-4">
                <Tag color="green">JavaScript</Tag>
                <Tag color="green">React</Tag>
                <Tag color="green">CSS</Tag>
                <Tag color="green">REST API</Tag>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <Text className="text-gray-500">GreenStart</Text>
              <Title
                level={3}
                className="text-3xl font-bold text-gray-700 mt-1 mb-2"
              >
                Junior Web Developer
              </Title>
              <Text className="text-gray-500 block mb-4">
                Jun 2020 - Feb 2021
              </Text>
              <Paragraph className="text-gray-600">
                Assisted in the development of websites for eco-friendly
                startups. Created responsive layouts using HTML, CSS, and
                JavaScript. Learned and implemented modern frontend frameworks
                and libraries.
              </Paragraph>
              <div className="flex flex-wrap gap-2 mt-4">
                <Tag color="green">HTML</Tag>
                <Tag color="green">CSS</Tag>
                <Tag color="green">JavaScript</Tag>
                <Tag color="green">jQuery</Tag>
              </div>
            </div>
          </div>
        </section>

        <Projects />

        {/* Contact Section */}
        <section id="contact" className="py-16">
          <div className="bg-white rounded-lg shadow-md p-8">
            <Title level={2} style={{ color: "#2e7d32", textAlign: "center" }}>
              Get In Touch
            </Title>
            <Paragraph className="text-center text-gray-600 mb-8">
              Interested in working together? Feel free to reach out!
            </Paragraph>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Avatar
                    size={64}
                    style={{ backgroundColor: "#e8f5e9", color: "#2e7d32" }}
                    icon={<MailOutlined />}
                  />
                  <div>
                    <Text className="text-gray-500 block">Email</Text>
                    <Text className="text-lg font-medium">
                      hello@naturedev.com
                    </Text>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Avatar
                    size={64}
                    style={{ backgroundColor: "#e8f5e9", color: "#2e7d32" }}
                    icon={<EnvironmentOutlined />}
                  />
                  <div>
                    <Text className="text-gray-500 block">Location</Text>
                    <Text className="text-lg font-medium">
                      Portland, Oregon
                    </Text>
                  </div>
                </div>

                <div className="flex gap-4 mt-8">
                  <Button
                    type="primary"
                    shape="circle"
                    icon={<GithubOutlined />}
                    size="large"
                    style={{
                      background: "#2e7d32",
                      borderColor: "#2e7d32",
                    }}
                  />
                  <Button
                    type="primary"
                    shape="circle"
                    icon={<LinkedinOutlined />}
                    size="large"
                    style={{
                      background: "#2e7d32",
                      borderColor: "#2e7d32",
                    }}
                  />
                  <Button
                    type="primary"
                    shape="circle"
                    icon={<MailOutlined />}
                    size="large"
                    style={{
                      background: "#2e7d32",
                      borderColor: "#2e7d32",
                    }}
                  />
                </div>
              </div>

              <form className="space-y-4">
                <div>
                  <label className="block text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Your email"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Message</label>
                  <textarea
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    rows="4"
                    placeholder="Your message"
                  ></textarea>
                </div>
                <Button
                  type="primary"
                  size="large"
                  block
                  style={{
                    background: "#2e7d32",
                    borderColor: "#2e7d32",
                    height: "48px",
                  }}
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-green-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <div className="text-white text-2xl">
                <EnvironmentOutlined />
              </div>
              <span className="font-bold text-xl">NatureDev</span>
            </div>

            <div className="text-center md:text-right">
              <p>© {new Date().getFullYear()} All rights reserved.</p>
              <p className="text-green-300">
                Designed & Built with 💚 for Nature
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
