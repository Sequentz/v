import React from "react"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea" // Make sure this is the correct path for Textarea
import { Button } from "@/components/ui/button"
import { MapPinIcon, PhoneIcon, MailIcon } from "@/components/contact"

const page =  () => {

  return (
    <div className="font-sans">
      <main className="flex-1">
        <section className="bg-gradient-to-r from-black via-gray-500 to-black">
          <div className="container mx-auto px-4 md:px-6" >
            <h1 className="text-3xl md:text-5xl font-bold mb-8 pt-8 font-sans tracking-wide">Contacteer ons!</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <form className="space-y-4  justify-content-between h-40" >
                  <div >
                    <Label htmlFor="name" className="bold text-lg">Naam</Label>
                    <Input id="name" placeholder="Enter your name" type="text" className="bg-white " />
                  </div>
                  <div >
                    <Label htmlFor="email" className="bold text-lg">Email</Label>
                    <Input id="email" placeholder="Enter your email" type="email" />
                  </div>
                  <div >
                    <Label htmlFor="message" className="bold text-lg">Message</Label>
                    <Textarea id="message" placeholder="Enter your message" rows={5} />
                  </div>
                  <Button type="submit">Verzend</Button>
                </form>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4">Adres</h2>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <MapPinIcon className="h-6 w-6" />
                    <span>Nijverheidlaan 8T, 3200 Aarschot</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <PhoneIcon className="h-6 w-6" />
                    <a href="tel:0412345678" >0412345678</a>
                  </div>
                  <div className="flex items-center gap-2">
                    <MailIcon className="h-6 w-6" />
                    <a href="mailto:info@roarcoaching.be">info@<strong className="text-black bold">roar</strong>coaching.be</a>
                  </div>
                  <iframe  className="rounded-lg"src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5022.89895056382!2d4.820101076442858!3d50.98936574841536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c15caf62c3b517%3A0x39631870fb7f9c0b!2sNijverheidslaan%208%2C%203200%20Aarschot!5e0!3m2!1snl!2sbe!4v1718189268870!5m2!1snl!2sbe" width="600" height="450" style={{border:0}} loading="lazy" ></iframe>
                </div>
                <div className="mt-8">
                  
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
