import React from 'react'
import profilepic from '../assets/profilepic5.png'
import {AiFillLinkedin, AiFillGithub, AiFillInstagram} from 'react-icons/ai'
import {TypeAnimation} from 'react-type-animation'

const Hero = () => {
  return (
    <div>
        <div className='my-7 sm:my-0 max-w-[1200px] h-[80vh] mx-auto flex flex-col-reverse sm:flex-row
                         jusify-center aligh-center'id='home'>

                            <div className=' flex-col my-auto mx-auto md:mx-0'>
                                <p className='md:text-5xl sm:text-4xl text-xl font-bold text-gray-200'>Hi! I am Ariana</p>
                                <h1 className='md:text-5xl sm:text-6xl text-4xl font-bold md:py-6'>
                                    <TypeAnimation
                                    sequence={[
                                        "Frontend Dev",
                                        1000,
                                        "Webdesigner",
                                        1000,
                                        "Consultant",
                                        1000,
                                    ]}
                                    wrapper="span"
                                    speed={50}
                                    repeat={Infinity}/>
                                </h1>
                                <div className='flex justify-center items-center'>
                                    <p className='md:text-5xl sm:text-4xl text-xl font-bold text-gray-500'>with a 5+ years experience</p>
                                </div>
                                <div className='text-5xl flex justify-start gap-16 my-7 text-purple-600'>
                                    <AiFillLinkedin/>
                                    <AiFillGithub/>
                                    <AiFillInstagram/>
                                </div>
                            <div className="relative inline-flex group my-3">
                                <div className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r 
                                from-[#44BCFF] via-[#FF675E] to-[#FF676E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 
                                group-hover:duration-200">
                                </div>
                            <a href="/" title='Download CV' role="button" 
                            className="w-[190px] h-[60px] relative inline-flex items-center justify-center px-8 py-4 text-lg 
                            font-bold text-white transition-all duration-200 bg-primary-color rounded-xl">Download CV
                            </a>
                         </div>
                          </div>
                         <div className='my-auto'>
                            <img className='w-[300px] sm:w-[550px] mx-auto h-auto' src={profilepic} alt="profile pic" />
                         </div>
      
    </div></div>
  )
}

export default Hero
