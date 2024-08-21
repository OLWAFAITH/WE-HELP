import Image from 'next/image'
// import weHelpImage from '../public/uber.PNG' // Adjust the path to your image

export default function Welcome() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-black text-white">
      {/* Left section with text */}
      <div className="flex-1 flex flex-col justify-center p-8 md:pl-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Get Help Anywhere,</h1>
        <p className="text-4xl md:text-6xl font-bold mb-6">WE~HELP</p>
        <p className="text-gray-400 mb-6">Request help, connect, and move forward.
</p>

        {/* Input section */}
        <div className="space-y-4 ">
          <input
            type="text"
            placeholder="Search For Mechanic,Plumber E.T.C.............."
            className="w-full p-4 rounded-lg text-gray-800"
          />
          {/* <input
            type="text"
            placeholder="Enter destination"
            className="w-full p-4 rounded-lg text-gray-800"
          /> */}
          <button className="bg-white text-black px-6 py-4 rounded-lg font-semibold hover:bg-gray-200 transition">
            Get Help
          </button>
        </div>
      </div>

      {/* Right section with image */}
      <div className="hidden md:flex md:flex-1 bg-black">
        {/* <Image
          src='/SMILE.png'
          width={10} 
          height={10}
          alt="WE~HELP"
          layout="responsive"
          objectFit="cover"
          className="w-full h-full"
        /> */}
      </div>
    </div>
  )
}
