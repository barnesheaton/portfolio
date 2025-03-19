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
  const projects = [
    {
      title: "Yogi Hari's Ashram",
      description:
        "A comprehensive application for tracking environmental metrics and sustainability goals. Features interactive dashboards, data visualization, and user-friendly interface.",
      video:
        "https://namcjg6m8ca5vafn.public.blob.vercel-storage.com/yogi-hari-compressed-fAGQpZPj5KZHgspK9G58wL2sZ3ENwf.mov",
      link: "test",
      tags: ["WebFlow", "Javascript", "HTML", "CSS"],
    },
  ];

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
        {projects.map((project) => (
          <div key={project.title}>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="text-sm text-gray-500 mb-2">_01</div>
                <Title
                  level={3}
                  className="text-5xl font-bold text-gray-700 mb-4"
                >
                  {project.title}
                </Title>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((t) => (
                    <Tag key={t} color="green">
                      {t}
                    </Tag>
                  ))}
                </div>

                <Paragraph className="text-gray-600 mb-4">
                  {project.description}
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
                {project.video && (
                  <video
                    controls
                    loop
                    autoPlay
                    src="https://namcjg6m8ca5vafn.public.blob.vercel-storage.com/yogi-hari-compressed-fAGQpZPj5KZHgspK9G58wL2sZ3ENwf.mov"
                    width="100%"
                    height="100%"
                  />
                )}
                {project.img && (
                  <Image
                    src="/placeholder.svg?height=300&width=500"
                    alt="NatureConnect Project"
                    width={500}
                    height={300}
                    className="rounded-lg"
                  />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
