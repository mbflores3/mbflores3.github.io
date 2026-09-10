import { Link } from "react-router-dom";

const RobotX = () => {
  const technologies = [
    "Python",
    "ROS / ROS 2",
    "OpenCV",
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
            2021 — 2022 & 2026 · Team Caleuche · Maritime RobotX
          </p>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Multi-Platform Robotics for Maritime RobotX
          </h1>

          <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
            From undergraduate research on vision-based UAV precision landing
            to aerial, surface, and underwater robotic systems developed for
            the international Maritime RobotX competition.
          </p>
        </div>

        {/* Hero */}
        <img
          src="/images/Caleuche1.png"
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
              the team has extended across multiple years and robotic
              platforms, combining undergraduate research, aerial robotics,
              autonomous surface systems, and underwater robotics.
            </p>

            <p>
              My first contribution originated from undergraduate research on
              autonomous UAV precision landing under the supervision of Prof.
              Giancarlo Troni. I built and integrated a custom UAV platform and
              developed a computer-vision-based precision landing system using
              Python, ROS, and OpenCV.
            </p>

            <p>
              This research became directly connected to Team Caleuche's
              participation in Maritime RobotX 2022, where the precision
              landing problem evolved toward enabling the UAV to autonomously
              land on the team's WAM-V surface vehicle while operating on the
              water.
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

        {/* Undergraduate Research */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">
            <span className="text-accent">//</span> Undergraduate Research
          </h2>

          <div className="grid md:grid-cols-2 gap-8 items-center">

            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <div>
                <p className="text-accent font-mono text-sm mb-2">
                  2021 — 2022 · UAV PRECISION LANDING
                </p>

                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  Vision-Based Autonomous Landing
                </h3>
              </div>

              <p>
                Under the supervision of Prof. Giancarlo Troni, I conducted
                undergraduate research on autonomous UAV precision landing.
                The objective was to investigate how onboard computer vision
                could be used to detect a landing target and autonomously guide
                a multirotor toward it.
              </p>

              <p>
                I built and integrated the experimental UAV platform,
                including its structural components, brushless motors,
                propellers, ESCs, flight-control electronics, and onboard
                camera. This work involved both hardware integration and
                software development as part of a complete robotic system.
              </p>

              <p>
                On the software side, I implemented a computer-vision-based
                landing pipeline using Python, ROS, and OpenCV. Camera imagery
                was processed to detect and track the landing target, providing
                information to the landing logic used to guide the UAV during
                its final approach.
              </p>
            </div>

            <img
              src="/images/research-uav.jpeg"
              alt="UAV used for undergraduate precision landing research"
              className="rounded-lg w-full"
            />

          </div>

          {/* Optional research images */}
          <div className="grid md:grid-cols-2 gap-6 mt-8">

            <img
              src="/images/research-uav-build.jpeg"
              alt="Experimental UAV platform development"
              className="rounded-lg w-full h-72 object-cover"
            />

            <img
              src="/images/opencv-landing1.jpeg"
              alt="OpenCV target detection for UAV precision landing"
              className="rounded-lg w-full h-72 object-cover"
            />

          </div>
        </section>

        {/* Research to Competition */}
        <section className="mb-16">
          <div className="border border-border rounded-lg p-7">
            <p className="text-accent font-mono text-sm mb-3">
              RESEARCH → FIELD APPLICATION
            </p>

            <h3 className="text-2xl font-semibold mb-4">
              From Precision Landing Research to Maritime RobotX
            </h3>

            <p className="text-muted-foreground leading-relaxed">
              The undergraduate research provided the technical foundation for
              my later work with Team Caleuche. The initial precision-landing
              problem was extended from a controlled experimental scenario to
              the more demanding task of landing on a WAM-V surface vehicle,
              where the landing platform itself moved as a consequence of
              vessel motion and environmental conditions.
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
                src="/images/Caleuche2.png"
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
                  Extended my undergraduate precision-landing research into a
                  competition-oriented UAV capable of operating together with
                  the team's autonomous WAM-V surface vehicle.
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

            {/* UAV Construction */}
            <div>
              <h3 className="text-xl font-semibold mb-3">
                UAV Design & Hardware Integration
              </h3>

              <p className="text-muted-foreground leading-relaxed">
                I participated in the end-to-end development of the UAV
                platform, starting from its mechanical structure and
                3D-printed components. I integrated the propulsion and control
                hardware, including brushless motors, propellers, ESCs,
                flight-control electronics, and the onboard camera required
                for autonomous landing.
              </p>
            </div>

            {/* Vision */}
            <div>
              <h3 className="text-xl font-semibold mb-3">
                Computer Vision & Autonomous Precision Landing
              </h3>

              <p className="text-muted-foreground leading-relaxed">
                Starting from my undergraduate research, I developed a
                computer-vision-based precision landing pipeline using Python,
                ROS, and OpenCV. The system processed onboard camera imagery to
                detect and track a visual landing target and used this
                information to support guidance of the UAV during its approach.
              </p>

              <p className="text-muted-foreground leading-relaxed mt-4">
                For Maritime RobotX, this work was extended to the more
                challenging problem of landing on a WAM-V operating on the
                water, introducing platform motion and real-world
                environmental variability into the landing problem.
              </p>
            </div>

            {/* WAM-V */}
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
                developing the motion-control capabilities of the BlueROV. My
                work focuses on closed-loop position and velocity control so
                that higher-level autonomy modules can command the underwater
                vehicle reliably while executing the mission tasks required by
                the competition.
              </p>
            </div>

            {/* Multi-platform */}
            <div>
              <h3 className="text-xl font-semibold mb-3">
                Multi-Platform Robotic Integration
              </h3>

              <p className="text-muted-foreground leading-relaxed">
                Across the different stages of Team Caleuche, I have worked
                with robotic systems operating in aerial, surface, and
                underwater environments. This has involved integrating
                sensing, perception, control, communication, and autonomy
                components across platforms with very different physical
                characteristics and operational constraints.
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
