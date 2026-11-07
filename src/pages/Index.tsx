import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselDots,
} from "@/components/ui/carousel";

import {
  Github,
  Linkedin,
  Mail,
  Code2,
  Database,
  Brain,
  Cloud,
  Server,
  Cpu,
  FileText,
} from "lucide-react";

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Navigation } from "@/components/Navigation";
import { ProjectCard } from "@/components/ProjectCard";
import { ToolCard } from "@/components/ToolCard";


// ======================================================
// SPORTS TOOLTIP
// ======================================================

const bookImages: Record<string, string> = {
  Boxing: "/images/boxeo.jpeg",
  Jiujitsu: "/images/jiujitsu.jpeg",
  Mma: "/images/mma.jpeg",
};

function BookTooltip({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const [show, setShow] = useState(false);

  return (
    <span
      className="relative cursor-pointer"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {children}

      {show && bookImages[title] && (
        <span className="absolute left-full top-1/2 z-50 ml-4 -translate-y-1/2 bg-card border border-border rounded shadow-lg p-2 w-40 flex flex-col items-center">
          <img
            src={bookImages[title]}
            alt={`${title} cover`}
            className="w-40 h-53 object-cover rounded mb-2"
          />

          <span className="text-xs text-muted-foreground text-center">
            {title}
          </span>
        </span>
      )}
    </span>
  );
}


// ======================================================
// FEATURED WORK DATA
// ======================================================

const featuredWork = [
  {
    period: "2025 — Present",
    category: "FIELD ROBOTICS · AUTONOMY",
    title: "Autonomous Mining Robotics",
    organization: "Enaex Robotics",
    description:
      "Development of autonomous and semi-autonomous robotic systems for open-pit and underground explosive-loading operations, including navigation, sensing, industrial communications, and field deployment.",
    tech: ["ROS", "GNSS", "LiDAR", "PLC"],
    image: "/images/projects/enaex/enaex-hero.jpg",
    url: "/projects/enaexrobotics",
  },

  {
    period: "2025 — Present",
    category: "AUTONOMY RESEARCH · UAV",
    title: "UAV Navigation Under Uncertainty",
    organization: "SPAE Group",
    description:
      "Development of a LiDAR-equipped UAV research platform and ROS 2/Gazebo simulation for learning- and model-based autonomous navigation under uncertain environments.",
    tech: ["ROS 2", "PX4", "LiDAR", "NMPC"],
    image: "/images/projects/spae/spae-hero.jpg",
    url: "/projects/spaegroup",
  },

  {
    period: "2025 — Present",
    category: "PERCEPTION · MACHINE LEARNING",
    title: "Tree Crown Detection & Delineation",
    organization: "TarLab",
    description:
      "Research on tree crown detection and instance segmentation from UAV imagery through dataset creation, pretrained-model benchmarking, fine-tuning, and synthetic-label training.",
    tech: ["Python", "PyTorch", "UAV Imagery", "QGIS"],
    image: "/images/projects/tarlab/tarlab-hero.jpg",
    url: "/projects/tarlab",
  },

  {
    period: "2026 — Present",
    category: "AUTONOMOUS VEHICLES · RESEARCH",
    title: "Autonomous Vehicle Research",
    organization: "Universidad Adolfo Ibáñez",
    description:
      "Research focused on autonomous vehicle systems, integrating robotics, perception, control, and autonomous navigation for intelligent ground vehicles.",
    tech: ["Autonomous Vehicles", "ROS 2", "Perception", "Control"],
    image: "/images/projects/uai/uai-hero.jpg",
    url: "/projects/uai",
  },

  {
    period: "2024 — 2025",
    category: "ELECTRONICS · EMBEDDED SYSTEMS",
    title: "Custom PCB & Embedded Electronics",
    organization: "2X Automation Inc.",
    description:
      "Designed custom electronic systems and PCBs from customer requirements through schematic design, PCB routing, communication interfaces, manufacturing verification, and production release.",
    tech: ["Altium", "PCB Design", "RS-485", "Ethernet"],
    image: "/images/projects/xautomation/pcb-hero.jpg",
    url: "/projects/xautomation",
  },

  {
    period: "2022 · 2026",
    category: "MULTI-PLATFORM ROBOTICS",
    title: "Maritime RobotX",
    organization: "Team Caleuche UC",
    description:
      "Development of aerial, surface, and underwater robotic systems for the international Maritime RobotX competition, including UAV precision landing and BlueROV motion control.",
    tech: ["ROS", "OpenCV", "UAV", "BlueROV"],
    image: "/images/projects/robotx/robotx-hero.jpg",
    url: "/projects/robotx",
  },

  {
    period: "2022 — 2023",
    category: "UNDERWATER · FIELD ROBOTICS",
    title: "ROV Field Operations in Patagonia",
    organization: "Mariscope SpA",
    description:
      "Maintenance, troubleshooting, and field deployment of tethered ROV systems for structural underwater inspections across the Strait of Magellan and Patagonian fjords.",
    tech: ["ROV", "RS-485", "Electronics", "Field Operations"],
    image: "/images/projects/mariscope/mariscope-hero.jpg",
    url: "/projects/mariscope",
  },

  {
    period: "2021 — 2022",
    category: "UNDERGRADUATE RESEARCH · UAV",
    title: "Vision-Based UAV Precision Landing",
    organization: "Pontifical Catholic University of Chile",
    description:
      "Undergraduate research with Prof. Giancarlo Troni on autonomous UAV precision landing using Python, ROS, OpenCV, and a custom-built multirotor platform.",
    tech: ["Python", "ROS", "OpenCV", "UAV"],
    image: "/images/projects/robotx/research-uav.jpg",
    url: "/projects/robotx",
  },
];


// ======================================================
// MAIN PAGE
// ======================================================

const Index = () => {
  return (
    <div className="relative min-h-screen">

      <Navigation />

      <main className="max-w-5xl mx-auto px-6 pt-6 pb-20">


        {/* ==================================================
            ABOUT / HERO
        ================================================== */}

        <section id="about" className="py-12 section-fade-in">

          <div className="flex flex-col md:flex-row items-start md:items-center gap-8 mb-12">

            {/* Profile Picture */}
            <div className="w-32 h-32 md:w-40 md:h-40 flex-shrink-0">

              <Avatar className="w-full h-full terminal-border bg-card flex items-center justify-center glow-primary">

                <AvatarImage
                  src="/images/profile.jpeg"
                  alt="Mario Flores"
                  className="h-full w-full object-cover object-[30%_82%] scale-150"
                />

                <AvatarFallback>MF</AvatarFallback>

              </Avatar>

            </div>


            {/* Name / Title */}
            <div className="flex-1">

              <h1 className="text-4xl md:text-6xl font-bold mb-3 text-foreground">
                <span className="text-primary">$</span> whoami
              </h1>

              <p className="text-xl text-primary font-semibold">
                Robotics Engineer
              </p>

              <p className="text-sm md:text-base text-muted-foreground mt-2 font-mono">
                Autonomous Systems · Field Robotics · Perception · Control
              </p>

            </div>

          </div>


          {/* Introduction */}
          <div className="terminal-border bg-card/50 p-8 rounded mb-6">

            <p className="text-foreground leading-relaxed mb-4">
              I’m a Robotics Engineer focused on autonomous systems for
              complex and uncertain real-world environments. My experience
              spans aerial, terrestrial, surface, and underwater robotics,
              with work ranging from autonomous navigation, perception, and
              control to embedded electronics, sensor integration, and robotic
              system deployment.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              I enjoy working across the full robotics stack—connecting
              hardware, sensing, software, and autonomy to transform research
              ideas into systems that can operate reliably outside the
              laboratory. My interests particularly lie in robust autonomy,
              navigation under uncertainty, multi-platform robotic systems,
              and field robotics.
            </p>

          </div>


          {/* Main Buttons */}
          <div className="flex flex-wrap gap-4">

            <a
              href="#featured-work"
              className="px-6 py-3 bg-primary text-primary-foreground rounded glow-primary hover:bg-primary/90 transition-all duration-300 font-semibold"
            >
              View work
            </a>

            <a
              href="#publications"
              className="px-6 py-3 border border-border text-foreground rounded hover:bg-secondary transition-all duration-300"
            >
              Publications
            </a>

            <a
              href="#contact"
              className="px-6 py-3 border border-border text-foreground rounded hover:bg-secondary transition-all duration-300"
            >
              Contact
            </a>

          </div>

        </section>



        {/* ==================================================
            FEATURED WORK & EXPERIENCE
        ================================================== */}

        <section
          id="featured-work"
          className="py-12 section-fade-in"
        >

          <div className="mb-10">

            <h2 className="text-4xl font-bold mb-3 text-foreground">
              <span className="text-accent">//</span> Featured Work
            </h2>

            <p className="text-muted-foreground max-w-3xl leading-relaxed">
              Selected professional and research experience across autonomous
              systems, field robotics, perception, control, embedded
              electronics, and multi-platform robotic systems.
            </p>

          </div>


          <div className="grid md:grid-cols-2 gap-6">

            {featuredWork.map((project) => (

              <Link
                key={`${project.organization}-${project.title}`}
                to={project.url}
                className="group terminal-border bg-card rounded overflow-hidden hover:glow-primary transition-all duration-300 flex flex-col"
              >

                {/* Image */}
                <div className="overflow-hidden">

                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-56 object-cover group-hover:scale-[1.03] transition-transform duration-500"
                  />

                </div>


                {/* Content */}
                <div className="p-6 flex flex-col flex-1">

                  {/* Period */}
                  <p className="text-xs text-muted-foreground font-mono mb-2">
                    {project.period}
                  </p>


                  {/* Category */}
                  <p className="text-xs text-accent font-mono mb-2">
                    {project.category}
                  </p>


                  {/* Title */}
                  <h3 className="text-xl font-semibold text-foreground mb-1">
                    {project.title}
                  </h3>


                  {/* Organization */}
                  <p className="text-sm text-primary font-semibold mb-4">
                    {project.organization}
                  </p>


                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                    {project.description}
                  </p>


                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-5">

                    {project.tech.map((tech) => (

                      <span
                        key={tech}
                        className="text-xs px-2 py-1 border border-border rounded text-muted-foreground"
                      >
                        {tech}
                      </span>

                    ))}

                  </div>


                  {/* View project */}
                  <span className="text-sm text-primary font-medium group-hover:underline mt-auto">
                    View work →
                  </span>

                </div>

              </Link>

            ))}

          </div>

        </section>



        {/* ==================================================
            PUBLICATIONS
        ================================================== */}

        <section
          id="publications"
          className="py-12 section-fade-in"
        >

          <h2 className="text-4xl font-bold mb-8 text-foreground">
            <span className="text-accent">//</span> Publications
          </h2>


          <div className="space-y-6">


            {/* Multispectral */}
            <div className="terminal-border bg-card p-6 rounded hover:glow-primary transition-all duration-300">

              <h3 className="text-xl font-semibold text-primary mb-2">
                Assessment of Light Environment Conditions for Reconstruction
                of Multispectral Images by Conditional Adversarial Networks
              </h3>

              <p className="text-muted-foreground mb-3">
                Research manuscript
              </p>

              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Investigation of multispectral image reconstruction using
                conditional adversarial networks, with particular attention
                to reconstruction robustness under varying illumination
                conditions.
              </p>

              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <FileText size={16} />
                <span>Research publication</span>
              </div>

            </div>


            {/* Occupancy Probability Maps */}
            <div className="terminal-border bg-card p-6 rounded hover:glow-primary transition-all duration-300">

              <h3 className="text-xl font-semibold text-primary mb-2">
                Occupancy Probability Maps Synthesis for Deep Reinforcement
                Learning-Based Navigation in Uncertain Environments
              </h3>

              <p className="text-muted-foreground mb-3">
                Research manuscript
              </p>

              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Investigation of probabilistic representations of environmental
                occupancy for deep reinforcement learning-based autonomous
                navigation in uncertain environments.
              </p>

              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <FileText size={16} />
                <span>Research publication</span>
              </div>

            </div>

          </div>

        </section>

        {/* LAD */}
        <div className="terminal-border bg-card p-6 rounded hover:glow-primary transition-all duration-300">
        
          <h3 className="text-xl font-semibold text-primary mb-2">
            L.A.D: A Visual ROS 2 and Nav2 Platform for Learning, Prototyping,
            and Reproducing Autonomous Vehicle Software Architectures
          </h3>
        
          <p className="text-muted-foreground mb-3">
            UAI Autonomous Vehicle Research · Research manuscript
          </p>
        
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
            Presents L.A.D., a visual programming platform for designing,
            prototyping, and reproducing autonomous vehicle software
            architectures using ROS 2 and Nav2. The platform enables users to
            compose robotics functionality through reusable visual blocks while
            preserving the underlying ROS 2 communication and autonomy structure.
          </p>
        
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <FileText size={16} />
            <span>Research publication</span>
          </div>
        
        </div>

        {/* ==================================================
            STUDIES
        ================================================== */}

        <section
          id="studies"
          className="py-12 section-fade-in"
        >

          <h2 className="text-4xl font-bold mb-8 text-foreground">
            <span className="text-accent">//</span> Studies
          </h2>


          <div className="space-y-6">


            {/* Degree */}
            <div className="terminal-border bg-card p-6 rounded hover:glow-primary transition-all duration-300">

              <h3 className="text-xl font-semibold text-primary mb-2">
                Bachelor of Science
              </h3>

              <p className="text-muted-foreground mb-2">
                Pontifical Catholic University of Chile | 2019 - 2024
              </p>

              <p className="text-sm text-muted-foreground leading-relaxed">
                Major in Robotics Engineering, Minor in Automation Systems
                Engineering.
                <br />

                Academic Certificate in International Relationships.

                <br />
                <br />

                The program consists of a 6-year curriculum: 4 years of
                bachelor-level engineering, followed by 2 years of advanced
                engineering courses and a final thesis.

                <br />
                <br />

                The engineering program is ABET accredited.
              </p>

            </div>


            {/* Certifications */}
            <div className="terminal-border bg-card p-6 rounded hover:glow-primary transition-all duration-300">

              <h3 className="text-xl font-semibold text-primary mb-2">
                Certifications & Licenses
              </h3>

              <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">

                <li>
                  Heavy Machinery Operator — National Traffic Authority
                </li>

                <li>
                  Core Basics — Universal Robots
                </li>

                <li>
                  Explosives Handler Certification
                </li>

                <li>
                  RPA Operator — Chilean Civil Aviation Authority
                </li>

              </ul>

            </div>

          </div>

        </section>



        {/* ==================================================
            TEACHING
        ================================================== */}

        <section
          id="teaching"
          className="py-12 section-fade-in"
        >

          <h2 className="text-4xl font-bold mb-8 text-foreground">
            <span className="text-accent">//</span> Tutoring
          </h2>


          <div className="space-y-6">


            {/* Mobile Robotics */}
            <div className="terminal-border bg-card p-6 rounded hover:glow-primary transition-all duration-300">

              <h3 className="text-xl font-semibold text-primary mb-2">
                Mobile Robotics IIC2685
              </h3>

              <p className="text-muted-foreground mb-3">
                Pontifical Catholic University of Chile | 2022
              </p>

              <p className="text-sm text-muted-foreground leading-relaxed">
                Introduced students to ROS/ROS 2 publisher-subscriber
                communication through topics, as well as fundamental
                navigation, perception, and localization techniques.
              </p>

            </div>


            {/* Automatic Control */}
            <div className="terminal-border bg-card p-6 rounded hover:glow-primary transition-all duration-300">

              <h3 className="text-xl font-semibold text-primary mb-2">
                Automatic Control IEE2613
              </h3>

              <p className="text-muted-foreground mb-3">
                Pontifical Catholic University of Chile | 2023
              </p>

              <p className="text-sm text-muted-foreground leading-relaxed">
                Supported evaluation and grading of assignments, exams, and
                projects covering closed-loop control methods including PID,
                root locus, Nyquist analysis, Bode plots, and stability
                criteria.
              </p>

            </div>

          </div>

        </section>



        {/* ==================================================
            OTHER PROJECTS
        ================================================== */}

        <section
          id="portfolio"
          className="py-12 section-fade-in"
        >

          <h2 className="text-4xl font-bold mb-3 text-foreground">
            <span className="text-accent">//</span> Other Projects
          </h2>

          <p className="text-muted-foreground mb-8">
            Additional robotics, autonomy, control, perception, and software
            projects.
          </p>


          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >

            <CarouselContent>


              {/* Wall2 */}
              <CarouselItem className="basis-full md:basis-1/2">

                <div className="p-1">

                  <ProjectCard
                    title="Wall2 - Face Mask Collector Robot"
                    description="Autonomous robot developed to collect discarded face masks around the university campus following pandemic restrictions."
                    tech={[
                      "Python",
                      "Arduino",
                      "PID",
                      "OpenCV",
                      "Fusion 360",
                      "ML",
                      "KiCad",
                    ]}
                    github="https://github.com/mbflores3/Wall2---Face-Mask-Collector"
                    image="/images/Wall2Construction.jpeg"
                  />

                </div>

              </CarouselItem>



              {/* HOCBF / NMPC */}
              <CarouselItem className="basis-full md:basis-1/2">

                <div className="p-1">

                  <ProjectCard
                    title="Probabilistic NMPC + HOCBF for Quadrotor Collision Avoidance"
                    description="Research project investigating probabilistic collision avoidance for quadrotors through nonlinear model predictive control and higher-order control barrier functions."
                    tech={[
                      "Python",
                      "ROS 2",
                      "PX4",
                      "Docker",
                      "Gazebo",
                      "NMPC",
                      "HOCBF",
                    ]}
                    github="https://github.com/mbflores3"
                    image="/images/CollisionAvoidance.png"
                  />

                </div>

              </CarouselItem>



              {/* LAD */}
              <CarouselItem className="basis-full md:basis-1/2">

                <div className="p-1">

                  <ProjectCard
                    title="L.A.D. — Learning Autonomous Vehicles"
                    description="Visual programming and educational platform for building and learning ROS 2 autonomous vehicle systems through reusable block-based robotics components."
                    tech={[
                      "ROS 2",
                      "React",
                      "TypeScript",
                      "JavaScript",
                      "Nav2",
                      "PID",
                    ]}
                    github="https://github.com/mbflores3"
                    image="/images/simLAD.png"
                  />

                </div>

              </CarouselItem>



              {/* Taco Delivery */}
              <CarouselItem className="basis-full md:basis-1/2">

                <div className="p-1">

                  <ProjectCard
                    title="Taco Delivery Drone"
                    description="Computer-vision project for learning autonomous UAV precision landing in simulation through a taco-delivery scenario."
                    tech={[
                      "Python",
                      "ROS",
                      "Gazebo",
                      "MAVLink",
                      "OpenCV",
                      "Image Processing",
                    ]}
                    github="https://github.com/mbflores3"
                    image="/images/TacoDeliveryDrone.png"
                  />

                </div>

              </CarouselItem>



              {/* Collision Detector */}
              <CarouselItem className="basis-full md:basis-1/2">

                <div className="p-1">

                  <ProjectCard
                    title="Collision Detector"
                    description="Collision detection for an agricultural robot using XGBoost and ROS 2."
                    tech={[
                      "Python",
                      "Pandas",
                      "NumPy",
                      "Scikit-learn",
                      "ROS 2",
                      "XGBoost",
                    ]}
                    github="https://github.com/mbflores3/Colission-detection"
                    image="/images/CollisionDetection.png"
                  />

                </div>

              </CarouselItem>

            </CarouselContent>

            <CarouselPrevious />
            <CarouselNext />
            <CarouselDots />

          </Carousel>

        </section>



        {/* ==================================================
            TOOLS & TECHNOLOGIES
        ================================================== */}

        <section
          id="tools"
          className="py-12 section-fade-in"
        >

          <h2 className="text-4xl font-bold mb-8 text-foreground">
            <span className="text-accent">//</span> Tools & Technologies
          </h2>


          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">

            <ToolCard
              icon={Code2}
              name="Python"
              level="Advanced"
            />

            <ToolCard
              icon={Database}
              name="C++"
              level="Advanced"
            />

            <ToolCard
              icon={Cloud}
              name="ROS / ROS 2"
              level="Advanced"
            />

            <ToolCard
              icon={Brain}
              name="PyTorch"
              level="Advanced"
            />

            <ToolCard
              icon={Server}
              name="Gazebo"
              level="Advanced"
            />

            <ToolCard
              icon={Cpu}
              name="PX4"
              level="Intermediate"
            />

          </div>


          <div className="terminal-border bg-card/50 p-6 rounded">

            <h3 className="text-lg font-semibold text-primary mb-3">
              Additional Skills
            </h3>

            <div className="flex flex-wrap gap-2">

              {[
                "Git",
                "Linux",
                "Docker",
                "OpenCV",
                "MATLAB",
                "Altium Designer",
                "CAN / CANopen",
                "CODESYS",
                "PLC",
                "Nav2",
                "QGIS",
                "CloudCompare",
                "RS-485",
                "EtherCAT",
                "Shell Scripting",
                "VHDL",
                "JavaScript",
                "TypeScript",
                "HTML",
                "CSS",
                "MySQL",
                "SQLite",
              ].map((skill) => (

                <span
                  key={skill}
                  className="text-xs px-3 py-1 bg-secondary text-foreground rounded border border-border hover:border-primary transition-colors"
                >
                  {skill}
                </span>

              ))}

            </div>

          </div>

        </section>



        {/* ==================================================
            SPORTS
        ================================================== */}

        <section
          id="sports"
          className="py-12 section-fade-in"
        >

          <h2 className="text-4xl font-bold mb-8 text-foreground">
            <span className="text-accent">//</span> Sports
          </h2>


          <div className="terminal-border bg-card/50 p-8 rounded mb-8">

            <p className="text-xl text-muted-foreground mb-6">
              Sports that keep me humble, constantly learning, and give me a
              different perspective on the world.
            </p>

            <ul className="list-disc list-inside space-y-2 text-foreground">

              <li>
                <BookTooltip title="Boxing">
                  <strong>Boxing</strong>
                </BookTooltip>
              </li>

              <li>
                <BookTooltip title="Jiujitsu">
                  <strong>Brazilian Jiu-Jitsu</strong>
                </BookTooltip>
              </li>

              <li>
                <BookTooltip title="Mma">
                  <strong>MMA</strong>
                </BookTooltip>
              </li>

            </ul>

          </div>

        </section>



        {/* ==================================================
            CONTACT
        ================================================== */}

        <section
          id="contact"
          className="py-12 section-fade-in"
        >

          <h2 className="text-4xl font-bold mb-8 text-foreground">
            <span className="text-accent">//</span> Contact
          </h2>


          <div className="terminal-border bg-card/50 p-8 rounded mb-8">

            <p className="text-xl text-muted-foreground mb-8">
              Let's connect and discuss robotics, research, engineering
              opportunities, or interesting projects.
            </p>


            <div className="space-y-4">


              {/* Email */}
              <a
                href="mailto:mbflores3@uc.cl"
                className="flex items-center gap-4 text-foreground hover:text-primary transition-colors group"
              >

                <div className="p-3 bg-secondary rounded group-hover:bg-primary/20 transition-colors">
                  <Mail size={24} />
                </div>

                <div>
                  <p className="font-semibold">
                    Email
                  </p>

                  <p className="text-sm text-muted-foreground">
                    mbflores3@uc.cl
                  </p>
                </div>

              </a>


              {/* GitHub */}
              <a
                href="https://github.com/mbflores3"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-foreground hover:text-primary transition-colors group"
              >

                <div className="p-3 bg-secondary rounded group-hover:bg-primary/20 transition-colors">
                  <Github size={24} />
                </div>

                <div>
                  <p className="font-semibold">
                    GitHub
                  </p>

                  <p className="text-sm text-muted-foreground">
                    @mbflores3
                  </p>
                </div>

              </a>


              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/mario-flores-musso-6a3156235/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-foreground hover:text-primary transition-colors group"
              >

                <div className="p-3 bg-secondary rounded group-hover:bg-primary/20 transition-colors">
                  <Linkedin size={24} />
                </div>

                <div>
                  <p className="font-semibold">
                    LinkedIn
                  </p>

                  <p className="text-sm text-muted-foreground">
                    Mario Flores Musso
                  </p>
                </div>

              </a>

            </div>

          </div>


          {/* Footer */}
          <div className="text-center text-sm text-muted-foreground">

            <p>
              &copy; 2026 Mario Flores. Built with React + Vite + Tailwind CSS.
            </p>

          </div>

        </section>

      </main>

    </div>
  );
};

export default Index;
