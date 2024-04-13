// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'
import './MainLayout.css'
// import required modules
import { Mousewheel, Pagination, EffectFade } from 'swiper/modules'
import Home from '../../page/Home/Home'
import About from '../../page/About/About'
import Project from '../../page/Project/Project'
import Contact from '../../page/Contact/Contact'

function MainLayout() {
  const pagination = {
    clickable: true,
    renderBullet: (index, className) => '<span class="' + className + '"> Home </span>'
  }

  return (
    <>
      <Swiper
        direction={'vertical'}
        slidesPerView={1}
        spaceBetween={0}
        mousewheel={true}
        speed={800}
        effect='fade'
        pagination={pagination}
        modules={[Mousewheel, Pagination, EffectFade]}
        className="mySwiper w-full h-screen"
      >
        <SwiperSlide>
          <Home />
        </SwiperSlide>
        <SwiperSlide>
          <About />
        </SwiperSlide>
        <SwiperSlide>
          <Project />
        </SwiperSlide>
        <SwiperSlide>
          <Contact />
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default MainLayout