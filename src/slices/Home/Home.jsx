import { useSwiperSlide } from 'swiper/react'
import myAvatar from '~/assets/my_avatar.png'
import homeWall from '~/assets/wall2.png'
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
import ButtonLink from '~/components/ButtonLink/ButtonLink'

function Home() {
  const swiperSlideActive = useSwiperSlide().isActive

  const generateClassAnimate = (className, animateIn, animateOut) => {
    return clsx(className, swiperSlideActive ? animateIn : animateOut)
  }

  return (
    <div className="w-full h-full px-[4%] flex items-center gap-x-0 gap-y-4 pt-10 mdl:pt-0 flex-col-reverse mdl:flex-row justify-center">
      <div className="basis-[375px] px-2 w-[375px] h-full flex items-start mdl:items-center justify-center mdl:justify-start">
        <div className="text-3xl w-full font-semibold text-ct-text-color">
          <div className={generateClassAnimate('flex items-center animate__animated', 'animate__bounceInLeft', 'animate__fadeOutUp animate__faster')} >
            <div className="italic">Hi There!</div>
            <img className='h-9 pl-2 animate-wave origin-[70%_70%]' src={handWave} alt="" />
          </div>
          <div className={generateClassAnimate('uppercase mb-4 animate__animated', 'animate__bounceInLeft animation-delay-100', 'animate__fadeOutUp animate__faster')}>
            I&apos;m
            <span className='text-ct-active-color'> Vu Van Nhi</span>
          </div>
          <div className={generateClassAnimate('animate__animated', 'animate__fadeIn animation-delay-400', 'animate__fadeOutUp animate__faster')}>
            <TextTyping className='text-ct-sub-active-color' />
          </div>
          <div className={generateClassAnimate('mt-3 flex gap-3.5 animate__animated', 'animate__fadeIn animation-delay-500', 'animate__fadeOutUp animate__faster')}>
            <WrapperIcon icon={<GrGithub />} />
            <WrapperIcon icon={<BiLogoLinkedin />} />
            <WrapperIcon icon={<FaFacebook />} />
            <WrapperIcon icon={<ImMail4 />} />
          </div>
          <div
            className={generateClassAnimate(
              'animate__animated mt-4',
              'animate__fadeIn animation-delay-600',
              'animate__fadeOutUp animate__faster'
            )}
          >
            <ButtonLink icon={<IoMdDownload />} title={'Get Resume'} />
          </div>
        </div>
      </div>
      <div className="mdl:flex-1 w-full h-max flex justify-center items-center mt-10">
        <img
          className={generateClassAnimate(
            'animate__animated xs:w-[420px] w-[220px] object-cover',
            'animate__bounceIn',
            'animate__fadeOutUp animate__faster'
          )}
          src={homeWall}
          alt=""
        />
      </div>
    </div>
  )
}

export default Home
