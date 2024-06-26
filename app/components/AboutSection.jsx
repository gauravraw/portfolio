"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Java</li>
        <li>Spring Boot</li>
        <li>MySql</li>
        <li>Data Structures</li>
        <li>Algorithms</li>
        <li>Kafka</li>
        <li>WebSockets</li>
        <li>Grpc</li>
        <li>Redis</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>
          B.Tech (Heritage Institute Of Technology , Kolkata (2020))
          <br />
          C.G.P.A (9.23)
        </li>
      </ul>
    ),
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <ul className="list-disc pl-2">
        <li>Software Development Engineer-2 - Upstox(Rksv) (Current)</li>
        <li>Software Development Engineer-1 - Upstox(Rksv)</li>
        <li>System Engineer - TCS</li>
      </ul>
    ),
  },
];
const AboutSection = () => {
  const [tabState, setTabState] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleChangeTab = (id) => {
    startTransition(() => {
      setTabState(id);
    });
  };
  return (
    <section className="text-white pt-24" id="aboutMe">
      <div className="md:grid  md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16">
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg ">
            I am a backend developer with passion for creating scalable ,
            entensible systems which can be leveraged for solving problems. I
            have experience working with Java , Mysql , Spring Boot , Websockets
            , Rpc and other technologies. I am a quick learner and I am always
            looking to expand my knowledge and skill-set. I am a team player and
            always excited to collaborate with others to build exciting
            applications.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleChangeTab("skills")}
              active={tabState === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleChangeTab("education")}
              active={tabState === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleChangeTab("experience")}
              active={tabState === "experience"}
            >
              {" "}
              Experience{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tabState).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
