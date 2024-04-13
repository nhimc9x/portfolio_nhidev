import PageSlice from '../../components/PageSlice/PageSlice'
import { useSwiperSlide } from 'swiper/react'
function Contact() {
  const swiperSlide = useSwiperSlide()

  return (
    <PageSlice bgColor={'green'}>
      <div className="w-full h-full grid place-content-center">
        {swiperSlide.isActive &&
          <div className="size-96 bg-gray-500 text-black text-xl text-center animate-scale-up-center">
          </div>
        }
      </div>
    </PageSlice>
  )
}

export default Contact