'use client';
import { Github, LinkIcon, Linkedin, ArrowUp } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

function Home() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <div className="p-6 w-[80%] mx-auto font-sans bg-white text-black dark:bg-black dark:text-gray-100 min-h-screen scroll-smooth">

      {/* Navbar */}
      <motion.nav
        initial={{ y: -70, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800"
      >
        <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center text-sm text-gray-300">
          <img
            src="/sidak-profile2.jpg"
            alt="Sidak Arora"
            className="w-10 h-10 rounded-full object-cover border border-indigo-400"
          />
          <div className="space-x-6">
            <a href="#home" className="hover:text-white transition">Home</a>
            <a href="#work" className="hover:text-white transition">Work</a>
            <a href="#projects" className="hover:text-white transition">Projects</a>
            <a href="#skills" className="hover:text-white transition">Skills</a>
            <a href="#education" className="hover:text-white transition">Education</a>
          </div>
        </div>
      </motion.nav>

      {/* Scroll-to-top Button */}
      {showTopBtn && (
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed bottom-6 right-6 p-3 rounded-full bg-indigo-600 text-black dark:text-white shadow-lg hover:bg-indigo-700 transition z-50"
        >
          <ArrowUp className="w-5 h-5" />
        </motion.button>
      )}

      {/* Header Section */}
      <div id="home" className="pt-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl font-extrabold mb-4 text-black dark:text-white">Sidak Arora</h1>
          <p className="text-xl font-bold mb-4 text-blue-500">Aspiring Full Stack Developer | B.Tech CSE</p>
          <p className="text-base mb-6 text-gray-400 leading-relaxed">
            Third-year Computer Science student with a keen interest in programming and co-curricular activities.
            Passionate about web and software development, aspiring to become a full-stack developer.
            Eager to learn new technologies and build impactful projects.
          </p>
          <div className="flex gap-5 mb-6">
            <a href="https://github.com/siidakk" target="_blank">
              <Github className="w-6 h-6 text-black dark:text-white hover:text-gray-200 transition duration-300" />
            </a>
            <a href="https://www.linkedin.com/in/sidakarora" target="_blank">
              <Linkedin className="w-6 h-6 text-blue-400 hover:text-blue-500 transition duration-300" />
            </a>
            <a href="https://drive.google.com/file/d/1o2hJJtHSKBl7oXcxF6PYev87DSi7vX5I/view?usp=drivesdk" target="_blank">
              <LinkIcon className="w-6 h-6 text-green-400 hover:text-green-500 transition duration-300" />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >
          <Image
            src="/sidak-profile.jpg"
            alt="Sidak Arora"
            width={350}
            height={350}
            className="rounded-full shadow-2xl ring-4 ring-indigo-500 hover:scale-105 transition-transform duration-300"
          />
        </motion.div>
      </div>

      {/* Work Experience Section */}
      <motion.h2
        id="work"
        className="text-4xl font-bold mt-16 mb-6 text-black dark:text-white"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Work Experience
      </motion.h2>
      <motion.div
        className="bg-white/10 backdrop-blur-md p-5 rounded-xl border border-gray-700 shadow-md space-y-3"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h3 className="text-xl font-semibold text-indigo-300">Software Developer Intern – CormSquare</h3>
        <p className="text-gray-700 dark:text-gray-400 text-sm">Technology, Information and Internet · Bangalore, Karnataka · July 2025</p>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 text-sm mt-2 space-y-1">
          <li>Designed and developed a comprehensive Asset Management Website for internal and client use.</li>
          <li>Implemented role-based access (Admin, Customer, Company Client) using ASP.NET Identity.</li>
          <li>Developed asset lifecycle management: add/update/delete assets, manage pricing and availability.</li>
          <li>Built e-commerce-like flow: cart, address entry, secure Stripe.net payments, and order tracking.</li>
          <li>Enabled delayed payment system for company clients with admin-controlled approval and invoicing.</li>
          <li>Created 3-phase admin order management: Review & Approval → Tracking Update → Shipment Closure.</li>
          <li>Integrated notification and order status updates to enhance user experience.</li>
        </ul>
      </motion.div>

      {/* Rest of your code continues untouched... */}


      {/* Projects Section */}
      <h2 id="projects" className="text-4xl font-bold mt-16 mb-8 text-black dark:text-white">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[
          {
            title: "Asset Management and E-Commerce Web Application",
            desc: "Built an enterprise-level asset management system with e-commerce features. Integrated Admin, Customer, and User roles with dashboard-specific permissions. Enabled real-time inventory tracking, secure Stripe-based payments, and delayed billing for B2B clients. CI/CD pipeline using GitHub Actions, hosted on Azure.",
            github: "https://github.com/siidakk/asset-mgmt",
            demo: "https://cormassets-dotnetmastery.azurewebsites.net/",
          },
          {
            title: "Sidak Pay – Smart Payment Web App",
            desc: "React-based fintech platform with multi-currency payments, Piggy Bank rewards, anonymous transactions, and a modern dashboard (graphs, history, bills). Currency auto-conversion and GitHub CI/CD pipeline setup.",
            github: "https://github.com/siidakk/sidakpay",
            demo: "#",
          },
          {
            title: "Retail POS System (Java + MySQL)",
            desc: "Java-based Point of Sale system for retail. Includes Admin and Employee modes, stock control, real-time billing, and secure database access using JDBC. Built with Maven architecture.",
          },
          {
            title: "Jagjit Welfare – Healthcare Aid Platform",
            desc: "Firebase-powered platform for community healthcare help. Allows free medical equipment rentals, blood donor database, and affordable care listings. Currently serving Faridabad with NCR expansion.",
          },
        ].map((proj, idx) => (
          <motion.div
            key={idx}
            className="rounded-2xl p-5 bg-white/10 backdrop-blur-md shadow-md hover:shadow-2xl border border-gray-700 transition-all duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-3 text-indigo-300">{proj.title}</h3>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">{proj.desc}</p>
            {proj.github && (
              <div className="flex gap-3">
                <a href={proj.github} target="_blank">
                  <button className="px-4 py-1 text-sm rounded-lg border border-indigo-400 text-indigo-300 hover:bg-indigo-600/20 transition">
                    GitHub
                  </button>
                </a>
                <a href={proj.demo} target="_blank">
                  <button className="px-4 py-1 text-sm rounded-lg border border-green-400 text-green-300 hover:bg-green-600/20 transition">
                    Live Demo
                  </button>
                </a>
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Skills Section */}
      <h2 id="skills" className="text-4xl font-bold mt-16 mb-6 text-black dark:text-white">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
        {[
          {
            title: "Frontend",
            items: ["HTML, CSS, JavaScript", "Bootstrap 5, jQuery, Razor Pages (CSHTML)", "React.js, Chart.js, DataTables"],
          },
          {
            title: "Backend",
            items: ["Java, C++, Python, C#", "ASP.NET Core MVC (.NET 8)", "Entity Framework Core (EF Core)", "ASP.NET Identity, Role-Based Authorization"],
          },
          {
            title: "Deployment & DevOps",
            items: ["Git, GitHub, GitHub Actions (CI/CD)", "Azure App Service, Azure SQL Database", "GitHub Pages"],
          },
        ].map((skill, idx) => (
          <motion.div
            key={idx}
            className="bg-white/10 backdrop-blur-md p-4 rounded-xl shadow-sm border border-gray-700"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
          >
            <h4 className="font-semibold text-lg text-indigo-300 mb-3">{skill.title}</h4>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
              {skill.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
      

      {/* Education Section */}
      <motion.h2
      id="education"
        className="text-4xl font-bold mt-16 mb-6 text-black dark:text-white"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Education
      </motion.h2>
      <motion.div
        className="space-y-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="bg-white/10 backdrop-blur-md p-5 rounded-xl border border-gray-700 shadow-md">
          <h3 className="text-xl font-semibold text-indigo-300 mb-2">Vellore Institute of Technology, Vellore</h3>
          <p className="text-gray-700 dark:text-gray-400 text-sm">B. Tech. Computer Science - AI & ML (08/2023 - Present)</p>
          <p className="text-gray-700 dark:text-gray-300 text-sm mt-2 leading-relaxed">
            1st Semester: 8.67 GPA<br />
            2nd Semester: 8.45 GPA<br />
            3rd Semester: 8.86 GPA<br />
            4th Semester: 8.53 GPA<br />
            <strong>Cumulative CGPA: 8.64</strong>
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-md p-5 rounded-xl border border-gray-700 shadow-md">
          <h3 className="text-xl font-semibold text-indigo-300 mb-2">Delhi Public School, Faridabad</h3>
          <p className="text-gray-700 dark:text-gray-400 text-sm">12th Class (04/2022 - 03/2023)</p>
          <p className="text-gray-700 dark:text-gray-300 text-sm">Percentage: 92%</p>
        </div>

        <div className="bg-white/10 backdrop-blur-md p-5 rounded-xl border border-gray-700 shadow-md">
          <h3 className="text-xl font-semibold text-indigo-300 mb-2">Delhi Public School, Faridabad</h3>
          <p className="text-gray-700 dark:text-gray-400 text-sm">10th Class (04/2020 - 03/2021)</p>
          <p className="text-gray-700 dark:text-gray-300 text-sm">Percentage: 92%</p>
        </div>
     </motion.div>

     <footer className="text-center py-6 text-sm text-gray-400">
  <div className="space-x-6 mb-2">
    <a
      href="https://github.com/siidakk" // Replace with your actual GitHub URL
      target="_blank"
      rel="noopener noreferrer"
      className="hover:underline"
    >
      GitHub ↗
    </a>
    <a
      href="https://www.linkedin.com/in/sidakarora" // Replace with your actual LinkedIn URL
      target="_blank"
      rel="noopener noreferrer"
      className="hover:underline"
    >
      LinkedIn ↗
    </a>
  </div>

  <p>
    <span className="font-semibold text-black dark:text-white">Sidak Arora © 2025.</span>{' '}
    Designed & Developed by <span className="font-semibold text-black dark:text-white">Sidak Arora</span>
  </p>
</footer>

    </div>

  
  );
  
}
export default Home;
