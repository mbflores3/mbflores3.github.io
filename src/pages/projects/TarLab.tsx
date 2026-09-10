import { Link } from "react-router-dom";

const TarLab = () => {
  const technologies = [
    "Python",
    "PyTorch",
    "Computer Vision",
    "Deep Learning",
    "QGIS",
    "CloudCompare",
    "CHM",
    "UAV Imagery",
    "Instance Segmentation",
    "Semi-Supervised Learning",
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
            TarLab · Research Project
          </p>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Tree Crown Detection & Delineation from UAV Imagery
          </h1>

          <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
            Development and evaluation of machine-learning pipelines for
            individual tree crown detection and segmentation using
            high-resolution UAV imagery and geospatial data.
          </p>
        </div>

        {/* Hero */}
        <img
          src="/images/projects/tarlab/tarlab-hero.jpg"
          alt="UAV orthomosaic of forest environment in Talca"
          className="w-full max-h-[520px] object-cover rounded-lg mb-16"
        />

        {/* Overview */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">
            <span className="text-accent">//</span> Overview
          </h2>

          <div className="space-y-5 text-muted-foreground leading-relaxed">
            <p>
              My work at TarLab focuses on computer vision and machine learning
              for individual tree crown detection and delineation from
              high-resolution UAV imagery collected over forested areas in
              Talca, Chile.
            </p>

            <p>
              I initially worked on generating reliable training data by
              labeling individual tree crowns from drone surveys using
              semi-supervised annotation methods. I also learned and applied
              geospatial processing techniques to derive Canopy Height Models
              (CHMs) from the UAV surveys, combining image and elevation
              information to better characterize forest structure.
            </p>

            <p>
              The research then progressed toward evaluating pretrained
              machine-learning models on previously unseen UAV surveys,
              fine-tuning those models using our own annotated data, and
              comparing their ability to generalize to local forest
              conditions.
            </p>

            <p>
              A later stage of the work investigates whether synthetic labels
              generated through clustering and semi-supervised methods can be
              used to train segmentation models effectively, reducing the
              amount of manual annotation required for new datasets.
            </p>
          </div>
        </section>

        {/* Research Pipeline */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">
            <span className="text-accent">//</span> Research Pipeline
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            {/* Annotation */}
            <div className="border border-border rounded-lg overflow-hidden">
              <img
                src="/images/projects/tarlab/annotation.jpg"
                alt="Tree crown annotation from UAV imagery"
                className="w-full h-64 object-cover"
              />

              <div className="p-6">
                <p className="text-accent font-mono text-sm mb-2">
                  DATASET CREATION
                </p>

                <h3 className="text-2xl font-semibold mb-3">
                  Tree Crown Annotation
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  Generated individual tree crown labels from UAV imagery using
                  semi-supervised annotation techniques, creating datasets for
                  training and evaluating instance-segmentation models.
                </p>
              </div>
            </div>

            {/* CHM */}
            <div className="border border-border rounded-lg overflow-hidden">
              <img
                src="/images/projects/tarlab/chm.jpg"
                alt="Canopy Height Model generated from UAV survey"
                className="w-full h-64 object-cover"
              />

              <div className="p-6">
                <p className="text-accent font-mono text-sm mb-2">
                  GEOSPATIAL PROCESSING
                </p>

                <h3 className="text-2xl font-semibold mb-3">
                  Canopy Height Models
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  Processed UAV survey data to obtain Canopy Height Models
                  (CHMs), learning and applying geospatial workflows for the
                  characterization and analysis of forest structure.
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

            <div>
              <h3 className="text-xl font-semibold mb-3">
                Dataset Preparation & Annotation
              </h3>

              <p className="text-muted-foreground leading-relaxed">
                I prepared UAV-derived imagery for machine-learning
                experiments by generating individual tree crown annotations
                and organizing the data into reproducible training,
                validation, and testing datasets. Semi-supervised methods were
                used to accelerate the labeling process while maintaining the
                spatial consistency required for instance-level evaluation.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">
                Geospatial Processing & CHM Generation
              </h3>

              <p className="text-muted-foreground leading-relaxed">
                I learned and applied geospatial processing workflows to the
                UAV surveys, including the generation and analysis of Canopy
                Height Models. These products provide structural information
                about vegetation height and complement the RGB imagery used
                for tree crown analysis.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">
                Pretrained Model Benchmarking
              </h3>

              <p className="text-muted-foreground leading-relaxed">
                I evaluated pretrained tree-detection and
                instance-segmentation models on UAV surveys that were not part
                of their original training distributions. The objective was
                to quantify how well existing approaches generalize to new
                forest environments and identify their main failure modes.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">
                Fine-Tuning & Model Adaptation
              </h3>

              <p className="text-muted-foreground leading-relaxed">
                Using the manually and semi-automatically generated labels, I
                fine-tuned pretrained models on our local UAV datasets and
                evaluated their performance after domain adaptation. The
                resulting experiments allow direct comparison between
                out-of-the-box pretrained models and models adapted to the
                characteristics of the target forest environment.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">
                Synthetic Labels & Semi-Supervised Training
              </h3>

              <p className="text-muted-foreground leading-relaxed">
                I also investigated training strategies based on synthetic
                annotations produced by clustering-based and semi-supervised
                methods. The goal is to determine whether automatically
                generated labels can provide sufficient supervision for model
                training while reducing the cost and time associated with
                manual tree crown annotation.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">
                Evaluation
              </h3>

              <p className="text-muted-foreground leading-relaxed">
                Model performance was analyzed using object-detection and
                instance-segmentation metrics, allowing the different
                pretrained, fine-tuned, and synthetic-label approaches to be
                compared under a common evaluation framework.
              </p>
            </div>

          </div>
        </section>

        {/* Research Objective */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">
            <span className="text-accent">//</span> Research Objective
          </h2>

          <div className="border border-border rounded-lg p-7">
            <p className="text-accent font-mono text-sm mb-3">
              MODEL GENERALIZATION & DATA EFFICIENCY
            </p>

            <h3 className="text-2xl font-semibold mb-4">
              Adapting Tree Crown Models to New UAV Surveys
            </h3>

            <p className="text-muted-foreground leading-relaxed mb-4">
              A central objective of this work is to understand how well
              existing tree crown detection and segmentation methods transfer
              to previously unseen forest environments and how much their
              performance can be improved through fine-tuning with local data.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              The synthetic-label experiments further investigate whether
              semi-supervised approaches can reduce dependence on costly manual
              annotations while preserving useful segmentation performance.
            </p>
          </div>
        </section>

        {/* Publication */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">
            <span className="text-accent">//</span> Publication
          </h2>

          <div className="border border-border rounded-lg p-7">
            <p className="text-accent font-mono text-sm mb-3">
              MANUSCRIPT IN PREPARATION
            </p>

            <p className="text-lg font-semibold leading-relaxed">
              Assessment of Light Environment Conditions for Reconstruction
              of Multispectral Images by Conditional Adversarial Networks
            </p>
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
              src="/images/projects/tarlab/orthomosaic.jpg"
              alt="UAV orthomosaic used for tree crown analysis"
              className="rounded-lg w-full h-80 object-cover"
            />

            <img
              src="/images/projects/tarlab/annotations.jpg"
              alt="Individual tree crown annotations"
              className="rounded-lg w-full h-80 object-cover"
            />

            <img
              src="/images/projects/tarlab/chm-result.jpg"
              alt="Canopy Height Model"
              className="rounded-lg w-full h-80 object-cover"
            />

            <img
              src="/images/projects/tarlab/predictions.jpg"
              alt="Tree crown segmentation model predictions"
              className="rounded-lg w-full h-80 object-cover"
            />

          </div>
        </section>

      </div>
    </main>
  );
};

export default TarLab;
