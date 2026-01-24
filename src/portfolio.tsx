// import React, { useState, useEffect } from 'react';
// import { useLocation, Link } from 'react-router-dom';
// import { Github, Linkedin, ExternalLink, Mail, Code2, Sparkles, Terminal, Cpu } from 'lucide-react';

// interface Repository {
//   name: string;
//   description: string;
//   html_url: string;
//   language: string;
//   stargazers_count: number;
//   topics: string[];
// }

// interface PortfolioProps {
//   initialTab?: string;
// }

// const Portfolio: React.FC<PortfolioProps> = ({ initialTab = 'about' }) => {
//   const location = useLocation();
//   const [activeTab, setActiveTab] = useState(initialTab);
//   const [repos, setRepos] = useState<Repository[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [hasMouse, setHasMouse] = useState(false);

//   // Sync activeTab with route
//   useEffect(() => {
//     const path = location.pathname.slice(1) || 'about'; // Remove leading slash, default to 'about'
//     if (['about', 'projects', 'skills', 'contact'].includes(path)) {
//       setActiveTab(path);
//     }
//   }, [location]);

//   // Detect if user has a mouse
//   useEffect(() => {
//     const hasFineMouse = window.matchMedia('(pointer: fine)').matches;
//     setHasMouse(hasFineMouse);
//   }, []);

//   // Reset scroll on tab change
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [activeTab]);

//   // Fetch GitHub repos
//   useEffect(() => {
//     const fetchRepos = async () => {
//       try {
//         const response = await fetch('https://api.github.com/users/Arezki-Cherfouh/repos?per_page=100&sort=updated');
//         const data = await response.json();
        
//         setRepos(data);
//       } catch (error) {
//         console.error('Error fetching repos:', error);
//         // Fallback data from your profile
//         setRepos([
//           {
//             "name": "Focused-Students",
//             "description": "Real-time student focus and hand-raise detection using OpenCV and MediaPipe Pose. The system tracks posture, head orientation, eye alignment, and slumping to classify attention as Focused or Distracted, draws bounding boxes, detects raised hands, and runs live from a webcam for classroom monitoring.",
//             "html_url": "https://github.com/Arezki-Cherfouh/Focused-Students",
//             "language": "Python",
//             "stargazers_count": 1,
//             "topics": []
//           },
//           {
//             "name": "3D-Hand-Controller",
//             "description": "Futuristic 3D Hand Controller uses MediaPipe and OpenGL to track hand gestures via webcam, enabling real-time manipulation of 3D wireframe shapes. Zoom, rotate, move, and switch shapes or neon colors with intuitive gestures, creating an interactive, visually immersive experience.",
//             "html_url": "https://github.com/Arezki-Cherfouh/3D-Hand-Controller",
//             "language": "Python",
//             "stargazers_count": 1,
//             "topics": []
//           },
//           {
//             "name": "Ollama-Models",
//             "description": "This repository demonstrates an autonomous Python agent using the Ollama LLaMA 3.2 3B model. It interacts with the user, decides actions, executes shell commands, and maintains memory. The goal is to autonomously create a script.py file and finish execution, showcasing AI-driven task automation.",
//             "html_url": "https://github.com/Arezki-Cherfouh/Ollama-Models",
//             "language": "Python",
//             "stargazers_count": 1,
//             "topics": []
//           },
//           {
//             "name": "Bank-Notes",
//             "description": "Machine learning project that classifies banknotes as authentic or counterfeit using multiple algorithms. Implements SVM, KNN, Perceptron, and Naive Bayes on the same dataset, compares accuracy, and demonstrates a clean end-to-end ML workflow with training, testing, and evaluation.",
//             "html_url": "https://github.com/Arezki-Cherfouh/Bank-Notes",
//             "language": "Python",
//             "stargazers_count": 1,
//             "topics": []
//           },
//           {
//             "name": "Mall-Customers",
//             "description": "Customer segmentation project using K-Means clustering on mall customer data. Scales features, evaluates optimal cluster count with elbow and silhouette methods, visualizes clusters in 2D and 3D, analyzes cluster characteristics, and exports labeled data for further business analysis.",
//             "html_url": "https://github.com/Arezki-Cherfouh/Mall-Customers",
//             "language": "Python",
//             "stargazers_count": 1,
//             "topics": []
//           },
//           {
//             "name": "Nuclear-Reaction",
//             "description": "Interactive nuclear fission simulator using hand tracking with MediaPipe and OpenCV. Simulate U-235 reacting with neutrons, visualize energy release, particle products, and allow real-time manipulation of atoms and neutrons via pinch gestures. Educational and visually dynamic.",
//             "html_url": "https://github.com/Arezki-Cherfouh/Nuclear-Reaction",
//             "language": "HTML",
//             "stargazers_count": 1,
//             "topics": []
//           },
//           {
//             "name": "Coach",
//             "description": "Real-time exercise tracking using OpenCV and MediaPipe Pose. This project detects and counts squats, pushups, situps, and arm lifts through webcam input by analyzing joint angles and body posture. It displays live pose landmarks and accurate rep counters on screen with no extra hardware.",
//             "html_url": "https://github.com/Arezki-Cherfouh/Coach",
//             "language": "Python",
//             "stargazers_count": 1,
//             "topics": []
//           },
//           {
//             "name": "Binary-Search-sqrt",
//             "description": "Python script that calculates square root of any number int or float using binary search",
//             "html_url": "https://github.com/Arezki-Cherfouh/Binary-Search-sqrt",
//             "language": "Python",
//             "stargazers_count": 1,
//             "topics": []
//           },
//           {
//             "name": "Local-Search",
//             "description": "Local search optimization project that places hospitals on a grid to minimize total distance to houses. Uses hill climbing with random restarts, Manhattan distance cost evaluation, and visual output generation to demonstrate optimization behavior and convergence in a clear, educational way.",
//             "html_url": "https://github.com/Arezki-Cherfouh/Local-Search",
//             "language": "Python",
//             "stargazers_count": 1,
//             "topics": []
//           },
//           {
//             "name": "Scheduling",
//             "description": "Python constraint programming example for course scheduling using the python-constraint library. Assigns time slots to courses while enforcing rules like no overlaps, day restrictions, and morning-only classes. Generates and prints all valid schedules, making it a clear introduction to constraint satisfaction problems.",
//             "html_url": "https://github.com/Arezki-Cherfouh/Scheduling",
//             "language": "Python",
//             "stargazers_count": 1,
//             "topics": []
//           },
//           {
//             "name": "Tic-Tac-Toe",
//             "description": "Modern Tic Tac Toe game built with Python and Pygame, featuring an unbeatable Minimax AI with alpha-beta pruning. Includes a clean UI, animated win lines, game stats, alternating first player, and restart system. Great demo of classic game AI and Pygame fundamentals.",
//             "html_url": "https://github.com/Arezki-Cherfouh/Tic-Tac-Toe",
//             "language": "Python",
//             "stargazers_count": 1,
//             "topics": []
//           },
//           {
//             "name": "Random-Forests",
//             "description": "End-to-end machine learning projects using real tabular data. Includes a Random Forest model for student grade prediction and a Decision Tree classifier for loan approval analysis, featuring preprocessing, feature engineering, evaluation metrics, and advanced visualizations.",
//             "html_url": "https://github.com/Arezki-Cherfouh/Random-Forests",
//             "language": "Python",
//             "stargazers_count": 1,
//             "topics": []
//           },
//           {
//             "name": "Optimization",
//             "description": "Python example showing how to solve a linear programming problem using scipy.optimize.linprog. It minimizes production cost with labor and output constraints, defines objective coefficients, inequality matrices, bounds, and prints the optimal solution if feasible. Useful as a simple reference for optimization beginners. Simple and easy to adapt Now",
//             "html_url": "https://github.com/Arezki-Cherfouh/Optimization",
//             "language": "Python",
//             "stargazers_count": 1,
//             "topics": []
//           },
//           {
//             "name": "Markov-Baye",
//             "description": "Comprehensive probabilistic modeling project using Markov Chains and Bayesian Networks with pgmpy. Includes weather prediction, text generation, medical diagnosis, alarm reasoning, sampling, and a preference-based decision model, demonstrating inference, uncertainty handling, and probabilistic reasoning end to end.",
//             "html_url": "https://github.com/Arezki-Cherfouh/Markov-Baye",
//             "language": "Python",
//             "stargazers_count": 1,
//             "topics": []
//           },
//           {
//             "name": "RL-Games",
//             "description": "Interactive reinforcement learning demos using Python and Pygame. Includes a Nim game with a Q-learning AI that learns optimal moves through training, and a Grid World environment where an agent learns to reach a goal while avoiding obstacles. Designed for visualizing and understanding Q-learning concepts in practice.",
//             "html_url": "https://github.com/Arezki-Cherfouh/RL-Games",
//             "language": "Python",
//             "stargazers_count": 1,
//             "topics": []
//           },
//           {
//             "name": "Maze",
//             "description": "A Python maze solver demonstrating classic AI search algorithms. The program reads a text-based maze, finds a path from start to goal using DFS, BFS, Greedy Best-First, and A* search, prints the solution in the terminal, and generates visual images showing explored cells and final paths for algorithm comparison.",
//             "html_url": "https://github.com/Arezki-Cherfouh/Maze",
//             "language": "Python",
//             "stargazers_count": 1,
//             "topics": []
//           },
//           {
//             "name": "Deploy-Github-Repos",
//             "description": "Automates GitHub repo creation and content upload. Reads all folders in a local directory, generates (or finds existing) repos using folder names, sets descriptions from README or defaults, initializes git, commits files, and pushes to GitHub — fully automating deployment of multiple projects.",
//             "html_url": "https://github.com/Arezki-Cherfouh/Deploy-Github-Repos",
//             "language": "Python",
//             "stargazers_count": 1,
//             "topics": []
//           },
//           {
//             "name": "Arezki-Cherfouh",
//             "description": "Founder & CEO of Qwerify | SWE | Aspiring AI Engineer | Building Scalable Systems, Technology & AI Projects that Help People Without Distraction",
//             "html_url": "https://github.com/Arezki-Cherfouh/Arezki-Cherfouh",
//             "language": null,
//             "stargazers_count": 1,
//             "topics": []
//           },
//           {
//             "name": "SQL-Python",
//             "description": "Python script demonstrating PostgreSQL connection pooling with psycopg2. Includes functions to initialize a database, insert sample movie records, and query movies by year or top-rated. Efficient and safe connection handling with a threaded pool.",
//             "html_url": "https://github.com/Arezki-Cherfouh/SQL-Python",
//             "language": "Python",
//             "stargazers_count": 1,
//             "topics": []
//           },
//           {
//             "name": "Video-Downloader",
//             "description": "A simple video downloader that supports YouTube and some other platforms built with Python. Provides both a terminal-based version and a Tkinter GUI. Supports video and audio downloads using yt-dlp, with real-time progress updates and customizable save paths.",
//             "html_url": "https://github.com/Arezki-Cherfouh/Video-Downloader",
//             "language": "Python",
//             "stargazers_count": 1,
//             "topics": []
//           },
//           {
//             "name": "Live-Face-Detector",
//             "description": "A real-time face detection application using OpenCV. Captures webcam video, detects faces with Haar cascades, and outlines them dynamically with red polygons. Lightweight and fast, it provides an interactive demonstration of computer vision face detection and visualization and shows mood,age and gender.",
//             "html_url": "https://github.com/Arezki-Cherfouh/Live-Face-Detector",
//             "language": "Python",
//             "stargazers_count": 1,
//             "topics": []
//           },
//           {
//             "name": "DeepSeek-Assistant",
//             "description": "A voice-enabled AI chat assistant combining Vosk for offline speech recognition and DeepSeek API for responses. Captures real-time speech, transcribes it, sends queries to DeepSeek, and reads AI replies aloud using pyttsx3. Fully interactive, cross-platform, and continuously conversational.",
//             "html_url": "https://github.com/Arezki-Cherfouh/DeepSeek-Assistant",
//             "language": "Python",
//             "stargazers_count": 1,
//             "topics": []
//           },
//           {
//             "name": "Speech-To-Text-Vosk",
//             "description": "A Python script using Vosk and PyAudio to capture live microphone input and convert speech to text. Implements a timeout for detecting pauses in speech and saves the recognized text to a file. Simple, offline, and real-time speech recognition solution.",
//             "html_url": "https://github.com/Arezki-Cherfouh/Speech-To-Text-Vosk",
//             "language": "Python",
//             "stargazers_count": 1,
//             "topics": []
//           },
//           {
//             "name": "Face-Marker",
//             "description": "A Python tool to detect and mark faces in images. Uses OpenCV's Haar cascade for face detection and Pillow to draw rectangles around faces. Supports opening images via file dialog, visualizing detected faces, and saving the annotated images in multiple formats. Provides both a terminal-based version and a Tkinter GUI",
//             "html_url": "https://github.com/Arezki-Cherfouh/Face-Marker",
//             "language": "Python",
//             "stargazers_count": 1,
//             "topics": []
//           },
//           {
//             "name": "SpamStorm",
//             "description": "SpamStorm - The Ultimate Message Flooder",
//             "html_url": "https://github.com/Arezki-Cherfouh/SpamStorm",
//             "language": "Python",
//             "stargazers_count": 4,
//             "topics": []
//           },
//           {
//             "name": "Face-Recognizer",
//             "description": "A Python script for face verification using the face_recognition library. Compares a known image with an unknown image by encoding facial features and outputs whether they belong to the same person. Simple, accurate, and easy-to-use face matching demo.",
//             "html_url": "https://github.com/Arezki-Cherfouh/Face-Recognizer",
//             "language": "Python",
//             "stargazers_count": 1,
//             "topics": []
//           },
//           {
//             "name": "Password-Generator",
//             "description": "A Python GUI password generator built with Tkinter. Offers strong (secure) and random password options, lets users specify length, and displays generated passwords in the interface. Supports letters, digits, and symbols for robust password creation. Provides both a terminal-based version and a Tkinter GUI",
//             "html_url": "https://github.com/Arezki-Cherfouh/Password-Generator",
//             "language": "Python",
//             "stargazers_count": 1,
//             "topics": []
//           },
//           {
//             "name": "QR-Code-Generator",
//             "description": "A Python tool to generate QR codes using the qrcode library. Users can input text or URLs, create QR codes with high error correction, and save them in multiple image formats via an interactive Tkinter interface. Simple, fast, and user-friendly QR code generation. Provides both a terminal-based version and a Tkinter GUI",
//             "html_url": "https://github.com/Arezki-Cherfouh/QR-Code-Generator",
//             "language": "Python",
//             "stargazers_count": 1,
//             "topics": []
//           },
//           {
//             "name": "Turtle-Shapes",
//             "description": "Python turtle script that draws multiple filled shapes: a green triangle, blue circle, gray rectangle, yellow square, and a red heart. Each shape is positioned individually, filled with color, and a parametric heart drawing is included but commented out.",
//             "html_url": "https://github.com/Arezki-Cherfouh/Turtle-Shapes",
//             "language": "Python",
//             "stargazers_count": 1,
//             "topics": []
//           },
//           {
//             "name": "py-to-exe-sh",
//             "description": "Lightweight Python project auto-builder. Scans all subfolders, detects .py files, and converts each into standalone .exe and .sh apps using PyInstaller. GUI scripts build without console, others with it. Outputs executables and launch scripts in their original folders — clean, fast, and self-contained.",
//             "html_url": "https://github.com/Arezki-Cherfouh/py-to-exe-sh",
//             "language": "Python",
//             "stargazers_count": 1,
//             "topics": []
//           },
//           {
//             "name": "Create-Github-Repos",
//             "description": "Automates GitHub repo creation and content upload. Reads all folders in a local directory, generates repos using folder names, sets descriptions from README or defaults, initializes git, commits files, and pushes to GitHub — fully automating deployment of multiple projects.",
//             "html_url": "https://github.com/Arezki-Cherfouh/Create-Github-Repos",
//             "language": "Python",
//             "stargazers_count": 1,
//             "topics": []
//           },
//           {
//             "name": "Image-Resizer",
//             "description": "A Python GUI tool to resize images easily. Users can specify custom height and width, select an image via file dialog, and save the resized version in multiple formats. Built with Tkinter and Pillow, it provides a simple and interactive interface for quick image resizing tasks.",
//             "html_url": "https://github.com/Arezki-Cherfouh/Image-Resizer",
//             "language": "Python",
//             "stargazers_count": 1,
//             "topics": []
//           },
//           {
//             "name": "File-Organizer",
//             "description": "A Python GUI tool to automatically organize files in a directory. Sorts videos, images, audio, documents, and other files into corresponding folders, while also moving subdirectories into a dedicated Folders folder. Simple, efficient, and easy-to-use file management solution.",
//             "html_url": "https://github.com/Arezki-Cherfouh/File-Organizer",
//             "language": "Python",
//             "stargazers_count": 1,
//             "topics": []
//           },
//           {
//             "name": "CryptGuard",
//             "description": "CryptGuard - Secure file encryption tool using AES-128. Encrypt/decrypt files with one click. For Windows. Standalone EXE, no install needed. Share files safely with military-grade encryption. Open-source (GPL-3.0).",
//             "html_url": "https://github.com/Arezki-Cherfouh/CryptGuard",
//             "language": "Python",
//             "stargazers_count": 3,
//             "topics": []
//           },
//           {
//             "name": "Emailer",
//             "description": "A multi-service email sender in Python that sends messages via Gmail SMTP, Gmail API, Brevo, Mailjet, and SendGrid. Automatically falls back if one service fails, enabling reliable delivery of HTML emails to any recipient while demonstrating integration with multiple email APIs.",
//             "html_url": "https://github.com/Arezki-Cherfouh/Emailer",
//             "language": "Python",
//             "stargazers_count": 1,
//             "topics": []
//           },
//           {
//             "name": "Password-Hashing",
//             "description": "A simple Python script to hash passwords securely using Passlib. Supports Argon2 and bcrypt algorithms, allowing users to input passwords and receive strong, hashed outputs suitable for safe storage and authentication systems.",
//             "html_url": "https://github.com/Arezki-Cherfouh/Password-Hashing",
//             "language": "Python",
//             "stargazers_count": 1,
//             "topics": []
//           },
//           {
//             "name": "Timer",
//             "description": "Python countdown timer supporting HH:MM:SS or seconds input. Plays a custom audio alert when time is up. Built with pygame for sound playback and simple console interface for easy timer setup.",
//             "html_url": "https://github.com/Arezki-Cherfouh/Timer",
//             "language": "Python",
//             "stargazers_count": 1,
//             "topics": []
//           },
//           {
//             "name": "Smart-File-Reader",
//             "description": "A cross-platform Tkinter app that reads text from PDFs, HTML, DOCX, CSV/XLSX, and images (OCR) aloud using TTS. Supports multiple encodings, handles unsupported file types gracefully, and provides a simple GUI for choosing files to read.",
//             "html_url": "https://github.com/Arezki-Cherfouh/Smart-File-Reader",
//             "language": "Python",
//             "stargazers_count": 1,
//             "topics": []
//           },
//           {
//             "name": "School-Physics",
//             "description": "A FastAPI app that fetches images from school Physics Telegram group, uploads them to IMGBB, caches metadata on GitHub, and displays a scrollable web gallery. Supports captions, sender info, and automatic cache updates for efficient image management and viewing.",
//             "html_url": "https://github.com/Arezki-Cherfouh/School-Physics",
//             "language": "Python",
//             "stargazers_count": 1,
//             "topics": []
//           },
//           {
//             "name": "NoteMaster",
//             "description": "NoteMaster calcule vos moyennes scolaires en un clic. Sélectionnez votre niveau, entrez vos notes (devoirs, évaluations, TP, compositions) et leurs coefficients, et obtenez instantanément vos résultats. Parfait pour le primaire, collège et lycée. Simple, précis, efficace.",
//             "html_url": "https://github.com/Arezki-Cherfouh/NoteMaster",
//             "language": "Python",
//             "stargazers_count": 3,
//             "topics": []
//           }
//         ]);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchRepos();
//   }, []);

