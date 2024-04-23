import { useSwiperSlide } from 'swiper/react'
import clsx from 'clsx'
import SkillCard from './components/SkillCard/SkillCard'
import htmlLogo from '~/assets/skill_logo/html5.svg'
import cssLogo from '~/assets/skill_logo/css3.svg'
import jsLogo from '~/assets/skill_logo/javascript.svg'
import reactLogo from '~/assets/skill_logo/react.svg'
import nodejsLogo from '~/assets/skill_logo/nodejs.png'
import expressLogo from '~/assets/skill_logo/express.png'
import tailwindLogo from '~/assets/skill_logo/tailwind.svg'
import gitLogo from '~/assets/skill_logo/git.svg'
import mongodbLogo from '~/assets/skill_logo/mongoDB.svg'
import reduxLogo from '~/assets/skill_logo/redux.svg'

let mySkills = [
  { title: 'HTML', logo: htmlLogo, completed: true },
  { title: 'CSS', logo: cssLogo, completed: true },
  { title: 'Javascript', logo: jsLogo, completed: true },
  { title: 'Tailwind', logo: tailwindLogo, completed: true },
  { title: 'React', logo: reactLogo, completed: true },
  { title: 'Git', logo: gitLogo, completed: true },
  { title: 'Redux', logo: reduxLogo, completed: true },
  { title: 'NodeJs', logo: nodejsLogo, completed: true },
  { title: 'ExpressJs', logo: expressLogo, completed: false },
  { title: 'MongoDB', logo: mongodbLogo, completed: false }
]

function Skills() {
  const swiperSlideActive = useSwiperSlide().isActive
  const generateClassAnimate = (className, animateIn, animateOut) => {
    return clsx(className, swiperSlideActive ? animateIn : animateOut)
  }

  return (
    <div className="w-full h-full px-[4%] flex items-center justify-center">
      <div className="">
        <div className={generateClassAnimate(
          'flex justify-center items-center mb-10 animate__animated',
          'animate__fadeIn animation-delay-400',
          'animate__fadeOutUp animate__faster'
        )}>
          <div className="w-[100px] h-[1px] bg-gradient-to-l from-ct-secondary-color-800 to-transparent"></div>
          <div
            className="text-lg bg-ct-secondary-color-950 px-4 py-1 rounded text-ct-active-color border
           border-ct-secondary-color-800 font-medium text-center shadow-[0_0_60px_-2px] shadow-ct-active-color/20"
          >
            My Skills
          </div>
          <div className="w-[100px] h-[1px] bg-gradient-to-r from-ct-secondary-color-800 to-transparent"></div>
        </div>
        <div className="h-full w-full grid gap-4 sm:grid-cols-5 sms:grid-cols-4 grid-cols-3">
          {mySkills.map((skill, index) =>
            <SkillCard key={index} swiperSlideActive={swiperSlideActive} generateClassAnimate={generateClassAnimate} index={index} skillLogo={skill.logo} title={skill.title} completed={skill.completed} />
          )}
        </div>
      </div>
    </div>
  )
}

export default Skills
