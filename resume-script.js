// Resume data structure
const resumeData = {
    summary: {
        title: 'PROFESSIONAL SUMMARY.txt',
        content: `M.S. Data Science candidate with hands-on experience architecting cloud and on-prem systems, 
integrating pipelines on AWS/Azure, and building secure applications. 
Projects listed on portfolio & GitHub.`
    },
    education: {
        title: 'EDUCATION',
        content: `Master of Science, Data Science (Computation)
New Jersey Institute of Technology, Newark, New Jersey | 3.5 GPA | 2026

Bachelor of Science, Computer Information Systems
New England College, Henniker, New Hampshire | 3.8 GPA | 2024

Microsoft Software & Systems Academy
Embry Riddle Aeronautical University | 2020`
    },
    experience: {
        title: 'PROFESSIONAL EXPERIENCE',
        content: `Ashcor Technologies – Consultant/Technician (January 2026 – Present)
• Designed and implemented custom integration (VMs, Databases, Security, Networking),
  delivering client solutions to meet voice/data/software needs.
• Conducted maintenance on customer servers and networks to identify pitfalls and improve
  production across varying sectors (Health, Tech, Business, Accounting, Dashboards)

New Jersey Institute of Technology, Research & Projects (January 2025 – Present)
• Making informed architectural decisions based on a firm understanding of how available
  technologies differ and complement each other.
• Built and analyzed predictive models from data using machine learning and statistical inference,
  programmed data science applications in high-level languages and extract patterns from large
  datasets using high-performance computing and distributed computing methods

New England College, Research & Projects (January 2023 – December 2024)

Gobi Technologies – IT Specialist/Cloud Engineer (June 2021 – April 2022)
• Designed and implemented end-to-end Azure solutions (VMs, Databases, Firewalls,
  Backups, VPN's, Storage, Integration), delivering $200K+ in client cost savings through migration
  and upgrades.
• Conducted telecom infrastructure assessments and decommissioned legacy equipment on-premise
  and in hybrid environments to optimize company-wide performance.
• Provided Network & End-User support after provisioning resources to maintain proper structure;
  following established best practices matching service-lifecycles.
• Updated workflows, resolved tickets, composed technical documentation, and transcribed
  meetings within a Customer Relationship Management (CRM) system.

United States Marine Corps – Transmissions, Sergeant (September 2016 – September 2020)
• Led communications architecture for forward-deployed units, ensuring 100% uptime of critical
  data links.
• Conducted security audits and policy enforcement for 400+ networked assets, boosting
  operational readiness.
• Trained Marines on secure communications protocols and troubleshooting, standardizing
  maintenance procedures.`
    },
    projects: {
        title: 'TECHNICAL PROJECTS',
        content: `JarvisMac - Native macOS AI Assistant (SwiftUI, Node.js)
A secure, portfolio-grade native macOS AI assistant built as a lightweight menu bar application.
Combines SwiftUI desktop client with local Node.js token server for privacy-conscious real-time
AI interactions without exposing API secrets. Features:
• Push-to-talk hotkey activation (Right Option key)
• Real-time audio capture via AVFoundation
• Local Whisper CLI speech-to-text integration
• Visual feedback with menu bar status indicators
• Multi-phase architecture: interaction layer, audio pipeline, command processing
Current: v2.0 - Audio capture & transcription complete

AI Cluedo Game (Artificial Intelligence)
Engineered modular game engine and built an AI agent that uses BFS-based deduction to eliminate
suspects and make confident accusations.

Retrieval-Augmented AI Chatbot (RAG, Python)
Developed a retrieval-augmented chatbot using Milvus to index an internal document corpus, integrated
via a secure Dash front-end with OpenAI GPT-3.5-Turbo to deliver company-aware, conversational
responses.

Rent-a-Car Database System and Website (Database Management & Design)
Built a multi-branch rental web app (PHP/HTML + MySQL), modeled ER diagrams, and wrote
dynamic SQL for reservations & reporting.

History Calculator
A modular, production-style command-line calculator application built in Python using advanced object-
oriented design patterns, persistent history storage with pandas, environment-based configuration, and
automated testing with continuous integration.

Wine Quality Prediction (Cloud Computing)
Built a parallel ML application on AWS using Apache Spark and containerized the prediction app in
Docker for seamless deployment.`
    },
    skills: {
        title: 'TECHNICAL SKILLS & CERTIFICATIONS',
        content: `LANGUAGES:
Python, PHP, SQL, Java

CLOUD & DEVOPS:
AZ-900 Fundamentals, AI-900 AI Fundamentals
AWS: EC2, SQS, Spark
Azure: VM, SQL Database
Docker, Linux, Github

DATA & AI:
Scikit-learn, Spark MLlib, Milvus, OpenAI GPT, Jupyter, Pandas

WEB:
HTML5, CSS, PHP, Dash

OTHER:
Prolog, Git, ER Modeling, UML`
    }
};

// Open Resume Modal
function openResumeModal() {
    const modal = document.getElementById('resumeModal');
    modal.style.display = 'block';
    document.getElementById('statusText').innerText = 'Ready';
}

// Close Resume Modal
function closeResumeModal() {
    const modal = document.getElementById('resumeModal');
    modal.style.display = 'none';
}

// Open Resume File
function openResumeFile(fileType) {
    const data = resumeData[fileType];
    if (!data) return;
    
    // Hide file list
    document.getElementById('fileList').style.display = 'none';
    
    // Show file viewer
    const viewer = document.getElementById('fileViewer');
    viewer.style.display = 'flex';
    
    // Load content
    document.getElementById('viewerFileName').innerText = data.title;
    document.getElementById('viewerContent').innerText = data.content;
    
    // Update status
    document.getElementById('statusText').innerText = `Opened ${data.title}`;
}

// Close File Viewer
function closeFileViewer() {
    // Hide viewer
    document.getElementById('fileViewer').style.display = 'none';
    
    // Show file list
    document.getElementById('fileList').style.display = 'grid';
    
    // Update status
    document.getElementById('statusText').innerText = 'Ready';
}

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    const modal = document.getElementById('resumeModal');
    if (e.target === modal) {
        closeResumeModal();
    }
});

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    // Resume modal is ready to use
    console.log('Resume modal initialized');
});
