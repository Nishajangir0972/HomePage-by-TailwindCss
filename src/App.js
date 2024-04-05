import React, { useState } from 'react'
import { ReactTyped } from "react-typed";

function App() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <div className='shadow-md sticky top-0 z-[20] mx-auto w-full '>
        <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
          <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800'>

            <h1 className='font-[cursive] relative text-transparent bg-clip-text bg-gradient-to-r from-blue-500  to-pink-500'>FIT FUSION</h1>
          </div>
          <div className='text-3xl cursor-pointer absolute right-8 top-6 md:hidden' onClick={() => setOpen(!open)}>
            <ion-icon name={open ? 'close' : 'menu'}></ion-icon>

          </div>
          <ul className={`md:flex md:items-center cursor-pointer  md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 opacity-100' : 'top-[-490px] md:opacity-100 opacity-0'}`}>
            <li className='md:ml-8 text-xl text-gray-800 hover:text-gray-400 duration-500 md:my-0 my-7'><a href="/" />Home</li>
            <li className='md:ml-8 text-xl text-gray-800 hover:text-gray-400 duration-500 md:my-0 my-7'><a href="/" />Service</li>
            <li className='md:ml-8 text-xl text-gray-800 hover:text-gray-400 duration-500 md:my-0 my-7'><a href="/" />Blog</li>
            <li className='md:ml-8 text-xl text-gray-800 hover:text-gray-400 duration-500 md:my-0 my-7'><a href="/" />Contact</li>
            <button className='bg-indigo-600 text-white font-[Poppins] py-2 px-6 rounded md:ml-8 hover:bg-indigo-500 duration-500 md:my-0 my-7'>
              Get Started
            </button>
          </ul>
        </div>


      </div>
      <div className='bg-blue-500 h-[400px] md:h-[500px]'>
        <div className='text-center text-white py-[120px]'>
          <h1 className='font-serif text-2xl md:text-5xl'>Fit Fusion</h1>
          <h2 className='font-bold text-3xl md:text-4xl my-2'>Grow with us</h2>
          <p className='text-2xl md:text-3xl my-4 '>
            <ReactTyped
              className='pl-3'
              strings={["Your health, our priority.", "Caring for you, from head to toe.", "A commitment to excellence in healthcare.", "Building healthier communities together."]}
              typeSpeed={120}
              backSpeed={50}
              loop={true}
            /></p>
        </div>
      </div>
      <div className='max-w-[1240px] mx-auto my-2 md:my-10 h-[200px] border-black grid grid-cols-3  cursor-pointer'>
        <div className='border h-[170px]  md:h-[200px] mx-4 shadow-md rounded md:mx-5 mx-1 text-center p-4 '>
          <img src={'caloriestracker.png'} alt='' className='h-[80px] md:h-[100px] mx-auto transition-transform transform hover:scale-110' />
          <h1 className='font-bold py-2 md:text-[20px] text-[13px]'>Calories Tracker</h1>
        </div>
        <div className='border h-[170px]  md:h-[200px] mx-4 shadow-md rounded md:mx-5 mx-1 text-center p-4'>
          <img src={'watertracker.png'} alt='' className='h-[80px] md:h-[100px] mx-auto transition-transform transform hover:scale-110' />
          <h1 className='font-bold py-2 md:text-[20px] text-[13px]'>Water Tracker</h1>
        </div>
        <div className='border h-[170px]  md:h-[200px] mx-4 shadow-md rounded md:mx-5 mx-1 text-center p-4'>
          <img src={'medicienetracker.png'} alt='' className='h-[80px] md:h-[100px] mx-auto transition-transform transform hover:scale-110' />
          <h1 className='font-bold py-2 md:text-[20px] text-[13px]'>Medicine Tracker</h1>
        </div>


      </div>

      <div className='max-w-[1240px] mx-auto my-2 md:my-10 h-[200px]  ms:h-[100px] border-black grid grid-cols-3  cursor-pointer'>
        <div className='border h-[170px]  md:h-[200px] mx-4 shadow-md rounded md:mx-5 mx-1 text-center p-4'>
          <img src={'weighttracker.png'} alt='' className='h-[80px] md:h-[100px] mx-auto transition-transform transform hover:scale-110' />
          <h1 className='font-bold py-2 md:text-[20px] text-[13px]'>Weight Tracker</h1>
        </div>
        <div className='border h-[170px]  md:h-[200px] mx-4 shadow-md rounded md:mx-5 mx-1 text-center p-4'>
          <img src={'exercise.png'} alt="" className='h-[80px] md:h-[100px] mx-auto transition-transform transform hover:scale-110' />
          <h1 className='font-bold py-2 md:text-[20px] text-[13px]'>Exercise</h1>
        </div>
        <div className='border h-[170px]  md:h-[200px] mx-4 shadow-md rounded md:mx-5 mx-1 text-center p-4'>
          <img src={'dietplan.png'} alt='' className='h-[80px] md:h-[100px] mx-auto transition-transform transform hover:scale-110' />
          <h1 className='font-bold py-2 md:text-[20px] text-[13px] transition-transform transform hover:scale-110'>Diet Plan</h1>
        </div>


      </div>

      <div className='bg-blue-500 p-3'>
        <div className='max-w-[1200px] mx-auto md:flex justify-between py-[50px] px-[40px]'>
          <div className='m-2'>
            <h1 className='text-[20px] md:text-[30px] font-bold text-white '>Kickstart Your Path to Wellness</h1>
            <span className='text-white'>Sign Up to our health website and stay up to date</span>
          </div>
          <div className='m-2'>
            <input type='text' className='p-3 mb-2 mr-2 text-slate-600 rounded' placeholder='Email'/>
            <button className='bg-black text-white p-3 rounded'>Get Started</button>
            <br/>
            <p className='text-white'>
              We care about your health . Read our <br/> Privacy Policy.
            </p>
          </div>

        </div>
      </div>
