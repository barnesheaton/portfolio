import React from "react";

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

export default function Projects({}) {
  return (
    <section id="projects" className="py-16">
      <div className="flex items-center gap-3 mb-8">
        <div className="text-green-600 text-2xl">
          <AppstoreOutlined />
        </div>
        <Title level={2} style={{ margin: 0, color: "#2e7d32" }}>
          PROJECTS
        </Title>
      </div>

      <div className="space-y-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="text-sm text-gray-500 mb-2">_01</div>
            <Title level={3} className="text-5xl font-bold text-gray-700 mb-4">
              YogiHari.com
            </Title>
            <div className="flex flex-wrap gap-2 mb-4">
              <Tag color="green">React</Tag>
              <Tag color="green">Redux</Tag>
              <Tag color="green">Node.js</Tag>
            </div>
            <Paragraph className="text-gray-600 mb-4">
              A comprehensive application for tracking environmental metrics and
              sustainability goals. Features interactive dashboards, data
              visualization, and progress tracking.
            </Paragraph>
            <Button
              type="primary"
              icon={<ArrowRightOutlined />}
              style={{
                background: "#2e7d32",
                borderColor: "#2e7d32",
              }}
            >
              View Project
            </Button>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <Image
              src="/placeholder.svg?height=300&width=500"
              alt="EcoTracker Project"
              width={500}
              height={300}
              className="rounded-lg"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="text-sm text-gray-500 mb-2">_02</div>
            <Title level={3} className="text-5xl font-bold text-gray-700 mb-4">
              NatureConnect
            </Title>
            <div className="flex flex-wrap gap-2 mb-4">
              <Tag color="green">Next.js</Tag>
              <Tag color="green">Tailwind CSS</Tag>
              <Tag color="green">MongoDB</Tag>
            </div>
            <Paragraph className="text-gray-600 mb-4">
              A social platform connecting outdoor enthusiasts and nature
              lovers. Users can share experiences, find trails, and organize
              events.
            </Paragraph>
            <Button
              type="primary"
              icon={<ArrowRightOutlined />}
              style={{
                background: "#2e7d32",
                borderColor: "#2e7d32",
              }}
            >
              View Project
            </Button>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <Image
              src="/placeholder.svg?height=300&width=500"
              alt="NatureConnect Project"
              width={500}
              height={300}
              className="rounded-lg"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="text-sm text-gray-500 mb-2">_03</div>
            <Title level={3} className="text-5xl font-bold text-gray-700 mb-4">
              GreenCommerce
            </Title>
            <div className="flex flex-wrap gap-2 mb-4">
              <Tag color="green">React</Tag>
              <Tag color="green">Node.js</Tag>
              <Tag color="green">PostgreSQL</Tag>
            </div>
            <Paragraph className="text-gray-600 mb-4">
              An e-commerce platform for eco-friendly and sustainable products.
              Features include product listings, user authentication, and secure
              checkout.
            </Paragraph>
            <Button
              type="primary"
              icon={<ArrowRightOutlined />}
              style={{
                background: "#2e7d32",
                borderColor: "#2e7d32",
              }}
            >
              View Project
            </Button>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <Image
              src="/placeholder.svg?height=300&width=500"
              alt="GreenCommerce Project"
              width={500}
              height={300}
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
