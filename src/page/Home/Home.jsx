import { useSwiperSlide } from 'swiper/react'

function Home() {
  const swiperSlide = useSwiperSlide()
  return (
    <div className="w-full h-full bg-ct-primary-color-950">
      {swiperSlide.isActive &&
        <div className="size-1/2 bg-ct-secondary-color-950 text-black text-xl text-center animate-scale-up-center">
        </div>
      }
    </div>
  )
}

export default Home