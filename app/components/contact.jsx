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

export default function Contact() {
  return (
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
                <Text className="text-lg font-medium">hello@naturedev.com</Text>
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
                <Text className="text-lg font-medium">Portland, Oregon</Text>
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
  );
}
