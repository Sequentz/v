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
                <h1 className="text-3xl md:text-5xl font-bold mb-10">
                  About<strong className="text-black font-sans ml-4 ">ROAR .</strong>
                </h1>
                <p className="text-gray-300 mb-6 text-lg mt-6">
                  Al sinds mijn 13de ben ik gepassioneerd door fitness en een gezonde levensstijl. Hierdoor ben ik mezelf door de jaren heen verder gaan verdiepen in deze aspecten.
                </p>
                <p className="text-gray-300 mb-6 text-lg mt-6">
                  Ikzelf vind dat fitness en gezonde voeding niet alleen een impact heeft op mijn lichaam maar zeker en vast ook op mentaal vlak.
                </p>
                <p className="text-gray-300 mb-6 text-lg mt-6">
                  Het is altijd al mijn grote droom geweest om mijn passie en kennis bij te brengen aan anderen zodat ze de beste versie van zichzelf bereiken zowel fysiek als mentaal.
                </p>
              </div>
              <div>
                <div id="default-carousel" className="relative w-full" data-carousel="slide">
                  {/* Carousel wrapper */}
                  <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                    <div className="absolute inset-0 transition-opacity duration-700 ease-in-out opacity-0" data-carousel-item>
                      <img
                        src="/slide.png"
                        className="block w-full h-full object-cover"
                        alt="Slide 1"
                      />
                    </div>
                    <div className="absolute inset-0 transition-opacity duration-700 ease-in-out opacity-0" data-carousel-item>
                      <img
                        src="/slide.png"
                        className="block w-full h-full object-cover"
                        alt="Slide 2"
                      />
                    </div>
                    <div className="absolute inset-0 transition-opacity duration-700 ease-in-out opacity-0" data-carousel-item>
                      <img
                        src="/slide.png"
                        className="block w-full h-full object-cover"
                        alt="Slide 3"
                      />
                    </div>
                    <div className="absolute inset-0 transition-opacity duration-700 ease-in-out opacity-0" data-carousel-item>
                      <img
                        src="/shake.png"
                        className="block w-full h-full object-cover"
                        alt="Slide 4"
                      />
                    </div>
                    <div className="absolute inset-0 transition-opacity duration-700 ease-in-out opacity-0" data-carousel-item>
                      <img
                        src="/slide.png"
                        className="block w-full h-full object-cover"
                        alt="Slide 5"
                      />
                    </div>
                  </div>
                  {/* Slider indicators */}
                  <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                    <button
                      type="button"
                      className="w-3 h-3 rounded-full"
                      aria-current="true"
                      aria-label="Slide 1"
                      data-carousel-slide-to="0"
                    ></button>
                    <button
                      type="button"
                      className="w-3 h-3 rounded-full"
                      aria-current="false"
                      aria-label="Slide 2"
                      data-carousel-slide-to="1"
                    ></button>
                    <button
                      type="button"
                      className="w-3 h-3 rounded-full"
                      aria-current="false"
                      aria-label="Slide 3"
                      data-carousel-slide-to="2"
                    ></button>
                    <button
                      type="button"
                      className="w-3 h-3 rounded-full"
                      aria-current="false"
                      aria-label="Slide 4"
                      data-carousel-slide-to="3"
                    ></button>
                    <button
                      type="button"
                      className="w-3 h-3 rounded-full"
                      aria-current="false"
                      aria-label="Slide 5"
                      data-carousel-slide-to="4"
                    ></button>
                  </div>
                  {/* Slider controls */}
                  <button
                    type="button"
                    className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                    data-carousel-prev
                  >
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                      <svg
                        className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 6 10"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 1 1 5l4 4"
                        />
                      </svg>
                      <span className="sr-only">Previous</span>
                    </span>
                  </button>
                  <button
                    type="button"
                    className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                    data-carousel-next
                  >
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                      <svg
                        className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 6 10"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m1 9 4-4-4-4"
                        />
                      </svg>
                      <span className="sr-only">Next</span>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">Our Mission</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-bold mb-4">Empowering Fitness</h3>
                <p className="text-gray-300 mb-6">
                  Our mission is to empower our customers to achieve their fitness goals by providing them with the best
                  products and resources. We believe that everyone should have access to the tools they need to live a
                  healthy and active life.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-4">Promoting Wellness</h3>
                <p className="text-gray-300 mb-6">
                  At Fitness Facility, we are committed to promoting overall wellness and healthy living. We believe
                  that fitness is not just about physical health, but also about mental and emotional well-being. That's
                  why we strive to provide our customers with the resources and support they need to achieve a balanced
                  and fulfilling lifestyle.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-gradient-to-r from-black via-gray-500 to-black  py-12 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">Our Team</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                {/* <img
                  alt="John Doe, Founder and CEO"
                  className="w-full h-48 object-cover"
                  height="300"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "300/300",
                    objectFit: "cover",
                  }}
                  width="300"
                /> */}
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
                {/* <img
                  alt="Jane Smith, Head of Product Development"
                  className="w-full h-48 object-cover"
                  height="300"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "300/300",
                    objectFit: "cover",
                  }}
                  width="300"
                /> */}
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
                {/* <img
                  alt="Michael Johnson, Director of Operations"
                  className="w-full h-48 object-cover"
                  height="300"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "300/300",
                    objectFit: "cover",
                  }}
                  width="300"
                /> */}
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
                {/* <img
                  alt="Emily Davis, Customer Service Manager"
                  className="w-full h-48 object-cover"
                  height="300"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "300/300",
                    objectFit: "cover",
                  }}
                  width="300"
                /> */}
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
