import { useSwiperSlide } from 'swiper/react'
import clsx from 'clsx'
import mySelfie from '~/assets/my_picture.jpg'
import 'animate.css'

function About() {
  const swiperSlideActive = useSwiperSlide().isActive
  const generateClassAnimate = (className, animateIn, animateOut) => {
    return clsx(className, swiperSlideActive ? animateIn : animateOut)
  }
  return (
    <div className="w-full h-full px-[4%] flex items-center justify-center">
      <div className="flex w-full flex-col-reverse lg:flex-row">
        <div className="basis-3/5 text-lg">
          <div className={generateClassAnimate(
            'font-semibold uppercase text-ct-sub-active-color mb-2 animate__animated',
            'animate__bounceInLeft',
            'animate__bounceOutUp'
          )}>
            Who I am?
          </div>
          <div className={generateClassAnimate(
            'text-ct-text-color leading-8 animate__animated',
            'animate__bounceIn animation-delay-600',
            'animate__bounceOutUp'
          )}>
            <div className="">
              My name is
              <span className='text-ct-active-color'> Vu Van Nhi</span>
              , a third-year student at Vietnam Vocational College of Commerce and Industry.
            </div>
            <div className="">
              Currently, I am delving into
              <span className='text-ct-active-color'> Frontend development </span>
              and aspire to become a
              <span className='text-ct-active-color'> Full Stack Developer </span>
              in the future.
            </div>
            <div className="">
              Apart from coding, some other activities that I love to do include playing football, exploring technology, and watching movies.
            </div>
            <div className="">
              I am available for any job opportunity that aligns with my skills and aspirations.
            </div>
          </div>
        </div>
        <div className="basis-2/5 flex justify-center items-center">
          <div className={generateClassAnimate(
            'h-full min-h-[380px] w-[300px] rounded p-1.5 overflow-hidden flex justify-center items-center relative animate__animated',
            'animate__fadeInRight animation-delay-500',
            'animate__bounceOutUp'
          )}>
            <div className="absolute h-[160%] w-[500px] bg-gradient-to-t animate-spin from-cyan-500 to-pink-500"></div>
            <img
              className="h-full z-10 w-full rounded-sm object-cover object-top"
              src={mySelfie}
              alt="My Avatar" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About