export const metadata = {
  title: "Hours",
  description: "Opening Hours",
  keywords: "hours",
  openGraph: {
    title: "Hours",
    description: "Opening Hours",
  },
}

const page = () => {
  return (
    <div className="container mx-auto px-4 py-8 bg-gradient-to-r from-black via-gray-500 to-black h-screen">
      <h1 className="text-3xl md:text-5xl font-bold mb-4 font-medium text-white text-center">Opening Hours</h1>
      <ul className="font-medium text-center text-gray-300">
        <li className="mb-2">Monday: 10AM - 11PM</li>
        <li className="mb-2">Tuesday: 10AM - 11PM</li>
        <li className="mb-2">Wednesday: 10AM - 11PM</li>
        <li className="mb-2">Thursday: 10AM - 11PM</li>
        <li className="mb-2">Friday: 10AM - 11PM</li>
        <li className="mb-2">Saturday: 10AM - 6PM</li>
        <li className="mb-2">Sunday: 10AM - 6PM</li>
      </ul>
    </div>
  )
}

export default page
