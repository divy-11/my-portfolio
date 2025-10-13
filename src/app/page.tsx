import Image from "next/image";
import {
  SiGit,
  SiGithub,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiDrizzle,
  SiPrisma,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiRust,
  SiDocker,
  SiSupabase,
  SiRazorpay,
  SiPostman,
  SiPython,
  SiScikitlearn,
  SiCplusplus,
  SiCloudflare,
  SiDart,
  SiFlutter,
  SiTurborepo,
  SiFastapi,
  SiAxios,
  SiJsonwebtokens,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { IoLogoElectron, IoShield } from "react-icons/io5";
import { MdOutlineArrowOutward } from "react-icons/md";
import Skill from "@/components/skills";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function Page() {
  return (
    <div>
      <div className="w-full justify-center text-xl">
        <div className="items-center justify-center sm:h-screen sm:mb-0 mb-36">
          <div className="justify-center w-full flex tracking-[0.4em] pt-4 lg:text-2xl md:text-xl sm:text-lg text-sm">
            DIVY SANGWAN
          </div>
          <div className="flex flex-col justify-center lg:text-7xl md:text-6xl sm:text-5xl text-4xl font-semibold capitalize text-stone-500 dark:text-stone-400 w-full items-center mt-5">
            <div>CRAFTING</div>
            <div>SOLUTIONS THAT</div>
            <div>BLEND</div>
            <div className="text-orange-600">INNOVATION,</div>
            <div>EFFICIENCY, AND</div>
            <div>SIMPLICITY.</div>
          </div>
        </div>

        <div id="about">
          <div className="tracking-[0.4em] lg:text-2xl md:text-xl sm:text-lg text-sm">
            ABOUT ME
          </div>
          <div className="flex items-center mt-6">
            <div className="lg:text-6xl md:text-5xl sm:text-4xl text-3xl font-semibold text-stone-500 dark:text-stone-400 leading-10">
              I&apos;m a dedicated
              <span className="text-orange-600">
                {" "}
                full stack web developer{" "}
              </span>
              currently pursuing B.Tech at IIT Dhanbad. I&apos;m passionate about building products that simplify lives and create real impact. I enjoy working on new and innovative ideas—especially on the tech side, where I handle everything from backend systems to product architecture.{" "}
            </div>
          </div>
        </div>

        <div id="achievements">
          <div className="sm:my-40 my-20">
            <div className="tracking-[0.4em] lg:text-2xl md:text-xl sm:text-lg text-sm">
              EXPERIENCE
            </div>
            <div className="text-stone-500 dark:text-stone-400">
              <Accordion type="multiple">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="lg:text-4xl md:text-3xl sm:text-2xl text-xl font-medium">
                    <div className="flex lg:gap-36 md:gap-28 sm:gap-16 gap-8 w-full">
                      <div>FlairX</div>
                      <div>Software Engineer Intern</div>
                      <div>July 2025 - Sept 2025</div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="sm:flex sm:flex-row justify-between items-start">
                      <div className="w-full max-w-[800px] justify-start">
                        <ul className="list-disc pl-6 space-y-2">
                          <li>
                            Developed the <strong className="dark:text-white text-black">AI Questionnaire Generation</strong> feature for the company app, automating interview question creation based on candidate skills and job descriptions.
                          </li>
                          <li>
                            Built the <strong className="dark:text-white text-black">Completed Interview Listing</strong> module for the Admin Portal, enabling managers to efficiently review and track interview outcomes.
                          </li>
                          <li>
                            Collaborated with cross-functional teams to design, implement, and optimize user-facing features, ensuring high performance and scalability.
                          </li>
                          {/* <li>
                            Worked on both <strong className="dark:text-white text-black">frontend</strong> and <strong className="dark:text-white text-black">backend</strong>, building AI-driven backend modules inspired by <strong className="dark:text-white text-black">Agentic AI</strong> for smart workflow automation.
                          </li> */}
                          <li>
                            Worked with <strong className="dark:text-white text-black">React.js</strong>, <strong className="dark:text-white text-black">Redux</strong>, <strong className="dark:text-white text-black">Node.js</strong>, and <strong className="dark:text-white text-black">PostgreSQL</strong> to deliver full-stack solutions.
                          </li>
                        </ul>
                        <div className="my-4">
                          <Button className="hover:bg-orange-600" asChild>
                            <a
                              href="https://www.flairx.ai/"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Visit
                            </a>
                          </Button>
                        </div>
                      </div>
                      <div className="justify-center items-center w-full h-full flex sm:justify-end">
                        <Image
                          src="/FlairX.svg"
                          alt="Redact"
                          className="mr-4 mt-4 invert dark:invert-0"
                          width={200}
                          height={200}
                        />
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="lg:text-4xl md:text-3xl sm:text-2xl text-xl font-medium">
                    <div className="flex lg:gap-44 md:gap-28 sm:gap-16 gap-8 w-full">
                      <div>Decube Labs </div>
                      <div>Web Developer </div>
                      <div>Apr 2025 - July 2025</div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="sm:flex sm:flex-row justify-between items-start">
                      <div className="w-full max-w-[800px] justify-start">
                        <ul className="list-disc pl-6 space-y-2">
                          <li>
                            Developed the frontend for <strong className="dark:text-white text-black">Skia Coffee</strong>, a premium coffee-selling website, focusing on responsive UI and clean component architecture.
                          </li>
                           <li>
                            Worked on both <strong className="dark:text-white text-black">frontend</strong> and <strong className="dark:text-white text-black">backend</strong> development, integrating APIs and optimizing data flow between the app and the server for better performance.
                          </li>
                          <li>
                            Utilized <strong className="dark:text-white text-black">React.js</strong>, <strong className="dark:text-white text-black">Redux</strong>, <strong className="dark:text-white text-black">Node.js</strong>, and <strong className="dark:text-white text-black">PostgreSQL</strong> to deliver full-stack, scalable solutions.
                          </li>
                        </ul>
                        <div className="my-4">
                          <Button className="hover:bg-orange-600" asChild>
                            <a
                              href="https://www.decubelabs.com/"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Visit
                            </a>
                          </Button>
                        </div>
                      </div>
                      <div className="justify-center items-center w-full h-full flex sm:justify-end">
                        <Image
                          src="/decube.svg"
                          alt="Redact"
                          className="mr-4 mt-4 invert dark:invert-0"
                          width={200}
                          height={200} 
                        />
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>

        {/* <div id="achievements">
          <div className="sm:my-40 my-20">
            <div className="tracking-[0.4em] lg:text-2xl md:text-xl sm:text-lg text-sm">
              ACHIEVEMENTS
            </div>
            <div className="text-stone-500 dark:text-stone-400">
              <Accordion type="multiple">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-medium">
                    <div className="flex lg:gap-36 md:gap-28 sm:gap-16 gap-8 w-full">
                      <div>2024</div>
                      <div>Smart India Hackathon Finalist</div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="sm:flex sm:flex-row justify-between items-start">
                      <div className="w-full max-w-[800px] justify-start">
                        <ul className="list-disc pl-6 space-y-2">
                          <li>
                            Qualified as a finalist in{" "}
                            <strong className="dark:text-white text-black">
                              Smart India Hackathon 2024
                            </strong>
                            , the world&apos;s largest open innovation platform
                            where students solve real-world problems.
                          </li>
                          <li>
                            Led a team of 6 to develop{" "}
                            <strong className="dark:text-white text-black">
                              RE-DACT
                            </strong>
                            , an innovative document redaction tool for
                            protecting sensitive information.
                          </li>
                          <li>
                            Competed against{" "}
                            <strong className="dark:text-white text-black">
                              100+ teams
                            </strong>{" "}
                            from across India, showcasing problem-solving
                            abilities and technical expertise in developing
                            scalable solutions.
                          </li>
                          <li>
                            Utilized technologies like{" "}
                            <strong className="dark:text-white text-black">
                              Next.js
                            </strong>
                            ,{" "}
                            <strong className="dark:text-white text-black">
                              TypeScript
                            </strong>
                            , and{" "}
                            <strong className="dark:text-white text-black">
                              Deep Learning
                            </strong>{" "}
                            to create an efficient and user-friendly solution.
                          </li>
                        </ul>
                      </div>
                      <div className="justify-center items-center w-full flex sm:justify-end">
                        <Image
                          src="/sih.jpeg"
                          alt="Redact"
                          width={300}
                          height={300}
                        />
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div> 
        </div>*/}

        <div id="skills" className=" mt-20">
          <div className="tracking-[0.4em] lg:text-2xl md:text-xl sm:text-lg text-sm">
            SKILLS
          </div>
          <div className="mt-6 lg:text-6xl md:text-5xl sm:text-4xl text-2xl font-semibold text-stone-500 dark:text-stone-400 leading-none grid gap-16 md:grid-cols-6 sm:grid-cols-4 grid-cols-3">
            <Skill Icon={SiJavascript} name="JavaScript" />
            <Skill Icon={SiTypescript} name="TypeScript" />
            <Skill Icon={SiReact} name="React" />
            <Skill Icon={SiNextdotjs} name="Nextjs" />
            {/* <Skill Icon={SiTurborepo} name="Turborepo" /> */}
            <Skill Icon={SiNodedotjs} name="Nodejs" />
            <Skill Icon={SiExpress} name="Express" />
            <Skill Icon={SiMongodb} name="MongoDB" />
            <Skill Icon={SiPostgresql} name="PostgreSQL" />
            {/* <Skill Icon={SiDrizzle} name="Drizzle" /> */}
            <Skill Icon={SiPrisma} name="Prisma" />
            <Skill Icon={SiTailwindcss} name="TailwindCSS" />
            <Skill Icon={SiDocker} name="Docker" />
            {/* <Skill Icon={SiSupabase} name="Supabase" />
            <Skill Icon={SiRazorpay} name="Razorpay" /> */}
            <Skill Icon={SiPostman} name="Postman" />
            <Skill Icon={SiGit} name="Git" />
            <Skill Icon={SiGithub} name="GitHub" />
            {/* <Skill Icon={IoLogoElectron} name="Electron" />
            <Skill Icon={SiRust} name="Rust" /> */}
            <Skill Icon={SiCplusplus} name="C++" />
            {/* <Skill Icon={FaJava} name="Java" />
            <Skill Icon={SiPython} name="Python" />
            <Skill Icon={SiScikitlearn} name="Scikit-Learn" /> */}
          </div>
        </div>

        <div id="projects">
          <div className="sm:my-40 my-20">
            <div className="tracking-[0.4em] lg:text-2xl md:text-xl sm:text-lg text-sm">
              PROJECTS
            </div>
            <div className="text-stone-500 dark:text-stone-400">
              <Accordion type="multiple">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="lg:text-6xl md:text-5xl sm:text-4xl text-3xl tracking-[0.2em] font-semibold">
                    KRISHISAKHA
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="sm:flex sm:flex-row justify-between items-start">
                      <div className="w-full max-w-[800px] justify-start">
                        <ul className="list-disc pl-6 space-y-2">
                          <li>
                            Developed{" "}
                            <strong className="dark:text-white text-black">
                              KRISHISAKHA
                            </strong>
                            , a web platform designed to provide{" "}
                            <strong className="dark:text-white text-black">
                              personalized fertilizer recommendations
                            </strong>{" "}
                            and optimized farming practices to enhance crop yield and farming efficiency.
                          </li>
                          <li>
                            Leveraged{" "}
                            <strong className="dark:text-white text-black">
                              machine learning
                            </strong>{" "}
                            to recommend fertilizers based on soil quality, crop type, and location.
                          </li>
                          <li>
                            Built a seamless interface for farmers to input soil and crop details and receive AI-driven fertilizer suggestions.
                          </li>
                          <li>
                            Designed a platform to provide{" "}
                            <strong className="dark:text-white text-black">
                              agricultural insights
                            </strong>{" "}
                            and expert support for better crop management.
                          </li>
                          <li>
                            Optimized the platform for{" "}
                            <strong className="dark:text-white text-black">
                              small and medium farmers
                            </strong>{" "}
                            to increase crop yield, reduce waste, and improve profitability.
                          </li>
                        </ul>

                        <div className="my-4 flex gap-4">
                          <Button className="hover:bg-orange-600" asChild>
                            <a
                              href="https://github.com/divy-11/Krishi-Sakha"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Github
                            </a>
                          </Button>
                          {/* <Button className="hover:bg-orange-600" asChild>
                            <a
                              href=""
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Live
                            </a>
                          </Button> */}
                        </div>
                        <div className="flex gap-2">
                          <Badge>
                            <SiReact
                              className="-ms-0.5 opacity-60"
                              size={12}
                              aria-hidden="true"
                            />
                            Reactjs
                          </Badge>
                          <Badge>
                            <SiNodedotjs
                              className="-ms-0.5 opacity-60"
                              size={12}
                              aria-hidden="true"
                            />
                            Nodejs
                          </Badge>
                          <Badge>
                            <SiExpress
                              className="-ms-0.5 opacity-60"
                              size={12}
                              aria-hidden="true"
                            />
                            Express
                          </Badge>
                          <Badge>
                            <SiFastapi
                              className="-ms-0.5 opacity-60"
                              size={12}
                              aria-hidden="true"
                            />
                            FastAPI
                          </Badge>
                          <Badge>
                            <SiMongodb
                              className="-ms-0.5 opacity-60"
                              size={12}
                              aria-hidden="true"
                            />
                            MongoDB
                          </Badge>
                          <Badge>
                            <SiTailwindcss
                              className="-ms-0.5 opacity-60"
                              size={12}
                              aria-hidden="true"
                            />
                            TailwindCSS
                          </Badge>
                        </div>
                      </div>
                      <div className="justify-center items-center w-full flex sm:justify-end mt-2">
                        <Image
                          src="/KrishiSakha.png"
                          alt="KrishiSakha"
                          width={300}
                          height={300}
                        />
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger className="lg:text-6xl md:text-5xl sm:text-4xl text-3xl tracking-[0.2em] font-semibold">
                    FITFUSION
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="sm:flex sm:flex-row justify-between items-start">
                      <div className="w-full max-w-[800px] justify-start">
                        <ul className="list-disc pl-6 space-y-2">
                          <li>
                            Developed the backend of{" "}
                            <strong className="dark:text-white text-black">
                              FitFusion
                            </strong>
                            , a personalized fitness tracking web application designed to help users log workouts, set fitness goals, and receive actionable insights for improved performance.
                          </li>
                          <li>
                            Integrated{" "}
                            <strong className="dark:text-white text-black">
                              AI-driven workout recommendations
                            </strong>{" "}
                            to provide users with customized training plans based on their fitness level and progress.
                          </li>
                          <li>
                            Developed the backend to support{" "}
                            <strong className="dark:text-white text-black">
                              secure user authentication
                            </strong>{" "}
                            and seamless data management for workout logs, goals, and progress tracking.
                          </li>
                          <li>
                            Currently
                            {" "}
                            <strong className="dark:text-white text-black">
                              developing the frontend
                            </strong>{" "}
                            to provide a clean, user-friendly interface that allows users to easily log their workouts, set personalized goals, and track performance over time.
                          </li>
                        </ul>
                        <div className="my-4">
                          <Button className="hover:bg-orange-600" asChild>
                            <a
                              href="https://github.com/divy-11/FitFusion"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Github
                            </a>
                          </Button>
                        </div>
                        <div className="flex gap-2">
                          <Badge>
                            <SiNodedotjs
                              className="-ms-0.5 opacity-60"
                              size={12}
                              aria-hidden="true"
                            />
                            Nodejs
                          </Badge>
                          <Badge>
                            <SiExpress
                              className="-ms-0.5 opacity-60"
                              size={12}
                              aria-hidden="true"
                            />
                            Express
                          </Badge>
                          <Badge>
                            <SiFastapi
                              className="-ms-0.5 opacity-60"
                              size={12}
                              aria-hidden="true"
                            />
                            FastAPI
                          </Badge>
                          <Badge>
                            <SiPython
                              className="-ms-0.5 opacity-60"
                              size={12}
                              aria-hidden="true"
                            />
                            Python
                          </Badge>
                          <Badge>
                            <SiMongodb
                              className="-ms-0.5 opacity-60"
                              size={12}
                              aria-hidden="true"
                            />
                            MongoDB
                          </Badge>
                        </div>
                      </div>
                      <div className="justify-center items-center w-full flex sm:justify-end mt-2">
                        {/* <Image
                          src="/Fitfusion.png"
                          alt="FitFusion"
                          width={300}
                          height={300}
                        /> */}
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger className="lg:text-6xl md:text-5xl sm:text-4xl text-3xl tracking-[0.2em] font-semibold">
                    ParsePDF
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="sm:flex sm:flex-row justify-between items-start">
                      <div className="w-full max-w-[800px] justify-start">
                        <div>
                          <ul className="list-disc pl-6 space-y-2">
                            <li>
                              Developed <strong className="dark:text-white text-black">ParsePDF</strong>, a web application that converts PDF documents into structured XML for streamlined document automation workflows.
                            </li>
                            <li>
                              Implemented a detailed <strong className="dark:text-white text-black">conversion history</strong> system with built-in <strong className="dark:text-white text-black">error handling</strong> to improve reliability and traceability of past uploads.
                            </li>
                            <li>
                              Built a clean and <strong className="dark:text-white text-black">responsive UI</strong> focused on minimalism and ease of use to help users convert and review files without friction.
                            </li>
                            <li>
                              Added <strong className="dark:text-white text-black">PDF preview</strong>, enforced <strong className="dark:text-white text-black">file size limits</strong>, and ensured smooth performance across different device types.
                            </li>
                          </ul>
                        </div>
                        <div className="my-4 flex gap-4">
                          <Button className="hover:bg-orange-600" asChild>
                            <a
                              href="https://github.com/divy-11/ParsePDF"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Github
                            </a>
                          </Button>
                          <Button className="hover:bg-orange-600" asChild>
                            <a
                              href="https://parsepdf.vercel.app/"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Live
                            </a>
                          </Button>
                        </div>
                        <div className="flex gap-2">
                          <Badge>
                            <SiReact
                              className="-ms-0.5 opacity-60"
                              size={12}
                              aria-hidden="true"
                            />
                            Reactjs
                          </Badge>
                          <Badge>
                            <SiAxios
                              className="-ms-0.5 opacity-60"
                              size={12}
                              aria-hidden="true"
                            />
                            Axios
                          </Badge>
                          <Badge>
                            <SiNodedotjs
                              className="-ms-0.5 opacity-60"
                              size={12}
                              aria-hidden="true"
                            />
                            Nodejs
                          </Badge>
                          <Badge>
                            <SiExpress
                              className="-ms-0.5 opacity-60"
                              size={12}
                              aria-hidden="true"
                            />
                            Express
                          </Badge>
                          <Badge>
                            <SiTailwindcss
                              className="-ms-0.5 opacity-60"
                              size={12}
                              aria-hidden="true"
                            />
                            TailwindCSS
                          </Badge>
                        </div>
                      </div>
                      <div className="justify-center items-center w-full flex sm:justify-end mt-2">
                        <Image
                          src="/parsePDF.png"
                          alt="parsePDF"
                          width={300}
                          height={300}
                        />
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger className="lg:text-6xl md:text-5xl sm:text-4xl text-3xl tracking-[0.2em] font-semibold">
                    MEDIUM CLONE
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="sm:flex sm:flex-row justify-between items-start">
                      <div className="w-full max-w-[800px] justify-start">
                        <div>
                          <ul className="list-disc pl-6 space-y-2">
                            <li>
                              Built a{" "}
                              <strong className="dark:text-white text-black">
                                full-featured blogging platform
                              </strong>{" "}
                              inspired by Medium.
                            </li>
                            <li>
                              Writers can publish articles on various topics,
                              from technology to personal experiences.
                            </li>
                            <li>
                              Implemented a{" "}
                              <strong className="dark:text-white text-black">
                                clean and minimalist interface
                              </strong>{" "}
                              for easy content creation and reading.
                            </li>
                            <li>
                              Platform focuses on delivering high-quality,
                              long-form content.
                            </li>
                            <li>
                              Made content creation accessible for both amateur
                              and professional writers.
                            </li>
                          </ul>
                        </div>
                        <div className="my-4 flex gap-4">
                          <Button className="hover:bg-orange-600" asChild>
                            <a
                              href="https://github.com/divy-11/Blogging-Web"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Github
                            </a>
                          </Button>
                          <Button className="hover:bg-orange-600" asChild>
                            <a
                              href="https://medium-divy.vercel.app/signup"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Live
                            </a>
                          </Button>
                        </div>
                        <div className="flex gap-2">
                          <Badge>
                            <SiTypescript
                              className="-ms-0.5 opacity-60"
                              size={12}
                              aria-hidden="true"
                            />
                            TypeScript
                          </Badge>
                          <Badge>
                            <SiReact
                              className="-ms-0.5 opacity-60"
                              size={12}
                              aria-hidden="true"
                            />
                            React
                          </Badge>
                          <Badge>
                            <SiPostgresql
                              className="-ms-0.5 opacity-60"
                              size={12}
                              aria-hidden="true"
                            />
                            PostgresSQL
                          </Badge>
                          <Badge>
                            <SiPrisma
                              className="-ms-0.5 opacity-60"
                              size={12}
                              aria-hidden="true"
                            />
                            Prisma
                          </Badge>
                          <Badge>
                            <SiCloudflare
                              className="-ms-0.5 opacity-60"
                              size={12}
                              aria-hidden="true"
                            />
                            Cloudflare Hono
                          </Badge>
                          <Badge>
                            <SiTailwindcss
                              className="-ms-0.5 opacity-60"
                              size={12}
                              aria-hidden="true"
                            />
                            TailwindCSS
                          </Badge>
                        </div>
                      </div>
                      <div className="justify-center items-center w-full flex sm:justify-end mt-2">
                        <Image
                          src="/medium.png"
                          alt="Medium"
                          width={300}
                          height={300}
                        />
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* <AccordionItem value="item-5">
                  <AccordionTrigger className="lg:text-6xl md:text-5xl sm:text-4xl text-3xl tracking-[0.2em] font-semibold">
                    CLEANIFY
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="sm:flex sm:flex-row justify-between items-start">
                      <div className="w-full max-w-[800px] justify-start">
                        <div>
                          <ul className="list-disc pl-6 space-y-2">
                            <li>
                              Building <strong className="dark:text-white text-black">Cleanify</strong>, a personalized skincare recommendation platform that suggests products based on user input and future AI-based face scan analysis.
                            </li>
                            <li>
                              Developed an intelligent recommendation engine using <strong className="dark:text-white text-black">skin concern mapping</strong> and <strong className="dark:text-white text-black">initial ML models</strong> to match users with suitable products.
                            </li>
                            <li>
                              Implemented a modular architecture using <strong className="dark:text-white text-black">Next.js</strong> and <strong className="dark:text-white text-black">TailwindCSS</strong>, with clean UI/UX tailored for mobile and desktop users.
                            </li>
                            <li>
                              Planned advanced features such as <strong className="dark:text-white text-black">real-time product availability checks</strong> through web scraping and <strong className="dark:text-white text-black">user feedback loops</strong> to improve suggestions over time.
                            </li>
                            <li>
                              Collaborating with a founder on product direction, while leading the <strong className="dark:text-white text-black">technical execution</strong> to ensure long-term scalability and user satisfaction.
                            </li>
                          </ul>
                        </div>
                        <div className="my-4">
                          <Button className="hover:bg-orange-600" asChild>
                            <a
                              href="https://github.com/divy-11/Cleanify"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Github
                            </a>
                          </Button>
                        </div>
                        <div className="flex gap-2">
                          <Badge>
                            <SiDart
                              className="-ms-0.5 opacity-60"
                              size={12}
                              aria-hidden="true"
                            />
                            Dart
                          </Badge>
                          <Badge>
                            <SiFlutter
                              className="-ms-0.5 opacity-60"
                              size={12}
                              aria-hidden="true"
                            />
                            Flutter
                          </Badge>
                        </div>
                      </div>
                      <div className="justify-center items-center w-full flex sm:justify-end mt-2">
                        <Image
                          src="/redact.png"
                          alt="Redact"
                          width={300}
                          height={300}
                        />
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem> */}
              </Accordion>
            </div>
          </div>
        </div>

        <div id="contact">
          <div className="sm:my-40 my-20">
            <div className="tracking-[0.4em] lg:text-2xl md:text-xl sm:text-lg text-sm">
              CONTACT
            </div>
            <div className="text-stone-500 dark:text-stone-400">
              <div className="flex flex-col gap-4 mt-6">
                <a
                  href="mailto:divy.sangwan.176@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="lg:text-6xl md:text-5xl sm:text-4xl text-3xl tracking-[0.2em] font-semibold flex items-center hover:text-orange-600"
                >
                  EMAIL
                  <MdOutlineArrowOutward className="ml-4" />
                </a>
                <a
                  href="https://x.com/11_devvv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="lg:text-6xl md:text-5xl sm:text-4xl text-3xl tracking-[0.2em] font-semibold flex items-center hover:text-orange-600"
                >
                  X.COM
                  <MdOutlineArrowOutward className="ml-4" />
                </a>
                <a
                  href="https://github.com/divy-11"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="lg:text-6xl md:text-5xl sm:text-4xl text-3xl tracking-[0.2em] font-semibold flex items-center hover:text-orange-600"
                >
                  GITHUB
                  <MdOutlineArrowOutward className="ml-4" />
                </a>
                <a
                  href="https://www.linkedin.com/in/divy-sangwan/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="lg:text-6xl md:text-5xl sm:text-4xl text-3xl tracking-[0.2em] font-semibold flex items-center hover:text-orange-600"
                >
                  LINKEDIN
                  <MdOutlineArrowOutward className="ml-4" />
                </a>

                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="lg:text-6xl md:text-5xl sm:text-4xl text-3xl tracking-[0.2em] font-semibold flex items-center hover:text-orange-600"
                >
                  RESUME
                  <MdOutlineArrowOutward className="ml-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
