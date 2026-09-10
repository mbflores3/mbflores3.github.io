import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, CarouselDots } from '@/components/ui/carousel';
import { Github, Linkedin, Mail, Terminal, Code2, Database, Brain, Cloud, Server, Cpu, FileText } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import React, { useState } from 'react';
import { Navigation } from '@/components/Navigation';
import { ProjectCard } from '@/components/ProjectCard';
import { TimelineItem } from '@/components/TimelineItem';
import { ToolCard } from '@/components/ToolCard';

// BookTooltip component for showing book cover on hover
const bookImages: Record<string, string> = {
  'Designing Machine Learning Systems': '/images/designing-ml-systems.jpg',
  'AI Engineering': '/images/ai-engineering.jpg',
  'Python for Data Analysis': '/images/python-for-data-analysis.jpg',
  'Grokking Algorithms': '/images/grokking-algorithms.jpg',
  'A Court of Thorns and Roses': '/images/acotar.jpg',
  'Before the Coffee Gets Cold': '/images/before-coffee.jpg',
  'Fairy Tale': '/images/fairy-tale.jpg',
  'Fairy Oak': '/images/fairy-oak.jpg',
};

function BookTooltip({ title, children }: { title: string; children: React.ReactNode }) {
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
          <img src={bookImages[title]} alt={title + ' cover'} className="w-40 h-53 object-cover rounded mb-2" />
          <span className="text-xs text-muted-foreground text-center">{title}</span>
        </span>
      )}
    </span>
  );
}

