import { useSwiperSlide } from 'swiper/react'
import ProjectSlider from './components/ProjectSlider/ProjectSlider'

function Project() {
  const swiperSlideActive = useSwiperSlide().isActive

  return (
    <div className="w-full h-full px-6 py-10 flex justify-center items-center relative">
      <ProjectSlider swiperSlideActive={swiperSlideActive} />
    </div>
  )
}

export default Project