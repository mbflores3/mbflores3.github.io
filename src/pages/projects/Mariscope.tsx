import { Link } from "react-router-dom";

const Mariscope = () => {
  const technologies = [
    "ROV Systems",
    "RS-485",
    "Underwater Robotics",
    "Electronics Troubleshooting",
    "Tethered Communications",
    "Power Systems",
    "Topside Control",
    "Field Operations",
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
            2022 — 2023 · Mariscope SpA
          </p>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Underwater Robotics & ROV Field Operations
          </h1>

          <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
            Reliability engineering, electronics troubleshooting, and field
            deployment of tethered ROVs for underwater structural inspections
            in the Strait of Magellan and Patagonian fjords.
          </p>
        </div>

        {/* Hero */}
        <img
          src="/images/projects/mariscope/mariscope-hero.jpg"
          alt="ROV deployment during underwater inspection operations in Patagonia"
          className="w-full max-h-[520px] object-cover rounded-lg mb-16"
        />

        {/* Overview */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">
            <span className="text-accent">//</span> Overview
          </h2>

          <div className="space-y-5 text-muted-foreground leading-relaxed">
            <p>
              My work at Mariscope focused on improving the reliability and
              operational readiness of Remotely Operated Vehicles (ROVs) used
              for underwater inspection missions. A recurring challenge was
              maintaining reliable communication and electrical operation
              between the vehicle and the topside control system.
            </p>

            <p>
              The ROVs were tethered to the surface through an electrical
              umbilical that carried communication between the vehicle and the
              operator station. A significant part of my work involved
              diagnosing communication failures, repairing electronic
              circuitry, troubleshooting wiring and connectors, and restoring
              vehicles to operational condition.
            </p>

            <p>
              After working on the maintenance and preparation of the ROV
              systems, I was assigned to lead their deployment during an
              inspection campaign in the Magallanes region of southern Chile.
              The operation involved approximately 24 days aboard a vessel
              navigating through the Strait of Magellan and Patagonian fjords
              while inspecting salmon-farming infrastructure.
            </p>
          </div>
        </section>

        {/* Main Areas */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">
            <span className="text-accent">//</span> Main Responsibilities
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            {/* Reliability */}
            <div className="border border-border rounded-lg overflow-hidden">
              <img
                src="/images/projects/mariscope/rov-maintenance.jpg"
                alt="ROV maintenance and electronics troubleshooting"
                className="w-full h-64 object-cover"
              />

              <div className="p-6">
                <p className="text-accent font-mono text-sm mb-2">
                  ROBOT RELIABILITY
                </p>

                <h3 className="text-2xl font-semibold mb-3">
                  Electronics & Communication Troubleshooting
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  Diagnosed and repaired communication, circuitry, wiring, and
                  system-integration failures affecting tethered ROV operation,
                  restoring vehicles to mission-ready condition.
                </p>
              </div>
            </div>

            {/* Field operations */}
            <div className="border border-border rounded-lg overflow-hidden">
              <img
                src="/images/projects/mariscope/field-deployment.jpg"
                alt="ROV deployment from vessel in Patagonia"
                className="w-full h-64 object-cover"
              />

              <div className="p-6">
                <p className="text-accent font-mono text-sm mb-2">
                  FIELD ROBOTICS
                </p>

                <h3 className="text-2xl font-semibold mb-3">
                  Offshore ROV Operations
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  Led the deployment and operational support of ROV systems
                  during an extended inspection campaign across remote salmon
                  farms in the Strait of Magellan and Patagonian fjords.
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

            {/* Communications */}
            <div>
              <h3 className="text-xl font-semibold mb-3">
                Tethered ROV Communications
              </h3>

              <p className="text-muted-foreground leading-relaxed">
                The ROVs communicated with the topside operator station through
                a tethered electrical connection using serial communication.
                I worked on diagnosing communication failures across the
                vehicle, cable, connectors, and electronic interfaces,
                identifying faults that prevented reliable command and
                monitoring of the underwater platform.
              </p>
            </div>

            {/* Electronics */}
            <div>
              <h3 className="text-xl font-semibold mb-3">
                Electronics Diagnostics & Repair
              </h3>

              <p className="text-muted-foreground leading-relaxed">
                A significant part of my work involved troubleshooting
                electronic boards, wiring harnesses, connectors, power systems,
                and integrated assemblies. I diagnosed faults at component and
                system level, performed repairs, replaced damaged components,
                and validated functionality before returning the ROVs to
                operation.
              </p>
            </div>

            {/* System assembly */}
            <div>
              <h3 className="text-xl font-semibold mb-3">
                ROV Assembly & System Integration
              </h3>

              <p className="text-muted-foreground leading-relaxed">
                I also supported the construction and preparation of ROV
                systems by assembling electrical connections, battery systems,
                electronic modules, and topside computers used by operators for
                control and real-time visualization of underwater camera feeds.
                This required understanding the complete signal and power path
                between the underwater vehicle and the surface station.
              </p>
            </div>

            {/* Reliability */}
            <div>
              <h3 className="text-xl font-semibold mb-3">
                Operational Reliability
              </h3>

              <p className="text-muted-foreground leading-relaxed">
                Because the systems were deployed in remote marine
                environments, reliability and maintainability were critical.
                Preventive maintenance, rapid fault diagnosis, spare-component
                management, and on-site repairs were essential to minimize
                downtime and keep the vehicles available throughout the
                inspection campaign.
              </p>
            </div>

          </div>
        </section>

        {/* Field Deployment */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">
            <span className="text-accent">//</span> Patagonia Field Deployment
          </h2>

          <div className="grid md:grid-cols-2 gap-8 items-center">

            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                I was responsible for supporting and coordinating ROV
                operations during an approximately 24-day vessel-based
                deployment in the Magallanes region. The campaign involved
                navigating through the Strait of Magellan and Patagonian fjords
                to inspect salmon-farming facilities located in remote marine
                environments.
              </p>

              <p>
                The ROVs were deployed to perform underwater structural
                inspections of the facilities and their mooring systems.
                Operators visually inspected mooring lines to identify
                undesirable contact or abrasion between them and verified the
                condition and positioning of seabed anchoring and containment
                elements.
              </p>

              <p>
                Maintaining vehicle availability throughout the campaign
                required continuous inspection, preventive maintenance, rapid
                troubleshooting, and coordination between deployment,
                operation, and repair activities aboard the vessel.
              </p>
            </div>

            <img
              src="/images/projects/mariscope/patagonia-operation.jpg"
              alt="ROV inspection campaign in the Strait of Magellan"
              className="rounded-lg w-full"
            />

          </div>
        </section>

        {/* Inspection Mission */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">
            <span className="text-accent">//</span> Inspection Mission
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            <div className="border border-border rounded-lg p-7">
              <p className="text-accent font-mono text-sm mb-3">
                MOORING SYSTEMS
              </p>

              <h3 className="text-2xl font-semibold mb-4">
                Underwater Line Inspection
              </h3>

              <p className="text-muted-foreground leading-relaxed">
                The ROV camera system was used to inspect submerged mooring
                lines and verify that neighboring lines were not rubbing
                against each other, helping identify conditions that could
                produce wear or compromise the installation.
              </p>
            </div>

            <div className="border border-border rounded-lg p-7">
              <p className="text-accent font-mono text-sm mb-3">
                SEABED INFRASTRUCTURE
              </p>

              <h3 className="text-2xl font-semibold mb-4">
                Anchor & Structure Verification
              </h3>

              <p className="text-muted-foreground leading-relaxed">
                Underwater inspections were also used to verify that the
                anchoring and containment elements associated with the farming
                structures remained correctly positioned on the seabed.
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
              src="/images/projects/mariscope/rov.jpg"
              alt="Remotely Operated Vehicle"
              className="rounded-lg w-full h-80 object-cover"
            />

            <img
              src="/images/projects/mariscope/deployment.jpg"
              alt="ROV deployment from inspection vessel"
              className="rounded-lg w-full h-80 object-cover"
            />

            <img
              src="/images/projects/mariscope/underwater-inspection.jpg"
              alt="Underwater structural inspection"
              className="rounded-lg w-full h-80 object-cover"
            />

            <img
              src="/images/projects/mariscope/patagonia.jpg"
              alt="Inspection operations in Patagonia"
              className="rounded-lg w-full h-80 object-cover"
            />

          </div>
        </section>

      </div>
    </main>
  );
};

export default Mariscope;