//   const skills = [
//     { name: 'Python', level: 95, icon: '🐍' },
//     { name: 'JavaScript', level: 90, icon: '⚡' },
//     { name: 'FastAPI', level: 85, icon: '🚀' },
//     { name: 'Node.js', level: 85, icon: '💚' },
//     { name: 'PostgreSQL', level: 80, icon: '🐘' },
//     { name: 'React', level: 85, icon: '⚛️' },
//     { name: 'React Native', level: 80, icon: '📱' },
//     { name: 'HTML/CSS', level: 95, icon: '🎨' },
//     { name: 'Tailwind CSS', level: 90, icon: '💨' },
//     { name: 'Bootstrap', level: 85, icon: '🅱️' },
//     { name: 'System Design', level: 75, icon: '🏗️' },
//     { name: 'AI/ML', level: 70, icon: '🤖' }
//   ];

//   const filteredRepos = repos.filter(repo =>
//     repo.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     (repo.description && repo.description.toLowerCase().includes(searchTerm.toLowerCase()))
//   );

//   return (
//     <div className="min-h-screen transition-colors duration-500" style={{ 
//       background: 'var(--bg-primary)',
//       color: 'var(--text-primary)',
//       fontFamily: '"JetBrains Mono", "Fira Code", monospace',
//       width: '100%'
//     }}>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;600;700&family=Orbitron:wght@400;500;700;900&display=swap');
        
//         :root {
//           --bg-primary: #0a0e17;
//           --bg-secondary: #151921;
//           --bg-tertiary: #1e2433;
//           --accent-primary: #00d4ff;
//           --accent-secondary: #7c3aed;
//           --accent-glow: #0ea5e9;
//           --text-primary: #e2e8f0;
//           --text-secondary: #94a3b8;
//           --border-color: rgba(0, 212, 255, 0.2);
//         }

//         @media (prefers-color-scheme: light) {
//           :root {
//             --bg-primary: #f8fafc;
//             --bg-secondary: #ffffff;
//             --bg-tertiary: #e2e8f0;
//             --accent-primary: #0891b2;
//             --accent-secondary: #7c3aed;
//             --accent-glow: #0ea5e9;
//             --text-primary: #0f172a;
//             --text-secondary: #475569;
//             --border-color: rgba(8, 145, 178, 0.3);
//           }
//         }

//         * {
//           margin: 0;
//           padding: 0;
//           box-sizing: border-box;
//         }

//         body {
//           overflow-x: hidden;
//         }

//         .glow-text {
//           text-shadow: 0 0 20px var(--accent-glow), 0 0 40px var(--accent-glow);
//         }

//         .neon-border {
//           border: 2px solid var(--border-color);
//           box-shadow: 0 0 20px var(--border-color), inset 0 0 20px rgba(0, 212, 255, 0.1);
//         }

//         .glass-effect {
//           background: rgba(15, 23, 42, 0.6);
//           backdrop-filter: blur(20px);
//           border: 1px solid var(--border-color);
//         }

//         @media (prefers-color-scheme: light) {
//           .glass-effect {
//             background: rgba(255, 255, 255, 0.7);
//           }
//         }

//         .floating {
//           animation: floating 3s ease-in-out infinite;
//         }

//         @keyframes floating {
//           0%, 100% { transform: translateY(0px); }
//           50% { transform: translateY(-20px); }
//         }

//         .pulse-glow {
//           animation: pulseGlow 2s ease-in-out infinite;
//         }

//         @keyframes pulseGlow {
//           0%, 100% { 
//             box-shadow: 0 0 20px var(--accent-glow), 0 0 40px var(--accent-glow);
//           }
//           50% { 
//             box-shadow: 0 0 40px var(--accent-glow), 0 0 80px var(--accent-glow);
//           }
//         }

//         .scan-line {
//           position: relative;
//           overflow: hidden;
//         }

//         .scan-line::before {
//           content: '';
//           position: absolute;
//           top: 0;
//           left: -100%;
//           width: 100%;
//           height: 100%;
//           background: linear-gradient(90deg, transparent, var(--accent-primary), transparent);
//           animation: scan 3s linear infinite;
//           opacity: 0.3;
//         }

//         @keyframes scan {
//           0% { left: -100%; }
//           100% { left: 100%; }
//         }

//         .grid-bg {
//           background-image: 
//             linear-gradient(var(--border-color) 1px, transparent 1px),
//             linear-gradient(90deg, var(--border-color) 1px, transparent 1px);
//           background-size: 50px 50px;
//         }

//         .tech-card {
//           transition: all 0.3s ease;
//           border: 1px solid var(--border-color);
//         }

//         .tech-card:hover {
//           transform: translateY(-5px) scale(1.02);
//           box-shadow: 0 20px 40px rgba(0, 212, 255, 0.3);
//           border-color: var(--accent-primary);
//         }

//         .skill-bar {
//           position: relative;
//           overflow: hidden;
//         }

//         .skill-bar::after {
//           content: '';
//           position: absolute;
//           top: 0;
//           left: 0;
//           height: 100%;
//           width: 100%;
//           background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
//           animation: shimmer 2s infinite;
//         }

//         @keyframes shimmer {
//           0% { transform: translateX(-100%); }
//           100% { transform: translateX(100%); }
//         }

//         .project-card {
//           transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
//         }

//         .project-card:hover {
//           transform: translateY(-10px);
//           box-shadow: 0 30px 60px rgba(0, 212, 255, 0.4);
//         }

//         .tab-button {
//           position: relative;
//           transition: all 0.3s ease;
//         }

//         .tab-button::before {
//           content: '';
//           position: absolute;
//           bottom: 0;
//           left: 50%;
//           width: 0;
//           height: 2px;
//           background: var(--accent-primary);
//           transition: all 0.3s ease;
//           transform: translateX(-50%);
//         }

