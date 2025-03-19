import { useState, useEffect } from "react";

import { Button, Typography, Tag, Avatar } from "antd";
import {
  GithubOutlined,
  LinkedinOutlined,
  MailOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";

const { Title, Text, Paragraph } = Typography;
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [isSending, setIsSending] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    setIsSending(true);

    e.preventDefault();

    emailjs
      .send(
        "service_whwuofh",
        "template_b0bzpec",
        formData,
        "XK-vSNjhYnx6-7CbF"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" }); // Clear the form
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send message, please try again later.");
        }
      )
      .finally(() => {
        setIsSending(false);
      });
  };

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
                <Text className="text-lg font-medium">
                  barnesheaton@gmail.com
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
                <Text className="text-lg font-medium">Miami, Florida</Text>
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
                disabled={isSending}
                name="name"
                value={formData.name}
                onChange={handleChange}
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Email</label>
              <input
                disabled={isSending}
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="Your email"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Message</label>
              <textarea
                disabled={isSending}
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                rows="4"
                placeholder="Your message"
              ></textarea>
            </div>
            <Button
              loading={isSending}
              onClick={handleSubmit}
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
