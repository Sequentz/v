import Link from "next/link";
import { Button } from "@/components/ui/button";

const Page = () => {
  return (
    <div>
      <header>
        {/* Add your header content here */}
      </header>
      <main className="flex-1">
        <section className="bg-gradient-to-r from-black via-gray-500 to-black py-12 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h1 className="text-3xl md:text-5xl font-bold mb-4 font-medium mb-10 mb-20">
                  About <strong className="text-black">ROAR .</strong>
                </h1>
                <p className="text-gray-300 mb-6">
                  Al sinds mijn 13de ben ik gepassioneerd door fitness en een gezonde levensstijl. Hierdoor ben ik mezelf door de jaren heen verder gaan verdiepen in deze aspecten.
                </p>
                <p className="text-gray-300 mb-6">
                  Ikzelf, Stijn Dankers vind dat fitness en gezonde voeding niet alleen een impact heeft op mijn lichaam, maar ook mentaal. Het is altijd al mijn grote droom geweest om mijn passie en kennis bij te brengen aan anderen zodat ze de beste versie van zichzelf kunnen bereiken zowel fysiek als mentaal.
                </p>
              </div>
              <div>
             <img src="/artikel.png" alt="artikel" className="h-[450px] ml-20 rounded-xl" />
              </div>
            </div>
          </div>
        </section>
        
        <section className="bg-gradient-to-r from-black via-gray-500 to-black py-12 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">Our Team</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2">John Doe</h3>
                  <p className="text-gray-600 mb-4">Founder and CEO</p>
                  <p className="text-gray-600 mb-4">
                    John is the driving force behind Fitness Facility. With over 15 years of experience in the fitness
                    industry, he is passionate about helping our customers achieve their goals.
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2">Jane Smith</h3>
                  <p className="text-gray-600 mb-4">Head of Product Development</p>
                  <p className="text-gray-600 mb-4">
                    Jane is our resident fitness expert, with a deep understanding of the latest trends and technologies
                    in the industry. She is responsible for ensuring that our products are top-of-the-line.
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2">Michael Johnson</h3>
                  <p className="text-gray-600 mb-4">Director of Operations</p>
                  <p className="text-gray-600 mb-4">
                    Michael oversees the day-to-day operations of Fitness Facility, ensuring that our customers receive
                    the best possible service and support.
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2">Emily Davis</h3>
                  <p className="text-gray-600 mb-4">Customer Service Manager</p>
                  <p className="text-gray-600 mb-4">
                    Emily leads our customer service team, ensuring that our customers receive the support and attention
                    they deserve. She is passionate about building strong relationships with our customers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer>
        {/* Add your footer content here */}
      </footer>
    </div>
  );
};

export default Page;