//         .tab-button.active::before {
//           width: 100%;
//         }

//         .circuit-line {
//           position: absolute;
//           width: 2px;
//           height: 100px;
//           background: linear-gradient(180deg, transparent, var(--accent-primary), transparent);
//           animation: circuit 3s linear infinite;
//         }

//         @keyframes circuit {
//           0% { transform: translateY(-100px); opacity: 0; }
//           50% { opacity: 1; }
//           100% { transform: translateY(100vh); opacity: 0; }
//         }

//         /* Mobile Responsive Styles for screens under 614px */
//         @media (max-width: 614px) {
//           .header-nav {
//             flex-direction: column !important;
//             gap: 16px !important;
//           }

//           .header-logo {
//             font-size: 22px !important;
//           }

//           .header-logo svg {
//             width: 24px !important;
//             height: 24px !important;
//           }

//           .nav-tabs {
//             gap: 16px !important;
//             flex-wrap: wrap;
//             justify-content: center;
//           }

//           .tab-button {
//             font-size: 13px !important;
//             letter-spacing: 1px !important;
//           }

//           .profile-picture-container {
//             width: 140px !important;
//             height: 140px !important;
//           }

//           .profile-badge {
//             padding: 8px !important;
//             top: -5px !important;
//             right: -5px !important;
//           }

//           .profile-badge svg {
//             width: 20px !important;
//             height: 20px !important;
//           }

//           .main-title {
//             font-size: 32px !important;
//           }

//           .main-subtitle {
//             font-size: 16px !important;
//           }

//           .social-links {
//             flex-direction: column !important;
//             gap: 12px !important;
//             width: 100%;
//           }

//           .social-link {
//             width: 100%;
//             justify-content: center;
//             padding: 10px 16px !important;
//           }

//           .section-title {
//             font-size: 28px !important;
//           }

//           .section-title svg {
//             width: 22px !important;
//             height: 22px !important;
//           }

//           .about-section {
//             padding: 24px !important;
//           }

//           .about-text {
//             font-size: 15px !important;
//           }

//           .current-focus-title {
//             font-size: 22px !important;
//           }

//           .current-focus-list {
//             font-size: 15px !important;
//           }

//           .projects-title {
//             font-size: 32px !important;
//           }

//           .projects-title svg {
//             width: 28px !important;
//             height: 28px !important;
//           }

//           .search-input {
//             font-size: 15px !important;
//             padding: 12px 16px !important;
//           }

//           .projects-grid {
//             grid-template-columns: 1fr !important;
//           }

//           .project-card {
//             padding: 20px !important;
//           }

//           .project-title {
//             font-size: 18px !important;
//           }

//           .project-description {
//             font-size: 14px !important;
//             min-height: auto !important;
//           }

//           .project-language {
//             font-size: 12px !important;
//             padding: 4px 12px !important;
//           }

//           .project-link {
//             font-size: 12px !important;
//             padding: 6px 12px !important;
//           }

//           .skills-section-title {
//             font-size: 32px !important;
//           }

//           .skill-card {
//             padding: 20px !important;
//           }

//           .skill-icon {
//             font-size: 24px !important;
//           }

//           .skill-name {
//             font-size: 18px !important;
//           }

//           .skill-percentage {
//             font-size: 16px !important;
//           }

//           .contact-title {
//             font-size: 32px !important;
//           }

//           .contact-container {
//             padding: 32px 20px !important;
//           }

//           .contact-icon {
//             width: 48px !important;
//             height: 48px !important;
//           }

//           .contact-description {
//             font-size: 16px !important;
//           }

//           .contact-link {
//             padding: 14px 12px !important;
//             font-size: 13px !important;
//             flex-direction: column !important;
//             gap: 8px !important;
//           }

//           .contact-link svg {
//             width: 18px !important;
//             height: 18px !important;
//           }

//           .contact-link span {
//             word-break: break-word;
//             text-align: center;
//           }

//           .footer-text {
//             font-size: 14px !important;
//           }

//           .footer-subtext {
//             font-size: 12px !important;
//           }

//           .main-content {
//             padding: 40px 16px !important;
//           }

//           .repos-summary {
//             padding: 24px 16px !important;
//           }

//           .repos-text {
//             font-size: 15px !important;
//           }

//           .view-all-button {
//             padding: 12px 20px !important;
//             font-size: 14px !important;
//           }
//         }
//       `}</style>

//       {/* Animated Background Elements */}
//       <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 0 }}>
//         <div className="circuit-line" style={{ left: '10%', animationDelay: '0s' }}></div>
//         <div className="circuit-line" style={{ left: '30%', animationDelay: '1s' }}></div>
//         <div className="circuit-line" style={{ left: '50%', animationDelay: '2s' }}></div>
//         <div className="circuit-line" style={{ left: '70%', animationDelay: '0.5s' }}></div>
//         <div className="circuit-line" style={{ left: '90%', animationDelay: '1.5s' }}></div>
//       </div>

//       {/* Header */}
//       <header className="glass-effect" style={{ 
//         position: 'sticky', 
//         top: 0, 
//         zIndex: 50,
//         padding: '20px 0',
//         borderBottom: '1px solid var(--border-color)'
//       }}>
//         <nav className="header-nav" style={{  
//           margin: '0 auto', 
//           padding: '0 24px',
//           display: 'flex',
//           justifyContent: 'space-between',
//           alignItems: 'center'
//         }}>
//           <div className="header-logo" style={{ 
//             fontSize: '28px', 
//             fontWeight: 700,
//             fontFamily: '"Orbitron", monospace',
//             background: `linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))`,
//             WebkitBackgroundClip: 'text',
//             WebkitTextFillColor: 'transparent',
//             display: 'flex',
//             alignItems: 'center',
//             gap: '12px'
//           }}>
//             <Terminal size={32} style={{cursor: hasMouse ? 'pointer' : 'default'}} />
//             <span className="glow-text" style={{userSelect: 'none',cursor: hasMouse ? 'pointer' : 'default'}}>AC</span>
//           </div>
          
//           <div className="nav-tabs" style={{ display: 'flex', gap: '32px' }}>
//             {['about', 'projects', 'skills', 'contact'].map(tab => (
//               <Link
//                 key={tab}
//                 to={`/${tab}`}
//                 className={`tab-button ${activeTab === tab ? 'active' : ''}`}
//                 style={{
//                   background: 'transparent',
//                   color: activeTab === tab ? 'var(--accent-primary)' : 'var(--text-secondary)',
//                   fontSize: '16px',
//                   fontWeight: 600,
//                   cursor: hasMouse ? 'pointer' : 'default',
//                   padding: '8px 0',
//                   textTransform: 'uppercase',
//                   letterSpacing: '2px',
//                   fontFamily: '"Orbitron", monospace',
//                   textDecoration: 'none'
//                 }}
//               >
//                 {tab}
//               </Link>
//             ))}
//           </div>
//         </nav>
//       </header>

//       {/* Main Content */}
//       <main className="main-content" style={{ width: '100%', margin: '0 auto', padding: '60px 24px', position: 'relative', zIndex: 1 }}>
//         {/* About Section */}
//         {activeTab === 'about' && (
//           <div style={{ animation: 'fadeIn 0.5s ease-in' }}>
//             {/* Profile Picture */}
//             <div style={{ 
//               display: 'flex', 
//               justifyContent: 'center', 
//               marginBottom: '48px' 
//             }}>
//               <div style={{ position: 'relative' }}>
//                 <div className="pulse-glow profile-picture-container" style={{
//                   width: '200px',
//                   height: '200px',
//                   borderRadius: '50%',
//                   border: '4px solid var(--accent-primary)',
//                   padding: '8px',
//                   background: `linear-gradient(135deg, var(--bg-secondary), var(--bg-tertiary))`,
//                   cursor: hasMouse ? 'pointer' : 'default'
//                 }}>
//                   <img 
//                     src="https://avatars.githubusercontent.com/u/195492204?v=4"
//                     alt="Arezki Cherfouh"
//                     style={{
//                       width: '100%',
//                       height: '100%',
//                       borderRadius: '50%',
//                       objectFit: 'cover',
//                       userSelect: 'none',
//                       pointerEvents: 'none'
//                     }}
//                   />
//                 </div>
//                 <div className="profile-badge" style={{
//                   position: 'absolute',
//                   top: '-10px',
//                   right: '-10px',
//                   background: 'var(--accent-primary)',
//                   borderRadius: '50%',
//                   padding: '12px',
//                   boxShadow: '0 0 30px var(--accent-glow)'
//                 }}>
//                   <Cpu size={28} color="var(--bg-primary)" />
//                 </div>
//               </div>
//             </div>

//             {/* Name and Title */}
//             <div style={{ textAlign: 'center', marginBottom: '48px' }}>
//               <h1 className="main-title" style={{ 
//                 fontSize: '56px', 
//                 fontWeight: 900,
//                 marginBottom: '16px',
//                 fontFamily: '"Orbitron", monospace',
//                 background: `linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))`,
//                 WebkitBackgroundClip: 'text',
//                 WebkitTextFillColor: 'transparent',
//                 userSelect: 'none',
//                 cursor: hasMouse ? 'pointer' : 'default'
//               }} >
//                 AREZKI CHERFOUH
//               </h1>
//               <p className="main-subtitle" style={{ 
//                 fontSize: '24px', 
//                 color: 'var(--text-secondary)',
//                 marginBottom: '24px',
//                 fontWeight: 600,
//                 userSelect: 'none',
//                 cursor: hasMouse ? 'pointer' : 'default'
//               }}>
//                 Founder & CEO of Qwerify | Software Engineer | AI Enthusiast
//               </p>
//               <div className="social-links" style={{ 
//                 display: 'flex', 
//                 justifyContent: 'center', 
//                 gap: '24px',
//                 marginTop: '32px'
//               }}>
//                 <a href="https://github.com/Arezki-Cherfouh" target="_blank" rel="noopener noreferrer" 
//                    className="neon-border social-link"
//                    style={{ 
//                      padding: '12px 24px', 
//                      borderRadius: '8px',
//                      display: 'flex',
//                      alignItems: 'center',
//                      gap: '8px',
//                      textDecoration: 'none',
//                      color: 'var(--text-primary)',
//                      transition: 'all 0.3s ease',
//                      background: 'var(--bg-secondary)'
//                    }}>
//                   <Github size={20} />
//                   <span>GitHub</span>
//                 </a>
//                 <a href="https://www.linkedin.com/in/arezki-cherfouh" target="_blank" rel="noopener noreferrer"
//                    className="neon-border social-link"
//                    style={{ 
//                      padding: '12px 24px', 
//                      borderRadius: '8px',
//                      display: 'flex',
//                      alignItems: 'center',
//                      gap: '8px',
//                      textDecoration: 'none',
//                      color: 'var(--text-primary)',
//                      transition: 'all 0.3s ease',
//                      background: 'var(--bg-secondary)'
//                    }}>
//                   <Linkedin size={20} />
//                   <span>LinkedIn</span>
//                 </a>
//                 <a href="https://qwerify.vercel.app" target="_blank" rel="noopener noreferrer"
//                    className="neon-border social-link"
//                    style={{ 
//                      padding: '12px 24px', 
//                      borderRadius: '8px',
//                      display: 'flex',
//                      alignItems: 'center',
//                      gap: '8px',
//                      textDecoration: 'none',
//                      color: 'var(--text-primary)',
//                      transition: 'all 0.3s ease',
//                      background: 'var(--bg-secondary)'
//                    }}>
//                   <ExternalLink size={20} />
//                   <span>Qwerify</span>
//                 </a>
//               </div>
//             </div>

//             {/* Bio */}
//             <div className="glass-effect scan-line about-section" style={{ 
//               padding: '40px', 
//               borderRadius: '16px',
//               marginBottom: '32px'
//             }}>
//               <h2 className="section-title" style={{ 
//                 fontSize: '32px', 
//                 marginBottom: '24px',
//                 color: 'var(--accent-primary)',
//                 fontFamily: '"Orbitron", monospace',
//                 userSelect: 'none',
//                 cursor: hasMouse ? 'pointer' : 'default'
//               }}>
//                 <Sparkles size={28} style={{ display: 'inline', marginRight: '12px' }} />
//                 About Me
//               </h2>
//               <div className="about-text" style={{ 
//                 fontSize: '18px', 
//                 lineHeight: '1.8',
//                 color: 'var(--text-secondary)'
//               }}>
//                 <p style={{ marginBottom: '16px' }}>
//                   I'm Arezki Cherfouh, a student developer and the <strong style={{ color: 'var(--accent-primary)' }}>Founder & CEO of Qwerify</strong>, 
//                   an independent tech project I started on July 19, 2025 to rethink how people connect and interact through technology.
//                 </p>
//                 <p style={{ marginBottom: '16px' }}>
//                   Born on September 07, 2009 and passionate about AI and innovation. Qwerify is currently in development — 
//                   not yet a registered company — but it represents my long-term vision of building a global technology brand 
//                   that expands beyond communication into AI-driven systems, productivity tools, and scalable digital experiences 
//                   that <strong style={{ color: 'var(--accent-primary)' }}>help people without distraction</strong>.
//                 </p>
//                 <p style={{ marginBottom: '16px' }}>
//                   I specialize in <strong style={{ color: 'var(--accent-primary)' }}>Python, JavaScript, FastAPI, Node.js, SQL (PostgreSQL), 
//                   ReactJS/React Native, HTML/CSS, Tailwind CSS & Bootstrap</strong>, with growing experience in system design and AI.
//                 </p>
//                 <p style={{ marginBottom: '16px' }}>
//                   Through Qwerify, I've gained practical experience in full-stack development, real-time communication, 
//                   secure authentication, and infrastructure scalability.
//                 </p>
//                 <p>
//                   My long-term goal is to become a <strong style={{ color: 'var(--accent-primary)' }}>world-class AI engineer and CEO</strong>, 
//                   and to grow Qwerify into a global company that competes with leading tech innovators — guided by the principles 
//                   of privacy, focus, and human-centered design.
//                 </p>
//               </div>
//             </div>

