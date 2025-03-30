import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Award, Users, Clock, Shield } from "lucide-react"

export default function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative w-full h-[40vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=800&width=1920"
            alt="About Stucco Pro"
            fill
            className="object-cover brightness-[0.7]"
            priority
          />
        </div>
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">About Stucco Pro</h1>
            <p className="text-xl mb-8">Your trusted partner for premium stucco services since 2003.</p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
        <p>
  We&apos;re a team of experienced stucco professionals who know how to get the job done right. No fancy
  talk, just quality work at fair prices.
</p>
<p>
  With over 20 years in the business, we&apos;ve seen and fixed it all. From small repairs to complete home
  exteriors, we handle every project with the same attention to detail and commitment to quality.
</p>
<p>
  We&apos;re licensed, bonded, and insured, so you can trust us to take care of your property. We show up on
  time, clean up after ourselves, and make sure you&apos;re happy with the results.
</p>
<p>
  Bottom line: we do what we say we&apos;re going to do, when we say we&apos;re going to do it, for the price we
  quoted. That&apos;s how we&apos;ve built our business and reputation over the years.
</p>
              </div>
            </div>
            <div>
              <Image
                src="/placeholder.svg?height=800&width=800"
                alt="Stucco Pro team"
                width={800}
                height={800}
                className="rounded-lg object-cover w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Our Core Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These principles guide everything we do and define who we are as a company.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Quality",
                description: "We never compromise on quality, using only premium materials and proven techniques.",
                icon: Award,
              },
              {
                title: "Integrity",
                description: "We operate with honesty and transparency in all our business practices.",
                icon: Shield,
              },
              {
                title: "Reliability",
                description: "We deliver on our promises, completing projects on time and within budget.",
                icon: Clock,
              },
              {
                title: "Customer Focus",
                description: "We prioritize customer satisfaction and build lasting relationships.",
                icon: Users,
              },
            ].map((value, index) => (
              <Card key={index} className="bg-background">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="bg-primary/10 p-4 rounded-full mb-4">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Meet Our Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our experienced professionals are dedicated to delivering exceptional results on every project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Michael Johnson",
                position: "Founder & CEO",
                bio: "With over 30 years of experience in the construction industry, Michael leads our team with expertise and vision.",
                image: "/placeholder.svg?height=400&width=400",
              },
              {
                name: "Sarah Martinez",
                position: "Project Manager",
                bio: "Sarah ensures that every project runs smoothly from start to finish, with meticulous attention to detail.",
                image: "/placeholder.svg?height=400&width=400",
              },
              {
                name: "David Wilson",
                position: "Lead Craftsman",
                bio: "David's artistic approach to stucco has earned him a reputation for creating stunning decorative finishes.",
                image: "/placeholder.svg?height=400&width=400",
              },
              {
                name: "Jennifer Lee",
                position: "Customer Relations",
                bio: "Jennifer is dedicated to ensuring our clients have an exceptional experience throughout their project.",
                image: "/placeholder.svg?height=400&width=400",
              },
              {
                name: "Robert Garcia",
                position: "Senior Estimator",
                bio: "Robert provides accurate, detailed estimates that help our clients plan their projects with confidence.",
                image: "/placeholder.svg?height=400&width=400",
              },
              {
                name: "Thomas Brown",
                position: "Quality Control Specialist",
                bio: "Thomas ensures that every project meets our high standards for craftsmanship and durability.",
                image: "/placeholder.svg?height=400&width=400",
              },
            ].map((member, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="h-64 relative">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.position}</p>
                  <p className="text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/placeholder.svg?height=800&width=800"
                alt="Stucco work"
                width={800}
                height={800}
                className="rounded-lg object-cover w-full h-auto"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">Why Choose Stucco Pro</h2>
              <div className="space-y-4">
                {[
                  "Over 20 years of specialized experience in stucco installation and repair",
                  "Licensed, bonded, and insured for your protection",
                  "Premium materials and proven techniques for lasting results",
                  "Skilled craftsmen with extensive training and expertise",
                  "Comprehensive warranties on all our work",
                  "Detailed, transparent estimates with no hidden costs",
                  "Exceptional customer service from start to finish",
                  "Portfolio of successful projects throughout the region",
                  "Commitment to cleanliness and minimal disruption",
                  "Ongoing support and maintenance services",
                ].map((point, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Button size="lg" asChild>
                  <Link href="/contact">Get in Touch</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Our Certifications</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We maintain the highest industry standards through professional certifications and affiliations.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((cert, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="bg-muted p-6 rounded-lg mb-4 w-full flex items-center justify-center">
                  <Image
                    src="/placeholder.svg?height=200&width=200"
                    alt={`Certification ${cert}`}
                    width={120}
                    height={120}
                    className="object-contain"
                  />
                </div>
                <h3 className="text-center font-medium">Certification {cert}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">Ready to Work With Us?</h2>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Contact us today to discuss your stucco project and experience the Stucco Pro difference.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">Contact Us</Link>
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
      </section>
    </div>
  )
}

