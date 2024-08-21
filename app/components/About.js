// pages/index.js
// pages/index.js
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-8 md:flex-row md:justify-between md:px-16">
      <div className="text-center md:text-left md:max-w-md">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4 text-gray-900">
          About US
        </h1>
        {/* <p className="text-lg md:text-xl font-light text-gray-600 mb-6">
        Our organization is a beacon of hope for individuals from all walks of life. We believe that no matter your profession, you have the potential to contribute to society in meaningful ways. Whether you are an artist, a technician, a Plumber, or a Mechanic,E.T.C..... your skills and talents are invaluable. We are here to help you harness those skills to create not only a sustainable income but also a positive ripple effect across the globe.
        </p> */}
        <p className="text-lg md:text-xl font-light text-gray-600 mb-6">
        Our vision extends far beyond individual success. We see a world where professionals are not just earning money, but also making a difference. By empowering professionals to thrive, we are contributing to the global economy, fostering innovation, and improving the quality of life for people everywhere. We believe that when professionals succeed, communities prosper, and ultimately, the world becomes a better place.
        </p>
        <div className="flex items-center space-x-4">
          <button className="bg-black text-white px-6 py-4 rounded-lg font-semibold hover:bg-gray-800 transition">
            Get started
          </button>
          <p className="text-gray-500 ">
            Already have an account? <a href="#" className="underlin">Sign in</a>
          </p>
          {/* <SignIn /> */}
        </div>
      </div>

      <div className="mt-8 md:mt-0 md:ml-8 w-full max-w-md">
        <Image 
          src="/uber3.PNG"
          alt="Uber for Business"
          width={600}
          height={300}
          className="rounded"
        />
      </div>
    </div>
  );
}
