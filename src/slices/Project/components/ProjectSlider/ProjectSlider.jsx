import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-creative'
import 'swiper/css/scrollbar'
import './ProjectSlider.css'
import 'animate.css'
import { EffectCreative } from 'swiper/modules'
import ProjectCardSlice from './ProjectCardSlice/ProjectCardSlice'
import clsx from 'clsx'
import myProjectData from '~/data/myProjectData'

function ProjectSlider({ swiperSlideActive }) {
  const generateClassAnimate = (className, animateIn, animateOut) => {
    return clsx(className, swiperSlideActive ? animateIn : animateOut)
  }
  return (
    <>
      <Swiper
        grabCursor={true}
        effect={'creative'}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400]
          },
          next: {
            translate: ['100%', 0, 0]
          }
        }}
        loop={true}
        modules={[EffectCreative]}
        className={generateClassAnimate(
          'mySwiper2 w-full py-4 max-w-[660px] h-full max-h-[580px] rounded-md animate__animated',
          'animate__fadeIn animation-delay-500',
          'animate__fadeOutUp animate__faster'
        )}
      >
        {myProjectData.map(data =>
          <SwiperSlide
            key={data.id}
            className='rounded-md overflow-hidden bg-gradient-to-tr from-ct-active-color to-ct-sub-active-color shadow-lg shadow-black/40 p-1 mt-10'
          >
            <ProjectCardSlice
              swiperSlideActive={swiperSlideActive}
              nameProject={data.name}
              description={data.description}
              technologies={data.technologies_used}
              imageProject={data.image}
              linkProject={data.link}
            />
          </SwiperSlide>
        )}
      </Swiper>
    </>
  )
}

export default ProjectSlider