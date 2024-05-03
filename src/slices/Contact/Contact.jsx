import { useSwiperSlide } from 'swiper/react'
import generateClassAnimate from '~/utils/generateClassAnimate'
import { MdEmail } from 'react-icons/md'
import { FaPhone } from 'react-icons/fa6'
import { FaLocationDot } from 'react-icons/fa6'
import { FaFacebookF } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaLinkedinIn } from 'react-icons/fa'
import { FaDiscord } from 'react-icons/fa'
import { SiZalo } from 'react-icons/si'
import MyInfo from './components/MyInfo/MyInfo'
import MySocial from './components/MySocial/MySocial'
import FormContact from './components/FormContact/FormContact'

function Contact() {

  const swiperSlideActive = useSwiperSlide().isActive

  return (
    <div className="w-full h-full px-4 flex items-center justify-center">
      <div className="flex flex-col items-center">
        <div className={generateClassAnimate(
          'flex mb-8 w-full items-center justify-center',
          swiperSlideActive,
          'animate__fadeIn animation-delay-400'
        )}>
          <div className="max-w-[100px] w-full h-[1px] bg-gradient-to-l from-ct-secondary-color-800 to-transparent"></div>
          <div
            className="text-ct-active-color border border-ct-secondary-color-700 px-3 text-nowrap py-0.5 rounded
          bg-ct-secondary-color-950 text-lg tracking-wider uppercase font-semibold relative
          before:absolute before:size-5 before:rounded-full before:shadow-[0_0_100px_8px] before:shadow-ct-sub-active-color before:-z-10
          before:top-0 before:left-0 before:animate-pulse"
          >
            Contact Me
          </div>
          <div className="max-w-[100px] w-full h-[1px] bg-gradient-to-r from-ct-secondary-color-800 to-transparent"></div>
        </div>
        <div className="space-y-4">
          <MyInfo
            classAnimate={generateClassAnimate('', swiperSlideActive, 'animate__fadeInLeft  animation-delay-400 animate__faster')}
            startIcon={<MdEmail />}
            myInfomation={'nhicomputer77@gmail.com'}
          />
          <MyInfo
            classAnimate={generateClassAnimate('', swiperSlideActive, 'animate__fadeInLeft animation-delay-500 animate__faster')}
            startIcon={<FaPhone />}
            myInfomation={'+84352924807'}
          />
          <MyInfo
            classAnimate={generateClassAnimate('', swiperSlideActive, 'animate__fadeInLeft animation-delay-600 animate__faster')}
            startIcon={<FaLocationDot />}
            myInfomation={'234 Hoang Quoc Viet, Bac Tu Liem, Hanoi'}
          />
        </div>
        <div className="mt-6 flex gap-4 mb-4">
          <MySocial
            classAnimate={generateClassAnimate('', swiperSlideActive, 'animate__bounceIn animation-delay-500')}
            icon={<FaFacebookF />}
          />
          <MySocial
            classAnimate={generateClassAnimate('', swiperSlideActive, 'animate__bounceIn animation-delay-600')}
            icon={<FaGithub />}
          />
          <MySocial
            classAnimate={generateClassAnimate('', swiperSlideActive, 'animate__bounceIn animation-delay-700')}
            icon={<FaLinkedinIn />}
          />
          <MySocial
            classAnimate={generateClassAnimate('', swiperSlideActive, 'animate__bounceIn animation-delay-800')}
            icon={<FaDiscord />}
          />
          <MySocial
            classAnimate={generateClassAnimate('', swiperSlideActive, 'animate__bounceIn animation-delay-900')}
            icon={<SiZalo />}
          />
        </div>
        <FormContact
          classAnimate={generateClassAnimate(
            'mt-2',
            swiperSlideActive,
            'animate__fadeIn animation-delay-900'
          )}
        />
      </div>
    </div>
  )
}

export default Contact