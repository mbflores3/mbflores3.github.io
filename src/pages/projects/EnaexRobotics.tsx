import { Link } from "react-router-dom";

const EnaexRobotics = () => {
  const technologies = [
    "Python",
    "ROS / ROS 2",
    "GNSS",
    "LiDAR",
    "PLC",
    "CAN Bus",
    "Rajant",
    "Industrial Networking",
    "Autonomous Navigation",
  ];

  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="max-w-5xl mx-auto px-6 py-16">

        {/* Back */}
        <Link
          to="/"
          className="text-accent hover:underline inline-block mb-10"
        >
          ← Back to portfolio
        </Link>

        {/* Header */}
        <div className="mb-12">
          <p className="text-accent font-mono mb-3">
            2025 — Present · Enaex S.A.
          </p>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Robotics Autonomy Project Engineer
          </h1>

          <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
            Autonomous and semi-autonomous robotic systems for
            explosive-loading operations in open-pit and underground mining.
          </p>
        </div>

        {/* Hero image */}
        <img
          src="/images/projects/enaex/enaex-hero.jpg"
          alt="Enaex robotic system operating in a mining environment"
          className="w-full max-h-[520px] object-cover rounded-lg mb-16"
        />

        {/* Overview */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">
            <span className="text-accent">//</span> Overview
          </h2>

          <div className="space-y-5 text-muted-foreground leading-relaxed">
            <p>
              My work at Enaex involves the development of autonomy
              capabilities for two robotic platforms designed for
              explosive-loading operations in mining: one operating in
              open-pit environments and another designed for underground
              mining.
            </p>

            <p>
              I joined the projects with the primary objective of advancing
              their autonomous capabilities. For the open-pit platform, the
              main challenge was developing reliable autonomous navigation
              for operation in a real mining environment. For the underground
              platform, the objective was to automate part of the face-loading
              process, progressing toward semi-autonomous operation of the
              robotic manipulator.
            </p>

            <p>
              Achieving these objectives required more than implementing
              autonomy algorithms. A significant part of my work involved
              improving software modularity, strengthening sensing and
              communication systems, debugging industrial control logic, and
              increasing the overall robustness of the robotic platforms.
            </p>
          </div>
        </section>

        {/* Two robotic platforms */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">
            <span className="text-accent">//</span> Robotic Platforms
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            {/* Open Pit */}
            <div className="border border-border rounded-lg overflow-hidden">
              <img
                src="/images/projects/enaex/open-pit-robot.jpeg"
                alt="Open-pit autonomous robotic platform"
                className="w-full h-64 object-cover"
              />

              <div className="p-6">
                <p className="text-accent font-mono text-sm mb-2">
                  OPEN-PIT MINING
                </p>

                <h3 className="text-2xl font-semibold mb-3">
                  Autonomous Navigation
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  Development and integration of autonomous navigation
                  capabilities using GNSS, onboard sensing, mapping, robotic
                  software, and industrial control interfaces.
                </p>
              </div>
            </div>

            {/* Underground */}
            <div className="border border-border rounded-lg overflow-hidden">
              <img
                src="/images/projects/enaex/underground-robot.jpeg"
                alt="Underground robotic platform"
                className="w-full h-64 object-cover"
              />

              <div className="p-6">
                <p className="text-accent font-mono text-sm mb-2">
                  UNDERGROUND MINING
                </p>

                <h3 className="text-2xl font-semibold mb-3">
                  Semi-Autonomous Face Loading
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  Development of semi-autonomous robotic behaviors and
                  automated sequences for underground face-loading operations,
                  integrating robotic logic with PLC-based industrial control.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* Technical Work */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">
            <span className="text-accent">//</span> Technical Work
          </h2>

          <div className="space-y-10">

            {/* Navigation */}
            <div>
              <h3 className="text-xl font-semibold mb-3">
                Autonomous Navigation
              </h3>

              <p className="text-muted-foreground leading-relaxed">
                On the open-pit robotic platform, I contributed to the
                development and implementation of autonomous navigation
                capabilities by integrating localization, perception, mapping,
                and control components. This involved working with
                GNSS-based positioning, onboard sensors, operational maps,
                and the interfaces connecting the robotics software stack
                with the robot's industrial control architecture.
              </p>
            </div>

            {/* Underground */}
            <div>
              <h3 className="text-xl font-semibold mb-3">
                Semi-Autonomous Underground Operations
              </h3>

              <p className="text-muted-foreground leading-relaxed">
                For the underground platform, my work focused on supporting
                the transition from teleoperated operation toward
                semi-autonomous face loading. I worked on the integration of
                higher-level robotic behaviors with the existing industrial
                control system and implemented modifications to PLC logic to
                correct system behavior, coordinate subsystems, and support
                automated operational sequences.
              </p>
            </div>

            {/* Robustness */}
            <div>
              <h3 className="text-xl font-semibold mb-3">
                System Robustness & Integration
              </h3>

              <p className="text-muted-foreground leading-relaxed">
                A significant part of the engineering effort involved
                improving the reliability and modularity of the existing
                platforms. I worked on restructuring and debugging software
                components, improving interfaces between navigation, sensing,
                communication, and control modules, and diagnosing failures
                across the robotic system.
              </p>
            </div>

            {/* Hardware */}
            <div>
              <h3 className="text-xl font-semibold mb-3">
                Sensors & Industrial Communications
              </h3>

              <p className="text-muted-foreground leading-relaxed">
                I also worked on the integration, configuration, and
                validation of hardware infrastructure including GNSS
                equipment, onboard sensors, industrial communication systems,
                CAN networks, and wireless communication links. These efforts
                were particularly important for achieving reliable operation
                under demanding field conditions.
              </p>
            </div>

          </div>
        </section>

        {/* Technologies */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">
            <span className="text-accent">//</span> Technologies
          </h2>

          <div className="flex flex-wrap gap-3">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="border border-border rounded-md px-3 py-2 text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Gallery */}
        <section>
          <h2 className="text-3xl font-bold mb-8">
            <span className="text-accent">//</span> Gallery
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            <img
              src="/images/projects/enaex/field-operation-1.jpg"
              alt="Field operation with Enaex robotic platform"
              className="rounded-lg w-full h-80 object-cover"
            />

            <img
              src="/images/projects/enaex/field-operation-2.jpg"
              alt="Robotic system during mining field testing"
              className="rounded-lg w-full h-80 object-cover"
            />

            <img
              src="/images/projects/enaex/navigation-system.jpg"
              alt="Autonomous navigation system"
              className="rounded-lg w-full h-80 object-cover"
            />

            <img
              src="/images/projects/enaex/underground-operation.jpg"
              alt="Underground robotic operation"
              className="rounded-lg w-full h-80 object-cover"
            />

          </div>
        </section>

      </div>
    </main>
  );
};

export default EnaexRobotics;
