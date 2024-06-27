import Link from "next/link";
import { Button } from "@/components/ui/button";

const Page = () => {
  return (
    <div>
      <header>
        {/* Add your header content here */}
      </header>
      <main className="flex-1">
        <section className="bg-gradient-to-r from-slate-300 to-slate-500 py-16 md:py-24">
          <div className="container mx-auto px-6 md:px-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h1 className="text-3xl md:text-5xl font-bold mb-6 font-medium md:mb-12 mb-8">
                  About <strong className="text-black">ROAR .</strong>
                </h1>
                <p className="text-gray-700 mb-8 text-xl">
                  Al sinds mijn 13de ben ik gepassioneerd door fitness en een gezonde levensstijl. Hierdoor ben ik mezelf door de jaren heen verder gaan verdiepen in deze aspecten.
                </p>
                <p className="text-gray-700 mb-8 text-xl">
                  Ikzelf, Stijn Dankers vind dat fitness en gezonde voeding niet alleen een impact heeft op mijn lichaam, maar ook mentaal. Het is altijd al mijn grote droom geweest om mijn passie en kennis bij te brengen aan anderen zodat ze de beste versie van zichzelf kunnen bereiken zowel fysiek als mentaal.
                </p>
              </div>
              <div className="ml-0 md:ml-20">
                <img src="/artikel.png" alt="artikel" className="h-auto w-[400px] md:h-[450px] rounded-xl" />
                <a href="https://www.hln.be/aarschot/net-open-stijn-dankers-24-opent-eigen-oldskool-gym-in-aarschot-ik-wil-mensen-helpen-de-beste-versie-van-zichzelf-te-worden~ae6789b8/" target="_blank">
                  <Button variant="shop" className="w-full md:w-auto h-[50px] lg:w-[400px] mt-4 flex items-center justify-center">
                    Read more...
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>
        
        <section className="bg-gradient-to-r from-black via-gray-500 to-black py-16 md:py-24">
          <div className="container mx-auto px-6 md:px-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-10">Evolution</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img src="/roar.png" alt="Roar" />
                <div className="p-6">
                  {/* Add additional content if needed */}
                </div>
              </div>
              {/* Add more items here if needed */}
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

const teamMembers = [
  {
    name: "John Doe",
    title: "Founder and CEO",
    description: "John is the driving force behind Fitness Facility. With over 15 years of experience in the fitness industry, he is passionate about helping our customers achieve their goals."
  },
  {
    name: "Jane Smith",
    title: "Head of Product Development",
    description: "Jane is our resident fitness expert, with a deep understanding of the latest trends and technologies in the industry. She is responsible for ensuring that our products are top-of-the-line."
  },
  {
    name: "Michael Johnson",
    title: "Director of Operations",
    description: "Michael oversees the day-to-day operations of Fitness Facility, ensuring that our customers receive the best possible service and support."
  },
  {
    name: "Emily Davis",
    title: "Customer Service Manager",
    description: "Emily leads our customer service team, ensuring that our customers receive the support and attention they deserve. She is passionate about building strong relationships with our customers."
  }
];
// d
export default Page;
