"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Compass,
  MapPin,
  Calendar,
  Briefcase,
  GraduationCap,
  Globe,
  ArrowUpRight,
  Sparkles,
  Send,
  CheckCircle,
  Menu,
  X,
  Plane,
} from "lucide-react";

function LinkedinIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.59 1.59 0 1 0 0-3.18 1.59 1.59 0 0 0 0 3.18m1.39 9.74v-8.37H5.07v8.37h2.78z" />
    </svg>
  );
}

function GithubIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  );
}

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [contactForm, setContactForm] = useState({ name: "", email: "", message: "" });

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (contactForm.name && contactForm.email && contactForm.message) {
      setContactSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans">
      {/* ── HEADER / NAVIGATION ── */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/90 border-b border-slate-200/80 transition-all shadow-xs">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-18 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-amber-500/40 shadow-xs group-hover:border-amber-600 transition-colors">
              <Image
                src="/Abhay-Kumar-Sinha-Circle.png"
                alt="Abhay Kumar Sinha"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <span className="font-bold text-slate-900 tracking-tight block text-sm sm:text-base group-hover:text-amber-600 transition-colors">
                Abhay Kumar Sinha
              </span>
              <span className="text-[11px] text-slate-500 block -mt-0.5 font-medium">
                Director · SILKROAD TOUR
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600">
            <a href="#about" className="hover:text-amber-600 transition-colors">About</a>
            <a href="#experience" className="hover:text-amber-600 transition-colors">Experience</a>
            <a href="#skills" className="hover:text-amber-600 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-amber-600 transition-colors">Featured Work</a>
            <a href="#contact" className="hover:text-amber-600 transition-colors">Contact</a>
            <a
              href="https://amazinglyabhay.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs uppercase tracking-wider px-3.5 py-1.5 rounded-full border border-amber-600 text-amber-700 bg-amber-50/60 hover:bg-amber-600 hover:text-white transition-all flex items-center gap-1.5 font-bold shadow-xs"
            >
              <span>Travel Blog</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-700 hover:text-slate-900 rounded-lg"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 px-6 py-5 space-y-3 shadow-lg">
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-slate-700 hover:text-amber-600 font-medium text-base py-1"
            >
              About
            </a>
            <a
              href="#experience"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-slate-700 hover:text-amber-600 font-medium text-base py-1"
            >
              Experience
            </a>
            <a
              href="#skills"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-slate-700 hover:text-amber-600 font-medium text-base py-1"
            >
              Skills
            </a>
            <a
              href="#projects"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-slate-700 hover:text-amber-600 font-medium text-base py-1"
            >
              Featured Work
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-slate-700 hover:text-amber-600 font-medium text-base py-1"
            >
              Contact
            </a>
            <div className="pt-2 border-t border-slate-100">
              <a
                href="https://amazinglyabhay.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-amber-700 font-bold"
              >
                <span>Visit Blog (amazinglyabhay.com)</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}
      </header>

      {/* ── MAIN CONTENT ── */}
      <main className="flex-1">
        {/* ── 1. INTRO / HERO SECTION ── */}
        <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden bg-gradient-to-b from-white via-slate-50 to-slate-50">
          {/* Subtle Ambient background glow */}
          <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[650px] h-[320px] bg-amber-200/35 blur-[140px] -z-10 pointer-events-none rounded-full" />

          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* Left Column: Bio & Title */}
              <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
                {/* Status Pill */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/90 text-xs font-semibold text-emerald-800 shadow-xs">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Available for Strategic Inbound Travel Collaborations</span>
                </div>

                <div className="space-y-3">
                  <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
                    Abhay Kumar <span className="text-amber-600">Sinha</span>
                  </h1>
                  <p className="text-lg sm:text-xl font-semibold text-slate-700">
                    Director at <span className="text-slate-950 font-bold">SILKROAD TOUR (I) PVT. LTD.</span> & Founder of <span className="text-slate-950 font-bold">Amazingly Abhay</span>
                  </p>
                </div>

                <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  Leading ethical inbound tourism across India since 2003, with special focus on international Buddhist pilgrimage circuits and personalized travel management. Combining two decades of hospitality expertise with travel storytelling and modern AI workflow innovation.
                </p>

                {/* Location & Credentials Strip */}
                <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 text-xs sm:text-sm text-slate-600 pt-2 font-medium">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-amber-600" />
                    <span>Delhi, India</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-amber-600" />
                    <span>20+ Years in Tourism</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-amber-600" />
                    <span>AI Accelerator Participant</span>
                  </div>
                </div>

                {/* CTAs */}
                <div className="pt-4 flex flex-wrap justify-center lg:justify-start gap-3.5">
                  <a
                    href="#contact"
                    className="px-6 py-3 rounded-full bg-amber-500 text-slate-950 font-bold text-sm hover:bg-amber-600 transition-colors shadow-md shadow-amber-500/25 flex items-center gap-2"
                  >
                    <span>Get in Touch</span>
                    <Send className="w-4 h-4" />
                  </a>

                  <a
                    href="https://www.linkedin.com/in/amazinglyabhay/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-3 rounded-full bg-white border border-slate-200 text-slate-700 font-semibold text-sm hover:bg-slate-50 hover:text-slate-950 hover:border-slate-300 transition-all flex items-center gap-2 shadow-xs"
                  >
                    <LinkedinIcon className="w-4 h-4 text-[#0077b5]" />
                    <span>LinkedIn</span>
                  </a>

                  <a
                    href="https://github.com/galaxyabhay-beep"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-3 rounded-full bg-white border border-slate-200 text-slate-700 font-semibold text-sm hover:bg-slate-50 hover:text-slate-950 hover:border-slate-300 transition-all flex items-center gap-2 shadow-xs"
                  >
                    <GithubIcon className="w-4 h-4 text-slate-700" />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Hero Profile Card */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-72 sm:w-80 md:w-88 rounded-3xl p-3.5 bg-white border border-slate-200/90 shadow-xl">
                  {/* Portrait photo */}
                  <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-slate-100 border border-slate-200/80">
                    <Image
                      src="/Abhay-Kumar-Sinha-Circle.png"
                      alt="Abhay Kumar Sinha Profile Portrait"
                      fill
                      priority
                      className="object-cover"
                    />
                  </div>

                  <div className="p-4 pt-5 space-y-2.5">
                    <div className="flex items-center justify-between">
                      <div>
                        <h2 className="text-slate-900 font-bold text-base">Abhay Kumar Sinha</h2>
                        <p className="text-xs text-slate-500 font-medium">Delhi, India</p>
                      </div>
                      <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-amber-50 text-amber-800 border border-amber-200">
                        Inbound Director
                      </span>
                    </div>

                    <div className="pt-2 border-t border-slate-100 grid grid-cols-2 gap-2 text-center text-xs">
                      <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                        <span className="block font-extrabold text-slate-900 text-sm">2003</span>
                        <span className="text-slate-500 text-[11px] font-medium">Serving Since</span>
                      </div>
                      <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                        <span className="block font-extrabold text-slate-900 text-sm">Far-East</span>
                        <span className="text-slate-500 text-[11px] font-medium">Primary Market</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 2. ABOUT ME SECTION ── */}
        <section id="about" className="py-16 md:py-24 border-t border-slate-200/80 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="max-w-3xl mx-auto text-center space-y-2 mb-14">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-700">
                Personal Background
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Dedicated to Exploration, Hospitality & Innovation
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              {/* Narrative Content */}
              <div className="md:col-span-7 space-y-5 text-slate-700 leading-relaxed text-base">
                <p className="text-slate-900 font-semibold text-lg italic border-l-4 border-amber-500 pl-4 py-1 bg-amber-50/50 rounded-r-xl">
                  “Don’t listen to what people say; travel to explore and experience it.”
                </p>
                <p>
                  I am obsessed with exploring destinations and meeting new faces with my camera. Traveling has taught me lessons I never knew about myself. My journey in tourism started from escorting travelers on the ground, growing into managing intricate travel services from the office, and eventually becoming the Director of <strong className="text-slate-900">SILKROAD TOUR (I) PVT. LTD.</strong>
                </p>
                <p>
                  With two decades in the inbound tourism sector, my core mission has always been to deliver high-touch service with genuine personal care. We specialize in international cultural and Buddhist pilgrimage tours, bridging travelers especially from Far-East countries with India’s deepest historical and spiritual landmarks.
                </p>
                <p>
                  Beyond operational tourism, I run the travel blog <span className="text-amber-700 font-semibold">Amazingly Abhay</span> to champion authentic, mindful travel over selfie-hunting. Most recently, I have also embraced Generative AI through intensive learning sprints to explore how emerging technology can empower tourism planning and client experiences.
                </p>
              </div>

              {/* Pillars / Highlight Box */}
              <div className="md:col-span-5 space-y-4">
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-xs space-y-4">
                  <h3 className="text-slate-900 font-bold text-lg flex items-center gap-2">
                    <Compass className="w-5 h-5 text-amber-600" />
                    <span>Key Guiding Principles</span>
                  </h3>

                  <ul className="space-y-3 text-sm text-slate-700">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                      <span><strong className="text-slate-900">Ethical Tourism:</strong> Operating with integrity, safety, and respect for local communities since 2003.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                      <span><strong className="text-slate-900">Spiritual Heritage:</strong> Deep expertise in Buddhist pilgrimage circuits (Bodhgaya, Sarnath, Kushinagar, Rajgir).</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                      <span><strong className="text-slate-900">Personalized Care:</strong> Direct director-level oversight and tailored itinerary planning for all groups.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                      <span><strong className="text-slate-900">Modern Workflow:</strong> Adopting modern tools and AI assistance to elevate communication and itineraries.</span>
                    </li>
                  </ul>
                </div>

                {/* Education Note */}
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex items-center gap-4 shadow-xs">
                  <div className="w-12 h-12 rounded-xl bg-amber-100 border border-amber-200 flex items-center justify-center shrink-0">
                    <GraduationCap className="w-6 h-6 text-amber-700" />
                  </div>
                  <div>
                    <h4 className="text-slate-900 font-bold text-sm">Foundational Education</h4>
                    <p className="text-xs text-slate-500 font-medium">Sr. Secondary School, Sector - III, Bokaro Steel City</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 3. WORK EXPERIENCE ── */}
        <section id="experience" className="py-16 md:py-24 border-t border-slate-200/80 bg-slate-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="max-w-3xl mx-auto text-center space-y-2 mb-14">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-700">
                Career Timeline
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Work Experience & Leadership
              </h2>
            </div>

            <div className="max-w-4xl mx-auto space-y-7">
              {/* Experience 1: SILKROAD TOUR */}
              <div className="relative p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-amber-300 transition-all">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div>
                    <span className="inline-block text-xs font-bold px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-800 border border-amber-200 mb-1.5">
                      Executive Leadership
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900">Director</h3>
                    <p className="text-slate-700 font-semibold text-base">SILKROAD TOUR (I) PVT. LTD.</p>
                  </div>
                  <div className="sm:text-right">
                    <span className="text-xs font-bold text-slate-600 block">2003 – Present</span>
                    <span className="text-xs text-slate-500 font-medium">Delhi, India</span>
                  </div>
                </div>

                <div className="space-y-3 text-slate-700 text-sm leading-relaxed border-t border-slate-100 pt-4">
                  <p>
                    Leading an inbound tour company that has excelled since 2003 with the highest standards of professional ethics in the Indian tourism industry.
                  </p>
                  <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
                    <li>Spearheading business development with travel agencies and pilgrimage organizations across Far-East countries.</li>
                    <li>Specializing in sacred Buddhist Pilgrimage circuits spanning Bodhgaya, Sarnath, Kushinagar, Rajgir, Nalanda, and Varanasi.</li>
                    <li>Designing custom cultural itineraries across India tailored to individual traveler preferences and group requirements.</li>
                    <li>Ensuring comprehensive ground support, reliable transportation, verified accommodations, and personalized assistance.</li>
                  </ul>
                </div>
              </div>

              {/* Experience 2: Amazingly Abhay */}
              <div className="relative p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-amber-300 transition-all">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div>
                    <span className="inline-block text-xs font-bold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-800 border border-slate-200 mb-1.5">
                      Content & Media
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900">Founder & Travel Writer</h3>
                    <p className="text-slate-700 font-semibold text-base">Amazingly Abhay (amazinglyabhay.com)</p>
                  </div>
                  <div className="sm:text-right">
                    <span className="text-xs font-bold text-slate-600 block">2021 – Present</span>
                    <span className="text-xs text-slate-500 font-medium">Independent Digital Platform</span>
                  </div>
                </div>

                <div className="space-y-3 text-slate-700 text-sm leading-relaxed border-t border-slate-100 pt-4">
                  <p>
                    Launched during the pandemic to bring a thoughtful, educational perspective to tourism. Authoring essays on conscious exploration and practical travel preparation.
                  </p>
                  <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
                    <li>Authored featured articles including <em>“The Effective Traveller”</em> and <em>“Explore While You Travel”</em>.</li>
                    <li>Sharing on-the-ground travel photography and destination spotlights.</li>
                    <li>Advocating for travelers to experience the essence of places rather than focusing merely on selfies and social bragging.</li>
                  </ul>
                </div>
              </div>

              {/* Experience 3: AI Accelerator Challenge */}
              <div className="relative p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-amber-300 transition-all">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div>
                    <span className="inline-block text-xs font-bold px-2.5 py-0.5 rounded-full bg-purple-50 text-purple-800 border border-purple-200 mb-1.5">
                      Skill Development & Technology
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900">AI Accelerator Challenge Participant</h3>
                    <p className="text-slate-700 font-semibold text-base">Outskill</p>
                  </div>
                  <div className="sm:text-right">
                    <span className="text-xs font-bold text-slate-600 block">Recent / Ongoing</span>
                    <span className="text-xs text-slate-500 font-medium">7-Level Sprint</span>
                  </div>
                </div>

                <div className="space-y-3 text-slate-700 text-sm leading-relaxed border-t border-slate-100 pt-4">
                  <p>
                    Actively expanding digital capabilities through Outskill’s intensive Generative AI challenge (unlocked Day 8 and Day 9 milestones).
                  </p>
                  <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
                    <li>Practical training in Generative AI prompting, workflow automations, and modern digital tooling.</li>
                    <li>Applying AI models to enhance itinerary documentation, customer communication, and business efficiency.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 4. SKILLS SECTION ── */}
        <section id="skills" className="py-16 md:py-24 border-t border-slate-200/80 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="max-w-3xl mx-auto text-center space-y-2 mb-14">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-700">
                Core Competencies
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Specialized Knowledge & Capabilities
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Category 1 */}
              <div className="p-6 sm:p-7 rounded-3xl bg-slate-50 border border-slate-200 shadow-xs flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-amber-100 border border-amber-200 flex items-center justify-center">
                    <Plane className="w-6 h-6 text-amber-700" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">Inbound Tourism & Operations</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    End-to-end management of inbound travelers arriving in India, with rigorous safety and service benchmarks.
                  </p>
                </div>

                <div className="pt-6 space-y-2">
                  {[
                    "Buddhist Pilgrimage Circuits",
                    "Custom Itinerary Architecture",
                    "Far-East International Relations",
                    "Hospitality & Ground Assistance",
                    "Ethical Tourism Standards",
                  ].map((skill, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs font-medium text-slate-800 bg-white px-3 py-2 rounded-xl border border-slate-200/80 shadow-2xs">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Category 2 */}
              <div className="p-6 sm:p-7 rounded-3xl bg-slate-50 border border-slate-200 shadow-xs flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-blue-100 border border-blue-200 flex items-center justify-center">
                    <Briefcase className="w-6 h-6 text-blue-700" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">Executive & Partner Leadership</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Guiding long-term client loyalty, international agency partnerships, and corporate responsibility.
                  </p>
                </div>

                <div className="pt-6 space-y-2">
                  {[
                    "Strategic Company Direction",
                    "Cross-Border Vendor Negotiation",
                    "Crisis & Recovery Planning",
                    "High-Trust Client Advisory",
                    "Cultural Sensitivity & Etiquette",
                  ].map((skill, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs font-medium text-slate-800 bg-white px-3 py-2 rounded-xl border border-slate-200/80 shadow-2xs">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Category 3 */}
              <div className="p-6 sm:p-7 rounded-3xl bg-slate-50 border border-slate-200 shadow-xs flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-purple-100 border border-purple-200 flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-purple-700" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">Content & AI Innovation</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Bridging traditional hospitality with modern digital communication and generative AI techniques.
                  </p>
                </div>

                <div className="pt-6 space-y-2">
                  {[
                    "Travel Editorial & Content Writing",
                    "Destination Photography Curation",
                    "Generative AI Workflow Integration",
                    "Digital Presence & Brand Building",
                    "Continuous Self-Directed Learning",
                  ].map((skill, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs font-medium text-slate-800 bg-white px-3 py-2 rounded-xl border border-slate-200/80 shadow-2xs">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-600" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 5. PROJECTS / FEATURED WORK ── */}
        <section id="projects" className="py-16 md:py-24 border-t border-slate-200/80 bg-slate-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="max-w-3xl mx-auto text-center space-y-2 mb-14">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-700">
                Real Highlights
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Featured Work & Publications
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Project 1: Amazingly Abhay Articles */}
              <div className="rounded-3xl bg-white border border-slate-200 overflow-hidden flex flex-col group hover:shadow-lg hover:border-amber-300 transition-all shadow-sm">
                <div className="relative h-56 w-full overflow-hidden bg-slate-100">
                  <Image
                    src="/Effective-Traveller-1024x536.jpg"
                    alt="The Effective Traveller article cover"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold text-amber-800 border border-slate-200 shadow-xs">
                    Travel Publication
                  </div>
                </div>

                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-amber-600 transition-colors">
                      “The Effective Traveller” Article
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      An exploration of how travelers can maximize experiential fulfillment, prioritize mindfulness over selfie bragging, and make each journey truly transformative.
                    </p>
                  </div>

                  <div className="pt-2 flex items-center justify-between border-t border-slate-100">
                    <span className="text-xs text-slate-500 font-medium">amazinglyabhay.com</span>
                    <a
                      href="https://amazinglyabhay.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-amber-700 flex items-center gap-1 hover:underline"
                    >
                      <span>Read on Blog</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Project 2: Explore While You Travel */}
              <div className="rounded-3xl bg-white border border-slate-200 overflow-hidden flex flex-col group hover:shadow-lg hover:border-amber-300 transition-all shadow-sm">
                <div className="relative h-56 w-full overflow-hidden bg-slate-100">
                  <Image
                    src="/Explore-While-You-Travel-1024x538.jpg"
                    alt="Explore While You Travel article cover"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold text-amber-800 border border-slate-200 shadow-xs">
                    Travel Publication
                  </div>
                </div>

                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-amber-600 transition-colors">
                      “Explore While You Travel” Philosophy
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      “Travelling is since civilization and to be civilized you need to travel.” Practical advice on balancing planning with spontaneous serendipity on the road.
                    </p>
                  </div>

                  <div className="pt-2 flex items-center justify-between border-t border-slate-100">
                    <span className="text-xs text-slate-500 font-medium">amazinglyabhay.com</span>
                    <a
                      href="https://amazinglyabhay.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-amber-700 flex items-center gap-1 hover:underline"
                    >
                      <span>Read on Blog</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Travel Affiliations & Real Reader Review */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              {/* Partner Badges */}
              <div className="md:col-span-6 p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Associated Organizations & Tours
                </h4>
                <div className="grid grid-cols-3 gap-4 items-center pt-2">
                  <div className="p-3 bg-slate-50 rounded-2xl flex flex-col items-center justify-center text-center border border-slate-100">
                    <div className="relative w-16 h-12 mb-2">
                      <Image
                        src="/Silkroad-Tour.jpg"
                        alt="Silkroad Tour"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <span className="text-[11px] text-slate-700 font-semibold">Silkroad Tour</span>
                  </div>

                  <div className="p-3 bg-slate-50 rounded-2xl flex flex-col items-center justify-center text-center border border-slate-100">
                    <div className="relative w-16 h-12 mb-2">
                      <Image
                        src="/Borisu-Sesang-1.jpg"
                        alt="Borisu Sesang"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <span className="text-[11px] text-slate-700 font-semibold">Borisu Sesang</span>
                  </div>

                  <div className="p-3 bg-slate-50 rounded-2xl flex flex-col items-center justify-center text-center border border-slate-100">
                    <div className="relative w-16 h-12 mb-2">
                      <Image
                        src="/Buddha-Tours.jpg"
                        alt="Buddha Tours"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <span className="text-[11px] text-slate-700 font-semibold">Buddha Tours</span>
                  </div>
                </div>
              </div>

              {/* Real Testimonial */}
              <div className="md:col-span-6 p-6 sm:p-7 rounded-3xl bg-white border border-slate-200 shadow-sm relative">
                <span className="text-4xl text-amber-500/25 font-serif absolute top-4 right-6">“</span>
                <p className="text-slate-700 italic text-sm leading-relaxed mb-4 relative z-10">
                  “Thank you so much for sharing all this wonderful travel info. It is so useful post. I’ll keep these things in my mind for sure when I plan my next visit.”
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-amber-100 border border-amber-200 flex items-center justify-center font-bold text-sm text-amber-800">
                    NS
                  </div>
                  <div>
                    <h5 className="text-slate-900 text-sm font-bold">Neha Sinha</h5>
                    <p className="text-xs text-slate-500 font-medium">Reader & Traveler Review</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 6. CONTACT SECTION ── */}
        <section id="contact" className="py-16 md:py-24 border-t border-slate-200/80 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="max-w-3xl mx-auto text-center space-y-2 mb-14">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-700">
                Get In Touch
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Let’s Connect & Collaborate
              </h2>
              <p className="text-slate-600 text-sm sm:text-base">
                Whether you are interested in inbound travel planning, Buddhist pilgrimage journeys, or consulting, feel free to reach out.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              {/* Contact Info Cards */}
              <div className="lg:col-span-5 space-y-4">
                <a
                  href="https://www.linkedin.com/in/amazinglyabhay/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-[#0077b5]/50 hover:bg-white transition-all flex items-center gap-4 group block shadow-2xs"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#0077b5]/10 border border-[#0077b5]/20 flex items-center justify-center shrink-0">
                    <LinkedinIcon className="w-6 h-6 text-[#0077b5]" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-slate-900 font-bold text-sm group-hover:text-[#0077b5] transition-colors">
                      LinkedIn Profile
                    </h4>
                    <p className="text-xs text-slate-500 font-medium">linkedin.com/in/amazinglyabhay</p>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-slate-900 transition-colors" />
                </a>

                <a
                  href="https://amazinglyabhay.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-amber-400 hover:bg-white transition-all flex items-center gap-4 group block shadow-2xs"
                >
                  <div className="w-12 h-12 rounded-xl bg-amber-100 border border-amber-200 flex items-center justify-center shrink-0">
                    <Globe className="w-6 h-6 text-amber-700" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-slate-900 font-bold text-sm group-hover:text-amber-700 transition-colors">
                      Personal Website & Blog
                    </h4>
                    <p className="text-xs text-slate-500 font-medium">amazinglyabhay.com</p>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-slate-900 transition-colors" />
                </a>

                <a
                  href="https://github.com/galaxyabhay-beep"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-slate-400 hover:bg-white transition-all flex items-center gap-4 group block shadow-2xs"
                >
                  <div className="w-12 h-12 rounded-xl bg-slate-200/70 border border-slate-300 flex items-center justify-center shrink-0">
                    <GithubIcon className="w-6 h-6 text-slate-800" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-slate-900 font-bold text-sm group-hover:text-slate-950 transition-colors">
                      GitHub Profile
                    </h4>
                    <p className="text-xs text-slate-500 font-medium">github.com/galaxyabhay-beep</p>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-slate-900 transition-colors" />
                </a>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex items-center gap-4 shadow-2xs">
                  <div className="w-12 h-12 rounded-xl bg-slate-200/60 border border-slate-300 flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-slate-700" />
                  </div>
                  <div>
                    <h4 className="text-slate-900 font-bold text-sm">Location</h4>
                    <p className="text-xs text-slate-500 font-medium">Delhi, India</p>
                  </div>
                </div>
              </div>

              {/* Direct Message Form */}
              <div className="lg:col-span-7">
                <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Send a Direct Message</h3>
                  <p className="text-xs sm:text-sm text-slate-600 mb-6">
                    Leave your contact details and a brief note. I will receive your message and respond promptly.
                  </p>

                  {contactSubmitted ? (
                    <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-300 text-center space-y-3">
                      <CheckCircle className="w-12 h-12 text-emerald-600 mx-auto" />
                      <h4 className="text-lg font-bold text-slate-900">Thank You!</h4>
                      <p className="text-sm text-slate-700">
                        Your message has been sent successfully. I will get back to you shortly.
                      </p>
                      <button
                        onClick={() => {
                          setContactSubmitted(false);
                          setContactForm({ name: "", email: "", message: "" });
                        }}
                        className="mt-2 text-xs font-bold text-amber-700 hover:underline"
                      >
                        Send another note
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleContactSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1.5">
                            Your Name
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="Enter your name"
                            value={contactForm.name}
                            onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                            className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 shadow-2xs"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1.5">
                            Email Address
                          </label>
                          <input
                            type="email"
                            required
                            placeholder="Enter your email"
                            value={contactForm.email}
                            onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                            className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 shadow-2xs"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1.5">
                          Message
                        </label>
                        <textarea
                          rows={4}
                          required
                          placeholder="How can we collaborate?"
                          value={contactForm.message}
                          onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 shadow-2xs"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full py-3 rounded-xl bg-amber-500 text-slate-950 font-bold text-sm hover:bg-amber-600 transition-colors flex items-center justify-center gap-2 shadow-md shadow-amber-500/25"
                      >
                        <span>Send Message</span>
                        <Send className="w-4 h-4" />
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ── FOOTER ── */}
      <footer className="border-t border-slate-200 bg-slate-900 py-10 text-center text-xs text-slate-400">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-4">
          <div className="flex flex-wrap items-center justify-center gap-6 text-slate-300 font-medium">
            <a href="#about" className="hover:text-amber-400 transition-colors">About</a>
            <a href="#experience" className="hover:text-amber-400 transition-colors">Experience</a>
            <a href="#skills" className="hover:text-amber-400 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-amber-400 transition-colors">Featured Work</a>
            <a href="https://www.linkedin.com/in/amazinglyabhay/" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors">LinkedIn</a>
            <a href="https://amazinglyabhay.com/" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors">amazinglyabhay.com</a>
          </div>

          <p className="pt-2 text-slate-400">
            © {new Date().getFullYear()} Abhay Kumar Sinha · Director at SILKROAD TOUR (I) PVT. LTD. · All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