//             {/* Current Focus */}
//             <div className="glass-effect about-section" style={{ 
//               padding: '40px', 
//               borderRadius: '16px'
//             }}>
//               <h3 className="current-focus-title" style={{ 
//                 fontSize: '28px', 
//                 marginBottom: '24px',
//                 color: 'var(--accent-primary)',
//                 fontFamily: '"Orbitron", monospace',
//                 userSelect: 'none',
//                 cursor: hasMouse ? 'pointer' : 'default'
//               }}>
//                 Current Focus
//               </h3>
//               <ul className="current-focus-list" style={{ 
//                 listStyle: 'none', 
//                 fontSize: '18px',
//                 lineHeight: '2',
//                 color: 'var(--text-secondary)'
//               }}>
//                 <li style={{ marginBottom: '12px', display: 'flex', alignItems: 'start' }}>
//                   Strengthening my knowledge in data structures, algorithms, and system design for big tech opportunities
//                 </li>
//                 <li style={{ marginBottom: '12px', display: 'flex', alignItems: 'start' }}>
//                   Expanding Qwerify with AI features and mobile development
//                 </li>
//                 <li style={{ marginBottom: '12px', display: 'flex', alignItems: 'start' }}>
//                   Building a professional portfolio on GitHub and connecting with engineers, founders, and innovators worldwide
//                 </li>
//               </ul>
//             </div>
//           </div>
//         )}

//         {/* Projects Section */}
//         {activeTab === 'projects' && (
//           <div style={{ animation: 'fadeIn 0.5s ease-in' }}>
//             <h2 className="projects-title" style={{ 
//               fontSize: '48px', 
//               marginBottom: '32px',
//               fontFamily: '"Orbitron", monospace',
//               color: 'var(--accent-primary)',
//               textAlign: 'center',
//               userSelect: 'none',
//               cursor: hasMouse ? 'pointer' : 'default'
//             }}>
//               <Code2 size={40} style={{ display: 'inline', marginRight: '16px' }} />
//               Projects Portfolio
//             </h2>
            
//             <div style={{ 
//               marginBottom: '32px',
//               textAlign: 'center'
//             }}>
//               <input
//                 type="text"
//                 placeholder="Search projects..."
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 className="neon-border search-input"
//                 style={{
//                   padding: '16px 24px',
//                   fontSize: '18px',
//                   borderRadius: '12px',
//                   background: 'var(--bg-secondary)',
//                   color: 'var(--text-primary)',
//                   width: '100%',
//                   maxWidth: '600px',
//                   outline: 'none'
//                 }}
//               />
//             </div>

//             <div className="projects-grid" style={{ 
//               display: 'grid', 
//               gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', 
//               gap: '24px',
//               marginBottom: '32px'
//             }}>
//               {loading ? (
//                 <div style={{ 
//                   gridColumn: '1 / -1',
//                   textAlign: 'center',
//                   padding: '60px',
//                   fontSize: '20px',
//                   color: 'var(--text-secondary)'
//                 }}>
//                   <div className="floating">Loading projects...</div>
//                 </div>
//               ) : filteredRepos.length > 0 ? (
//                 filteredRepos.map((repo, index) => (
//                   <div 
//                     key={index}
//                     className="project-card glass-effect"
//                     style={{
//                       padding: '32px',
//                       borderRadius: '16px',
//                       border: '1px solid var(--border-color)',
//                       animationDelay: `${index * 0.1}s`,
//                       cursor: hasMouse ? 'pointer' : 'default'
//                     }}
//                   >
//                     <div style={{ 
//                       display: 'flex', 
//                       justifyContent: 'space-between',
//                       alignItems: 'start',
//                       marginBottom: '16px'
//                     }}>
//                       <h3 className="project-title" style={{ 
//                         fontSize: '24px',
//                         color: 'var(--accent-primary)',
//                         fontFamily: '"Orbitron", monospace',
//                         fontWeight: 700
//                       }}>
//                         {repo.name}
//                       </h3>
//                       {repo.stargazers_count > 0 && (
//                         <div style={{
//                           background: 'var(--accent-primary)',
//                           color: 'var(--bg-primary)',
//                           padding: '4px 12px',
//                           borderRadius: '20px',
//                           fontSize: '14px',
//                           fontWeight: 600
//                         }}>
//                           ⭐ {repo.stargazers_count}
//                         </div>
//                       )}
//                     </div>
                    
//                     <p className="project-description" style={{ 
//                       color: 'var(--text-secondary)',
//                       marginBottom: '20px',
//                       lineHeight: '1.6',
//                       minHeight: '60px'
//                     }}>
//                       {repo.description || 'No description available'}
//                     </p>
                    
//                     <div style={{ 
//                       display: 'flex',
//                       justifyContent: 'space-between',
//                       alignItems: 'center',
//                       marginTop: '20px'
//                     }}>
//                       {repo.language && (
//                         <span className="project-language" style={{
//                           background: 'var(--bg-tertiary)',
//                           padding: '6px 16px',
//                           borderRadius: '20px',
//                           fontSize: '14px',
//                           color: 'var(--accent-primary)',
//                           fontWeight: 600
//                         }}>
//                           {repo.language}
//                         </span>
//                       )}
                      
//                       <a 
//                         href={repo.html_url}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="neon-border project-link"
//                         style={{
//                           padding: '8px 16px',
//                           borderRadius: '8px',
//                           textDecoration: 'none',
//                           color: 'var(--text-primary)',
//                           display: 'flex',
//                           alignItems: 'center',
//                           gap: '8px',
//                           background: 'var(--bg-secondary)',
//                           fontSize: '14px',
//                           fontWeight: 600
//                         }}
//                       >
//                         View
//                         <ExternalLink size={16} />
//                       </a>
//                     </div>
//                   </div>
//                 ))
//               ) : (
//                 <div style={{ 
//                   gridColumn: '1 / -1',
//                   textAlign: 'center',
//                   padding: '60px',
//                   fontSize: '20px',
//                   color: 'var(--text-secondary)'
//                 }}>
//                   No projects found matching &quot;{searchTerm}&quot;
//                 </div>
//               )}
//             </div>

//             <div className="repos-summary" style={{ 
//               textAlign: 'center',
//               marginTop: '48px',
//               padding: '32px',
//               background: 'var(--bg-secondary)',
//               borderRadius: '16px',
//               border: '1px solid var(--border-color)'
//             }}>
//               <p className="repos-text" style={{ 
//                 fontSize: '18px',
//                 color: 'var(--text-secondary)',
//                 marginBottom: '16px'
//               }}>
//                 Total Repositories: <strong style={{ color: 'var(--accent-primary)' }}>{repos.length}</strong>
//               </p>
//               <a 
//                 href="https://github.com/Arezki-Cherfouh?tab=repositories"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="neon-border view-all-button"
//                 style={{
//                   display: 'inline-flex',
//                   padding: '16px 32px',
//                   borderRadius: '12px',
//                   textDecoration: 'none',
//                   color: 'var(--text-primary)',
//                   alignItems: 'center',
//                   gap: '12px',
//                   background: 'var(--bg-tertiary)',
//                   fontSize: '16px',
//                   fontWeight: 600,
//                   fontFamily: '"Orbitron", monospace'
//                 }}
//               >
//                 View All on GitHub
//                 <Github size={20} />
//               </a>
//             </div>
//           </div>
//         )}

//         {/* Skills Section */}
//         {activeTab === 'skills' && (
//           <div style={{ animation: 'fadeIn 0.5s ease-in' }}>
//             <h2 className="skills-section-title" style={{ 
//               fontSize: '48px', 
//               marginBottom: '48px',
//               fontFamily: '"Orbitron", monospace',
//               color: 'var(--accent-primary)',
//               textAlign: 'center',
//               userSelect: 'none',
//               cursor: hasMouse ? 'pointer' : 'default'
//             }}>
//               Technical Expertise
//             </h2>
            
//             <div style={{ 
//               display: 'grid', 
//               gap: '24px'
//             }}>
//               {skills.map((skill, index) => (
//                 <div 
//                   key={index}
//                   className="tech-card glass-effect skill-card"
//                   style={{
//                     padding: '32px',
//                     borderRadius: '16px',
//                     animationDelay: `${index * 0.1}s`,
//                     cursor: hasMouse ? 'pointer' : 'default'
//                   }}
//                 >
//                   <div style={{ 
//                     display: 'flex',
//                     justifyContent: 'space-between',
//                     alignItems: 'center',
//                     marginBottom: '16px'
//                   }}>
//                     <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
//                       <span className="skill-icon" style={{ fontSize: '32px' }}>{skill.icon}</span>
//                       <h3 className="skill-name" style={{ 
//                         fontSize: '24px',
//                         fontFamily: '"Orbitron", monospace',
//                         color: 'var(--text-primary)'
//                       }}>
//                         {skill.name}
//                       </h3>
//                     </div>
//                     <span className="skill-percentage" style={{ 
//                       fontSize: '20px',
//                       fontWeight: 700,
//                       color: 'var(--accent-primary)'
//                     }}>
//                       {skill.level}%
//                     </span>
//                   </div>
                  
//                   <div style={{
//                     width: '100%',
//                     height: '12px',
//                     background: 'var(--bg-tertiary)',
//                     borderRadius: '6px',
//                     overflow: 'hidden',
//                     border: '1px solid var(--border-color)'
//                   }}>
//                     <div 
//                       className="skill-bar"
//                       style={{
//                         width: `${skill.level}%`,
//                         height: '100%',
//                         background: `linear-gradient(90deg, var(--accent-primary), var(--accent-secondary))`,
//                         borderRadius: '6px',
//                         transition: 'width 1s ease-out'
//                       }}
//                     />
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}

//         {/* Contact Section */}
//         {activeTab === 'contact' && (
//           <div style={{ animation: 'fadeIn 0.5s ease-in' }}>
//             <h2 className="contact-title" style={{ 
//               fontSize: '48px', 
//               marginBottom: '32px',
//               fontFamily: '"Orbitron", monospace',
//               color: 'var(--accent-primary)',
//               textAlign: 'center',
//               userSelect: 'none',
//               cursor: hasMouse ? 'pointer' : 'default'
//             }}>
//               Get In Touch
//             </h2>
            
//             <div className="glass-effect contact-container" style={{ 
//               padding: '60px', 
//               borderRadius: '16px',
//               maxWidth: '800px',
//               margin: '0 auto',
//               textAlign: 'center'
//             }}>
//               <Mail className="contact-icon" size={64} style={{ 
//                 color: 'var(--accent-primary)',
//                 marginBottom: '32px'
//               }} />
              
//               <p className="contact-description" style={{ 
//                 fontSize: '20px',
//                 color: 'var(--text-secondary)',
//                 marginBottom: '48px',
//                 lineHeight: '1.8'
//               }}>
//                 Always open to collaborating with those who share the vision of creating technology 
//                 that empowers people — not distracts them.
//               </p>
              
//               <div style={{ 
//                 display: 'grid',
//                 gap: '24px',
//                 marginTop: '48px'
//               }}>
//                 <a 
//                   href="mailto:qwerify.ceo@gmail.com"
//                   className="neon-border tech-card contact-link"
//                   style={{
//                     padding: '24px',
//                     borderRadius: '12px',
//                     textDecoration: 'none',
//                     color: 'var(--text-primary)',
//                     display: 'flex',
//                     alignItems: 'center',
//                     justifyContent: 'center',
//                     gap: '16px',
//                     background: 'var(--bg-secondary)',
//                     fontSize: '20px',
//                     fontWeight: 600
//                   }}
//                 >
//                   <Mail size={28} />
//                   <span>Email: qwerify.ceo@gmail.com</span>
//                 </a>
                
