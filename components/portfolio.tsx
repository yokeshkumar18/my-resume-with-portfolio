"use client"

import { ExternalLink, Github, Code, Palette, Smartphone, Home } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Portfolio() {
  const projects = [
    {
      title: "Appointment Booking System",
      description:
        "Dynamic organization subdomain routing with visitor, customer, admin, and owner portals. QR-based check-in system with role-based access control.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
      portfolioImages: [
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop",
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=300&fit=crop",
        "https://images.unsplash.com/photo-1516534775068-bb57e39c139f?w=500&h=300&fit=crop",
      ],
      technologies: ["Next.js 15", "TypeScript", "Tailwind CSS", "QR Integration"],
      highlights: ["Multi-portal architecture", "QR check-in", "RBAC", "Responsive UI"],
      links: {
        github: "https://github.com/yokeshkumar18",
        demo: "#",
      },
    },
    {
      title: "ERP Management System",
      description:
        "Complete frontend for inventory, sales, customers, and analytics modules with reusable components and interactive dashboards.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      portfolioImages: [
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
        "https://images.unsplash.com/photo-1460925895917-adf4e12a726d?w=500&h=300&fit=crop",
        "https://images.unsplash.com/photo-1526374965328-7f5ae4e8289e?w=500&h=300&fit=crop",
      ],
      technologies: ["React.js", "Context API", "Tailwind CSS"],
      highlights: ["Inventory management", "Sales tracking", "Analytics", "Responsive design"],
      links: {
        github: "https://github.com/yokeshkumar18",
        demo: "#",
      },
    },
    {
      title: "Waitr Restaurant POS",
      description:
        "Desktop POS application with order-taking, table management, and kitchen display system. Offline-first architecture for seamless operation.",
      image: "https://images.unsplash.com/photo-1556742205-e10c9486e506?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      portfolioImages: [
        "https://images.unsplash.com/photo-1555421689-491f1d2f2edb?w=500&h=300&fit=crop",
        "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=500&h=300&fit=crop",
        "https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=500&h=300&fit=crop",
        "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=500&h=300&fit=crop",
      ],
      technologies: ["Electron.js", "React.js", "Offline-first"],
      highlights: ["Desktop app", "Offline support", "Real-time sync", "KDS"],
      links: {
        github: "https://github.com/yokeshkumar18",
        demo: "#",
      },
    },
    {
      title: "Conference Management Website",
      description:
        "Modern website with real-time content delivery via RESTful APIs, responsive design, and smooth navigation patterns.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
      portfolioImages: [
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop",
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop",
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop",
      ],
      technologies: ["React.js", "REST APIs", "Responsive Design"],
      highlights: ["Real-time content", "API integration", "Modern UI"],
      links: {
        github: "https://github.com/yokeshkumar18",
        demo: "#",
      },
    },
    {
      title: "Dubai Azaz Group - Real Estate Portal",
      description:
        "Comprehensive real estate platform showcasing luxury properties in Dubai with advanced filtering, virtual tours, and interactive property maps.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop",
      portfolioImages: [
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500&h=300&fit=crop",
        "https://images.unsplash.com/photo-1512100356356-de1d84291e13?w=500&h=300&fit=crop",
        "https://images.unsplash.com/photo-1449844908441-8829872d2607?w=500&h=300&fit=crop",
        "https://images.unsplash.com/photo-1473096169904-658ba7c44d8a?w=500&h=300&fit=crop",
        "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=500&h=300&fit=crop",
      ],
      technologies: ["React.js", "Next.js", "Tailwind CSS", "Map APIs"],
      highlights: ["Property showcase", "Virtual tours", "Advanced filtering", "Interactive maps"],
      links: {
        github: "https://github.com/yokeshkumar18",
        demo: "#",
      },
    },
  ]

  const skills = [
    { category: "Frontend", items: ["React.js", "Next.js 15", "TypeScript", "Tailwind CSS"] },
    { category: "Architecture", items: ["Responsive Design", "Component Design", "State Management"] },
    { category: "Tools", items: ["Git", "Figma", "VS Code", "Webpack"] },
    { category: "Specialized", items: ["QR Integration", "Offline-first", "Real-time Sync"] },
  ]

  const stats = [
    { number: "4+", label: "Projects Delivered" },
    { number: "1+", label: "Years Experience" },
    { number: "100%", label: "Client Satisfaction" },
    { number: "5+", label: "Technologies" },
  ]

  const realEstateProject = {
    name: "Real Estate Project (Azaz Group Dubai)",
    tagline: "Luxury Property Development in Dubai",
    properties: [
      {
        id: 1,
        name: "Premium Marina Apartments",
        price: "AED 2.5M - 4.2M",
        bedrooms: 2,
        bathrooms: 2,
        area: "1,200-1,800 sqft",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500&h=300&fit=crop",
      },
      {
        id: 2,
        name: "Downtown Luxury Villas",
        price: "AED 5M - 8.5M",
        bedrooms: 4,
        bathrooms: 4,
        area: "3,500-4,500 sqft",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500&h=300&fit=crop",
      },
      {
        id: 3,
        name: "Beachfront Penthouses",
        price: "AED 7M - 12M",
        bedrooms: 3,
        bathrooms: 3,
        area: "2,800-3,500 sqft",
        image: "https://images.unsplash.com/photo-1449844908441-8829872d2607?w=500&h=300&fit=crop",
      },
    ],
    stats: [
      { label: "Total Units", value: "450+" },
      { label: "Investment Value", value: "AED 2.2B" },
      { label: "Completion Rate", value: "85%" },
      { label: "Investor Satisfaction", value: "98%" },
    ],
    timeline: [
      { phase: "Phase 1", status: "Completed", year: "2026", description: "Foundation & Infrastructure" },
      { phase: "Phase 2", status: "Ongoing", year: "2026", description: "Residential Units Development" },
      { phase: "Phase 3", status: "Upcoming", year: "2026", description: "Commercial & Retail Spaces" },
      { phase: "Phase 4", status: "Planned", year: "2026", description: "Final Amenities & Launch" },
    ],
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 px-4 md:px-8 bg-gradient-to-r from-primary/5 via-background to-primary/5 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">
              Frontend Developer Portfolio
            </p>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">Crafting Beautiful Digital Experiences</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              I specialize in building responsive, user-centric web applications with modern frontend technologies.
              Every project is an opportunity to blend thoughtful design with robust engineering.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-primary text-white hover:bg-primary/90">
              View My Work
            </Button>
            <Button size="lg" variant="outline">
              Download Resume
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24 px-4 md:px-8 border-b border-border">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">About Me</h2>
          <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
            <p>
              I'm a passionate Frontend Developer with 1+ years of hands-on experience building modern web applications.
              My expertise spans React.js, Next.js, and TypeScript, with a focus on creating responsive, accessible, and
              performant user interfaces.
            </p>
            <p>
              Currently, I'm working at <span className="font-semibold text-foreground">Primora and Unityr</span>, where
              I contribute to building scalable frontend architectures and implementing complex UI features. I have a
              deep understanding of component-driven development, state management, and optimization techniques.
            </p>
            <p>
              Throughout my career, I've worked on diverse projects—from appointment booking systems with QR integration
              to comprehensive ERP solutions and desktop POS applications. Each project has taught me the importance of
              clean code, user experience, and continuous learning.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 md:py-24 px-4 md:px-8 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Skills & Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-card rounded-lg p-6 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
              >
                <h3 className="font-bold text-lg mb-4 text-foreground">{skill.category}</h3>
                <ul className="space-y-2">
                  {skill.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-16 md:py-24 px-4 md:px-8 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">Recent Work</p>
            <h2 className="text-4xl md:text-5xl font-bold">Featured Projects</h2>
          </div>

          {/* Large Featured Project */}
          <div className="mb-12 bg-card rounded-xl overflow-hidden border border-border hover:shadow-xl transition-all duration-300">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
              <div className="overflow-hidden h-80 md:h-96">
                <img
                  src={projects[0].image || "/placeholder.svg"}
                  alt={projects[0].title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-between">
                <div>
                  <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">Latest Project</p>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">{projects[0].title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{projects[0].description}</p>

                  {/* Highlights */}
                  <div className="mb-6">
                    <p className="text-xs font-semibold text-foreground mb-3 uppercase tracking-wide">Key Features</p>
                    <div className="flex flex-wrap gap-2">
                      {projects[0].highlights.map((highlight, i) => (
                        <span
                          key={i}
                          className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-8">
                    <p className="text-xs font-semibold text-foreground mb-3 uppercase tracking-wide">Tech Stack</p>
                    <div className="flex flex-wrap gap-2">
                      {projects[0].technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="inline-block bg-muted text-muted-foreground px-3 py-1 rounded text-sm border border-border"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  <Button variant="outline" className="flex-1 bg-transparent">
                    <Github className="w-4 h-4" />
                    View Code
                  </Button>
                  <Button className="flex-1 bg-primary text-white hover:bg-primary/90">
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Other Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.slice(1, 5).map((project, index) => (
              <div
                key={index}
                className="bg-card rounded-lg overflow-hidden border border-border hover:shadow-lg transition-all duration-300 group cursor-pointer"
              >
                <div className="overflow-hidden h-48">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 flex flex-col h-full">
                  <h3 className="text-lg font-bold mb-2 text-foreground">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 flex-grow leading-relaxed">{project.description}</p>

                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded border border-border"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {project.portfolioImages && project.portfolioImages.length > 0 && (
                    <div className="mb-4 pt-4 border-t border-border">
                      <p className="text-xs font-semibold text-foreground mb-2 uppercase tracking-wide">
                        Gallery Preview
                      </p>
                      <div className="grid grid-cols-3 gap-2">
                        {project.portfolioImages.slice(0, 3).map((imgUrl, i) => (
                          <div key={i} className="rounded overflow-hidden h-12 bg-muted">
                            <img
                              src={imgUrl || "/placeholder.svg"}
                              alt={`${project.title} ${i + 1}`}
                              className="w-full h-full object-cover hover:scale-105 transition-transform"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="flex gap-2 pt-4 border-t border-border">
                    <Button variant="outline" size="sm" className="flex-1 text-xs bg-transparent">
                      <Github className="w-4 h-4" />
                      Code
                    </Button>
                    <Button size="sm" className="flex-1 text-xs bg-primary text-white hover:bg-primary/90">
                      <ExternalLink className="w-4 h-4" />
                      Demo
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-4 md:px-8 border-b border-border bg-gradient-to-br from-slate-50 to-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">
              <Home className="w-4 h-4 inline mr-2" />
              Latest Real Estate Development
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">{realEstateProject.name}</h2>
            <p className="text-xl text-muted-foreground">{realEstateProject.tagline}</p>
          </div>

          {/* Project Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {realEstateProject.stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 border border-border text-center shadow-sm hover:shadow-md transition-shadow"
              >
                <p className="text-2xl md:text-3xl font-bold text-primary mb-2">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Property Listings */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold mb-8">Featured Properties</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {realEstateProject.properties.map((property) => (
                <div
                  key={property.id}
                  className="bg-white rounded-lg overflow-hidden border border-border hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="overflow-hidden h-48">
                    <img
                      src={property.image || "/placeholder.svg"}
                      alt={property.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="text-lg font-bold mb-2">{property.name}</h4>
                    <p className="text-2xl font-bold text-primary mb-4">{property.price}</p>
                    <div className="space-y-2 mb-6 text-sm text-muted-foreground">
                      <p>🛏️ {property.bedrooms} Bedrooms</p>
                      <p>🚿 {property.bathrooms} Bathrooms</p>
                      <p>📐 {property.area}</p>
                    </div>
                    <Button className="w-full bg-primary text-white hover:bg-primary/90">View Details</Button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Development Timeline */}
          <div>
            <h3 className="text-3xl font-bold mb-8">Development Timeline</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {realEstateProject.timeline.map((phase, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-lg border-2 transition-all ${
                    phase.status === "Completed"
                      ? "bg-green-50 border-green-200"
                      : phase.status === "Ongoing"
                        ? "bg-blue-50 border-blue-200 ring-2 ring-blue-100"
                        : "bg-gray-50 border-gray-200"
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-bold uppercase tracking-wide text-muted-foreground">
                      {phase.phase}
                    </span>
                    <span
                      className={`text-xs font-bold px-2 py-1 rounded-full ${
                        phase.status === "Completed"
                          ? "bg-green-200 text-green-800"
                          : phase.status === "Ongoing"
                            ? "bg-blue-200 text-blue-800"
                            : "bg-gray-200 text-gray-800"
                      }`}
                    >
                      {phase.status}
                    </span>
                  </div>
                  <p className="text-2xl font-bold mb-2">{phase.year}</p>
                  <p className="text-sm text-muted-foreground">{phase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services/Capabilities */}
      <section className="py-16 md:py-24 px-4 md:px-8 border-b border-border bg-muted/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">What I Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Code,
                title: "Component Development",
                desc: "Reusable, well-structured React components with TypeScript",
              },
              {
                icon: Palette,
                title: "UI/UX Implementation",
                desc: "Beautiful interfaces with Tailwind CSS and modern design principles",
              },
              {
                icon: Smartphone,
                title: "Responsive Design",
                desc: "Mobile-first approach ensuring seamless experience across devices",
              },
            ].map((service, i) => (
              <div key={i} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 px-4 md:px-8 bg-gradient-to-r from-primary to-primary/80">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Collaborate?</h2>
          <p className="text-lg mb-8 opacity-90">
            Whether you have a project in mind or just want to discuss possibilities, I'm always open to meaningful
            conversations about web development.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
              Send Me an Email
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20 bg-transparent">
              <Github className="w-4 h-4" />
              GitHub Profile
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 md:px-8 border-t border-border">
        <div className="max-w-6xl mx-auto text-center text-muted-foreground">
          <p>© 2026 Yokesh Kumar. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
