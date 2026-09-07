const RobotX = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="max-w-5xl mx-auto px-6 py-16">

        <a
          href="/"
          className="text-accent hover:underline inline-block mb-10"
        >
          ← Back to portfolio
        </a>

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

          <p className="text-muted-foreground leading-relaxed">
            As Lead UAV Engineer for Caleuche UC, I worked on the
            development of autonomous precision landing capabilities
            for a UAV operating from a moving WAM-V surface vessel
            during the Maritime RobotX Challenge.
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