//                 <a 
//                   href="https://github.com/Arezki-Cherfouh"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="neon-border tech-card contact-link"
//                   style={{
//                     padding: '24px',
//                     borderRadius: '12px',
//                     textDecoration: 'none',
//                     color: 'var(--text-primary)',
//                     display: 'flex',
//                     alignItems: 'center',
//                     justifyContent: 'center',
//                     gap: '16px',
//                     background: 'var(--bg-secondary)',
//                     fontSize: '20px',
//                     fontWeight: 600
//                   }}
//                 >
//                   <Github size={28} />
//                   <span>GitHub: @Arezki-Cherfouh</span>
//                 </a>
                
//                 <a 
//                   href="https://www.linkedin.com/in/arezki-cherfouh"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="neon-border tech-card contact-link"
//                   style={{
//                     padding: '24px',
//                     borderRadius: '12px',
//                     textDecoration: 'none',
//                     color: 'var(--text-primary)',
//                     display: 'flex',
//                     alignItems: 'center',
//                     justifyContent: 'center',
//                     gap: '16px',
//                     background: 'var(--bg-secondary)',
//                     fontSize: '20px',
//                     fontWeight: 600
//                   }}
//                 >
//                   <Linkedin size={28} />
//                   <span>LinkedIn: Arezki Cherfouh</span>
//                 </a>
                
//                 <a 
//                   href="https://qwerify.vercel.app"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="neon-border tech-card contact-link"
//                   style={{
//                     padding: '24px',
//                     borderRadius: '12px',
//                     textDecoration: 'none',
//                     color: 'var(--text-primary)',
//                     display: 'flex',
//                     alignItems: 'center',
//                     justifyContent: 'center',
//                     gap: '16px',
//                     background: 'var(--bg-secondary)',
//                     fontSize: '20px',
//                     fontWeight: 600
//                   }}
//                 >
//                   <ExternalLink size={28} />
//                   <span>Qwerify: qwerify.vercel.app</span>
//                 </a>

//                 <a 
//                   href="https://qwerify.vercel.app/profiles?user=1"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="neon-border tech-card contact-link"
//                   style={{
//                     padding: '24px',
//                     borderRadius: '12px',
//                     textDecoration: 'none',
//                     color: 'var(--text-primary)',
//                     display: 'flex',
//                     alignItems: 'center',
//                     justifyContent: 'center',
//                     gap: '16px',
//                     background: 'var(--bg-secondary)',
//                     fontSize: '20px',
//                     fontWeight: 600
//                   }}
//                 >
//                   <Sparkles size={28} />
//                   <span>Qwerify Profile</span>
//                 </a>
//               </div>
//             </div>
//           </div>
//         )}
//       </main>

//       {/* Footer */}
//       <footer style={{ 
//         borderTop: '1px solid var(--border-color)',
//         padding: '40px 24px',
//         textAlign: 'center',
//         background: 'var(--bg-secondary)'
//       }}>
//         <p className="footer-text" style={{ 
//           color: 'var(--text-secondary)',
//           fontSize: '16px'
//         }}>
//           © {new Date().getFullYear()} Arezki Cherfouh. Built with React & Tailwind CSS.
//         </p>
//         <p className="footer-subtext" style={{ 
//           color: 'var(--text-secondary)',
//           fontSize: '14px',
//           marginTop: '8px'
//         }}>
//           Building technology that empowers people without distraction.
//         </p>
//       </footer>
//     </div>
//   );
// };

// export default Portfolio;




import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Github, Linkedin, ExternalLink, Mail, Code2, Sparkles, Terminal, Cpu } from 'lucide-react';

interface Repository {
  name: string;
  description: string;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  topics: string[];
}

interface PortfolioProps {
  initialTab?: string;
}

