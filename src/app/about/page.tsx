import Link from "next/link";

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
                <h1 className="text-3xl md:text-5xl font-bold mb-4">About <strong className="text-black">ROAR</strong></h1>
                <p className="text-gray-300 mb-6">
                  Fitness Facility is a leading provider of high-quality fitness products and equipment. We are
                  dedicated to helping our customers achieve their fitness goals and live a healthy lifestyle.
                </p>
                <p className="text-gray-300 mb-6">
                  Our team of experts is passionate about fitness and wellness, and we are committed to providing our
                  customers with the best possible products and services. We believe that everyone should have access to
                  the tools and resources they need to live a healthy and active life.
                </p>
                <p className="text-gray-300 mb-6">
                  At Fitness Facility, we are constantly innovating and expanding our product offerings to meet the
                  changing needs of our customers. We are proud to be a trusted partner in our customers' fitness
                  journeys, and we look forward to continuing to serve them for years to come.
                </p>
              </div>
              <div>
                <img
                  alt="Fitness Facility"
                  className="rounded-lg object-cover"
                  height="500"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "500/500",
                    objectFit: "cover",
                  }}
                  width="500"
                />
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
                <p className="text-gray-600 mb-6">
                  Our mission is to empower our customers to achieve their fitness goals by providing them with the best
                  products and resources. We believe that everyone should have access to the tools they need to live a
                  healthy and active life.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-4">Promoting Wellness</h3>
                <p className="text-gray-600 mb-6">
                  At Fitness Facility, we are committed to promoting overall wellness and healthy living. We believe
                  that fitness is not just about physical health, but also about mental and emotional well-being. That's
                  why we strive to provide our customers with the resources and support they need to achieve a balanced
                  and fulfilling lifestyle.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-gray-500 py-12 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">Our Team</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  alt="John Doe, Founder and CEO"
                  className="w-full h-48 object-cover"
                  height="300"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "300/300",
                    objectFit: "cover",
                  }}
                  width="300"
                />
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
                <img
                  alt="Jane Smith, Head of Product Development"
                  className="w-full h-48 object-cover"
                  height="300"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "300/300",
                    objectFit: "cover",
                  }}
                  width="300"
                />
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
                <img
                  alt="Michael Johnson, Director of Operations"
                  className="w-full h-48 object-cover"
                  height="300"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "300/300",
                    objectFit: "cover",
                  }}
                  width="300"
                />
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
                <img
                  alt="Emily Davis, Customer Service Manager"
                  className="w-full h-48 object-cover"
                  height="300"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "300/300",
                    objectFit: "cover",
                  }}
                  width="300"
                />
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
