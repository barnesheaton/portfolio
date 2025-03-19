import { useState, useEffect } from "react";

import Image from "next/image";
import Link from "next/link";
import { Button, Typography, Tag, Avatar } from "antd";
import { CodeOutlined } from "@ant-design/icons";

const { Title, Text, Paragraph } = Typography;

import {
  ReactOriginal,
  VuejsOriginal,
  JavascriptOriginal,
  Html5OriginalWordmark,
  NextjsPlain,
  TailwindcssOriginal,
  TypescriptOriginal,
  GraphqlPlain,
  PhpPlain,
  PandasOriginal,
  PythonOriginal,
  NodejsOriginalWordmark,
  MongodbOriginal,
  PostgresqlOriginal,
} from "devicons-react";

export default function Stack() {
  return (
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
          <Title level={3} className="text-4xl font-bold text-gray-700 mb-8">
            FRONTEND
          </Title>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              {
                name: "React",
                icon: <ReactOriginal size={40} />,
              },
              {
                name: "Vue.JS",
                icon: <VuejsOriginal size={40} />,
              },
              {
                name: "JavaScript",
                icon: <JavascriptOriginal size={40} />,
              },
              {
                name: "HTML",
                icon: <Html5OriginalWordmark size={40} />,
              },

              {
                name: "Next.js",
                icon: <NextjsPlain size={40} />,
              },
              {
                name: "Tailwind CSS",
                icon: <TailwindcssOriginal size={40} />,
              },

              {
                name: "TypeScript",
                icon: <TypescriptOriginal size={40} />,
              },
              { name: "GSAP Animations", icon: <></> },
            ].map((tech, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm"
              >
                {tech.icon}
                <span className="font-medium">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <Title level={3} className="text-4xl font-bold text-gray-700 mb-8">
            BACKEND
          </Title>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              {
                name: "GraphQL",
                icon: <GraphqlPlain size={40} />,
              },
              {
                name: "PHP",
                icon: <PhpPlain size={40} />,
              },
              {
                name: "Python",
                icon: <PythonOriginal size={40} />,
              },
              {
                name: "Pandas",
                icon: <PandasOriginal size={40} />,
              },
              {
                name: "Node.JS",
                icon: <NodejsOriginalWordmark size={40} />,
              },
              {
                name: "MongoDB",
                icon: <MongodbOriginal size={40} />,
              },
              {
                name: "PostgreSQL",
                icon: <PostgresqlOriginal size={40} />,
              },
            ].map((tech, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm"
              >
                {tech.icon}
                <span className="font-medium">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
