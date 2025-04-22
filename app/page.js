"use client";

import React, { useState } from "react";
import emailjs from 'emailjs-com';
import Link from "next/link";
import { FaLinkedin, FaGithub, FaFacebook, FaEnvelope } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";

export default function Home() {
  const [hovered, setHovered] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');
  

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message
    };

    emailjs
      .send('service_hmlk13j', 'template_j83tdcu', templateParams, 'rjiEo2WbwurVOiRFr')
      .then(
        (response) => {
          setStatus('Message sent successfully!');
          setFormData({ name: '', email: '', message: '' });
        },
        (error) => {
          setStatus('Failed to send message. Please try again later.');
        }
      );
  };

  // Projects data
  const projects = [
    {
      title: "Eschool",
      description: "eSchool is an innovative online education platform designed to make learning accessible and interactive. Whether you're a student, teacher, or professional, eSchool offers a seamless experience with a user-friendly interface, engaging course materials, and real-time collaboration tools. From video lectures to quizzes and assignments, eSchool empowers learners to achieve their goals at their own pace. Elevate your education with eSchool today!",
      image: "/E School.jpg",
      link: "https://forhad2k.github.io/project1/",
    },
    {
      title: "Project 2",
      description: "A mobile app designed with modern UI.",
      image: "/dua page.png",
      link: "https://my-dua.netlify.app/", // Replace with actual link
    },
    {
      title: "Project 3",
      description: "An e-commerce platform with robust features.",
      image: "/Editor cloud.png",
      link: "https://editor-cloud.netlify.app/", // Replace with actual link
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <div className="flex items-center justify-center h-screen bg-white">
        <div className="text-center">
          <h1 className="text-5xl md:text-[120px] font-bold">Forhad Hossain</h1>
          <TypeAnimation
            sequence={["Front-End Developer", 2000, "React Developer", 2000, "Web Designer", 2000, "Graphic Designer", 2000]}
            speed={50}
            repeat={Infinity}
            className="text-xl md:text-[60px] mt-2"
          />
          <div className="flex justify-center gap-4 mt-4 text-2xl">
            <Link href="https://www.linkedin.com/in/fahad-hassan-069493202/" target="_blank" className="text-blue-500 hover:text-blue-400">
              <FaLinkedin />
            </Link>
            <Link href="https://github.com/Forhad2k" target="_blank" className="text-gray-400 hover:text-white">
              <FaGithub />
            </Link>
            <Link href="https://www.facebook.com/farhar.hossain" target="_blank" className="text-blue-600 hover:text-blue-500">
              <FaFacebook />
            </Link>
            <Link href="mailto:fh594694@gmail.com" className="text-red-500 hover:text-red-400">
              <FaEnvelope />
            </Link>
          </div>
          <div className="mt-6">
            <Link href="#reach">
              <button className="px-6 py-2 bg-green-500 text-white rounded hover:bg-green-400">
                Reach Out
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* About Me Section */}
      <section className="md:flex justify-between min-h-screen items-center py-8">
        <div className="md:w-1/2 p-3 text-lg m-auto md:p-20 font-sans">
          <h2 className="text-2xl font-bold md:w-[80%] mb-4">About Me</h2>
          <p>
            Hello, I&rsquo;m Forhad Hossain!<br /><br />
            I&rsquo;m a passionate Front-End Developer with expertise in HTML, CSS, JavaScript, and React. I love transforming ideas into visually appealing, user-friendly, and high-performance web applications. My focus is on building responsive, interactive, and scalable web experiences that enhance user engagement.
            With a strong foundation in modern front-end technologies, I continuously strive to learn, adapt, and innovate in this ever-evolving industry. Whether it&rsquo;s crafting elegant UI designs, optimizing performance, or solving complex coding challenges, I enjoy every aspect of web development.
            I am always eager to explore new tools, frameworks, and best practices to enhance my skills and stay ahead in the field. My goal is to contribute to impactful projects that make a difference while collaborating with like-minded professionals to create seamless digital experiences.
            Let’s build something amazing together!
          </p>
        </div>
        <div className="w-1/2 m-auto py-14">
          <Image
            src="/my-photo.jpg"
            width={500}
            height={500}
            alt="Your Image"
            className="m-auto rounded-lg"
          />
        </div>
      </section>

      {/* Skills Section */}
      <section className="flex flex-col items-center justify-center p-8">
        <h2 className="text-5xl font-bold mb-32">My Skills</h2>
        {/* Grid Layout for Skills */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 lg:gap-20">
          {[
            { name: "HTML", src: "/html-icon.png" },
            { name: "CSS", src: "/css-icon.png" },
            { name: "JavaScript", src: "/js-icon.png" },
            { name: "React", src: "/react-icon.png" },
            { name: "Git", src: "/git-icon.png" },
            { name: "Tailwind CSS", src: "/tailwindcss-icon.png" },
            { name: "Bootstrap", src: "/bootstrap-icon.png" },
            { name: "Next.js", src: "/nextjs-icon.png" },
          ].map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center transition-transform transform hover:scale-110 duration-300"
            >
              <Image src={skill.src} alt={skill.name} width={64} height={64} />
              <p className="mt-2 text-lg font-medium">{skill.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 px-4 min-h-screen">
      <h2 className="text-3xl text-center font-bold mb-8">My Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-28 gap-8">
        {projects.map((project, index) => (
          <Link
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer block"
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
          >
            <div
              className={`transition-transform duration-500 h-80 group-hover:scale-110 ${
                hovered === index ? "scale-105" : "scale-100"
              }`}
            >
              <Image
                src={project.image}
                alt={project.title}
                width={2000}
                height={1400}
                className="w-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300" />
            <div
              className={`absolute inset-0 flex justify-center items-center text-white text-center p-4 transition-all duration-300 ${
                hovered === index ? "opacity-100" : "opacity-0"
              }`}
            >
              <div>
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="mt-2">{project.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>

    
    {/* Contact Section */}
    <section id="reach" className="py-16 px-4 min-h-screen">
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 text-sm font-semibold mb-2">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 text-sm font-semibold mb-2">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700 text-sm font-semibold mb-2">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="5"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full p-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Submit
        </button>
      </form>

      {status && (
        <p className={`mt-4 text-center text-sm ${status.includes('success') ? 'text-green-500' : 'text-red-500'}`}>
          {status}
        </p>
      )}
    </div>
    </section>
    <footer className="bg-gray-800 text-white py-6 mt-12">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-lg">&copy; 2025 Forhad Hossain. All rights reserved.</p>
       
      </div>
    </footer>
    </>
  );
}
