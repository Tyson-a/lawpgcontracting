import Link from "next/link"
import Image from "next/image"
import { Mail, Clock, MapPin, ArrowRight } from "lucide-react"
import { Button } from "../components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[80vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Stucco finish on modern home"
            fill
            className="object-cover brightness-[0.7]"
            priority
          />
        </div>
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
              Premium Stucco Services for Your Home
            </h1>
            <p className="text-xl mb-8">
              Professional stucco installation, repair, and finishing with over 20 years of experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link href="/contact">Get a Free Quote</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white/20"
                asChild
              >
                <Link href="/services">Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Our Stucco Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We provide comprehensive stucco solutions for residential and commercial properties.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Stucco Installation",
                description: "Complete stucco systems installed by our experienced team.",
                image: "/placeholder.svg?height=400&width=600",
              },
              {
                title: "Stucco Repair",
                description: "Fix cracks, chips, and water damage to restore your stucco's integrity.",
                image: "/placeholder.svg?height=400&width=600",
              },
              {
                title: "Decorative Finishes",
                description: "Custom textures and finishes to enhance your property's appearance.",
                image: "/placeholder.svg?height=400&width=600",
              },
              {
                title: "Color Coating",
                description: "Long-lasting, weather-resistant color applications.",
                image: "/placeholder.svg?height=400&width=600",
              },
              {
                title: "Waterproofing",
                description: "Protect your stucco from moisture damage with our waterproofing services.",
                image: "/placeholder.svg?height=400&width=600",
              },
              {
                title: "Commercial Services",
                description: "Large-scale stucco solutions for commercial properties.",
                image: "/placeholder.svg?height=400&width=600",
              },
            ].map((service, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="h-48 relative">
                  <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover" />
                </div>
                <CardHeader>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" className="gap-2" asChild>
                    <Link href="/services">
                      Learn More <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button size="lg" asChild>
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Why Choose Us</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're committed to quality craftsmanship and exceptional customer service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Experienced Team",
                description: "Over 20 years of experience in the stucco industry.",
                icon: Clock,
              },
              {
                title: "Quality Materials",
                description: "We use only premium materials for lasting results.",
                icon: MapPin,
              },
              {
                title: "Timely Completion",
                description: "Projects completed on schedule without compromising quality.",
                icon: Clock,
              },
              {
                title: "Satisfaction Guaranteed",
                description: "We're not satisfied until you're completely happy with our work.",
                icon: Mail,
              },
            ].map((feature, index) => (
              <div key={index} className="flex flex-col items-center text-center p-6">
                <div className="bg-primary/10 p-4 rounded-full mb-4">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">What Our Clients Say</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our satisfied customers have to say.
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
              <Card key={index} className="h-full">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="bg-primary/10 rounded-full p-2">
                      <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                        <span className="font-semibold text-primary">{testimonial.name.charAt(0)}</span>
                      </div>
                    </div>
                    <div>
                      <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                      <CardDescription>{testimonial.location}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="italic">"{testimonial.quote}"</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button variant="outline" size="lg" asChild>
              <Link href="/testimonials">Read More Testimonials</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">Ready to Transform Your Property?</h2>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Contact us today for a free consultation and estimate on your stucco project.
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
                <Link href="mailto:Lawpgcontracting@gmail.com">
                  <Mail className="mr-2 h-4 w-4" /> Email Us Now
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

