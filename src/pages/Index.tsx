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
import { TimelineItem } from "@/components/TimelineItem";
import { ToolCard } from "@/components/ToolCard";


// ------------------------------------------------------
// Sports image tooltip
// ------------------------------------------------------

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


// ------------------------------------------------------
// Main page
// ------------------------------------------------------

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

            {/* Profile picture */}
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


            {/* Name / title */}
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


          {/* Hero buttons */}
          <div className="flex flex-wrap gap-4">

            <a
              href="#featured-work"
              className="px-6 py-3 bg-primary text-primary-foreground rounded glow-primary hover:bg-primary/90 transition-all duration-300 font-semibold"
            >
              View selected work
            </a>

            <a
              href="#experience"
              className="px-6 py-3 border border-border text-foreground rounded hover:bg-secondary transition-all duration-300"
            >
              Experience
            </a>

            <a
              href="#publications"
              className="px-6 py-3 border border-border text-foreground rounded hover:bg-secondary transition-all duration-300"
            >
              Publications
            </a>

          </div>

        </section>



        {/* ==================================================
            FEATURED WORK
        ================================================== */}

        <section
          id="featured-work"
          className="py-12 section-fade-in"
        >

          <div className="mb-8">

            <h2 className="text-4xl font-bold mb-3 text-foreground">
              <span className="text-accent">//</span> Featured Work
            </h2>

            <p className="text-muted-foreground max-w-2xl leading-relaxed">
              Selected robotics and autonomous systems projects spanning field
              deployment, research, perception, control, and multi-platform
              autonomy.
            </p>

          </div>


          <div className="grid md:grid-cols-2 gap-6">


            {/* ENAEX */}
            <Link
              to="/projects/enaexrobotics"
              className="group terminal-border bg-card rounded overflow-hidden hover:glow-primary transition-all duration-300"
            >

              <img
                src="/images/projects/enaex/enaex-hero.jpg"
                alt="Autonomous mining robotics"
                className="w-full h-52 object-cover"
              />

              <div className="p-6">

                <p className="text-xs text-accent font-mono mb-2">
                  FIELD ROBOTICS · AUTONOMY
                </p>

                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Autonomous Mining Robotics
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  Autonomous navigation and semi-autonomous robotic operations
                  for open-pit and underground mining environments.
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {["ROS", "GNSS", "LiDAR", "PLC"].map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 border border-border rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <span className="text-sm text-primary group-hover:underline">
                  View project →
                </span>

              </div>

            </Link>



            {/* SPAE */}
            <Link
              to="/projects/spaegroup"
              className="group terminal-border bg-card rounded overflow-hidden hover:glow-primary transition-all duration-300"
            >

              <img
                src="/images/projects/spae/spae-hero.jpg"
                alt="Autonomous UAV research"
                className="w-full h-52 object-cover"
              />

              <div className="p-6">

                <p className="text-xs text-accent font-mono mb-2">
                  AUTONOMY RESEARCH · UAV
                </p>

                <h3 className="text-xl font-semibold text-foreground mb-3">
                  UAV Navigation Under Uncertainty
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  LiDAR-equipped UAV research combining ROS 2/Gazebo
                  simulation, reinforcement learning, NMPC, and HOCBF
                  safety constraints.
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {["ROS 2", "PX4", "LiDAR", "NMPC"].map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 border border-border rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <span className="text-sm text-primary group-hover:underline">
                  View project →
                </span>

              </div>

            </Link>



            {/* ROBOTX */}
            <Link
              to="/projects/robotx"
              className="group terminal-border bg-card rounded overflow-hidden hover:glow-primary transition-all duration-300"
            >

              <img
                src="/images/projects/robotx/robotx-hero.jpg"
                alt="Team Caleuche Maritime RobotX"
                className="w-full h-52 object-cover"
              />

              <div className="p-6">

                <p className="text-xs text-accent font-mono mb-2">
                  MULTI-PLATFORM ROBOTICS
                </p>

                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Maritime RobotX
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  UAV precision landing on an autonomous WAM-V and position
                  and velocity control for a BlueROV in an international
                  robotics competition.
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {["ROS", "OpenCV", "UAV", "BlueROV"].map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 border border-border rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <span className="text-sm text-primary group-hover:underline">
                  View project →
                </span>

              </div>

            </Link>



            {/* TARLAB */}
            <Link
              to="/projects/tarlab"
              className="group terminal-border bg-card rounded overflow-hidden hover:glow-primary transition-all duration-300"
            >

              <img
                src="/images/projects/tarlab/tarlab-hero.jpg"
                alt="Tree crown detection from UAV imagery"
                className="w-full h-52 object-cover"
              />

              <div className="p-6">

                <p className="text-xs text-accent font-mono mb-2">
                  PERCEPTION · MACHINE LEARNING
                </p>

                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Tree Crown Detection & Delineation
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  Benchmarking, fine-tuning, and synthetic-label training for
                  tree crown detection and segmentation from UAV imagery.
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {[
                    "Python",
                    "PyTorch",
                    "UAV Imagery",
                    "QGIS",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 border border-border rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <span className="text-sm text-primary group-hover:underline">
                  View project →
                </span>

              </div>

            </Link>

          </div>

        </section>



        {/* ==================================================
            EXPERIENCE
        ================================================== */}

        <section
          id="experience"
          className="py-12 section-fade-in"
        >

          <h2 className="text-4xl font-bold mb-8 text-foreground">
            <span className="text-accent">//</span> Experience
          </h2>

          <div className="space-y-0">

            <TimelineItem
              year="March 2025 - Present"
              title="Robotics Autonomy Project Engineer"
              organization="Enaex Robotics"
              description="Worked on the autonomy development of two robotic systems for mining explosive-loading operations: an open-pit platform focused on autonomous navigation and an underground platform focused on semi-autonomous face-loading operations. My work involved robotics software architecture, sensor and communication-system integration, GNSS, CAN networks, PLC control logic, and field-system robustness."
              projectUrl="/projects/enaexrobotics"
            />


            <TimelineItem
              year="January 2025 - Present"
              title="Researcher"
              organization="SPAE Group"
              description="Developed and integrated a LiDAR-equipped UAV platform and its ROS 2/Gazebo simulation, including custom mechanical integration and physically informed inertial models. Collaborated on deep reinforcement learning research for navigation under uncertain occupancy maps and currently investigate probabilistic NMPC + HOCBF methods for safe UAV navigation under uncertainty."
              projectUrl="/projects/spaegroup"
            />


            <TimelineItem
              year="December 2025 - Present"
              title="Researcher"
              organization="TarLab"
              description="Conducted research on individual tree crown detection and delineation from UAV imagery, covering semi-supervised annotation, Canopy Height Model generation, pretrained-model benchmarking, fine-tuning, and training with synthetic labels. The work investigates model generalization and data-efficient approaches for adapting forest perception models to new aerial surveys."
              projectUrl="/projects/tarlab"
            />


            <TimelineItem
              year="February 2024 - March 2025"
              title="Electronics Design Engineer"
              organization="2X Automation Inc."
              description="Designed custom embedded electronic systems and PCBs from customer requirements through manufacturing release. My work included schematic design, component selection, power and motor-control circuitry, RS-485/RS-232/Ethernet/USB interfaces, PCB layout and routing in Altium Designer, and fabrication-file verification for production."
              projectUrl="/projects/xautomation"
            />


            <TimelineItem
              year="2022 - 2023 / 2026 - Present"
              title="Robotics Engineer"
              organization="Team Caleuche UC"
              description="Developed robotic systems for the international Maritime RobotX competition across two project stages: a custom UAV with autonomous precision landing on a WAM-V in 2022, and position and velocity control for a BlueROV in 2026. The work spans aerial, surface, and underwater robotics, hardware integration, perception, and control."
              projectUrl="/projects/robotx"
            />


            <TimelineItem
              year="December 2022 - March 2023"
              title="Robotics Operation Engineer"
              organization="Mariscope SpA"
              description="Maintained, repaired, and operated tethered ROV systems for underwater inspections, focusing on electronics reliability, RS-485 communications, power systems, and rapid field troubleshooting. I later led ROV operations during an approximately 24-day vessel-based inspection campaign across the Strait of Magellan and Patagonian fjords."
              projectUrl="/projects/mariscope"
            />


            <TimelineItem
              year="July 2021 - March 2022"
              title="Undergraduate Researcher"
              organization="Pontifical Catholic University of Chile"
              description="Conducted undergraduate research on autonomous UAV precision landing under the supervision of Prof. Giancarlo Troni. Built and integrated a custom UAV platform and developed a computer-vision-based landing pipeline using Python, ROS, and OpenCV. The research later supported my work with Team Caleuche for Maritime RobotX 2022."
              projectUrl="/projects/robotx"
            />

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
                Investigates multispectral image reconstruction using
                conditional adversarial networks, with particular attention
                to the effect of changing illumination conditions on
                reconstruction performance and robustness.
              </p>

              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <FileText size={16} />
                <span>Research publication</span>
              </div>

            </div>


            {/* Occupancy probability */}
            <div className="terminal-border bg-card p-6 rounded hover:glow-primary transition-all duration-300">

              <h3 className="text-xl font-semibold text-primary mb-2">
                Occupancy Probability Maps Synthesis for Deep Reinforcement
                Learning-Based Navigation in Uncertain Environments
              </h3>

              <p className="text-muted-foreground mb-3">
                Research manuscript
              </p>

              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Investigates probabilistic representations of environmental
                occupancy for deep reinforcement learning-based autonomous
                navigation, enabling navigation policies to account for
                uncertainty rather than relying exclusively on deterministic
                obstacle representations.
              </p>

              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <FileText size={16} />
                <span>Research publication</span>
              </div>

            </div>

          </div>

        </section>



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
            <span className="text-accent">//</span> Teaching
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

              <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
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

              <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
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
            Additional robotics, control, perception, and software projects.
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



              {/* NMPC + HOCBF */}
              <CarouselItem className="basis-full md:basis-1/2">

                <div className="p-1">

                  <ProjectCard
                    title="Probabilistic NMPC + HOCBF for Quadrotor Collision Avoidance"
                    description="Research project investigating probabilistic collision avoidance for quadrotors through the combination of nonlinear model predictive control and higher-order control barrier functions."
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



              {/* Taco Drone */}
              <CarouselItem className="basis-full md:basis-1/2">

                <div className="p-1">

                  <ProjectCard
                    title="Taco Delivery Drone"
                    description="Computer-vision project for learning autonomous UAV precision landing in simulation, developed around a playful taco-delivery scenario."
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


          {/* Main tools */}
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


          {/* Additional tools */}
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
                  <p className="font-semibold">Email</p>
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
                  <p className="font-semibold">GitHub</p>
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
                  <p className="font-semibold">LinkedIn</p>
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
