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

const list = [
  {
    company: "Western Union",
    title: "Senior Frontend Developer",
    dates: "May 2024 - Present",
    bullets: [
      "Lead, tested, engineered, and delivered bug proof, front page, features for a production app with 10,000 individual users.",
      "Helped increase sprint velocity by 180% during the critical market launch phase of our production app",
      "Had a leading role in reducing number of newly created defects each month by 300% by end of 2025",
    ],
    tags: ["React", "JS", "HTML", "CSS"],
  },
  {
    company: "Adam's Web Consulting",
    title: "Lead Frontend Developer",
    dates: "January 2023 - Present",
    bullets: [
      "Redesigned and rebuilt the entire website of a highly trafficked business, migrating from Wordpress to Webflow, with added use of Javascript, HTML, CSS, and JQuery for seamless user experiences.",
      "Implemented FB and Google Ad tracking software to improve business performance and metrics, resulting in 100% increase in tracking of conversions, placements, cost of ads, and traffic.",
      "Designed a component library, rebuilt and redesigned navigation, pages, and flows, and overhauled eCommerce functionality. Oversaw and directed a 100% increase in customer engagement.",
      "Built a relationship with the client to navigate project goals, budgeting, deadlines, and delivery",
    ],
    tags: ["React", "JS", "HTML", "CSS"],
  },
  {
    company: "MinuteKey",
    title: "Lead Frontend Developer",
    dates: "Sep 2020 - July 2021",
    bullets: [
      "Led the frontend Vue and GraphQL development for a high trafficked consumer facing web page.",
      "Developed, designed, tested, and fine-tuned a JavaScript/OpenGL animation for the primary interface of a nationwide kiosk, reaching an audience of over 10 million customers on a daily basis.",
    ],
    tags: ["Vue.JS", "Nuxt", "GraphQL", "GSAP", "JS", "HTML", "CSS"],
  },
  {
    company: "Flytedesk",
    title: "Frontend Developer",
    dates: "March 2019 - March 2020",
    bullets: [
      "Sought Vue, Laravel, and SQL mentorship from senior engineers to enhance fullstack capabilities within first 6 months of employment.",
      "Appointed the responsibility and tasks of Senior Engineers during critical projects, building fullstack Vue, Laravel, GraphQL features involving customers purchasing, selling, billing, and checking out.",
      "Solved technically challenging, end-to-end, high impact, business problems with complex SQL queries, long GraphQL mutations, responsive FE Vue updates, and middle layer JS calculations.",
    ],
    tags: ["Vue.JS", "GraphQL", "PHP", "Laravel", "SQL", "GitLab", "Docker"],
  },
  {
    company: "Flex",
    title: "Lead Frontend Developer",
    dates: "May 2018 - March 2019",
    bullets: [
      "Led the development of an intricate React Native onboarding flow, resulting in over a 50% increase in signups and product usage. Used GraphQl, Javascript, and CSS to create business critical features.",
      "Collaborated with Co-Founders to provide end-to-end delivery of projects, from planning, brainstorming, design, building, testing, and shipping, to measuring results and receiving internal stakeholder feedback on KPIs and Sprint planning tactics.",
    ],
    tags: ["React", "React Native", "GraphQL"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-16">
      <div className="flex items-center gap-3 mb-8">
        <div className="text-green-600 text-2xl">
          <ClockCircleOutlined />
        </div>
        <Title level={2} style={{ margin: 0, color: "#2e7d32" }}>
          MY EXPERIENCE
        </Title>
      </div>

      {list.map((el) => (
        <div key={el.dates} className="bg-white p-6 rounded-lg shadow-sm mb-6">
          <Text className="text-gray-500">{el.company}</Text>
          <Title
            level={3}
            className="text-3xl font-bold text-gray-700 mt-1 mb-2"
          >
            {el.title}
          </Title>
          <Text className="text-gray-500 block mb-4">{el.dates}</Text>
          {el.bullets.map((b) => (
            <Paragraph key={b} className="text-gray-600">
              {b}
            </Paragraph>
          ))}

          <div className="flex flex-wrap gap-2 mt-4">
            {el.tags.map((t) => (
              <Tag key={t + el.dates} color="green">
                {t}
              </Tag>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