<div className='md:py-[100px] px-3'>
  <div className='max-w-[1050px] mx-auto md:grid grid-cols-3 gap-6'>
    <div className='shadow-xl h-[400px] hover:scale-105 duration-500 my-4 rounded-xl text-center p-3'>
      <img src={"heartrate.png"} alt='' className='h-[80px] mx-auto my-2' />
      <h1 className='font-bold text-xl my-2 '>Heart Rates</h1>
      <h1 className='font-[math]'>Range 60 to 100 (BPM)</h1>
      <p className='p-2 font-[math]'>Maintain a healthy weight through <br/> diet and exercise</p>
      <p className='p-2 font-[math]'>Aim for 7-9 hours of quality sleep <br/> each night</p>
      <p className='p-2 font-[math]'>Manage stress through relaxation techniques such as deep breathing or meditation</p>
    </div>
    <div className='shadow-xl h-[400px] hover:scale-105 duration-500 my-4 bg-gray-100 rounded-xl text-center p-3'>
    <img src={"kcal.png"} alt='' className='h-[100px] mx-auto my-2' />
    <h1 className='font-bold text-xl my-2'>Calories</h1>
      <h1 className='font-[math]'>Daily burn 1200 to 2400 (BMR)</h1>
      <p className='p-2 font-[math]'>Adding Fruits and vegetables in daily routine.</p>
      <p className='p-2 font-[math]'> Include foods rich in healthy fats such as avocados, nuts, seeds, olive oil.</p>
      <p className='p-2 font-[math]'>Doing Exercise like Cardiovascular , Flexibility and Balance and Yoga</p>
    </div>
    <div className='shadow-xl h-[400px] hover:scale-105 duration-500 my-4 rounded-xl text-center p-3'>
    <img src={"walking.png"} alt='' className='h-[100px] mx-auto my-2' />
    <h1 className='font-bold text-xl my-2'>Walking</h1>
      <h1 className='font-[math]'>Daily Steps 10,000 </h1>
      <p className='p-2 font-[math]'> Regular walking can help strengthen the heart, lower blood pressure.</p>
      <p className='p-2 font-[math]'> Walking burns calories, making it an effective way to support weight loss.</p>
      <p className='p-2 font-[math]'>Lorem, ipsum dolor sit amet consectetur</p>

    </div>
  </div>
</div>
<div className='bg-blue-500  mx-auto py-16 px-[2rem] grid lg:grid-cols-3 gap-8 text-white'>
      <div className='cursor-pointer hover:'>
        <h1 className='w-full text-3xl font-bold hover:scale-105 duration-500'>Fit Fusion.</h1>
        <p className='py-4 hover:scale-105 duration-500'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id odit ullam iste repellat consequatur libero reiciendis, blanditiis accusantium.</p>
        <div className='flex justify-between md:w-[75%] my-6'>
          {/* <FaFacebookSquare size={30} />
          <FaInstagram size={30} />
          <FaTwitterSquare size={30} />
          <FaGithubSquare size={30} /> */}
        </div>
      </div>
      <div className='lg:col-span-2 md:flex justify-between mt-6'>
        <div className='cursor-pointer '>
          <h6 className='font-medium my-5 md:my-0 underline'>Solutions</h6>
          <ul>
            <li className='py-2 text-sm hover:scale-105 duration-500'>Analytics</li>
            <li className='py-2 text-sm hover:scale-105 duration-500'>Marketing</li>
            <li className='py-2 text-sm hover:scale-105 duration-500'>Commerce</li>
            <li className='py-2 text-sm hover:scale-105 duration-500'>Insights</li>
          </ul>
        </div>
        <div className='cursor-pointer'>
          <h6 className='font-medium my-5 md:my-0 underline'>Support</h6>
          <ul>
            <li className='py-2 text-sm hover:scale-105 duration-500'>Pricing</li>
            <li className='py-2 text-sm hover:scale-105 duration-500'>Documentation</li>
            <li className='py-2 text-sm hover:scale-105 duration-500'>Guides</li>
            <li className='py-2 text-sm hover:scale-105 duration-500'>API Status</li>
          </ul>
        </div>
        <div className='cursor-pointer'>
          <h6 className='font-medium my-5 md:my-0 underline'>Company</h6>
          <ul>
            <li className='py-2 text-sm hover:scale-105 duration-500'>About</li>
            <li className='py-2 text-sm hover:scale-105 duration-500'>Blog</li>
            <li className='py-2 text-sm hover:scale-105 duration-500'>Jobs</li>
            <li className='py-2 text-sm hover:scale-105 duration-500'>Press</li>
            <li className='py-2 text-sm hover:scale-105 duration-500'>Careers</li>
          </ul>
        </div>
        <div className='cursor-pointer'>
          <h6 className='font-medium my-5 md:my-0 underline'>Legal</h6>
          <ul>
            <li className='py-2 text-sm hover:scale-105 duration-500'>Claim</li>
            <li className='py-2 text-sm hover:scale-105 duration-500'>Policy</li>
            <li className='py-2 text-sm hover:scale-105 duration-500'>Terms</li>
          </ul>
        </div>
      </div>
    </div>
    </>


  )
}

export default App