const Index = () => {

  return (
    <div className="relative min-h-screen">
      <Navigation />

      {/* Main Content */}
  <main className="max-w-4xl mx-auto px-6 pt-6 pb-20">
  {/* About Section */}
  <section id="about" className="py-12 section-fade-in">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-8 mb-12">
            {/* Profile Picture */}
            <div className="w-32 h-32 md:w-40 md:h-40 flex-shrink-0">
              <Avatar className="w-full h-full terminal-border bg-card flex items-center justify-center glow-primary">
                <AvatarImage src="/images/profile.jpeg" alt="Profile picture" className="h-full w-full object-cover object-[30%_82%] scale-150"/>
                <AvatarFallback>YC</AvatarFallback>
              </Avatar>
            </div>
            
            <div className="flex-1">
              <h1 className="text-4xl md:text-6xl font-bold mb-3 text-foreground">
                <span className="text-primary">$</span> whoami
              </h1>
              <p className="text-xl text-primary font-semibold">Robotics Engineer</p>
            </div>
          </div>
          
          <div className="terminal-border bg-card/50 p-8 rounded mb-6">
            <p className="text-foreground leading-relaxed mb-4">
              I'm an engineer passionate about robotics and autonomous systems, particularly in technologies that enable machines to operate in complex real-world environments.
              My background spans both hardware and software: from embedded systems and electronics design to robotics navigation, perception, and machine learning.
            </p>
            
            <p className="text-muted-foreground leading-relaxed">
              I truly enjoy solving problems and addressing real needs through hardware technical knowledge and coding.
              I'm dedicated, proactive, and always motivated to keep learning and contributing to new challenges where I can make a meaningful impact.
            </p>
          </div>

          <div className="flex gap-6">
            <a
              href="#contact"
              className="px-6 py-3 bg-primary text-primary-foreground rounded glow-primary hover:bg-primary/90 transition-all duration-300 font-semibold"
            >
              Get in touch
            </a>
            <a
              href="#portfolio"
              className="px-6 py-3 border border-border text-foreground rounded hover:bg-secondary transition-all duration-300"
            >
              View work
            </a>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-12 section-fade-in">
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
              year="January 2025 - September 2025"
              title="Researcher"
              organization="SPAE Group"
              description="Developed and integrated a LiDAR-equipped UAV platform and its ROS 2/Gazebo simulation, including custom mechanical integration and physically informed inertial models. Collaborated on deep reinforcement learning research for navigation under uncertain occupancy maps and currently investigate probabilistic NMPC + HOCBF methods for safe UAV navigation under uncertainty."
              projectUrl="/projects/spaegroup"
            />

            <TimelineItem
              year="December 2025 - July 2025"
              title="Researcher"
              organization="TarLab"
              description="Conducted research on individual tree crown detection and delineation from UAV imagery, covering semi-supervised annotation, Canopy Height Model generation, pretrained-model benchmarking, fine-tuning, and training with synthetic labels. The work investigates model generalization and data-efficient approaches for adapting forest perception models to new aerial surveys."
              projectUrl="/projects/tarlab"
            />
            
            <TimelineItem
              year="February 2024 - March 2025"
              title="Electronics Design Engineer"
              organization="2xAutomation Inc."
              description="Designed custom embedded electronic systems and PCBs from customer requirements through manufacturing release. My work included schematic design, component selection, power and motor-control circuitry, RS-485/RS-232/Ethernet/USB interfaces, PCB layout and routing in Altium Designer, and fabrication-file verification for production."
              projectUrl="/projects/xautomation"
            />
            
            <TimelineItem
              year="2022 - 2023 / 2026 - Present"
              title="Lead UAV Engineer"
              organization="Caleuche UC"
              description="Developed robotic systems for the international Maritime RobotX competition across two project stages: a custom UAV with autonomous precision landing on a WAM-V in 2022, and position and velocity control for a BlueROV in 2026. The work spans aerial, surface, and underwater robotics, hardware integration, perception, and control."
              projectUrl="/projects/robotx"
            />

            <TimelineItem
              year="December 2022 - March 2023"
              title="Robotics Operation Engineer"
              organization="Mariscope SpA"
              description="Built, maintained, and operated ROVs for underwater inspection missions in Patagonia. Worked on electronics troubleshooting, system integration, power systems, topside equipment, and field operations to maintain reliable robotic operation in demanding marine environments."
              projectUrl="/projects/mariscope"
            />

            <TimelineItem
              year="July 2021 - March 2022"
              title="Undergraduate Researcher"
              organization="Pontifical Catholic University of Chile"
              description="Conducted research on autonomous UAV precision landing using Python, ROS, and computer vision. Built and integrated the UAV platform and developed a perception-driven landing pipeline connecting target detection and tracking with the vehicle control stack."
              projectUrl="/projects/ipreuc"
            />

            <TimelineItem
              year="March 2018 - July 20219"
              title="Undergraduate Researcher"
              organization="University of Santiago of Chile"
              description="Conducted experimental research on fracture behavior in isotropic and anisotropic materials. Designed and built a dedicated test bench and investigated crack propagation paths to study the minimum-energy trajectories governing fracture."
              projectUrl="/projects/ipreusach"
            />
          </div>
        </section>

        {/* Studies Section */}
        <section id="studies" className="py-12 section-fade-in">
          <h2 className="text-4xl font-bold mb-8 text-foreground">
            <span className="text-accent">//</span> Studies
          </h2>
          
          <div className="space-y-6">
            {/* <div className="terminal-border bg-card p-6 rounded hover:glow-primary transition-all duration-300">
              <h3 className="text-xl font-semibold text-primary mb-2">
                Master of Science in Computer Science
              </h3>
              <p className="text-muted-foreground mb-2">University Name | 2020 - 2022</p>
              <p className="text-sm text-muted-foreground">
                Specialization in Artificial Intelligence and Machine Learning. 
                Thesis on deep learning applications in natural language processing.
              </p>
            </div> */}

            <div className="terminal-border bg-card p-6 rounded hover:glow-primary transition-all duration-300">
              <h3 className="text-xl font-semibold text-primary mb-2">
                Bachelor of Science
              </h3>
              <p className="text-muted-foreground mb-2">Pontifical Catholic University of Chile | 2019 - 2024</p>
              <p className="text-sm text-muted-foreground">
                Major in Robotics Engineering, Minor in Automation Systems Engineering.<br />
                Academic Certificate in International Relationships.
                <br /><br />
                The program consists of a 6-year curriculum: 4 years of bachelor-level engineering, followed by 2 years of advanced engineering courses and a final thesis.
                This program is accredited by the United States Agency, ABET.
              </p>
            </div>

            <div className="terminal-border bg-card p-6 rounded hover:glow-primary transition-all duration-300">
              <h3 className="text-xl font-semibold text-primary mb-2">
                Certifications and licenses
              </h3>
              <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
                <li>Heavy machines operator (National Direction of Transit)</li>
                <li>Core Basics (Universal Robots)</li>
                <li>Explosives manipulator (National Direction of General Movilization)</li>
                <li>RPA operator (General Direction of Civil Aeronautics)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Tools Section */}
        <section id="tools" className="py-12 section-fade-in">
          <h2 className="text-4xl font-bold mb-8 text-foreground">
            <span className="text-accent">//</span> Tools & Technologies
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            <ToolCard icon={Code2} name="Python" level="Advanced" />
            <ToolCard icon={Database} name="C++" level="Advanced" />
            <ToolCard icon={Cloud} name="ROS2" level="Advanced" />
            <ToolCard icon={Server} name="Matlab" level="Advanced" />
            <ToolCard icon={Brain} name="CAN Open" level="Intermediate" />
            <ToolCard icon={Cpu} name="Codesys" level="Intermediate" />
          </div>

          <div className="terminal-border bg-card/50 p-6 rounded">
            <h3 className="text-lg font-semibold text-primary mb-3">Additional Skills</h3>
            <div className="flex flex-wrap gap-2">
              {['Git', 'VHDL', 'Linux', 'Ethercat', 'Docker', 'Shell scripting', 'Open CV', 'Nav2', 'JavaScript', 'HTML', 'CSS', 'Power BI', 'TypeScript', 'PLC', 'MySQL', 'SQLite', 'Matlab', 'PX4'].map((skill) => (
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

        {/* Portfolio Section */}
        <section id="portfolio" className="py-12 section-fade-in">
          <h2 className="text-4xl font-bold mb-8 text-foreground">
            <span className="text-accent">//</span> Portfolio
          </h2>
          
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              <CarouselItem className="basis-full md:basis-1/2">
                <div className="p-1">
                  <ProjectCard
                    title="Wall2 - Face Mask Collector robot"
                    description="Robot design to collect residual face masks around university campus after pandemic restrictions rules."
                    tech={['Python', 'Arduino', 'PID', 'Open CV', 'Fusion 360', 'ML', 'KiCad']}
                    github="https://github.com/mbflores3/Wall2---Face-Mask-Collector"
                    image="/images/Wall2Construction.jpeg"
                  />
                </div>
              </CarouselItem>
              <CarouselItem className="basis-full md:basis-1/2">
                <div className="p-1">
                  <ProjectCard
                    title="Barrier Functions for Quadrotor Collision Avoidance System Using Nonlinear Model Predictive Control"
                    description="A self research project about collision avoidance techniques using HOCBF-NMPC with probabilistic form of dinamyc obstacles"
                    tech={['Python', 'ROS2', 'PX4', 'Docker', 'Gazebo', 'MPC', 'CBF', 'Dynamic Obstacles']}
                    github="https://github.com/tsunayoshi21/learning-japanese-app"
                    link="https://jap-app.csierr.cl/"
                    image="/images/CollisionAvoidance.png"
                  />
                </div>
              </CarouselItem>
              <CarouselItem className="basis-full md:basis-1/2">
                <div className="p-1">
                  <ProjectCard
                    title="Autonomous Vehicles Learning APP"
                    description="Fine-tuning of the BETO model (BERT-based model for Spanish) to classify sentences into school subjects. It includes training, evaluation, and integration into a local app."
                    tech={['Python', 'PyTorch', 'Transformers', 'JavaScript', 'HTML', 'CSS', 'TypeScript', 'Flask']}
                    github="https://github.com/csierr/finetuning-beto-for-spanish-text-classification"
                    image="/images/finetuning-beto.png"
                  />
                </div>
              </CarouselItem>
              <CarouselItem className="basis-full md:basis-1/2">
                <div className="p-1">
                  <ProjectCard
                    title="Taco Delivery Drone"
                    description="Project to learn computer vision techniques for precision landing with quadrotor platform in a virtual enviroment that lead to a fun taco delivery simulation"
                    tech={['Python','ROS', 'Gazebo', 'Mavlink', 'Open CV', 'Image Processing', 'VirtualBox']}
                    github="https://github.com/csierr/realtime-voice-chatbot"
                    image="/images/TacoDeliveryDrone.png"
                  />
                </div>
              </CarouselItem>
              <CarouselItem className="basis-full md:basis-1/2">
                <div className="p-1">
                  <ProjectCard
                    title="Collision Detector"
                    description="Collision Detection in an Agricultural Robot Using XGBoost and ROS2."
                    tech={['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'ROS2', 'XGBoost']}
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

        {/* Publications Section */}
        <section id="publications" className="py-12 section-fade-in">
          <h2 className="text-4xl font-bold mb-8 text-foreground">
            <span className="text-accent">//</span> Publications
          </h2>
          
          <div className="space-y-6">
            <div className="terminal-border bg-card p-6 rounded hover:glow-primary transition-all duration-300">
              <h3 className="text-xl font-semibold text-primary mb-2">
                <a target="_blank" rel="noopener noreferrer">
                  Assessment of Light Environment Conditions for Reconstruction of Multispectral1 Images by Conditional Adversarial Networks
                </a>
              </h3>
              <p className="text-muted-foreground mb-3">Array Journal | Elsevier | Revision</p>
              <p className="text-sm text-muted-foreground mb-3">
              This work presents an integrated complaint management system based on large language models, applied to the electric sector. The system automates traditionally manual tasks through a service-oriented architecture combining data processing, virtual analysts, and a web application. Evaluations demonstrate its efficiency, robustness, and scalability.
              </p>
              <a
                href="https://www.sciencedirect.com/science/article/pii/S2590005625001973"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <FileText size={16} />
                <span>Read Paper</span>
              </a>
            </div>

            <div className="terminal-border bg-card p-6 rounded hover:glow-primary transition-all duration-300">
              <h3 className="text-xl font-semibold text-primary mb-2">
                <a target="_blank" rel="noopener noreferrer">
                  Occupancy Probability Maps Synthesis for Deep Reinforcement Learning-Based Navigation in Uncertain Environments
                </a>
              </h3>
              <p className="text-muted-foreground mb-3">Array Journal | Elsevier | Revision</p>
              <p className="text-sm text-muted-foreground mb-3">
              This work presents an integrated complaint management system based on large language models, applied to the electric sector. The system automates traditionally manual tasks through a service-oriented architecture combining data processing, virtual analysts, and a web application. Evaluations demonstrate its efficiency, robustness, and scalability.
              </p>
              <a
                href="https://www.sciencedirect.com/science/article/pii/S2590005625001973"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <FileText size={16} />
                <span>Read Paper</span>
              </a>
            </div>
          </div>
        </section>

        {/* Teaching Section */}
        <section id="teaching" className="py-12 section-fade-in">
          <h2 className="text-4xl font-bold mb-8 text-foreground">
            <span className="text-accent">//</span> Teaching
          </h2>
          
          <div className="space-y-6">
            <div className="terminal-border bg-card p-6 rounded hover:glow-primary transition-all duration-300">
              <h3 className="text-xl font-semibold text-primary mb-2">
                Mobile Robotics IIC2685
              </h3>
              <p className="text-muted-foreground mb-3">Pontifical Catholic University of Chile | 2022 </p>
              <p className="text-sm text-muted-foreground mb-3">
                Introduced students to publisher and subcriber communication through topics using ROS/ROS2, and understanding navigation, perception and localization techniques.
              </p>
            </div>

            <div className="terminal-border bg-card p-6 rounded hover:glow-primary transition-all duration-300">
              <h3 className="text-xl font-semibold text-primary mb-2">
                Automatic Control IEE2613
              </h3>
              <p className="text-muted-foreground mb-3">Pontifical Catholic University of Chile | 2023 </p>
              <p className="text-sm text-muted-foreground mb-3">
                Responsible for grading student's tests, assignments, and projects abot different closed loop control techniques such as PID, LGR, Nyquist Bode stability criteria and many more. 
              </p>
            </div> 
            
          </div>
        </section>

        {/* Book Recommendations Section */}
        <section id="books" className="py-12 section-fade-in">
          <h2 className="text-4xl font-bold mb-8 text-foreground">
            <span className="text-accent">//</span> Book Recs
          </h2>
          <div className="terminal-border bg-card/50 p-8 rounded mb-8">
            <p className="text-xl text-muted-foreground mb-6">
              A few books that I've loved and that have shaped how I think about engineering and about building systems that actually work in the real world:
            </p>
            <ul className="list-disc list-inside space-y-2 text-foreground">
              <li><BookTooltip title="Designing Machine Learning Systems"><strong>Designing Machine Learning Systems by Chip Huyen</strong></BookTooltip></li>
              <li><BookTooltip title="AI Engineering"><strong>AI Engineering by Chip Huyen</strong></BookTooltip></li>
              <li><BookTooltip title="Python for Data Analysis"><strong>Python for Data Analysis by Wes McKinney</strong></BookTooltip></li>
              <li><BookTooltip title="Grokking Algorithms"><strong>Grokking Algorithms by Aditya Bhargava</strong></BookTooltip></li>
            </ul>
          </div>
        </section>

        {/* Off-Topic Reads Section */}
        <section id="off-topic-books" className="py-12 section-fade-in">
          <h2 className="text-4xl font-bold mb-8 text-foreground">
            <span className="text-accent">//</span> Off-topic Reads
          </h2>
          <div className="terminal-border bg-card/50 p-8 rounded mb-8">
            <p className="text-xl text-muted-foreground mb-6">
              Not everything I read is about code, here are a some non-technical reads that I also really enjoyed:
            </p>
            <ul className="list-disc list-inside space-y-2 text-foreground">
            <li><BookTooltip title="A Court of Thorns and Roses"><strong>A Court of Thorns and Roses series by Sarah J. Maas</strong></BookTooltip></li>
            <li><BookTooltip title="Before the Coffee Gets Cold"><strong>Before the Coffee Gets Cold series by Toshikazu Kawaguchi</strong></BookTooltip></li>
            <li><BookTooltip title="Fairy Tale"><strong>Fairy Tale by Stephen King</strong></BookTooltip></li>
            <li><BookTooltip title="Fairy Oak"><strong>Fairy Oak series by Elisabetta Gnone</strong></BookTooltip></li>
            </ul>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-12 section-fade-in">
          <h2 className="text-4xl font-bold mb-8 text-foreground">
            <span className="text-accent">//</span> Contact
          </h2>
          
          <div className="terminal-border bg-card/50 p-8 rounded mb-8">
            <p className="text-xl text-muted-foreground mb-8">
              Let's connect and discuss opportunities, projects, or just talk!
            </p>
            
            <div className="space-y-4">
              <a
                href="mailto:mbflores3@uc.cl"
                className="flex items-center gap-4 text-foreground hover:text-primary transition-colors group"
              >
                <div className="p-3 bg-secondary rounded group-hover:bg-primary/20 transition-colors">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-sm text-muted-foreground">mbflores3@uc.cl</p>
                </div>
              </a>
              
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
                  <p className="text-sm text-muted-foreground">@mbflores3</p>
                </div>
              </a>
              
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
                  <p className="text-sm text-muted-foreground">Mario Flores Musso</p>
                </div>
              </a>
            </div>
          </div>

          <div className="text-center text-sm text-muted-foreground">
            <p>&copy; 2025 Portfolio. Built with React + Vite + Tailwind CSS</p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
