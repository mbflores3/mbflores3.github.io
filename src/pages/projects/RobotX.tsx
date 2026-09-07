import { Link } from "react-router-dom";

const RobotX = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="max-w-5xl mx-auto px-6 py-16">

        <Link
          to="/#experience"
          className="text-accent hover:underline inline-block mb-10"
        >
          ← Back to portfolio
        </Link>

        <div className="mb-12">
          <p className="text-accent font-mono mb-3">
            2022 — 2023
          </p>

          <h1 className="text-5xl font-bold mb-4">
            Maritime RobotX UAV
          </h1>

          <p className="text-xl text-muted-foreground">
            Autonomous UAV precision landing on a moving WAM-V
          </p>
        </div>

        <img
          src="/images/projects/robotx/wamv.jpg"
          alt="WAM-V and autonomous UAV"
          className="w-full rounded-lg mb-12"
        />

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-5">
            <span className="text-accent">//</span> Overview
          </h2>

          <p>
            I served as the engineer responsible for the autonomous UAV learning and training pipeline, as well as precision landing capabilities for the Caleuche project in preparation for the Maritime RobotX Challenge. My work focused on developing and implementing an autonomous landing pipeline combining state estimation, target tracking, and guidance/control algorithms to enable reliable landings on a moving WAM-V surface vessel. Through iterative field testing and system tuning, I improved landing accuracy and repeatability under real operational conditions. The system integrated sensing and telemetry inputs from GNSS and onboard camera streams while addressing challenges such as platform motion, environmental disturbances, and communication variability. I also collaborated on system-level integration with the WAM-V autonomy stack and sensor suite—including LiDAR, GNSS, cameras, and hydrophones—supporting end-to-end autonomous mission execution and testing.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-5">
            <span className="text-accent">//</span> Technical Work
          </h2>

          <p className="text-muted-foreground leading-relaxed">
            The project involved state estimation, visual target
            detection and tracking, guidance and control, GNSS
            integration, onboard camera processing, and communication
            with the vessel autonomy stack.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-5">
            <span className="text-accent">//</span> Technologies
          </h2>

          <div className="flex flex-wrap gap-3">
            {[
              "Python",
              "ROS",
              "Computer Vision",
              "GNSS",
              "UAV",
              "Autonomous Systems",
            ].map((tech) => (
              <span
                key={tech}
                className="border border-border rounded-md px-3 py-2 text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6">
            <span className="text-accent">//</span> Gallery
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <img
              src="/images/projects/robotx/drone.jpg"
              alt="RobotX UAV"
              className="rounded-lg w-full"
            />

            <img
              src="/images/projects/robotx/landing.jpg"
              alt="Precision landing testing"
              className="rounded-lg w-full"
            />
          </div>
        </section>

      </div>
    </main>
  );
};

export default RobotX;
