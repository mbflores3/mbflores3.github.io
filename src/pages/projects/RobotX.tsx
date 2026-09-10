import { Link } from "react-router-dom";

const RobotX = () => {
  const technologies = [
    "Python",
    "ROS / ROS 2",
    "Computer Vision",
    "Gazebo",
    "UAV",
    "BlueROV",
    "3D Printing",
    "GNSS",
    "Feedback Control",
    "Autonomous Systems",
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
            2022 & 2026 · Team Caleuche · Maritime RobotX
          </p>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Multi-Platform Robotics for Maritime RobotX
          </h1>

          <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
            Development of aerial and underwater robotic systems for an
            international maritime robotics competition, including UAV
            precision landing on an autonomous WAM-V and position and velocity
            control for a BlueROV.
          </p>
        </div>

        {/* Hero */}
        <img
          src="/images/projects/robotx/robotx-hero.jpg"
          alt="Team Caleuche robotic platforms for Maritime RobotX"
          className="w-full max-h-[520px] object-cover rounded-lg mb-16"
        />

        {/* Overview */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">
            <span className="text-accent">//</span> Overview
          </h2>

          <div className="space-y-5 text-muted-foreground leading-relaxed">
            <p>
              Team Caleuche was created at Pontificia Universidad Católica de
              Chile after the university was invited to participate in the
              international Maritime RobotX competition. My involvement with
              the team has covered two different robotic platforms and two
              stages of the project.
            </p>

            <p>
              In 2022, I worked on the development of an autonomous UAV
              designed to operate together with the team's WAM-V surface
              vehicle. I built the aerial platform using 3D-printed structural
              components and integrated the required hardware, including
              motors, propellers, ESCs, flight-control electronics, and an
              onboard camera. I then worked on implementing autonomous
              precision landing so that the UAV could land on the WAM-V.
            </p>

            <p>
              In 2026, I returned to the project to work on an underwater
              robotic platform incorporated into the competition system. My
              responsibility focuses on the development of position and
              velocity control for a BlueROV, providing the motion-control
              capabilities required to execute the different mission tasks
              defined by the competition.
            </p>
          </div>
        </section>

        {/* Robotic Platforms */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">
            <span className="text-accent">//</span> Robotic Platforms
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            {/* UAV */}
            <div className="border border-border rounded-lg overflow-hidden">
              <img
                src="/images/projects/robotx/uav-platform.jpg"
                alt="Custom UAV developed for Maritime RobotX"
                className="w-full h-64 object-cover"
              />

              <div className="p-6">
                <p className="text-accent font-mono text-sm mb-2">
                  2022 · AERIAL ROBOTICS
                </p>

                <h3 className="text-2xl font-semibold mb-3">
                  Autonomous UAV
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  Designed and assembled a custom UAV platform and developed
                  precision-landing capabilities for autonomous operation from
                  a moving WAM-V surface vehicle.
                </p>
              </div>
            </div>

            {/* BlueROV */}
            <div className="border border-border rounded-lg overflow-hidden">
              <img
                src="/images/projects/robotx/bluerov.jpg"
                alt="BlueROV underwater robotic platform"
                className="w-full h-64 object-cover"
              />

              <div className="p-6">
                <p className="text-accent font-mono text-sm mb-2">
                  2026 · UNDERWATER ROBOTICS
                </p>

                <h3 className="text-2xl font-semibold mb-3">
                  BlueROV Control
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  Development of position and velocity control capabilities for
                  an underwater vehicle integrated into the team's robotic
                  system for competition mission execution.
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

            {/* UAV construction */}
            <div>
              <h3 className="text-xl font-semibold mb-3">
                UAV Design & Hardware Integration
              </h3>

              <p className="text-muted-foreground leading-relaxed">
                I participated in the end-to-end development of the UAV
                platform, starting from the mechanical structure and
                3D-printed components. I integrated the propulsion and control
                hardware, including brushless motors, propellers, ESCs,
                flight-control electronics, and the onboard camera required for
                autonomous landing.
              </p>
            </div>

            {/* Precision landing */}
            <div>
              <h3 className="text-xl font-semibold mb-3">
                Autonomous Precision Landing
              </h3>

              <p className="text-muted-foreground leading-relaxed">
                I worked on the development of a vision-based precision-landing
                pipeline that enabled the UAV to detect and track its landing
                target and use this information to guide the vehicle during the
                landing maneuver. The main challenge was performing the
                operation on a WAM-V whose position changed continuously while
                operating on the water.
              </p>
            </div>

            {/* WAM-V integration */}
            <div>
              <h3 className="text-xl font-semibold mb-3">
                Integration with the WAM-V
              </h3>

              <p className="text-muted-foreground leading-relaxed">
                The UAV operated as part of a broader autonomous maritime
                robotic system. Development therefore required integration and
                testing with the WAM-V platform and its onboard sensing and
                autonomy infrastructure, connecting aerial robotics with the
                surface vehicle's mission execution.
              </p>
            </div>

            {/* BlueROV */}
            <div>
              <h3 className="text-xl font-semibold mb-3">
                BlueROV Position & Velocity Control
              </h3>

              <p className="text-muted-foreground leading-relaxed">
                For the 2026 stage of the project, I am responsible for
                developing the control capabilities of the BlueROV. My work
                focuses on position and velocity control so that higher-level
                autonomy modules can command the underwater vehicle reliably
                while executing the mission tasks required by the competition.
              </p>
            </div>

            {/* Multi-platform */}
            <div>
              <h3 className="text-xl font-semibold mb-3">
                Multi-Platform Robotic Integration
              </h3>

              <p className="text-muted-foreground leading-relaxed">
                Across both stages of the project, I have worked with robotic
                systems operating in fundamentally different domains: aerial,
                surface, and underwater environments. This required integrating
                sensing, control, communication, and autonomy components into
                systems capable of operating as part of a common maritime
                robotics mission.
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
              src="/images/projects/robotx/uav-build.jpg"
              alt="UAV construction and hardware integration"
              className="rounded-lg w-full h-80 object-cover"
            />

            <img
              src="/images/projects/robotx/uav-wamv.jpg"
              alt="UAV operating together with the WAM-V"
              className="rounded-lg w-full h-80 object-cover"
            />

            <img
              src="/images/projects/robotx/precision-landing.jpg"
              alt="UAV precision landing development"
              className="rounded-lg w-full h-80 object-cover"
            />

            <img
              src="/images/projects/robotx/bluerov-simulation.jpg"
              alt="BlueROV control development and simulation"
              className="rounded-lg w-full h-80 object-cover"
            />

          </div>
        </section>

      </div>
    </main>
  );
};

export default RobotX;
