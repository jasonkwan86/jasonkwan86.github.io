import Image from "next/image";
import Navbar from "@/components/Navbar/Navbar";
import Portrait from "@/components/Portrait";
import Section from "@/components/Section";
import SectionTitle from "@/components/SectionTitle";
import ProjectTitle from "@/components/Projects/ProjectTitle";
import ProjectDescription from "@/components/Projects/ProjectDescription";
import ProjectText from "@/components/Projects/ProjectText";
import LanguageHighlight from "@/components/Projects/LanguageHighlight";
import CourseHighlight from "@/components/Projects/CourseHighlight";
import ExternalLink from "@/components/Projects/ExternalLink";
import ProjectLink from "@/components/Projects/ProjectLink";
import { append_to_github_url } from "@/types";

export default function Home() {
  return (
    <section id="home">
      <Navbar />
      <div className="p-10 min-h-[93vh] bg-gradient-to-tr from-indigo-400 to-indigo-600 grid place-items-center">
        <Section>
          <div className="max-w-md text-black grid place-items-center">
            <div className=" text-3xl">Hello there! My name is</div>
            <div className="font-extrabold text-6xl">Jason Kwan</div>
            <div>
              <span className="font-semibold text-2xl">
                I&apos;m a final year Computer Science student at Western University.
              </span>
            </div>
          </div>
          <div className="grid place-items-center">
            <Portrait />
          </div>
        </Section>
      </div>

      {/* Projects */}
      <div className="bg-sky-100">
        <SectionTitle id="projects">Projects</SectionTitle>
        <Section>
          <ProjectText>
            <ProjectTitle>Western Nav</ProjectTitle>
            <ProjectDescription>
              Course project for <CourseHighlight>Introduction to Software Engineering</CourseHighlight> written in{" "}
              <LanguageHighlight>Java</LanguageHighlight>. Navigation app that lets users maneuver through buildings,
              floors, and view important landmarks on Western&apos;s campus.
            </ProjectDescription>
            <ProjectLink externalLink={append_to_github_url("/school/tree/main/Year_2/CS 2212/Course Project")} />
          </ProjectText>
          <Image src="./images/projects/WesternNav1.PNG" width={500} height={100} alt="western nav logo" />
        </Section>
        <Section>
          <ProjectText>
            <ProjectTitle>Alexa Clone</ProjectTitle>
            <ProjectDescription>
              Course project for <CourseHighlight>Object Oriented Programming</CourseHighlight> written in{" "}
              <LanguageHighlight>C++</LanguageHighlight>. Nicknamed Chungus Assistant, uses ChatGPT&apos;s api to give
              intelligent responses, taking vocal input and giving audible responses via text-to-speech.
            </ProjectDescription>
            <ProjectLink externalLink={append_to_github_url("/school/tree/main/Year_3/CS3307")} />
          </ProjectText>
          <Image src="./images/projects/alexa.png" width={500} height={500} alt="alexa" />
        </Section>
        <Section>
          <ProjectText>
            <ProjectTitle>Operating Systems Simulator</ProjectTitle>
            <ProjectDescription>
              Final project for <CourseHighlight>Operating Systems</CourseHighlight> written in{" "}
              <LanguageHighlight>C</LanguageHighlight>. Uses Unix multithreading and mutex locks to solve a theoretical
              problem involving transporting passengers on trains between stations.
            </ProjectDescription>
            <ProjectLink
              externalLink={append_to_github_url("/school/blob/main/Year_3/CS3305/Assignment5/assignment-5.c")}
            />
          </ProjectText>
          <Image src="./images/projects/Assn_5_Demonstration.PNG" width={500} height={500} alt="Assn5" />
        </Section>
      </div>

      {/* About */}

      <SectionTitle id="about">A little more about me</SectionTitle>
      <div>
        <Section>
          <div className="max-w-lg">
            <span className=" font-bold">
              My name is Jason and I&apos;m an &#40;aspiring&#41;{" "}
              <span className="font-bold text-lg text-blue-600">Software Developer.</span>
            </span>
            <div className="pt-5">
              My hobbies include learning new technologies, or working on exciting new projects - usually both. I am
              pursuing a bachelor&apos;s degree in Computer Science with a minor in Game Development. I previously
              majored in Medical Sciences, but switched after realizing my passion for Computer Science. My current
              obsession is prototyping games in <span className="font-bold">Unity</span> in hopes of making something
              extraordinary - someday.
            </div>
            <ExternalLink
              link="https://docs.google.com/document/d/1AlARb_llPzyZaCGtmnjThoUqZKI6d7YZ/edit?usp=sharing&ouid=101263568990628764477&rtpof=true&sd=true"
              logoSrc="./icons/LinkIcon.png"
            >
              Resume
            </ExternalLink>
          </div>
        </Section>
      </div>
    </section>
  );
}
