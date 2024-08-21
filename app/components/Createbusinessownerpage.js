// import { SignIn } from '@clerk/nextjs'
import Image from 'next/image'
// import uberImage from '../public/uber2.PNG' // Adjust the path to your image

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-white text-black">
      {/* Left section with image */}
      <div className="flex-1 bg-gray-100 p-8">
        <Image
          src='/uber3.png'
          alt="Drive when you want"
          layout="responsive"
          width={70} height={70}
        //   objectFit="cover"
        //   className="w-full h-full rounded-lg"
        />
      </div>
      {/* Right section with text */}
      <div className="flex-1 flex flex-col justify-center p-8 md:pl-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
        Helping you work when you want, earn what you need.
        </h1>
        <p className="text-gray-500 mb-6">
        Make money on your schedule with flexible professions—whether through deliveries. Use your own resources.
        </p>

        {/* Buttons section */}
        <div className="flex items-center space-x-4 ">
          <button className="bg-black text-white px-6 py-4 rounded-lg font-semibold hover:bg-gray-800 transition">
            Get started
          </button>
          <p className="text-gray-500">
            Already have an account? <a href="#" className="underline">Sign in</a>
          </p>
          {/* <SignIn /> */}
        </div>
      </div>
    </div>
  )
}
