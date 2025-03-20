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

import Projects from "@/app/components/projects";
import Header from "@/app/components/header";
import Hero from "@/app/components/hero";
import Stack from "@/app/components/stack";
import Experience from "@/app/components/experience";
import Contact from "@/app/components/contact";

export default function Home() {
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
      <Header />

      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <Hero />

        {/* My Stack Section */}
        <Stack />

        {/* Experience Section */}
        <Experience />

        {/* Projects Section */}
        <Projects />

        {/* Contact Section */}
        <Contact />
      </main>

      <footer className="bg-green-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <div className="text-white text-2xl">
                <EnvironmentOutlined />
              </div>
              <span className="font-bold text-xl">Adam Heaton</span>
            </div>

            <div className="text-center md:text-right">
              <p>© {new Date().getFullYear()} All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
