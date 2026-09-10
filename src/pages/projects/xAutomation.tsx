import { Link } from "react-router-dom";

const Xautomation = () => {
  const technologies = [
    "Altium Designer",
    "EMS Magician PCB Analyzer",
    "PCB Design",
    "Schematic Design",
    "RS-485",
    "RS-232",
    "Ethernet",
    "USB",
    "Power Electronics",
    "Embedded Hardware",
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
            2024 — 2025 · 2X Automation Inc.
          </p>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Electronics Design Engineer
          </h1>

          <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
            Custom PCB and embedded electronics development from customer
            requirements to schematic design, board layout, manufacturing
            documentation, and fabrication release.
          </p>
        </div>

        {/* Hero */}
        <img
          src="/images/projects/xautomation/pcb-hero.jpg"
          alt="Custom PCB developed using Altium Designer"
          className="w-full max-h-[520px] object-cover rounded-lg mb-16"
        />

        {/* Overview */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">
            <span className="text-accent">//</span> Overview
          </h2>

          <div className="space-y-5 text-muted-foreground leading-relaxed">
            <p>
              My work at 2X Automation focused on the design and development
              of custom electronic boards for different customers, translating
              application requirements into manufacturable PCB designs.
            </p>

            <p>
              Each project involved understanding the electrical and functional
              requirements of the system, selecting appropriate components,
              developing the schematic architecture, designing communication
              and power circuitry, and routing the PCB while considering the
              mechanical and electrical constraints of the final product.
            </p>

            <p>
              I worked with circuits involving motor control, voltage
              regulation, communication interfaces, signal conditioning, and
              external connectivity. Depending on the application, the boards
              incorporated interfaces such as RS-485, RS-232, Ethernet, USB,
              power connectors, and jack-type connectors.
            </p>

            <p>
              After completing the PCB design, I prepared and reviewed the
              manufacturing outputs using EMS Magician PCB Analyzer before
              releasing the boards for fabrication and assembly.
            </p>
          </div>
        </section>

        {/* Design Workflow */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">
            <span className="text-accent">//</span> Hardware Development Workflow
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            {/* Schematic */}
            <div className="border border-border rounded-lg overflow-hidden">
              <img
                src="/images/projects/xautomation/schematic.jpg"
                alt="Electronic schematic design"
                className="w-full h-64 object-cover"
              />

              <div className="p-6">
                <p className="text-accent font-mono text-sm mb-2">
                  ELECTRICAL DESIGN
                </p>

                <h3 className="text-2xl font-semibold mb-3">
                  Schematic Development
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  Designed circuit architectures including power regulation,
                  motor-control stages, communication interfaces, protection
                  circuitry, and external I/O according to customer and system
                  requirements.
                </p>
              </div>
            </div>

            {/* PCB */}
            <div className="border border-border rounded-lg overflow-hidden">
              <img
                src="/images/projects/xautomation/pcb-layout.jpg"
                alt="PCB routing in Altium Designer"
                className="w-full h-64 object-cover"
              />

              <div className="p-6">
                <p className="text-accent font-mono text-sm mb-2">
                  PCB LAYOUT
                </p>

                <h3 className="text-2xl font-semibold mb-3">
                  Board Design & Routing
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  Translated schematics into manufacturable PCB layouts,
                  positioning components and routing power, signal, and
                  communication traces while respecting electrical and
                  mechanical design constraints.
                </p>
              </div>
            </div>

            {/* Interfaces */}
            <div className="border border-border rounded-lg overflow-hidden">
              <img
                src="/images/projects/xautomation/interfaces.jpg"
                alt="Communication and external interfaces on PCB"
                className="w-full h-64 object-cover"
              />

              <div className="p-6">
                <p className="text-accent font-mono text-sm mb-2">
                  CONNECTIVITY
                </p>

                <h3 className="text-2xl font-semibold mb-3">
                  Communication & I/O
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  Integrated industrial and embedded communication interfaces
                  including RS-485, RS-232, Ethernet, and USB, together with
                  application-specific connectors and external interfaces.
                </p>
              </div>
            </div>

            {/* Manufacturing */}
            <div className="border border-border rounded-lg overflow-hidden">
              <img
                src="/images/projects/xautomation/manufacturing.jpg"
                alt="PCB manufacturing documentation"
                className="w-full h-64 object-cover"
              />

              <div className="p-6">
                <p className="text-accent font-mono text-sm mb-2">
                  MANUFACTURING
                </p>

                <h3 className="text-2xl font-semibold mb-3">
                  Fabrication Release
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  Generated and reviewed manufacturing documentation and PCB
                  fabrication outputs using EMS Magician PCB Analyzer before
                  releasing designs for production and assembly.
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

            {/* Requirements */}
            <div>
              <h3 className="text-xl font-semibold mb-3">
                Requirements to Circuit Architecture
              </h3>

              <p className="text-muted-foreground leading-relaxed">
                I translated customer requirements into electronic system
                architectures, identifying the power, communication, control,
                sensing, and connectivity requirements of each board. This
                included component selection and defining how the different
                functional blocks of the system would interact.
              </p>
            </div>

            {/* Circuit Design */}
            <div>
              <h3 className="text-xl font-semibold mb-3">
                Power & Control Circuit Design
              </h3>

              <p className="text-muted-foreground leading-relaxed">
                I developed schematics incorporating circuits such as H-bridges,
                voltage regulators, motor-control and variable-frequency drive
                stages, protection circuitry, and power-distribution
                architectures according to the electrical requirements of each
                application.
              </p>
            </div>

            {/* Communications */}
            <div>
              <h3 className="text-xl font-semibold mb-3">
                Communication Interfaces
              </h3>

              <p className="text-muted-foreground leading-relaxed">
                The boards incorporated multiple communication standards,
                including RS-485, RS-232, Ethernet, and USB. My work involved
                integrating the corresponding transceivers, connectors, and
                supporting circuitry while ensuring compatibility with the
                rest of the electronic system.
              </p>
            </div>

            {/* PCB Layout */}
            <div>
              <h3 className="text-xl font-semibold mb-3">
                PCB Layout & Routing
              </h3>

              <p className="text-muted-foreground leading-relaxed">
                Using Altium Designer, I converted completed schematics into
                PCB layouts by defining component placement and routing power,
                communication, and signal traces. The layout process considered
                board geometry, connector placement, current requirements,
                signal integrity, grounding, and manufacturability.
              </p>
            </div>

            {/* Connectors */}
            <div>
              <h3 className="text-xl font-semibold mb-3">
                External Interfaces & Mechanical Integration
              </h3>

              <p className="text-muted-foreground leading-relaxed">
                I integrated the physical interfaces required by each product,
                including USB connectors, Ethernet ports, jack connectors, and
                other application-specific I/O, ensuring that the electrical
                design remained compatible with the mechanical constraints of
                the final enclosure or system.
              </p>
            </div>

            {/* Manufacturing */}
            <div>
              <h3 className="text-xl font-semibold mb-3">
                Manufacturing Documentation
              </h3>

              <p className="text-muted-foreground leading-relaxed">
                Once the PCB design was completed, I prepared the fabrication
                and assembly documentation required for manufacturing. The
                resulting files were analyzed and verified using EMS Magician
                PCB Analyzer before being released to the manufacturer.
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
              src="/images/projects/xautomation/schematic-detail.jpg"
              alt="Electronic schematic development"
              className="rounded-lg w-full h-80 object-cover"
            />

            <img
              src="/images/projects/xautomation/routing-detail.jpg"
              alt="PCB routing and component placement"
              className="rounded-lg w-full h-80 object-cover"
            />

            <img
              src="/images/projects/xautomation/pcb-render.jpg"
              alt="3D PCB visualization"
              className="rounded-lg w-full h-80 object-cover"
            />

            <img
              src="/images/projects/xautomation/assembled-pcb.jpg"
              alt="Manufactured and assembled PCB"
              className="rounded-lg w-full h-80 object-cover"
            />

          </div>
        </section>

      </div>
    </main>
  );
};

export default Xautomation;
