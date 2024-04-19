// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'
import './MainSlider.css'
// import required modules
import { Mousewheel, Pagination, EffectFade } from 'swiper/modules'
import Home from '~/slices/Home/Home'
import About from '~/slices/About/About'
import Skills from '~/slices/Skils/Skills'

function MainSlider() {
  const namePages = ['Home', 'About', 'Skills', 'Contact']
  const pagination = {
    clickable: true,
    renderBullet: (index, className) => {
      return `<span class="${className}">${namePages[index]}</span>`
    }
  }

  return (
    <>
      <Swiper
        direction={'vertical'}
        slidesPerView={1}
        spaceBetween={0}
        mousewheel={true}
        speed={100}
        effect='fade'
        pagination={pagination}
        modules={[Mousewheel, Pagination, EffectFade]}
        className="mySwiper w-full h-screen bg-ct-primary-color-950"
      >
        <SwiperSlide>
          <Home />
        </SwiperSlide>
        <SwiperSlide>
          <About />
        </SwiperSlide>
        <SwiperSlide>
          <Skills />
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default MainSlider