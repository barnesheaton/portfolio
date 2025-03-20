import React from "react";

import Image from "next/image";
import Link from "next/link";
import { Button, Typography, Tag, Avatar } from "antd";
import {
  GithubOutlined,
  ArrowRightOutlined,
  AppstoreOutlined,
} from "@ant-design/icons";

const { Title, Text, Paragraph } = Typography;

export default function Projects({}) {
  const projects = [
    {
      title: "Yogi Hari's Ashram",
      description:
        "Architected and designed the full website for www.yogihari.com using WebFlow, building a responsive and visually dynamic platform. Developed custom interactions and optimized the user experience across all devices, ensuring a seamless and intuitive interface. Managed the deployment and ongoing optimization of the site, delivering a high-performance, professional web presence for the Yogi Hari brand.",
      video:
        "https://namcjg6m8ca5vafn.public.blob.vercel-storage.com/yogi-hari-compressed-fAGQpZPj5KZHgspK9G58wL2sZ3ENwf.mov",
      link: "https://www.yogihari.com",
      tags: ["WebFlow", "Javascript", "HTML", "CSS"],
    },
    {
      title: "Recipe Reserves",
      description:
        "A fully static Nuxt.js site hosted on Netlify, with AI generated recipes and API seeded images.",
      video:
        "https://namcjg6m8ca5vafn.public.blob.vercel-storage.com/recipe-reserves-35A8v0fPvrUKLUoVSB4RL2sOME8ia4.mov",
      github: "https://github.com/barnesheaton/recipes",
      link: "https://www.recipereserves.com/",
      tags: ["Vue.JS 3", "Nuxt3", "Javascript", "HTML", "CSS"],
    },
    {
      title: "Quick Tag Kiosk",
      description:
        "Developed a nationwide Quick Tag Kiosk landing screen using Vue.js, GSAP, and CSS. Optimized animations using GSAP to ensure smooth performance on the kiosk hardware, minimizing CPU usage and enhancing responsiveness for a seamless user experience",
      tags: ["Vue.JS", "GSAP", "Javascript", "HTML", "CSS"],
    },
    {
      title: "Stock Market AI Tool",
      description:
        "Architected a fullstack Python application using HMMs to forecast stock market prices. Created a Redis Queue for background Tasks, a PostgreSQL database for stock data, a frontend UI built with the Flask framework, all hosted on Heroku",
      video:
        "https://namcjg6m8ca5vafn.public.blob.vercel-storage.com/ai-stock-tool-lEUSgGCDUcuH1LvPk4QEUvEt3LLVQz.mov",
      github: "https://github.com/barnesheaton/cleo-stock",
      tags: [
        "Python",
        "Flask",
        "Pandas",
        "PostgreSQL",
        "Redis Queue",
        "Heroku",
        "CSS",
      ],
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
                <div className="flex gap-4">
                  {project.link && (
                    <Button
                      target="_blank"
                      href={project.link}
                      type="primary"
                      icon={<ArrowRightOutlined />}
                      style={{
                        background: "#2e7d32",
                        borderColor: "#2e7d32",
                      }}
                    >
                      View Project
                    </Button>
                  )}
                  {project.github && (
                    <Button
                      target="_blank"
                      href={project.github}
                      type="primary"
                      icon={<GithubOutlined />}
                      style={{
                        background: "#2e7d32",
                        borderColor: "#2e7d32",
                      }}
                    >
                      GitHub
                    </Button>
                  )}
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                {project.video && (
                  <video
                    controls
                    loop
                    autoPlay
                    src={project.video}
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