const Portfolio: React.FC<PortfolioProps> = ({ initialTab = 'about' }) => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(initialTab);
  const [repos, setRepos] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [hasMouse, setHasMouse] = useState(false);

  // Sync activeTab with route
  useEffect(() => {
    const path = location.pathname.slice(1) || 'about'; // Remove leading slash, default to 'about'
    if (['about', 'projects', 'skills', 'contact'].includes(path)) {
      setActiveTab(path);
    }
  }, [location]);

  // Detect if user has a mouse
  useEffect(() => {
    const hasFineMouse = window.matchMedia('(pointer: fine)').matches;
    setHasMouse(hasFineMouse);
  }, []);

  // Reset scroll on tab change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeTab]);

  // Fetch GitHub repos
  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch('https://api.github.com/users/Arezki-Cherfouh/repos?per_page=100&sort=updated');
        const data = await response.json();
        
        setRepos(data);
      } catch (error) {
        console.error('Error fetching repos:', error);
        // Fallback data from your profile
        setRepos([
          {
            "name": "Focused-Students",
            "description": "Real-time student focus and hand-raise detection using OpenCV and MediaPipe Pose. The system tracks posture, head orientation, eye alignment, and slumping to classify attention as Focused or Distracted, draws bounding boxes, detects raised hands, and runs live from a webcam for classroom monitoring.",
            "html_url": "https://github.com/Arezki-Cherfouh/Focused-Students",
            "language": "Python",
            "stargazers_count": 1,
            "topics": []
          },
          {
            "name": "3D-Hand-Controller",
            "description": "Futuristic 3D Hand Controller uses MediaPipe and OpenGL to track hand gestures via webcam, enabling real-time manipulation of 3D wireframe shapes. Zoom, rotate, move, and switch shapes or neon colors with intuitive gestures, creating an interactive, visually immersive experience.",
            "html_url": "https://github.com/Arezki-Cherfouh/3D-Hand-Controller",
            "language": "Python",
            "stargazers_count": 1,
            "topics": []
          },
          {
            "name": "Ollama-Models",
            "description": "This repository demonstrates an autonomous Python agent using the Ollama LLaMA 3.2 3B model. It interacts with the user, decides actions, executes shell commands, and maintains memory. The goal is to autonomously create a script.py file and finish execution, showcasing AI-driven task automation.",
            "html_url": "https://github.com/Arezki-Cherfouh/Ollama-Models",
            "language": "Python",
            "stargazers_count": 1,
            "topics": []
          },
          {
            "name": "Bank-Notes",
            "description": "Machine learning project that classifies banknotes as authentic or counterfeit using multiple algorithms. Implements SVM, KNN, Perceptron, and Naive Bayes on the same dataset, compares accuracy, and demonstrates a clean end-to-end ML workflow with training, testing, and evaluation.",
            "html_url": "https://github.com/Arezki-Cherfouh/Bank-Notes",
            "language": "Python",
            "stargazers_count": 1,
            "topics": []
          },
          {
            "name": "Mall-Customers",
            "description": "Customer segmentation project using K-Means clustering on mall customer data. Scales features, evaluates optimal cluster count with elbow and silhouette methods, visualizes clusters in 2D and 3D, analyzes cluster characteristics, and exports labeled data for further business analysis.",
            "html_url": "https://github.com/Arezki-Cherfouh/Mall-Customers",
            "language": "Python",
            "stargazers_count": 1,
            "topics": []
          },
          {
            "name": "Nuclear-Reaction",
            "description": "Interactive nuclear fission simulator using hand tracking with MediaPipe and OpenCV. Simulate U-235 reacting with neutrons, visualize energy release, particle products, and allow real-time manipulation of atoms and neutrons via pinch gestures. Educational and visually dynamic.",
            "html_url": "https://github.com/Arezki-Cherfouh/Nuclear-Reaction",
            "language": "HTML",
            "stargazers_count": 1,
            "topics": []
          },
          {
            "name": "Coach",
            "description": "Real-time exercise tracking using OpenCV and MediaPipe Pose. This project detects and counts squats, pushups, situps, and arm lifts through webcam input by analyzing joint angles and body posture. It displays live pose landmarks and accurate rep counters on screen with no extra hardware.",
            "html_url": "https://github.com/Arezki-Cherfouh/Coach",
            "language": "Python",
            "stargazers_count": 1,
            "topics": []
          },
          {
            "name": "Binary-Search-sqrt",
            "description": "Python script that calculates square root of any number int or float using binary search",
            "html_url": "https://github.com/Arezki-Cherfouh/Binary-Search-sqrt",
            "language": "Python",
            "stargazers_count": 1,
            "topics": []
          },
          {
            "name": "Local-Search",
            "description": "Local search optimization project that places hospitals on a grid to minimize total distance to houses. Uses hill climbing with random restarts, Manhattan distance cost evaluation, and visual output generation to demonstrate optimization behavior and convergence in a clear, educational way.",
            "html_url": "https://github.com/Arezki-Cherfouh/Local-Search",
            "language": "Python",
            "stargazers_count": 1,
            "topics": []
          },
          {
            "name": "Scheduling",
            "description": "Python constraint programming example for course scheduling using the python-constraint library. Assigns time slots to courses while enforcing rules like no overlaps, day restrictions, and morning-only classes. Generates and prints all valid schedules, making it a clear introduction to constraint satisfaction problems.",
            "html_url": "https://github.com/Arezki-Cherfouh/Scheduling",
            "language": "Python",
            "stargazers_count": 1,
            "topics": []
          },
          {
            "name": "Tic-Tac-Toe",
            "description": "Modern Tic Tac Toe game built with Python and Pygame, featuring an unbeatable Minimax AI with alpha-beta pruning. Includes a clean UI, animated win lines, game stats, alternating first player, and restart system. Great demo of classic game AI and Pygame fundamentals.",
            "html_url": "https://github.com/Arezki-Cherfouh/Tic-Tac-Toe",
            "language": "Python",
            "stargazers_count": 1,
            "topics": []
          },
          {
            "name": "Random-Forests",
            "description": "End-to-end machine learning projects using real tabular data. Includes a Random Forest model for student grade prediction and a Decision Tree classifier for loan approval analysis, featuring preprocessing, feature engineering, evaluation metrics, and advanced visualizations.",
            "html_url": "https://github.com/Arezki-Cherfouh/Random-Forests",
            "language": "Python",
            "stargazers_count": 1,
            "topics": []
          },
          {
            "name": "Optimization",
            "description": "Python example showing how to solve a linear programming problem using scipy.optimize.linprog. It minimizes production cost with labor and output constraints, defines objective coefficients, inequality matrices, bounds, and prints the optimal solution if feasible. Useful as a simple reference for optimization beginners. Simple and easy to adapt Now",
            "html_url": "https://github.com/Arezki-Cherfouh/Optimization",
            "language": "Python",
            "stargazers_count": 1,
            "topics": []
          },
          {
            "name": "Markov-Baye",
            "description": "Comprehensive probabilistic modeling project using Markov Chains and Bayesian Networks with pgmpy. Includes weather prediction, text generation, medical diagnosis, alarm reasoning, sampling, and a preference-based decision model, demonstrating inference, uncertainty handling, and probabilistic reasoning end to end.",
            "html_url": "https://github.com/Arezki-Cherfouh/Markov-Baye",
            "language": "Python",
            "stargazers_count": 1,
            "topics": []
          },
          {
            "name": "RL-Games",
            "description": "Interactive reinforcement learning demos using Python and Pygame. Includes a Nim game with a Q-learning AI that learns optimal moves through training, and a Grid World environment where an agent learns to reach a goal while avoiding obstacles. Designed for visualizing and understanding Q-learning concepts in practice.",
            "html_url": "https://github.com/Arezki-Cherfouh/RL-Games",
            "language": "Python",
            "stargazers_count": 1,
            "topics": []
          },
          {
            "name": "Maze",
            "description": "A Python maze solver demonstrating classic AI search algorithms. The program reads a text-based maze, finds a path from start to goal using DFS, BFS, Greedy Best-First, and A* search, prints the solution in the terminal, and generates visual images showing explored cells and final paths for algorithm comparison.",
            "html_url": "https://github.com/Arezki-Cherfouh/Maze",
            "language": "Python",
            "stargazers_count": 1,
            "topics": []
          },
          {
            "name": "Deploy-Github-Repos",
            "description": "Automates GitHub repo creation and content upload. Reads all folders in a local directory, generates (or finds existing) repos using folder names, sets descriptions from README or defaults, initializes git, commits files, and pushes to GitHub — fully automating deployment of multiple projects.",
            "html_url": "https://github.com/Arezki-Cherfouh/Deploy-Github-Repos",
            "language": "Python",
            "stargazers_count": 1,
            "topics": []
          },
          {
            "name": "Arezki-Cherfouh",
            "description": "Founder & CEO of Qwerify | SWE | Aspiring AI Engineer | Building Scalable Systems, Technology & AI Projects that Help People Without Distraction",
            "html_url": "https://github.com/Arezki-Cherfouh/Arezki-Cherfouh",
            "language": null,
            "stargazers_count": 1,
            "topics": []
          },
          {
            "name": "SQL-Python",
            "description": "Python script demonstrating PostgreSQL connection pooling with psycopg2. Includes functions to initialize a database, insert sample movie records, and query movies by year or top-rated. Efficient and safe connection handling with a threaded pool.",
            "html_url": "https://github.com/Arezki-Cherfouh/SQL-Python",
            "language": "Python",
            "stargazers_count": 1,
            "topics": []
          },
          {
            "name": "Video-Downloader",
            "description": "A simple video downloader that supports YouTube and some other platforms built with Python. Provides both a terminal-based version and a Tkinter GUI. Supports video and audio downloads using yt-dlp, with real-time progress updates and customizable save paths.",
            "html_url": "https://github.com/Arezki-Cherfouh/Video-Downloader",
            "language": "Python",
            "stargazers_count": 1,
            "topics": []
          },
          {
            "name": "Live-Face-Detector",
            "description": "A real-time face detection application using OpenCV. Captures webcam video, detects faces with Haar cascades, and outlines them dynamically with red polygons. Lightweight and fast, it provides an interactive demonstration of computer vision face detection and visualization and shows mood,age and gender.",
            "html_url": "https://github.com/Arezki-Cherfouh/Live-Face-Detector",
            "language": "Python",
            "stargazers_count": 1,
            "topics": []
          },
          {
            "name": "DeepSeek-Assistant",
            "description": "A voice-enabled AI chat assistant combining Vosk for offline speech recognition and DeepSeek API for responses. Captures real-time speech, transcribes it, sends queries to DeepSeek, and reads AI replies aloud using pyttsx3. Fully interactive, cross-platform, and continuously conversational.",
            "html_url": "https://github.com/Arezki-Cherfouh/DeepSeek-Assistant",
            "language": "Python",
            "stargazers_count": 1,
            "topics": []
          },
          {
            "name": "Speech-To-Text-Vosk",
            "description": "A Python script using Vosk and PyAudio to capture live microphone input and convert speech to text. Implements a timeout for detecting pauses in speech and saves the recognized text to a file. Simple, offline, and real-time speech recognition solution.",
            "html_url": "https://github.com/Arezki-Cherfouh/Speech-To-Text-Vosk",
            "language": "Python",
            "stargazers_count": 1,
            "topics": []
          },
          {
            "name": "Face-Marker",
            "description": "A Python tool to detect and mark faces in images. Uses OpenCV's Haar cascade for face detection and Pillow to draw rectangles around faces. Supports opening images via file dialog, visualizing detected faces, and saving the annotated images in multiple formats. Provides both a terminal-based version and a Tkinter GUI",
            "html_url": "https://github.com/Arezki-Cherfouh/Face-Marker",
            "language": "Python",
            "stargazers_count": 1,
            "topics": []
          },
          {
            "name": "SpamStorm",
            "description": "SpamStorm - The Ultimate Message Flooder",
            "html_url": "https://github.com/Arezki-Cherfouh/SpamStorm",
            "language": "Python",
            "stargazers_count": 4,
            "topics": []
          },
          {
            "name": "Face-Recognizer",
            "description": "A Python script for face verification using the face_recognition library. Compares a known image with an unknown image by encoding facial features and outputs whether they belong to the same person. Simple, accurate, and easy-to-use face matching demo.",
            "html_url": "https://github.com/Arezki-Cherfouh/Face-Recognizer",
            "language": "Python",
            "stargazers_count": 1,
            "topics": []
          },
          {
            "name": "Password-Generator",
            "description": "A Python GUI password generator built with Tkinter. Offers strong (secure) and random password options, lets users specify length, and displays generated passwords in the interface. Supports letters, digits, and symbols for robust password creation. Provides both a terminal-based version and a Tkinter GUI",
            "html_url": "https://github.com/Arezki-Cherfouh/Password-Generator",
            "language": "Python",
            "stargazers_count": 1,
            "topics": []
          },
          {
            "name": "QR-Code-Generator",
            "description": "A Python tool to generate QR codes using the qrcode library. Users can input text or URLs, create QR codes with high error correction, and save them in multiple image formats via an interactive Tkinter interface. Simple, fast, and user-friendly QR code generation. Provides both a terminal-based version and a Tkinter GUI",
            "html_url": "https://github.com/Arezki-Cherfouh/QR-Code-Generator",
            "language": "Python",
            "stargazers_count": 1,
            "topics": []
          },
          {
            "name": "Turtle-Shapes",
            "description": "Python turtle script that draws multiple filled shapes: a green triangle, blue circle, gray rectangle, yellow square, and a red heart. Each shape is positioned individually, filled with color, and a parametric heart drawing is included but commented out.",
            "html_url": "https://github.com/Arezki-Cherfouh/Turtle-Shapes",
            "language": "Python",
            "stargazers_count": 1,
            "topics": []
          },
          {
            "name": "py-to-exe-sh",
            "description": "Lightweight Python project auto-builder. Scans all subfolders, detects .py files, and converts each into standalone .exe and .sh apps using PyInstaller. GUI scripts build without console, others with it. Outputs executables and launch scripts in their original folders — clean, fast, and self-contained.",
            "html_url": "https://github.com/Arezki-Cherfouh/py-to-exe-sh",
            "language": "Python",
            "stargazers_count": 1,
            "topics": []
          },
          {
            "name": "Create-Github-Repos",
            "description": "Automates GitHub repo creation and content upload. Reads all folders in a local directory, generates repos using folder names, sets descriptions from README or defaults, initializes git, commits files, and pushes to GitHub — fully automating deployment of multiple projects.",
            "html_url": "https://github.com/Arezki-Cherfouh/Create-Github-Repos",
            "language": "Python",
            "stargazers_count": 1,
            "topics": []
          },
          {
            "name": "Image-Resizer",
            "description": "A Python GUI tool to resize images easily. Users can specify custom height and width, select an image via file dialog, and save the resized version in multiple formats. Built with Tkinter and Pillow, it provides a simple and interactive interface for quick image resizing tasks.",
            "html_url": "https://github.com/Arezki-Cherfouh/Image-Resizer",
            "language": "Python",
            "stargazers_count": 1,
            "topics": []
          },
          {
            "name": "File-Organizer",
            "description": "A Python GUI tool to automatically organize files in a directory. Sorts videos, images, audio, documents, and other files into corresponding folders, while also moving subdirectories into a dedicated Folders folder. Simple, efficient, and easy-to-use file management solution.",
            "html_url": "https://github.com/Arezki-Cherfouh/File-Organizer",
            "language": "Python",
            "stargazers_count": 1,
            "topics": []
          },
          {
            "name": "CryptGuard",
            "description": "CryptGuard - Secure file encryption tool using AES-128. Encrypt/decrypt files with one click. For Windows. Standalone EXE, no install needed. Share files safely with military-grade encryption. Open-source (GPL-3.0).",
            "html_url": "https://github.com/Arezki-Cherfouh/CryptGuard",
            "language": "Python",
            "stargazers_count": 3,
            "topics": []
          },
          {
            "name": "Emailer",
            "description": "A multi-service email sender in Python that sends messages via Gmail SMTP, Gmail API, Brevo, Mailjet, and SendGrid. Automatically falls back if one service fails, enabling reliable delivery of HTML emails to any recipient while demonstrating integration with multiple email APIs.",
            "html_url": "https://github.com/Arezki-Cherfouh/Emailer",
            "language": "Python",
            "stargazers_count": 1,
            "topics": []
          },
          {
            "name": "Password-Hashing",
            "description": "A simple Python script to hash passwords securely using Passlib. Supports Argon2 and bcrypt algorithms, allowing users to input passwords and receive strong, hashed outputs suitable for safe storage and authentication systems.",
            "html_url": "https://github.com/Arezki-Cherfouh/Password-Hashing",
            "language": "Python",
            "stargazers_count": 1,
            "topics": []
          },
          {
            "name": "Timer",
            "description": "Python countdown timer supporting HH:MM:SS or seconds input. Plays a custom audio alert when time is up. Built with pygame for sound playback and simple console interface for easy timer setup.",
            "html_url": "https://github.com/Arezki-Cherfouh/Timer",
            "language": "Python",
            "stargazers_count": 1,
            "topics": []
          },
          {
            "name": "Smart-File-Reader",
            "description": "A cross-platform Tkinter app that reads text from PDFs, HTML, DOCX, CSV/XLSX, and images (OCR) aloud using TTS. Supports multiple encodings, handles unsupported file types gracefully, and provides a simple GUI for choosing files to read.",
            "html_url": "https://github.com/Arezki-Cherfouh/Smart-File-Reader",
            "language": "Python",
            "stargazers_count": 1,
            "topics": []
          },
          {
            "name": "School-Physics",
            "description": "A FastAPI app that fetches images from school Physics Telegram group, uploads them to IMGBB, caches metadata on GitHub, and displays a scrollable web gallery. Supports captions, sender info, and automatic cache updates for efficient image management and viewing.",
            "html_url": "https://github.com/Arezki-Cherfouh/School-Physics",
            "language": "Python",
            "stargazers_count": 1,
            "topics": []
          },
          {
            "name": "NoteMaster",
            "description": "NoteMaster calcule vos moyennes scolaires en un clic. Sélectionnez votre niveau, entrez vos notes (devoirs, évaluations, TP, compositions) et leurs coefficients, et obtenez instantanément vos résultats. Parfait pour le primaire, collège et lycée. Simple, précis, efficace.",
            "html_url": "https://github.com/Arezki-Cherfouh/NoteMaster",
            "language": "Python",
            "stargazers_count": 3,
            "topics": []
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  const skills = [
    { name: 'Python', level: 95, icon: '🐍' },
    { name: 'JavaScript', level: 90, icon: '⚡' },
    { name: 'FastAPI', level: 85, icon: '🚀' },
    { name: 'Node.js', level: 85, icon: '💚' },
    { name: 'PostgreSQL', level: 80, icon: '🐘' },
    { name: 'React', level: 85, icon: '⚛️' },
    { name: 'React Native', level: 80, icon: '📱' },
    { name: 'HTML/CSS', level: 95, icon: '🎨' },
    { name: 'Tailwind CSS', level: 90, icon: '💨' },
    { name: 'Bootstrap', level: 85, icon: '🅱️' },
    { name: 'System Design', level: 75, icon: '🏗️' },
    { name: 'AI/ML', level: 70, icon: '🤖' }
  ];

  const filteredRepos = repos.filter(repo =>
    repo.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (repo.description && repo.description.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="min-h-screen transition-colors duration-500" style={{ 
      background: 'var(--bg-primary)',
      color: 'var(--text-primary)',
      fontFamily: '"JetBrains Mono", "Fira Code", monospace',
      width: '100vw',
      maxWidth: '100%',
      overflowX: 'hidden',
      margin: 0,
      padding: 0
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;600;700&family=Orbitron:wght@400;500;700;900&display=swap');
        
        :root {
          --bg-primary: #0a0e17;
          --bg-secondary: #151921;
          --bg-tertiary: #1e2433;
          --accent-primary: #00d4ff;
          --accent-secondary: #7c3aed;
          --accent-glow: #0ea5e9;
          --text-primary: #e2e8f0;
          --text-secondary: #94a3b8;
          --border-color: rgba(0, 212, 255, 0.2);
        }

        @media (prefers-color-scheme: light) {
          :root {
            --bg-primary: #f8fafc;
            --bg-secondary: #ffffff;
            --bg-tertiary: #e2e8f0;
            --accent-primary: #0891b2;
            --accent-secondary: #7c3aed;
            --accent-glow: #0ea5e9;
            --text-primary: #0f172a;
            --text-secondary: #475569;
            --border-color: rgba(8, 145, 178, 0.3);
          }
        }

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          overflow-x: hidden;
          margin: 0;
          padding: 0;
          width: 100%;
        }

        #root {
          width: 100%;
          margin: 0;
          padding: 0;
        }

        .glow-text {
          text-shadow: 0 0 20px var(--accent-glow), 0 0 40px var(--accent-glow);
        }

        .neon-border {
          border: 2px solid var(--border-color);
          box-shadow: 0 0 20px var(--border-color), inset 0 0 20px rgba(0, 212, 255, 0.1);
        }

        .glass-effect {
          background: rgba(15, 23, 42, 0.6);
          backdrop-filter: blur(20px);
          border: 1px solid var(--border-color);
        }

        @media (prefers-color-scheme: light) {
          .glass-effect {
            background: rgba(255, 255, 255, 0.7);
          }
        }

        .floating {
          animation: floating 3s ease-in-out infinite;
        }

        @keyframes floating {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        .pulse-glow {
          animation: pulseGlow 2s ease-in-out infinite;
        }

        @keyframes pulseGlow {
          0%, 100% { 
            box-shadow: 0 0 20px var(--accent-glow), 0 0 40px var(--accent-glow);
          }
          50% { 
            box-shadow: 0 0 40px var(--accent-glow), 0 0 80px var(--accent-glow);
          }
        }

        .scan-line {
          position: relative;
          overflow: hidden;
        }

        .scan-line::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, var(--accent-primary), transparent);
          animation: scan 3s linear infinite;
          opacity: 0.3;
        }

        @keyframes scan {
          0% { left: -100%; }
          100% { left: 100%; }
        }

        .grid-bg {
          background-image: 
            linear-gradient(var(--border-color) 1px, transparent 1px),
            linear-gradient(90deg, var(--border-color) 1px, transparent 1px);
          background-size: 50px 50px;
        }

        .tech-card {
          transition: all 0.3s ease;
          border: 1px solid var(--border-color);
        }

        .tech-card:hover {
          transform: translateY(-5px) scale(1.02);
          box-shadow: 0 20px 40px rgba(0, 212, 255, 0.3);
          border-color: var(--accent-primary);
        }

        .skill-bar {
          position: relative;
          overflow: hidden;
        }

        .skill-bar::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
          animation: shimmer 2s infinite;
        }

        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        .project-card {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .project-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 30px 60px rgba(0, 212, 255, 0.4);
        }

        .tab-button {
          position: relative;
          transition: all 0.3s ease;
        }

        .tab-button::before {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 0;
          height: 2px;
          background: var(--accent-primary);
          transition: all 0.3s ease;
          transform: translateX(-50%);
        }

        .tab-button.active::before {
          width: 100%;
        }

        .circuit-line {
          position: absolute;
          width: 2px;
          height: 100px;
          background: linear-gradient(180deg, transparent, var(--accent-primary), transparent);
          animation: circuit 3s linear infinite;
        }

        @keyframes circuit {
          0% { transform: translateY(-100px); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(100vh); opacity: 0; }
        }

        /* Mobile Responsive Styles for screens under 614px */
        @media (max-width: 614px) {
          .header-nav {
            flex-direction: column !important;
            gap: 16px !important;
          }

          .header-logo {
            font-size: 22px !important;
          }

          .header-logo svg {
            width: 24px !important;
            height: 24px !important;
          }

          .nav-tabs {
            gap: 16px !important;
            flex-wrap: wrap;
            justify-content: center;
          }

          .tab-button {
            font-size: 13px !important;
            letter-spacing: 1px !important;
          }

          .profile-picture-container {
            width: 140px !important;
            height: 140px !important;
          }

          .profile-badge {
            padding: 8px !important;
            top: -5px !important;
            right: -5px !important;
          }

          .profile-badge svg {
            width: 20px !important;
            height: 20px !important;
          }

          .main-title {
            font-size: 32px !important;
          }

          .main-subtitle {
            font-size: 16px !important;
          }

          .social-links {
            flex-direction: column !important;
            gap: 12px !important;
            width: 100%;
          }

          .social-link {
            width: 100%;
            justify-content: center;
            padding: 10px 16px !important;
          }

          .section-title {
            font-size: 28px !important;
          }

          .section-title svg {
            width: 22px !important;
            height: 22px !important;
          }

          .about-section {
            padding: 24px !important;
          }

          .about-text {
            font-size: 15px !important;
          }

          .current-focus-title {
            font-size: 22px !important;
          }

          .current-focus-list {
            font-size: 15px !important;
          }

          .projects-title {
            font-size: 32px !important;
          }

          .projects-title svg {
            width: 28px !important;
            height: 28px !important;
          }

          .search-input {
            font-size: 15px !important;
            padding: 12px 16px !important;
          }

          .projects-grid {
            grid-template-columns: 1fr !important;
          }

          .project-card {
            padding: 20px !important;
          }

          .project-title {
            font-size: 18px !important;
          }

          .project-description {
            font-size: 14px !important;
            min-height: auto !important;
          }

          .project-language {
            font-size: 12px !important;
            padding: 4px 12px !important;
          }

          .project-link {
            font-size: 12px !important;
            padding: 6px 12px !important;
          }

          .skills-section-title {
            font-size: 32px !important;
          }

          .skill-card {
            padding: 20px !important;
          }

          .skill-icon {
            font-size: 24px !important;
          }

          .skill-name {
            font-size: 18px !important;
          }

          .skill-percentage {
            font-size: 16px !important;
          }

          .contact-title {
            font-size: 32px !important;
          }

          .contact-container {
            padding: 32px 20px !important;
          }

          .contact-icon {
            width: 48px !important;
            height: 48px !important;
          }

          .contact-description {
            font-size: 16px !important;
          }

          .contact-link {
            padding: 14px 12px !important;
            font-size: 13px !important;
            flex-direction: column !important;
            gap: 8px !important;
          }

          .contact-link svg {
            width: 18px !important;
            height: 18px !important;
          }

          .contact-link span {
            word-break: break-word;
            text-align: center;
          }

          .footer-text {
            font-size: 14px !important;
          }

          .footer-subtext {
            font-size: 12px !important;
          }

          .main-content {
            padding: 40px 16px !important;
          }

          .repos-summary {
            padding: 24px 16px !important;
          }

          .repos-text {
            font-size: 15px !important;
          }

          .view-all-button {
            padding: 12px 20px !important;
            font-size: 14px !important;
          }
        }
      `}</style>

      {/* Animated Background Elements */}
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 0 }}>
        <div className="circuit-line" style={{ left: '10%', animationDelay: '0s' }}></div>
        <div className="circuit-line" style={{ left: '30%', animationDelay: '1s' }}></div>
        <div className="circuit-line" style={{ left: '50%', animationDelay: '2s' }}></div>
        <div className="circuit-line" style={{ left: '70%', animationDelay: '0.5s' }}></div>
        <div className="circuit-line" style={{ left: '90%', animationDelay: '1.5s' }}></div>
      </div>

      {/* Header */}
      <header className="glass-effect" style={{ 
        position: 'sticky', 
        top: 0, 
        zIndex: 50,
        padding: '20px 0',
        borderBottom: '1px solid var(--border-color)',
        width: '100%'
      }}>
        <nav className="header-nav" style={{  
          margin: '0 auto', 
          padding: '0 24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          maxWidth: '100%'
        }}>
          <div className="header-logo" style={{ 
            fontSize: '28px', 
            fontWeight: 700,
            fontFamily: '"Orbitron", monospace',
            background: `linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            display: 'flex',
            alignItems: 'center',
            gap: '12px'
          }}>
            <Terminal size={32} style={{cursor: hasMouse ? 'pointer' : 'default'}} />
            <span className="glow-text" style={{userSelect: 'none',cursor: hasMouse ? 'pointer' : 'default'}}>AC</span>
          </div>
          
          <div className="nav-tabs" style={{ display: 'flex', gap: '32px' }}>
            {['about', 'projects', 'skills', 'contact'].map(tab => (
              <Link
                key={tab}
                to={`/${tab}`}
                className={`tab-button ${activeTab === tab ? 'active' : ''}`}
                style={{
                  background: 'transparent',
                  color: activeTab === tab ? 'var(--accent-primary)' : 'var(--text-secondary)',
                  fontSize: '16px',
                  fontWeight: 600,
                  cursor: hasMouse ? 'pointer' : 'default',
                  padding: '8px 0',
                  textTransform: 'uppercase',
                  letterSpacing: '2px',
                  fontFamily: '"Orbitron", monospace',
                  textDecoration: 'none'
                }}
              >
                {tab}
              </Link>
            ))}
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="main-content" style={{ width: '100%', margin: '0 auto', padding: '60px 24px', position: 'relative', zIndex: 1 }}>
        {/* About Section */}
        {activeTab === 'about' && (
          <div style={{ animation: 'fadeIn 0.5s ease-in' }}>
            {/* Profile Picture */}
            <div style={{ 
              display: 'flex', 
              justifyContent: 'center', 
              marginBottom: '48px' 
            }}>
              <div style={{ position: 'relative' }}>
                <div className="pulse-glow profile-picture-container" style={{
                  width: '200px',
                  height: '200px',
                  borderRadius: '50%',
                  border: '4px solid var(--accent-primary)',
                  padding: '8px',
                  background: `linear-gradient(135deg, var(--bg-secondary), var(--bg-tertiary))`,
                  cursor: hasMouse ? 'pointer' : 'default'
                }}>
                  <img 
                    src="https://avatars.githubusercontent.com/u/195492204?v=4"
                    alt="Arezki Cherfouh"
                    style={{
                      width: '100%',
                      height: '100%',
                      borderRadius: '50%',
                      objectFit: 'cover',
                      userSelect: 'none',
                      pointerEvents: 'none'
                    }}
                  />
                </div>
                <div className="profile-badge" style={{
                  position: 'absolute',
                  top: '-10px',
                  right: '-10px',
                  background: 'var(--accent-primary)',
                  borderRadius: '50%',
                  padding: '12px',
                  boxShadow: '0 0 30px var(--accent-glow)'
                }}>
                  <Cpu size={28} color="var(--bg-primary)" />
                </div>
              </div>
            </div>

            {/* Name and Title */}
            <div style={{ textAlign: 'center', marginBottom: '48px' }}>
              <h1 className="main-title" style={{ 
                fontSize: '56px', 
                fontWeight: 900,
                marginBottom: '16px',
                fontFamily: '"Orbitron", monospace',
                background: `linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                userSelect: 'none',
                cursor: hasMouse ? 'pointer' : 'default'
              }} >
                AREZKI CHERFOUH
              </h1>
              <p className="main-subtitle" style={{ 
                fontSize: '24px', 
                color: 'var(--text-secondary)',
                marginBottom: '24px',
                fontWeight: 600,
                userSelect: 'none',
                cursor: hasMouse ? 'pointer' : 'default'
              }}>
                Founder & CEO of Qwerify | Software Engineer | AI Enthusiast
              </p>
              <div className="social-links" style={{ 
                display: 'flex', 
                justifyContent: 'center', 
                gap: '24px',
                marginTop: '32px'
              }}>
                <a href="https://github.com/Arezki-Cherfouh" target="_blank" rel="noopener noreferrer" 
                   className="neon-border social-link"
                   style={{ 
                     padding: '12px 24px', 
                     borderRadius: '8px',
                     display: 'flex',
                     alignItems: 'center',
                     gap: '8px',
                     textDecoration: 'none',
                     color: 'var(--text-primary)',
                     transition: 'all 0.3s ease',
                     background: 'var(--bg-secondary)'
                   }}>
                  <Github size={20} />
                  <span>GitHub</span>
                </a>
                <a href="https://www.linkedin.com/in/arezki-cherfouh" target="_blank" rel="noopener noreferrer"
                   className="neon-border social-link"
                   style={{ 
                     padding: '12px 24px', 
                     borderRadius: '8px',
                     display: 'flex',
                     alignItems: 'center',
                     gap: '8px',
                     textDecoration: 'none',
                     color: 'var(--text-primary)',
                     transition: 'all 0.3s ease',
                     background: 'var(--bg-secondary)'
                   }}>
                  <Linkedin size={20} />
                  <span>LinkedIn</span>
                </a>
                <a href="https://qwerify.vercel.app" target="_blank" rel="noopener noreferrer"
                   className="neon-border social-link"
                   style={{ 
                     padding: '12px 24px', 
                     borderRadius: '8px',
                     display: 'flex',
                     alignItems: 'center',
                     gap: '8px',
                     textDecoration: 'none',
                     color: 'var(--text-primary)',
                     transition: 'all 0.3s ease',
                     background: 'var(--bg-secondary)'
                   }}>
                  <ExternalLink size={20} />
                  <span>Qwerify</span>
                </a>
              </div>
            </div>

            {/* Bio */}
            <div className="glass-effect scan-line about-section" style={{ 
              padding: '40px', 
              borderRadius: '16px',
              marginBottom: '32px'
            }}>
              <h2 className="section-title" style={{ 
                fontSize: '32px', 
                marginBottom: '24px',
                color: 'var(--accent-primary)',
                fontFamily: '"Orbitron", monospace',
                userSelect: 'none',
                cursor: hasMouse ? 'pointer' : 'default'
              }}>
                <Sparkles size={28} style={{ display: 'inline', marginRight: '12px' }} />
                About Me
              </h2>
              <div className="about-text" style={{ 
                fontSize: '18px', 
                lineHeight: '1.8',
                color: 'var(--text-secondary)'
              }}>
                <p style={{ marginBottom: '16px' }}>
                  I'm Arezki Cherfouh, a student developer and the <strong style={{ color: 'var(--accent-primary)' }}>Founder & CEO of Qwerify</strong>, 
                  an independent tech project I started on July 19, 2025 to rethink how people connect and interact through technology.
                </p>
                <p style={{ marginBottom: '16px' }}>
                  Born on September 07, 2009 and passionate about AI and innovation. Qwerify is currently in development — 
                  not yet a registered company — but it represents my long-term vision of building a global technology brand 
                  that expands beyond communication into AI-driven systems, productivity tools, and scalable digital experiences 
                  that <strong style={{ color: 'var(--accent-primary)' }}>help people without distraction</strong>.
                </p>
                <p style={{ marginBottom: '16px' }}>
                  I specialize in <strong style={{ color: 'var(--accent-primary)' }}>Python, JavaScript, FastAPI, Node.js, SQL (PostgreSQL), 
                  ReactJS/React Native, HTML/CSS, Tailwind CSS & Bootstrap</strong>, with growing experience in system design and AI.
                </p>
                <p style={{ marginBottom: '16px' }}>
                  Through Qwerify, I've gained practical experience in full-stack development, real-time communication, 
                  secure authentication, and infrastructure scalability.
                </p>
                <p>
                  My long-term goal is to become a <strong style={{ color: 'var(--accent-primary)' }}>world-class AI engineer and CEO</strong>, 
                  and to grow Qwerify into a global company that competes with leading tech innovators — guided by the principles 
                  of privacy, focus, and human-centered design.
                </p>
              </div>
            </div>

            {/* Current Focus */}
            <div className="glass-effect about-section" style={{ 
              padding: '40px', 
              borderRadius: '16px'
            }}>
              <h3 className="current-focus-title" style={{ 
                fontSize: '28px', 
                marginBottom: '24px',
                color: 'var(--accent-primary)',
                fontFamily: '"Orbitron", monospace',
                userSelect: 'none',
                cursor: hasMouse ? 'pointer' : 'default'
              }}>
                Current Focus
              </h3>
              <ul className="current-focus-list" style={{ 
                listStyle: 'none', 
                fontSize: '18px',
                lineHeight: '2',
                color: 'var(--text-secondary)'
              }}>
                <li style={{ marginBottom: '12px', display: 'flex', alignItems: 'start' }}>
                  Strengthening my knowledge in data structures, algorithms, and system design for big tech opportunities
                </li>
                <li style={{ marginBottom: '12px', display: 'flex', alignItems: 'start' }}>
                  Expanding Qwerify with AI features and mobile development
                </li>
                <li style={{ marginBottom: '12px', display: 'flex', alignItems: 'start' }}>
                  Building a professional portfolio on GitHub and connecting with engineers, founders, and innovators worldwide
                </li>
              </ul>
            </div>
          </div>
        )}

        {/* Projects Section */}
        {activeTab === 'projects' && (
          <div style={{ animation: 'fadeIn 0.5s ease-in' }}>
            <h2 className="projects-title" style={{ 
              fontSize: '48px', 
              marginBottom: '32px',
              fontFamily: '"Orbitron", monospace',
              color: 'var(--accent-primary)',
              textAlign: 'center',
              userSelect: 'none',
              cursor: hasMouse ? 'pointer' : 'default'
            }}>
              <Code2 size={40} style={{ display: 'inline', marginRight: '16px' }} />
              Projects Portfolio
            </h2>
            
            <div style={{ 
              marginBottom: '32px',
              textAlign: 'center'
            }}>
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="neon-border search-input"
                style={{
                  padding: '16px 24px',
                  fontSize: '18px',
                  borderRadius: '12px',
                  background: 'var(--bg-secondary)',
                  color: 'var(--text-primary)',
                  width: '100%',
                  maxWidth: '600px',
                  outline: 'none'
                }}
              />
            </div>

            <div className="projects-grid" style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', 
              gap: '24px',
              marginBottom: '32px'
            }}>
              {loading ? (
                <div style={{ 
                  gridColumn: '1 / -1',
                  textAlign: 'center',
                  padding: '60px',
                  fontSize: '20px',
                  color: 'var(--text-secondary)'
                }}>
                  <div className="floating">Loading projects...</div>
                </div>
              ) : filteredRepos.length > 0 ? (
                filteredRepos.map((repo, index) => (
                  <div 
                    key={index}
                    className="project-card glass-effect"
                    style={{
                      padding: '32px',
                      borderRadius: '16px',
                      border: '1px solid var(--border-color)',
                      animationDelay: `${index * 0.1}s`,
                      cursor: hasMouse ? 'pointer' : 'default'
                    }}
                  >
                    <div style={{ 
                      display: 'flex', 
                      justifyContent: 'space-between',
                      alignItems: 'start',
                      marginBottom: '16px'
                    }}>
                      <h3 className="project-title" style={{ 
                        fontSize: '24px',
                        color: 'var(--accent-primary)',
                        fontFamily: '"Orbitron", monospace',
                        fontWeight: 700
                      }}>
                        {repo.name}
                      </h3>
                      {repo.stargazers_count > 0 && (
                        <div style={{
                          background: 'var(--accent-primary)',
                          color: 'var(--bg-primary)',
                          padding: '4px 12px',
                          borderRadius: '20px',
                          fontSize: '14px',
                          fontWeight: 600
                        }}>
                          ⭐ {repo.stargazers_count}
                        </div>
                      )}
                    </div>
                    
                    <p className="project-description" style={{ 
                      color: 'var(--text-secondary)',
                      marginBottom: '20px',
                      lineHeight: '1.6',
                      minHeight: '60px'
                    }}>
                      {repo.description || 'No description available'}
                    </p>
                    
                    <div style={{ 
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginTop: '20px'
                    }}>
                      {repo.language && (
                        <span className="project-language" style={{
                          background: 'var(--bg-tertiary)',
                          padding: '6px 16px',
                          borderRadius: '20px',
                          fontSize: '14px',
                          color: 'var(--accent-primary)',
                          fontWeight: 600
                        }}>
                          {repo.language}
                        </span>
                      )}
                      
                      <a 
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="neon-border project-link"
                        style={{
                          padding: '8px 16px',
                          borderRadius: '8px',
                          textDecoration: 'none',
                          color: 'var(--text-primary)',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px',
                          background: 'var(--bg-secondary)',
                          fontSize: '14px',
                          fontWeight: 600
                        }}
                      >
                        View
                        <ExternalLink size={16} />
                      </a>
                    </div>
                  </div>
                ))
              ) : (
                <div style={{ 
                  gridColumn: '1 / -1',
                  textAlign: 'center',
                  padding: '60px',
                  fontSize: '20px',
                  color: 'var(--text-secondary)'
                }}>
                  No projects found matching &quot;{searchTerm}&quot;
                </div>
              )}
            </div>

            <div className="repos-summary" style={{ 
              textAlign: 'center',
              marginTop: '48px',
              padding: '32px',
              background: 'var(--bg-secondary)',
              borderRadius: '16px',
              border: '1px solid var(--border-color)'
            }}>
              <p className="repos-text" style={{ 
                fontSize: '18px',
                color: 'var(--text-secondary)',
                marginBottom: '16px'
              }}>
                Total Repositories: <strong style={{ color: 'var(--accent-primary)' }}>{repos.length}</strong>
              </p>
              <a 
                href="https://github.com/Arezki-Cherfouh?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="neon-border view-all-button"
                style={{
                  display: 'inline-flex',
                  padding: '16px 32px',
                  borderRadius: '12px',
                  textDecoration: 'none',
                  color: 'var(--text-primary)',
                  alignItems: 'center',
                  gap: '12px',
                  background: 'var(--bg-tertiary)',
                  fontSize: '16px',
                  fontWeight: 600,
                  fontFamily: '"Orbitron", monospace'
                }}
              >
                View All on GitHub
                <Github size={20} />
              </a>
            </div>
          </div>
        )}

        {/* Skills Section */}
        {activeTab === 'skills' && (
          <div style={{ animation: 'fadeIn 0.5s ease-in' }}>
            <h2 className="skills-section-title" style={{ 
              fontSize: '48px', 
              marginBottom: '48px',
              fontFamily: '"Orbitron", monospace',
              color: 'var(--accent-primary)',
              textAlign: 'center',
              userSelect: 'none',
              cursor: hasMouse ? 'pointer' : 'default'
            }}>
              Technical Expertise
            </h2>
            
            <div style={{ 
              display: 'grid', 
              gap: '24px'
            }}>
              {skills.map((skill, index) => (
                <div 
                  key={index}
                  className="tech-card glass-effect skill-card"
                  style={{
                    padding: '32px',
                    borderRadius: '16px',
                    animationDelay: `${index * 0.1}s`,
                    cursor: hasMouse ? 'pointer' : 'default'
                  }}
                >
                  <div style={{ 
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '16px'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                      <span className="skill-icon" style={{ fontSize: '32px' }}>{skill.icon}</span>
                      <h3 className="skill-name" style={{ 
                        fontSize: '24px',
                        fontFamily: '"Orbitron", monospace',
                        color: 'var(--text-primary)'
                      }}>
                        {skill.name}
                      </h3>
                    </div>
                    <span className="skill-percentage" style={{ 
                      fontSize: '20px',
                      fontWeight: 700,
                      color: 'var(--accent-primary)'
                    }}>
                      {skill.level}%
                    </span>
                  </div>
                  
                  <div style={{
                    width: '100%',
                    height: '12px',
                    background: 'var(--bg-tertiary)',
                    borderRadius: '6px',
                    overflow: 'hidden',
                    border: '1px solid var(--border-color)'
                  }}>
                    <div 
                      className="skill-bar"
                      style={{
                        width: `${skill.level}%`,
                        height: '100%',
                        background: `linear-gradient(90deg, var(--accent-primary), var(--accent-secondary))`,
                        borderRadius: '6px',
                        transition: 'width 1s ease-out'
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Contact Section */}
        {activeTab === 'contact' && (
          <div style={{ animation: 'fadeIn 0.5s ease-in' }}>
            <h2 className="contact-title" style={{ 
              fontSize: '48px', 
              marginBottom: '32px',
              fontFamily: '"Orbitron", monospace',
              color: 'var(--accent-primary)',
              textAlign: 'center',
              userSelect: 'none',
              cursor: hasMouse ? 'pointer' : 'default'
            }}>
              Get In Touch
            </h2>
            
            <div className="glass-effect contact-container" style={{ 
              padding: '60px', 
              borderRadius: '16px',
              maxWidth: '800px',
              margin: '0 auto',
              textAlign: 'center'
            }}>
              <Mail className="contact-icon" size={64} style={{ 
                color: 'var(--accent-primary)',
                marginBottom: '32px'
              }} />
              
              <p className="contact-description" style={{ 
                fontSize: '20px',
                color: 'var(--text-secondary)',
                marginBottom: '48px',
                lineHeight: '1.8'
              }}>
                Always open to collaborating with those who share the vision of creating technology 
                that empowers people — not distracts them.
              </p>
              
              <div style={{ 
                display: 'grid',
                gap: '24px',
                marginTop: '48px'
              }}>
                <a 
                  href="mailto:qwerify.ceo@gmail.com"
                  className="neon-border tech-card contact-link"
                  style={{
                    padding: '24px',
                    borderRadius: '12px',
                    textDecoration: 'none',
                    color: 'var(--text-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '16px',
                    background: 'var(--bg-secondary)',
                    fontSize: '20px',
                    fontWeight: 600
                  }}
                >
                  <Mail size={28} />
                  <span>Email: qwerify.ceo@gmail.com</span>
                </a>
                
                <a 
                  href="https://github.com/Arezki-Cherfouh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="neon-border tech-card contact-link"
                  style={{
                    padding: '24px',
                    borderRadius: '12px',
                    textDecoration: 'none',
                    color: 'var(--text-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '16px',
                    background: 'var(--bg-secondary)',
                    fontSize: '20px',
                    fontWeight: 600
                  }}
                >
                  <Github size={28} />
                  <span>GitHub: @Arezki-Cherfouh</span>
                </a>
                
                <a 
                  href="https://www.linkedin.com/in/arezki-cherfouh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="neon-border tech-card contact-link"
                  style={{
                    padding: '24px',
                    borderRadius: '12px',
                    textDecoration: 'none',
                    color: 'var(--text-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '16px',
                    background: 'var(--bg-secondary)',
                    fontSize: '20px',
                    fontWeight: 600
                  }}
                >
                  <Linkedin size={28} />
                  <span>LinkedIn: Arezki Cherfouh</span>
                </a>
                
                <a 
                  href="https://qwerify.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="neon-border tech-card contact-link"
                  style={{
                    padding: '24px',
                    borderRadius: '12px',
                    textDecoration: 'none',
                    color: 'var(--text-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '16px',
                    background: 'var(--bg-secondary)',
                    fontSize: '20px',
                    fontWeight: 600
                  }}
                >
                  <ExternalLink size={28} />
                  <span>Qwerify: qwerify.vercel.app</span>
                </a>

                <a 
                  href="https://qwerify.vercel.app/profiles?user=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="neon-border tech-card contact-link"
                  style={{
                    padding: '24px',
                    borderRadius: '12px',
                    textDecoration: 'none',
                    color: 'var(--text-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '16px',
                    background: 'var(--bg-secondary)',
                    fontSize: '20px',
                    fontWeight: 600
                  }}
                >
                  <Sparkles size={28} />
                  <span>Qwerify Profile</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer style={{ 
        borderTop: '1px solid var(--border-color)',
        padding: '40px 24px',
        textAlign: 'center',
        background: 'var(--bg-secondary)',
        width: '100%'
      }}>
        <p className="footer-text" style={{ 
          color: 'var(--text-secondary)',
          fontSize: '16px'
        }}>
          © {new Date().getFullYear()} Arezki Cherfouh. Built with React & Tailwind CSS.
        </p>
        <p className="footer-subtext" style={{ 
          color: 'var(--text-secondary)',
          fontSize: '14px',
          marginTop: '8px'
        }}>
          Building technology that empowers people without distraction.
        </p>
      </footer>
    </div>
  );
};

export default Portfolio;
