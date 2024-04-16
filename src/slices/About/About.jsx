import { useSwiperSlide } from 'swiper/react'
import clsx from 'clsx'
import 'animate.css'

function About() {
  const swiperSlideActive = useSwiperSlide().isActive
  const generateClassAnimate = (className, animateIn, animateOut) => {
    return clsx(className, swiperSlideActive ? animateIn : animateOut)
  }
  return (
    <div className="w-full h-full px-[4%] flex flex-col-reverse lg:flex-row items-center justify-center">
      <div className="bg-green-500 basis-3/5 w-full text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique quis eum aut quaerat ad eaque dignissimos quidem ratione excepturi magnam natus, quos impedit necessitatibus commodi inventore enim repudiandae ullam magni?</div>
      <div className="bg-pink-500 basis-2/5 w-full flex items-center">
        <img className='h-full object-cover object-top' src="https://www.abusaid.me/_ipx/w_384,q_75/%2Fprofile.png?url=%2Fprofile.png&w=384&q=75" alt="" />
      </div>
    </div>
  )
}

export default About