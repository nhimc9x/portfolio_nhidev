import { useSwiperSlide } from 'swiper/react'
import ProjectSlider from './components/ProjectSlider/ProjectSlider'

function Project() {
  const swiperSlideActive = useSwiperSlide().isActive

  return (
    <div className="w-full h-full px-4 sm:px-6 xs:pt-0 pt-20 flex justify-center items-center relative">
      <ProjectSlider swiperSlideActive={swiperSlideActive} />
    </div>
  )
}

export default Project