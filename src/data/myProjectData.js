/* eslint-disable no-unused-vars */
import htmlLogo from '~/assets/skill_logo/html5.svg'
import cssLogo from '~/assets/skill_logo/css3.svg'
import jsLogo from '~/assets/skill_logo/javascript.svg'
import reactLogo from '~/assets/skill_logo/react.svg'
import tailwindLogo from '~/assets/skill_logo/tailwind.svg'
import gitLogo from '~/assets/skill_logo/git.svg'
import reduxLogo from '~/assets/skill_logo/redux.svg'
import nodejsLogo from '~/assets/skill_logo/nodejs.png'
import expressLogo from '~/assets/skill_logo/express.png'
import mongodbLogo from '~/assets/skill_logo/mongoDB.svg'

import NCSImg from '~/assets/ncsounds-nhidev.png'
import UComicsImg from '~/assets/comic-universe.png'


export default [
  {
    id: 0,
    name: 'NCSounds',
    description: 'As the sun dipped below the horizon, casting a warm golden hue across the sky, Sarah found herself lost in a moment of quiet contemplation. Sitting on the old wooden bench in the park, she watched as the world around her seemed to slow down, embracing the serenity of the evening. The gentle rustle of leaves in the breeze and the distant chirping of crickets provided a soothing soundtrack to her thoughts. Memories, both sweet and bittersweet, flooded her mind, reminding her of moments cherished and lessons learned.',
    technologies_used: [
      { name: 'React', logo: reactLogo },
      { name: 'Tailwind', logo: tailwindLogo },
      { name: 'Vite', logo: gitLogo }
    ],
    image: NCSImg,
    link: {
      demo: 'https://ncsounds-nhidev.vercel.app/',
      source_code: 'https://github.com/nhimc9x/ncsounds-nhidev'
    }
  },
  {
    id: 1,
    name: 'UComics',
    description: 'As the sun dipped below the horizon, casting a warm golden hue across the sky, Sarah found herself lost in a moment of quiet contemplation.',
    technologies_used: [
      { name: 'React', logo: reactLogo },
      { name: 'Tailwind', logo: tailwindLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'RestApi', logo: jsLogo }
    ],
    image: UComicsImg,
    link: {
      demo: 'https://comic-universe-nhidev.vercel.app/',
      source_code: 'https://github.com/nhimc9x/comic_universe-nhidev'
    }
  }
]
