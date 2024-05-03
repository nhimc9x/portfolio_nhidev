import clsx from 'clsx'

export default function generateClassAnimate(className, swiperSlideActive, animateIn, animateOut) {
  return clsx(className, 'animate__animated', swiperSlideActive ? animateIn : animateOut || 'animate__fadeOutUp animate__faster')
}
