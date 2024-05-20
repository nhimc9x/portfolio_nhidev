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
import cloudinaryLogo from '~/assets/skill_logo/cloudinary.png'
import apiLogo from '~/assets/skill_logo/api.png'
import tsLogo from '~/assets/skill_logo/Typescript_logo.png'

import NCSImg from '~/assets/ncsounds-nhidev.png'
import UComicsImg from '~/assets/comic-universe.png'
import PhimProImg from '~/assets/phimpro-nhidev.png'


export default [
  {
    id: 0,
    name: 'NCSounds',
    description: 'I have developed a website interface that allows users to access and enjoy NCS music for free. The interface design concept is synthesized from various sources. Users can listen to music, add songs to their favorite lists, create playlists, and download songs. The data of songs and images has been aggregated into a mock data file for use on this website.',
    technologies_used: [
      { name: 'React', logo: reactLogo },
      { name: 'Javascript', logo: jsLogo },
      { name: 'Tailwind', logo: tailwindLogo },
      { name: 'Cloudinary', logo: cloudinaryLogo }
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
    description: 'I have developed a comic reading website with features including dark mode, filtering, searching, ranking board... The comic data is retrieved from the API shared by user pth-1641.',
    technologies_used: [
      { name: 'React', logo: reactLogo },
      { name: 'Javascript', logo: jsLogo },
      { name: 'Tailwind', logo: tailwindLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'REST Api', logo: apiLogo }
    ],
    image: UComicsImg,
    link: {
      demo: 'https://comic-universe-nhidev.vercel.app/',
      source_code: 'https://github.com/nhimc9x/comic_universe-nhidev'
    }
  },
  {
    id: 2,
    name: 'PhimPro',
    description: 'This is a movie watching website that sources its content from the KKPhim API, constantly updating with the latest and most frequent vietsub movies.',
    technologies_used: [
      { name: 'React', logo: reactLogo },
      { name: 'Typescript', logo: tsLogo },
      { name: 'Tailwind', logo: tailwindLogo },
      { name: 'RTK Query', logo: reduxLogo },
      { name: 'REST Api', logo: apiLogo }
    ],
    image: PhimProImg,
    link: {
      demo: 'https://phimpro-nhidev-nhidevelopers-projects.vercel.app/',
      source_code: 'https://github.com/nhimc9x/phimpro-nhidev'
    }
  }
]
