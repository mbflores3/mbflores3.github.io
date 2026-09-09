import { Link } from "react-router-dom";

const SpaeGroup = () => {
  const technologies = [
    "Python",
    "C++",
    "ROS 2",
    "Gazebo",
    "PX4",
    "LiDAR",
    "RViz",
    "Reinforcement Learning",
    "NMPC",
    "HOCBF",
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
            2025 — Present · SPAE Group
          </p>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Autonomous UAV Navigation & Safety Under Uncertainty
          </h1>

          <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
            Development of a LiDAR-equipped UAV research platform and
            ROS 2/Gazebo simulation for learning- and model-based autonomous
            navigation under uncertain environments.
          </p>
        </div>

        {/* Hero */}
        <img
          src="/images/projects/spae/spae-hero.jpg"
          alt="LiDAR-equipped UAV research platform"
          className="w-full max-h-[520px] object-cover rounded-lg mb-16"
        />

        {/* Overview */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">
            <span className="text-accent">//</span> Overview
          </h2>

          <div className="space-y-5 text-muted-foreground leading-relaxed">
            <p>
              My work at SPAE Group focuses on autonomous UAV navigation under
              uncertainty, spanning experimental platform development,
              robotic simulation, learning-based navigation, and
              safety-aware control.
            </p>

            <p>
              I initially worked on enabling a laboratory UAV as an
              experimental platform for autonomous navigation research. This
              involved designing a custom LiDAR mounting structure, physically
              integrating the sensor with the aircraft, and preparing the
              platform for perception and navigation experiments.
            </p>

            <p>
              I then developed a corresponding ROS 2 and Gazebo simulation
              using the STL models of the UAV, LiDAR mount, and LiDAR sensor.
              Physical parameters, including mass properties and inertia
              tensors, were incorporated with the objective of reproducing the
              real platform as closely as possible for algorithm development
              and validation.
            </p>

            <p>
              Building on this platform, I collaborated with master's and PhD
              researchers on deep reinforcement learning for navigation using
              probabilistic occupancy representations. In parallel, I am
              currently investigating probabilistic formulations combining
              Nonlinear Model Predictive Control (NMPC) and Higher-Order
              Control Barrier Functions (HOCBFs) for uncertainty-aware and
              safety-constrained UAV navigation.
            </p>
          </div>
        </section>

        {/* Platform Development */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">
            <span className="text-accent">//</span> Experimental Platform
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            {/* UAV */}
            <div className="border border-border rounded-lg overflow-hidden">
              <img
                src="/images/projects/spae/uav-platform.jpg"
                alt="Laboratory UAV platform"
                className="w-full h-64 object-cover"
              />

              <div className="p-6">
                <p className="text-accent font-mono text-sm mb-2">
                  PHYSICAL PLATFORM
                </p>

                <h3 className="text-2xl font-semibold mb-3">
                  UAV Research Platform
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  Preparation and integration of a laboratory multirotor as an
                  experimental platform for autonomous navigation and
                  perception research.
                </p>
              </div>
            </div>

            {/* LiDAR */}
            <div className="border border-border rounded-lg overflow-hidden">
              <img
                src="/images/projects/spae/lidar-mount.jpg"
                alt="Custom LiDAR mounting structure"
                className="w-full h-64 object-cover"
              />

              <div className="p-6">
                <p className="text-accent font-mono text-sm mb-2">
                  SENSOR INTEGRATION
                </p>

                <h3 className="text-2xl font-semibold mb-3">
                  Custom LiDAR Integration
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  Designed a custom mechanical mount and integrated a LiDAR
                  sensor with the UAV to provide environmental information for
                  navigation and obstacle-aware autonomy.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* Simulation */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">
            <span className="text-accent">//</span> ROS 2 & Gazebo Simulation
          </h2>

          <div className="grid md:grid-cols-2 gap-8 items-center">

            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                I developed a simulated counterpart of the experimental UAV
                using ROS 2 and Gazebo. The aircraft geometry, custom LiDAR
                mount, and LiDAR sensor were incorporated using their
                corresponding STL models, reproducing the physical
                configuration of the laboratory platform.
              </p>

              <p>
                The model also included physical properties such as mass
                distribution and inertia tensors to obtain dynamics that more
                closely approximate the real vehicle.
              </p>

              <p>
                This simulation provides a reproducible environment for
                developing and evaluating perception, navigation, and control
                algorithms before deployment on the physical UAV.
              </p>
            </div>

            <img
              src="/images/projects/spae/gazebo-model.jpg"
              alt="UAV simulation in Gazebo"
              className="rounded-lg w-full"
            />

          </div>
        </section>

        {/* Research */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">
            <span className="text-accent">//</span> Research
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            {/* RL */}
            <div className="border border-border rounded-lg p-7">
              <p className="text-accent font-mono text-sm mb-3">
                LEARNING-BASED NAVIGATION
              </p>

              <h3 className="text-2xl font-semibold mb-4">
                Deep Reinforcement Learning
              </h3>

              <p className="text-muted-foreground leading-relaxed mb-4">
                I collaborate with master's and PhD researchers on the
                synthesis of occupancy probability maps for deep
                reinforcement learning-based UAV navigation in uncertain
                environments.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                The research investigates how probabilistic occupancy
                information can represent uncertainty in the environment and
                how this information can be incorporated into a reinforcement
                learning framework so that the UAV can learn navigation
                policies that account for uncertain obstacle information.
              </p>
            </div>

            {/* NMPC + HOCBF */}
            <div className="border border-border rounded-lg p-7">
              <p className="text-accent font-mono text-sm mb-3">
                MODEL-BASED SAFE CONTROL
              </p>

              <h3 className="text-2xl font-semibold mb-4">
                Probabilistic NMPC + HOCBF
              </h3>

              <p className="text-muted-foreground leading-relaxed mb-4">
                In parallel, I am conducting research on an uncertainty-aware
                control framework combining Nonlinear Model Predictive Control
                (NMPC) with Higher-Order Control Barrier Functions (HOCBFs).
              </p>

              <p className="text-muted-foreground leading-relaxed">
                The research explores how probabilistic information about the
                environment can be incorporated into predictive optimization
                and safety constraints, with the objective of generating
                dynamically feasible trajectories while explicitly accounting
                for uncertainty and collision avoidance.
              </p>
            </div>

          </div>
        </section>

        {/* Technical Work */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">
            <span className="text-accent">//</span> Technical Work
          </h2>

          <div className="space-y-10">

            <div>
              <h3 className="text-xl font-semibold mb-3">
                Mechanical & Sensor Integration
              </h3>

              <p className="text-muted-foreground leading-relaxed">
                Designed and integrated the LiDAR mounting system for the
                laboratory UAV, enabling the sensor to become part of the
                experimental autonomy platform. This work connected mechanical
                design with sensing requirements and robotic system
                integration.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">
                Robot Modeling & Simulation
              </h3>

              <p className="text-muted-foreground leading-relaxed">
                Integrated the UAV, LiDAR mount, and sensor geometries into a
                ROS 2/Gazebo simulation using their STL models and physical
                parameters. Mass and inertia properties were incorporated to
                obtain a simulated platform representative of the real
                vehicle.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">
                Navigation Under Uncertainty
              </h3>

              <p className="text-muted-foreground leading-relaxed">
                Contributed to research investigating probabilistic occupancy
                representations for deep reinforcement learning-based
                navigation, focusing on autonomous decision-making when
                environmental information is uncertain rather than completely
                deterministic.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">
                Optimization-Based Safe Control
              </h3>

              <p className="text-muted-foreground leading-relaxed">
                Currently investigating probabilistic NMPC and HOCBF methods
                for UAV navigation, combining trajectory optimization with
                formal safety constraints to study autonomous motion in
                uncertain environments.
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
              src="/images/projects/spae/uav-front.jpg"
              alt="Laboratory UAV"
              className="rounded-lg w-full h-80 object-cover"
            />

            <img
              src="/images/projects/spae/lidar-integration.jpg"
              alt="LiDAR integrated into the UAV"
              className="rounded-lg w-full h-80 object-cover"
            />

            <img
              src="/images/projects/spae/gazebo-simulation.jpg"
              alt="UAV simulation in Gazebo"
              className="rounded-lg w-full h-80 object-cover"
            />

            <img
              src="/images/projects/spae/rviz-navigation.jpg"
              alt="UAV navigation visualization in RViz"
              className="rounded-lg w-full h-80 object-cover"
            />

          </div>
        </section>

      </div>
    </main>
  );
};

export default SpaeGroup;
