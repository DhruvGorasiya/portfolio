import React from "react";
import { motion } from "framer-motion";
import { Leaf1, Leaf2 } from "../assets";

const ExperienceCard = ({ role, company, location, duration, overview, highlights, technologies, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.2 }}
    className="relative"
  >
    {/* Timeline Line and Dot */}
    <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-primary/20 to-secondary/20 ml-6 hidden md:block">
      <div className="sticky top-1/2">
        <div className="w-3 h-3 rounded-full bg-gradient-to-r from-primary to-secondary -ml-1.5" />
      </div>
    </div>

    {/* Experience Card */}
    <div className="md:ml-16 relative">
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="glass-card p-8 rounded-xl mb-8 hover:shadow-2xl transition-all duration-300 border border-white/5"
      >
        {/* Header Section */}
        <div className="flex justify-between items-start flex-wrap gap-4 mb-6">
          <div>
            <motion.h3 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-2xl font-bold text-gradient mb-2"
            >
              {role}
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-texlight text-lg font-medium"
            >
              {company}
            </motion.p>
          </div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-right"
          >
            <p className="text-texlight font-medium">{location}</p>
            <p className="text-primary/80 font-medium">{duration}</p>
          </motion.div>
        </div>

        <div className="space-y-6">
          {/* Overview Section with Gradient Border */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="p-4 rounded-lg bg-gradient-to-r from-primary/5 to-secondary/5 border border-white/5"
          >
            <p className="text-texlight/90 leading-relaxed">{overview}</p>
          </motion.div>

          {/* Key Achievements */}
          <div>
            <motion.h4 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-gradient font-semibold mb-4 text-lg"
            >
              Key Achievements
            </motion.h4>
            <div className="space-y-4">
              {highlights.map((highlight, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 + idx * 0.1 }}
                  className="flex items-start gap-3 group"
                >
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-secondary mt-2 flex-shrink-0 group-hover:scale-125 transition-transform duration-300" />
                  <p className="text-texlight/90 leading-relaxed group-hover:text-white transition-colors duration-300">{highlight}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Technologies Used */}
          {technologies && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <h4 className="text-gradient font-semibold mb-4 text-lg">Technologies & Skills</h4>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, idx) => (
                  <motion.span
                    key={idx}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.9 + idx * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                    className="px-4 py-2 rounded-full text-sm bg-gradient-to-r from-primary/10 to-secondary/10 text-texlight border border-white/10 hover:border-primary/50 transition-all duration-300"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  </motion.div>
);

const Experience = () => {
  const experiences = [
    {
      role: "Founder & CTO",
      company: (
        <a
          href="https://twinly.net"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-primary hover:text-secondary transition-colors"
        >
          Twinly (Twinly.net)
        </a>
      ),
      location: "Boston, MA",
      duration: "March 2025 – Present",
      overview: "Founded and led the development of Twinly, an AI-powered cognitive twin platform that integrates with productivity tools to help users manage tasks, memory, and actions more efficiently.",
      highlights: [
        "Founded and led the development of Twinly, integrating with Gmail, Notion, Slack, and Google Calendar to manage tasks, memory, and actions—helping users reduce context switching by 35% in early trials.",
        "Architected and deployed a scalable full-stack system using Next.js, FastAPI, PostgreSQL, and Pinecone, enabling low-latency retrieval-augmented generation (RAG) from over 10,000 vectorized memory objects.",
        "Designed and fine-tuned personalized AI agents using GPT-4o, increasing action relevance and memory recall by 30% through feedback loops and similarity-based threshold optimization.",
        "Implemented secure OAuth and cross-platform API integrations to ingest user data and trigger automated actions, maintaining 98%+ uptime on production infrastructure via GCP Cloud Run.",
        "Led a team of 3 developers and 1 designer to ship the MVP 3 weeks ahead of schedule, onboarded 15+ beta users, and launched core features like weekly digests and smart timelines that saved users 3–5 hours/week."
      ],
      technologies: [
        "Next.js",
        "FastAPI",
        "PostgreSQL",
        "Pinecone",
        "GPT-4o",
        "OAuth",
        "GCP Cloud Run",
        "Product Management",
        "Team Leadership"
      ]
    },
    {
      role: "Research Assistant - Machine Learning",
      company: "California State University, Long Beach",
      location: "Long Beach, CA",
      duration: "August 2023 - June 2024",
      overview: "Leading research initiatives in large-scale data discovery and similarity matching, focusing on optimizing search algorithms and improving data processing efficiency for heterogeneous datasets.",
      highlights: [
        "Pioneered a containment-optimized LSH Ensemble variant that achieved a 22% reduction in query latency across 5,000+ heterogeneous tables, significantly improving data discovery efficiency.",
        "Developed an innovative hybrid similarity modeling approach combining Minhash, q-grams, and word embeddings, resulting in a 14% boost in attribute-matching precision for schema-agnostic data sources.",
        "Engineered an adaptive partitioning system with cost-based rebalancing that reduced false positives by 27% in similarity searches, particularly effective for handling skewed data distributions.",
        "Architected and implemented a comprehensive Python pipeline integrating FastText and Scikit-learn, enabling scalable benchmarking through custom hash-based indexing modules."
      ],
      technologies: [
        "Python",
        "Machine Learning",
        "LSH Ensemble",
        "FastText",
        "Scikit-learn",
        "Data Mining",
        "Algorithm Optimization"
      ]
    },
    {
      role: "Computer Science Tutor",
      company: "California State University, Long Beach",
      location: "Long Beach, CA",
      duration: "August 2023 - December 2023",
      overview: "Served as a dedicated computer science tutor, fostering student understanding of complex technical concepts while adapting teaching methods to accommodate diverse learning styles and creating an inclusive learning environment.",
      highlights: [
        "Mentored 20+ students in advanced computer science topics, creating personalized learning approaches that led to improved comprehension and academic performance.",
        "Facilitated hands-on code review sessions for diverse student projects, emphasizing clean coding practices, security considerations, and industry-standard development techniques.",
        "Developed interactive debugging workshops that improved students' problem-solving skills, resulting in a 30% increase in independent bug resolution.",
        "Created comprehensive study materials and practical exercises for Data Structures and Algorithms, helping students achieve an average grade improvement of 15%.",
        "Introduced pair programming sessions that enhanced collaborative learning and improved code quality among student teams.",
        "Implemented weekly algorithm challenge sessions, helping students prepare for technical interviews and competitive programming contests."
      ],
      technologies: [
        "Data Structures",
        "Algorithms",
        "OOP",
        "Machine Learning",
        "Code Review",
        "Technical Mentoring",
        "Problem Solving",
        "Debugging",
        "Pair Programming"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20">
      {/* Title */}
      <div className="w-full flex items-center justify-center mb-12">
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: 200 }}
          exit={{ opacity: 0, width: 0 }}
          transition={{ delay: 0.4 }}
          className="flex items-center justify-center py-12"
        >
          <img src={Leaf1} className="w-6 h-auto object-contain" alt="" />
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary px-5 text-3xl font-bold">
            Experience
          </p>
          <img src={Leaf2} className="w-6 h-auto object-contain" alt="" />
        </motion.div>
      </div>

      {/* Experience Timeline */}
      <div className="container mx-auto px-4">
        {experiences.map((exp, index) => (
          <ExperienceCard key={index} {...exp} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Experience; 