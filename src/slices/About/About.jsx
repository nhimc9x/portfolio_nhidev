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
    <div className="w-full h-full px-[4%] flex items-center justify-center pt-10 mdl:pt-0">
      <div className="flex w-full flex-col-reverse gap-x-4 xs:gap-y-4 gap-y-2 mdl:flex-row">
        <div className="basis-3/5 flex-1 text-base mdl:text-lg">
          <div className={generateClassAnimate(
            'font-semibold uppercase text-xl text-ct-sub-active-color mb-2 animate__animated',
            'animate__bounceInLeft',
            'animate__fadeOutUp animate__faster'
          )}>
            Who I am?
          </div>
          <div className={generateClassAnimate(
            'text-ct-text-color leading-7 mdl:leading-8 animate__animated',
            'animate__bounceIn animation-delay-600',
            'animate__fadeOutUp animate__faster'
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
              I am available for
              <span className='text-ct-active-color'> any job opportunity </span>
              that aligns with
              <span className='text-ct-active-color'> my skills </span>
              and
              <span className='text-ct-active-color'> aspirations. </span>
            </div>
          </div>
        </div>
        <div className="basis-2/5 xs:max-h-full max-h-0 overflow-hidden flex justify-center mdl:justify-start items-center">
          <div className={generateClassAnimate(
            'h-full min-h-[200px] w-[200px] mdl::min-h-[380px] mdl:w-[300px] rounded p-1.5 overflow-hidden flex justify-center items-center relative animate__animated',
            'animate__fadeInRight animation-delay-500 animate__faster',
            'animate__fadeOutUp animate__faster'
          )}>
            <div className="absolute h-[160%] w-[580px] bg-gradient-to-t animate-spin from-cyan-500 to-pink-500"></div>
            <img
              className="h-full mx-auto z-10 w-full rounded-sm object-cover object-top"
              src={mySelfie}
              alt="My Avatar" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About