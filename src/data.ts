export const DATA = {
  name: "Divyam Dave",
  title: "Machine Learning Engineer & AI Developer",
  location: "Jodhpur, Rajasthan, India",
  email: "divyamdave2003@gmail.com",
  phone: "+91-9983700821",
  linkedin: "https://linkedin.com/in/divyamdave",
  github: "https://github.com/divyamdave",
  about: "MCA student and Data Science Intern specializing in scalable RAG and NLP solutions in Python. With a track record of optimizing model accuracy by 40% and cutting inference latency by 60%, I focus on engineering LLMs into fast, reliable, and containerized products. Comfortable collaborating with cross-functional and international teams, I am actively pursuing ML/AI engineering roles in Europe and am open to relocation.",
  experience: [
    {
      company: "Meera Group of Companies",
      role: "Data Science Intern",
      location: "Remote",
      date: "Jan 2024 – Dec 2025",
      description: [
        "Two-year internship contributing to data science projects across group entities, including Miralux Impex (India) and Meera International (Hong Kong)",
        "Collaborated with management to execute data-driven tasks supporting operations across international branches in Africa and Asia",
        "Maintained high delivery standards on assigned technical projects"
      ]
    }
  ],
  projects: [
    {
      title: "KnowYourPdf",
      tags: ["RAG", "LLM", "FastAPI"],
      date: "2025",
      metrics: [
        { label: "Latency", value: "-60%" },
        { label: "Precision", value: "+60%" },
        { label: "Deploy", value: "35m" }
      ],
      description: [
        "Architected a RAG system using FastAPI and LangChain, reducing Llama-3 inference latency by 60% via optimized vector retrieval",
        "Implemented FAISS vector storage with MMR search to handle 30 concurrent document queries, improving context precision by 60%",
        "Engineered a containerized CI/CD pipeline with Docker, cutting deployment setup time from 2 hours to 35 minutes"
      ],
      stack: ["FastAPI", "LangChain", "Llama-3", "FAISS", "MongoDB", "Docker"],
      github: "https://github.com/divyamdave"
    },
    {
      title: "Healthcare Disease Prediction System",
      tags: ["NLP", "Transformers"],
      date: "2025",
      metrics: [
        { label: "F1-Score", value: "0.90" },
        { label: "Prep Time", value: "-20%" }
      ],
      description: [
        "Multi-class text classification model using DistilBERT, achieving F1-score of 0.90 across 5 merged clinical symptom datasets",
        "Scalable NLP pipeline reducing preprocessing time by 20% through parallelized tokenization",
        "Deployed via Docker for consistent dev/production performance"
      ],
      stack: ["Python", "Hugging Face", "DistilBERT", "PyTorch", "Docker"],
      github: "https://github.com/divyamdave"
    }
  ],
  skills: {
    languages: ["Python", "C", "C++", "Java", "SQL", "MongoDB"],
    libraries: ["LangChain", "Hugging Face Transformers", "Scikit-learn", "PyTorch", "Pandas", "NumPy"],
    tools: ["FastAPI", "Streamlit", "Docker", "Git/GitHub", "Salesforce", "MS Excel"],
    core: ["RAG Architecture", "NLP", "Data Analysis", "Machine Learning", "CI/CD"]
  },
  achievements: [
    {
      title: "4th place, Smart India Hackathon 2025 (Internal Finals)",
      description: "Competed against 200 teams, prototyped a solution in 12 hours. Debugged critical deployment errors under pressure in the final 5 hours of the hackathon."
    },
    {
      title: "Build RAG Applications: Get Started",
      description: "Certification by IBM, via Coursera"
    }
  ],
  education: [
    {
      institution: "JECRC University",
      degree: "Master of Computer Applications",
      date: "2024–Present",
      location: "Jaipur, Rajasthan",
      gpa: "CGPA 7.5"
    },
    {
      institution: "Lachoo Memorial College",
      degree: "Bachelor of Computer Applications",
      date: "2021–2024",
      location: "Jodhpur, Rajasthan",
      gpa: "CGPA 8.1"
    }
  ]
};
