import Image from "next/image";
import { Button, Typography, Tag, Avatar } from "antd";
const { Title, Text, Paragraph } = Typography;

import { saveAs } from "file-saver";

export default function Hero() {
  const heroImgSrc =
    "https://namcjg6m8ca5vafn.public.blob.vercel-storage.com/257_m-FPIX-3-00987474-DIGITAL_HIGHRES-3614_120114-426222-oisq9nMdaQc7NyAyoqxvwLjFgNT4xZ.JPG";

  const saveFile = () => {
    saveAs(
      "https://namcjg6m8ca5vafn.public.blob.vercel-storage.com/Adam%20Heaton%20-%20Software%20Engineer%202025%20Resume-2rN1tHPReuU7cP2b1JCwyM45cxMQHn.pdf",
      "Adam Heaton - Software Engineer 2025 Resume.pdf"
    );
  };

  return (
    <section id="about" className="py-16 md:py-24">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-2">
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
            Hi! I'm <span className="font-bold">Adam</span>. A creative Frontend
            Developer with a passion for building high-performance, scalable,
            and responsive web solutions.
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
              onClick={(e) => {
                saveFile();
              }}
            >
              Download Resume
            </Button>
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
              <div className="text-4xl font-bold text-green-600">10K+</div>
              <div className="text-gray-600">Hours Worked</div>
            </div>
          </div>
        </div>
        <div className="flex justify-center md:justify-end">
          <div className="relative">
            <div className="absolute -z-10 w-72 h-72 rounded-full bg-green-200 -top-6 -right-6"></div>
            <Image
              src={heroImgSrc}
              alt="Developer"
              width={400}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
