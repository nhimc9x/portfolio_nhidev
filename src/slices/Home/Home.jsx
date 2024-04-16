import { useSwiperSlide } from 'swiper/react'
import myAvatar from '~/assets/my_avatar.png'
import handWave from '~/assets/wave.png'
import TextTyping from './componets/TextTyping/TextTyping'
import WrapperIcon from './componets/WrapperIcon/WrapperIcon'
import { GrGithub } from 'react-icons/gr'
import { BiLogoLinkedin } from 'react-icons/bi'
import { FaFacebook } from 'react-icons/fa'
import { ImMail4 } from 'react-icons/im'
import { IoMdDownload } from 'react-icons/io'
import clsx from 'clsx'
import 'animate.css'

function Home() {
  const swiperSlideActive = useSwiperSlide().isActive

  const generateClassAnimate = (className, animateIn, animateOut) => {
    return clsx(className, swiperSlideActive ? animateIn : animateOut)
  }

  return (
    <div className="w-full h-full px-[5vh] bg-ct-primary-color-950 flex items-center justify-center">
      <div className="w-[100vh] h-full flex items-center">
        <div className="text-[5.6vh] w-full font-semibold text-ct-text-color">
          <div className={generateClassAnimate('flex items-center animate__animated', 'animate__bounceInLeft', 'animate__bounceOutUp')} >
            <div className="italic">Hi There!</div>
            <img className='h-[7vh] pl-[2vh] animate-wave origin-[70%_70%]' src={handWave} alt="" />
          </div>
          <div className={generateClassAnimate('uppercase mb-[3vh] animate__animated', 'animate__bounceInLeft animation-delay-100', 'animate__bounceOutUp')}>
            I&apos;m
            <span className='text-ct-active-color'> Vu Van Nhi</span>
          </div>
          <div className={generateClassAnimate('animate__animated', 'animate__fadeIn animation-delay-400', 'animate__bounceOutUp')}>
            <TextTyping className='text-ct-sub-active-color' />
          </div>
          <div className={generateClassAnimate('mt-[2vh] flex gap-[2.6vh] animate__animated', 'animate__fadeIn animation-delay-500', 'animate__bounceOutUp')}>
            <WrapperIcon icon={<GrGithub />} />
            <WrapperIcon icon={<BiLogoLinkedin />} />
            <WrapperIcon icon={<FaFacebook />} />
            <WrapperIcon icon={<ImMail4 />} />
          </div>
          <a
            href=''
            className={generateClassAnimate(
              'mt-[3vh] w-[21vh] h-[7vh] p-[0.25vh] rounded-full flex items-center justify-center group bg-gradient-to-r from-ct-active-color to-ct-sub-active-color animate__animated',
              'animate__bounceIn animation-delay-600',
              'animate__bounceOutUp'
            )}
          >
            <div
              className="w-full h-full uppercase font-semibold rounded-full bg-ct-primary-color-950 flex flex-col justify-center items-center duration-300
              group-hover:bg-transparent overflow-hidden"
            >
              <div className="duration-300 text-ct-primary-color-900 -translate-y-full group-hover:translate-y-[50%]">
                <IoMdDownload className='text-[4vh]' />
              </div>
              <div className="duration-300 text-[2.6vh] -translate-y-[calc(50%+0.25vh)] group-hover:translate-y-[calc(100%+0.25vh)]">
                Get Resume
              </div>
            </div>
          </a>
        </div>
      </div>
      <div className="w-[100vh] h-full flex justify-center items-center">
        <img
          className={generateClassAnimate(
            'animate__animated w-[56vh] object-cover',
            'animate__bounceIn',
            'animate__bounceOutUp'
          )}
          src={myAvatar}
          alt=""
        />
      </div>
    </div>
  )
}

export default Home
