import React from "react"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea" // Make sure this is the correct path for Textarea
import { Button } from "@/components/ui/button"
import { MapPinIcon, PhoneIcon, MailIcon } from "@/components/contact"

const page = () => {
  return (
    <div>
      <main className="flex-1">
        <section className="bg-gray-100 py-12 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <h1 className="text-3xl md:text-5xl font-bold mb-8">Contact Us</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
                <form className="space-y-4">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Enter your name" type="text" />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" placeholder="Enter your email" type="email" />
                  </div>
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" placeholder="Enter your message" rows={5} />
                  </div>
                  <Button type="submit">Submit</Button>
                </form>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4">Our Location</h2>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <MapPinIcon className="h-6 w-6" />
                    <span>123 Main St, Anytown USA</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <PhoneIcon className="h-6 w-6" />
                    <span>555-555-5555</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MailIcon className="h-6 w-6" />
                    <span>info@fitnessfacility.com</span>
                  </div>
                </div>
                <div className="mt-8">
                  <img
                    alt="Map"
                    className="w-full h-auto rounded-lg"
                    height="400"
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "600/400",
                      objectFit: "cover",
                    }}
                    width="600"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default page
