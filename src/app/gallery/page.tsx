import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function GalleryPage() {
  // Sample project data
  const projects = {
    residential: [
      {
        id: 1,
        title: "Modern Home Renovation",
        description: "Complete stucco installation with custom texture for a contemporary home in Phoenix.",
        images: [
          "/placeholder.svg?height=600&width=800",
          "/placeholder.svg?height=600&width=800",
          "/placeholder.svg?height=600&width=800",
        ],
      },
      {
        id: 2,
        title: "Spanish Colonial Restoration",
        description: "Restoration of traditional stucco on a historic Spanish Colonial home.",
        images: [
          "/placeholder.svg?height=600&width=800",
          "/placeholder.svg?height=600&width=800",
          "/placeholder.svg?height=600&width=800",
        ],
      },
      {
        id: 3,
        title: "Mediterranean Villa",
        description: "Custom decorative stucco finishes for a Mediterranean-style residence.",
        images: [
          "/placeholder.svg?height=600&width=800",
          "/placeholder.svg?height=600&width=800",
          "/placeholder.svg?height=600&width=800",
        ],
      },
      {
        id: 4,
        title: "Contemporary Townhouse",
        description: "Smooth finish stucco application for a modern townhouse development.",
        images: [
          "/placeholder.svg?height=600&width=800",
          "/placeholder.svg?height=600&width=800",
          "/placeholder.svg?height=600&width=800",
        ],
      },
    ],
    commercial: [
      {
        id: 5,
        title: "Retail Plaza Renovation",
        description: "Complete exterior stucco renovation for a shopping plaza in Scottsdale.",
        images: [
          "/placeholder.svg?height=600&width=800",
          "/placeholder.svg?height=600&width=800",
          "/placeholder.svg?height=600&width=800",
        ],
      },
      {
        id: 6,
        title: "Office Building",
        description: "Modern stucco application with custom color for a corporate office building.",
        images: [
          "/placeholder.svg?height=600&width=800",
          "/placeholder.svg?height=600&width=800",
          "/placeholder.svg?height=600&width=800",
        ],
      },
      {
        id: 7,
        title: "Restaurant Exterior",
        description: "Decorative stucco with artistic elements for a high-end restaurant.",
        images: [
          "/placeholder.svg?height=600&width=800",
          "/placeholder.svg?height=600&width=800",
          "/placeholder.svg?height=600&width=800",
        ],
      },
      {
        id: 8,
        title: "Hotel Renovation",
        description: "Large-scale stucco repair and refinishing for a boutique hotel.",
        images: [
          "/placeholder.svg?height=600&width=800",
          "/placeholder.svg?height=600&width=800",
          "/placeholder.svg?height=600&width=800",
        ],
      },
    ],
    specialty: [
      {
        id: 9,
        title: "Custom Fireplace",
        description: "Decorative stucco finish for an outdoor fireplace and entertainment area.",
        images: [
          "/placeholder.svg?height=600&width=800",
          "/placeholder.svg?height=600&width=800",
          "/placeholder.svg?height=600&width=800",
        ],
      },
      {
        id: 10,
        title: "Artistic Wall Feature",
        description: "Custom textured stucco wall with integrated artistic elements for a home interior.",
        images: [
          "/placeholder.svg?height=600&width=800",
          "/placeholder.svg?height=600&width=800",
          "/placeholder.svg?height=600&width=800",
        ],
      },
      {
        id: 11,
        title: "Pool Area Renovation",
        description: "Waterproof stucco application for a luxury pool area and outdoor kitchen.",
        images: [
          "/placeholder.svg?height=600&width=800",
          "/placeholder.svg?height=600&width=800",
          "/placeholder.svg?height=600&width=800",
        ],
      },
      {
        id: 12,
        title: "Garden Wall Features",
        description: "Decorative stucco garden walls with integrated planters and lighting.",
        images: [
          "/placeholder.svg?height=600&width=800",
          "/placeholder.svg?height=600&width=800",
          "/placeholder.svg?height=600&width=800",
        ],
      },
    ],
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="relative w-full h-[40vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=800&width=1920"
            alt="Our Work"
            fill
            className="object-cover brightness-[0.7]"
            priority
          />
        </div>
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">Our Portfolio</h1>
            <p className="text-xl mb-8">Explore our completed stucco projects and see the quality of our work.</p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Our Featured Projects</h2>
            <p className="text-lg text-muted-foreground">
              Browse through our portfolio of residential, commercial, and specialty stucco projects.
            </p>
          </div>

          <Tabs defaultValue="residential" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList>
                <TabsTrigger value="residential">Residential</TabsTrigger>
                <TabsTrigger value="commercial">Commercial</TabsTrigger>
                <TabsTrigger value="specialty">Specialty</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="residential">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.residential.map((project) => (
                  <div
                    key={project.id}
                    className="group overflow-hidden rounded-lg border bg-background shadow-sm transition-all hover:shadow-md"
                  >
                    <div className="aspect-video w-full overflow-hidden">
                      <Image
                        src={project.images[0] || "/placeholder.svg"}
                        alt={project.title}
                        width={800}
                        height={600}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-5">
                      <h3 className="text-xl font-bold">{project.title}</h3>
                      <p className="mt-2 text-muted-foreground">{project.description}</p>
                      <Button variant="outline" className="mt-4" asChild>
                        <Link href={`/gallery/${project.id}`}>View Project</Link>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="commercial">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.commercial.map((project) => (
                  <div
                    key={project.id}
                    className="group overflow-hidden rounded-lg border bg-background shadow-sm transition-all hover:shadow-md"
                  >
                    <div className="aspect-video w-full overflow-hidden">
                      <Image
                        src={project.images[0] || "/placeholder.svg"}
                        alt={project.title}
                        width={800}
                        height={600}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-5">
                      <h3 className="text-xl font-bold">{project.title}</h3>
                      <p className="mt-2 text-muted-foreground">{project.description}</p>
                      <Button variant="outline" className="mt-4" asChild>
                        <Link href={`/gallery/${project.id}`}>View Project</Link>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="specialty">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.specialty.map((project) => (
                  <div
                    key={project.id}
                    className="group overflow-hidden rounded-lg border bg-background shadow-sm transition-all hover:shadow-md"
                  >
                    <div className="aspect-video w-full overflow-hidden">
                      <Image
                        src={project.images[0] || "/placeholder.svg"}
                        alt={project.title}
                        width={800}
                        height={600}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-5">
                      <h3 className="text-xl font-bold">{project.title}</h3>
                      <p className="mt-2 text-muted-foreground">{project.description}</p>
                      <Button variant="outline" className="mt-4" asChild>
                        <Link href={`/gallery/${project.id}`}>View Project</Link>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">What Our Clients Say</h2>
            <p className="text-lg text-muted-foreground">
              Hear from our satisfied customers about their experience working with us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "John Smith",
                location: "Phoenix, AZ",
                quote:
                  "The team did an amazing job on our home's exterior. The stucco finish is flawless and has significantly improved our curb appeal.",
              },
              {
                name: "Sarah Johnson",
                location: "Scottsdale, AZ",
                quote:
                  "Professional, punctual, and precise. They repaired our damaged stucco and matched the texture perfectly. You can't even tell where the repairs were made.",
              },
              {
                name: "Michael Rodriguez",
                location: "Tempe, AZ",
                quote:
                  "We hired them for our commercial building renovation, and they exceeded our expectations. Great attention to detail and excellent communication throughout the project.",
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-background p-6 rounded-lg shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-primary/10 rounded-full p-2">
                    <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="font-semibold text-primary">{testimonial.name.charAt(0)}</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                </div>
                <p className="italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button asChild>
              <Link href="/testimonials">Read More Testimonials</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary text-primary-foreground rounded-lg p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">Ready to Transform Your Property?</h2>
              <p className="text-xl mb-8 text-primary-foreground/90">
                Contact us today for a free consultation and estimate on your stucco project.
              </p>
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">Get a Free Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

