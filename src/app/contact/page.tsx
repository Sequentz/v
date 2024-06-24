import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea"; // Make sure this is the correct path for Textarea
import { Button } from "@/components/ui/button";
import { MapPinIcon, PhoneIcon, MailIcon } from "lucide-react";
export const metadata = {
  title: "Contact",
  description: "Contact",
  openGraph: {
    title: "Contact",
    description: "Contact",
  },
}
const Page = () => {
  return (
    <div className="">
      <main className="flex-1 font-medium">
        <section className="bg-black py-12 md:py-20 font-medium bg-gradient-to-r from-black via-gray-500 to-black">
          <div className="container mx-auto px-4 md:px-6">
            <h1 className="text-3xl md:text-5xl font-medium mb-8 tracking-wider">Contact us!</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <form className="space-y-4 h-full mt-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="bold text-lg">Name</Label>
                    <Input id="name" placeholder="Enter your name" type="text" />
                  </div>
                  <div className="space-y-2 mb-12">
                    <Label htmlFor="email" className="bold text-lg">Email</Label>
                    <Input id="email" placeholder="Enter your email" type="email" />
                  </div>
                  <div className="space-y-2 mb-12 mt-12">
                    <Label htmlFor="message" className="bold text-lg">Message</Label>
                    <Textarea id="message" placeholder="Enter your message" rows={5} />
                  </div>
                  <Button type="submit" variant={"send"}>Send</Button>
                </form>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Address</h2>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <MapPinIcon className="h-6 w-6" />
                    <span>Nijverheidlaan 8T, 3200 Aarschot</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <PhoneIcon className="h-6 w-6" />
                    <a href="tel:0412345678">0412345678</a>
                  </div>
                  <div className="flex items-center gap-2">
                    <MailIcon className="h-6 w-6" />
                    <a className="tracking-widest" href="mailto:info@roarcoaching.be">info@<strong className="text-black bold">roar</strong>coaching.be</a>
                  </div>
                </div>
                <div className="mt-4">
                  <iframe className="rounded-lg w-full h-48 md:h-44 lg:h-52" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2511.4494752819096!2d4.820101076442849!3d50.98936574841537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c15caf62c15555%3A0xd1b54ea6f1fe03eb!2sNijverheidslaan%208t%2C%203200%20Aarschot!5e0!3m2!1snl!2sbe!4v1718447510196!5m2!1snl!2sbe" loading="lazy"></iframe>
                </div>
                <div className="flex gap-2 mt-4 justify-center md:justify-start">
                  <img className="h-10 w-10" src="/facebook.png" alt="facebook logo" />
                  <img className="h-10 w-10" src="/insta.png" alt="instagram logo" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Page;
