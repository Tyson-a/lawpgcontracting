import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

export default function ServicesPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative w-full h-[40vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=800&width=1920"
            alt="Stucco services"
            fill
            className="object-cover brightness-[0.7]"
            priority
          />
        </div>
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">Our Stucco Services</h1>
            <p className="text-xl mb-8">Comprehensive stucco solutions for residential and commercial properties.</p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Expert Stucco Services</h2>
            <p className="text-lg text-muted-foreground">
              We offer a complete range of stucco services to meet all your residential and commercial needs. Our
              experienced team ensures quality craftsmanship and attention to detail on every project.
            </p>
          </div>

          <div className="space-y-24">
            {/* Service 1: Stucco Installation */}
            <div id="installation" className="scroll-mt-20">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1">
                  <h3 className="text-2xl font-bold mb-4">Stucco Installation</h3>
                  <p className="text-muted-foreground mb-6">
                    Our professional stucco installation services provide durable, attractive finishes for your home or
                    commercial property. We use premium materials and proven techniques to ensure long-lasting results.
                  </p>

                  <div className="space-y-3 mb-6">
                    {[
                      "Complete three-coat stucco systems",
                      "Traditional and synthetic stucco options",
                      "Custom textures and finishes",
                      "Color-integrated stucco",
                      "Energy-efficient systems",
                      "Proper moisture barriers and flashing",
                    ].map((feature, index) => (
                      <div key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button asChild>
                    <Link href="/contact">Request a Quote</Link>
                  </Button>
                </div>
                <div className="order-1 md:order-2">
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    alt="Stucco installation"
                    width={800}
                    height={600}
                    className="rounded-lg object-cover w-full h-[400px]"
                  />
                </div>
              </div>
            </div>

            {/* Service 2: Stucco Repair */}
            <div id="repair" className="scroll-mt-20">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    alt="Stucco repair"
                    width={800}
                    height={600}
                    className="rounded-lg object-cover w-full h-[400px]"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">Stucco Repair</h3>
                  <p className="text-muted-foreground mb-6">
                    Our stucco repair services address damage, cracks, and deterioration to restore the integrity and
                    appearance of your stucco surfaces. We carefully match textures and colors for seamless repairs.
                  </p>

                  <div className="space-y-3 mb-6">
                    {[
                      "Crack repair and patching",
                      "Water damage restoration",
                      "Color and texture matching",
                      "Structural repairs",
                      "Moisture barrier replacement",
                      "Preventative maintenance",
                    ].map((feature, index) => (
                      <div key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button asChild>
                    <Link href="/contact">Request a Quote</Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Service 3: Decorative Finishes */}
            <div id="decorative" className="scroll-mt-20">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1">
                  <h3 className="text-2xl font-bold mb-4">Decorative Finishes</h3>
                  <p className="text-muted-foreground mb-6">
                    Enhance the beauty of your property with our decorative stucco finishes. We offer a variety of
                    textures and artistic techniques to create unique, eye-catching surfaces that stand out.
                  </p>

                  <div className="space-y-3 mb-6">
                    {[
                      "Custom texture patterns",
                      "Venetian plaster finishes",
                      "Smooth and sand finishes",
                      "Dash and lace textures",
                      "Specialty aggregate mixes",
                      "Architectural details and accents",
                    ].map((feature, index) => (
                      <div key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button asChild>
                    <Link href="/contact">Request a Quote</Link>
                  </Button>
                </div>
                <div className="order-1 md:order-2">
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    alt="Decorative stucco finishes"
                    width={800}
                    height={600}
                    className="rounded-lg object-cover w-full h-[400px]"
                  />
                </div>
              </div>
            </div>

            {/* Service 4: Color Coating */}
            <div id="color-coating" className="scroll-mt-20">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    alt="Stucco color coating"
                    width={800}
                    height={600}
                    className="rounded-lg object-cover w-full h-[400px]"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">Color Coating</h3>
                  <p className="text-muted-foreground mb-6">
                    Our color coating services provide a fresh look for your stucco surfaces with long-lasting,
                    weather-resistant finishes. We use premium acrylic and elastomeric coatings for superior results.
                  </p>

                  <div className="space-y-3 mb-6">
                    {[
                      "Wide range of color options",
                      "UV and fade-resistant formulations",
                      "Elastomeric coatings for crack prevention",
                      "Breathable finishes",
                      "Water-repellent properties",
                      "Low maintenance solutions",
                    ].map((feature, index) => (
                      <div key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button asChild>
                    <Link href="/contact">Request a Quote</Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Service 5: Waterproofing */}
            <div id="waterproofing" className="scroll-mt-20">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1">
                  <h3 className="text-2xl font-bold mb-4">Waterproofing</h3>
                  <p className="text-muted-foreground mb-6">
                    Protect your stucco investment with our comprehensive waterproofing services. We apply specialized
                    sealants and treatments to prevent moisture damage and extend the life of your stucco.
                  </p>

                  <div className="space-y-3 mb-6">
                    {[
                      "Penetrating sealers and repellents",
                      "Elastomeric waterproof coatings",
                      "Flashing and water diversion systems",
                      "Moisture barrier installation",
                      "Crack sealing and prevention",
                      "Long-term protection solutions",
                    ].map((feature, index) => (
                      <div key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button asChild>
                    <Link href="/contact">Request a Quote</Link>
                  </Button>
                </div>
                <div className="order-1 md:order-2">
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    alt="Stucco waterproofing"
                    width={800}
                    height={600}
                    className="rounded-lg object-cover w-full h-[400px]"
                  />
                </div>
              </div>
            </div>

            {/* Service 6: Commercial Services */}
            <div id="commercial" className="scroll-mt-20">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    alt="Commercial stucco services"
                    width={800}
                    height={600}
                    className="rounded-lg object-cover w-full h-[400px]"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">Commercial Services</h3>
                  <p className="text-muted-foreground mb-6">
                    Our commercial stucco services cater to businesses, multi-family properties, and institutional
                    buildings. We have the expertise and resources to handle projects of any size or complexity.
                  </p>

                  <div className="space-y-3 mb-6">
                    {[
                      "Large-scale installation capabilities",
                      "Commercial building repairs",
                      "Multi-family property renovations",
                      "Retail and office building finishes",
                      "Project management services",
                      "Code-compliant installations",
                    ].map((feature, index) => (
                      <div key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button asChild>
                    <Link href="/contact">Request a Quote</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Our Process</h2>
            <p className="text-lg text-muted-foreground">
              We follow a systematic approach to ensure quality results and customer satisfaction on every project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Consultation & Estimate",
                description:
                  "We begin with a thorough consultation to understand your needs and provide a detailed, transparent estimate.",
              },
              {
                step: "2",
                title: "Planning & Preparation",
                description:
                  "Our team develops a comprehensive plan and prepares the site properly to ensure a smooth installation process.",
              },
              {
                step: "3",
                title: "Professional Installation",
                description:
                  "Our skilled craftsmen execute the project with precision, following industry best practices and quality standards.",
              },
              {
                step: "4",
                title: "Quality Inspection",
                description:
                  "We conduct rigorous quality checks throughout the project to ensure everything meets our high standards.",
              },
              {
                step: "5",
                title: "Final Walkthrough",
                description:
                  "We review the completed work with you to ensure your complete satisfaction before finalizing the project.",
              },
              {
                step: "6",
                title: "Ongoing Support",
                description:
                  "Our relationship continues after project completion with warranty coverage and maintenance support.",
              },
            ].map((process, index) => (
              <Card key={index} className="bg-background">
                <CardHeader className="pb-2">
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg mb-2">
                    {process.step}
                  </div>
                  <CardTitle>{process.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{process.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary text-primary-foreground rounded-lg p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
                Ready to Start Your Stucco Project?
              </h2>
              <p className="text-xl mb-8 text-primary-foreground/90">
                Contact us today for a free consultation and estimate. Our team is ready to bring your vision to life.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/contact">Get a Free Quote</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
                  asChild
                >
                  <Link href="/gallery">View Our Work</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

