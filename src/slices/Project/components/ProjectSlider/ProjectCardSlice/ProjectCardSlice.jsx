import { useEffect, useRef, useState } from 'react'
import ButtonLink from '~/components/ButtonLink/ButtonLink'
import { GrGithub } from 'react-icons/gr'
import { SiVercel } from 'react-icons/si'
import ToolTip from '~/components/ToolTip/ToolTip'

function ProjectCardSlice({ swiperSlideActive, nameProject, description, technologies, imageProject, linkProject }) {

  const boxImgRef = useRef(null)
  const [boxImgHeight, setBoxImgHeight] = useState(0)

  useEffect(() => {
    const handleResize = () => {
      if (boxImgRef.current) {
        setBoxImgHeight(boxImgRef.current.clientHeight)
      }
    }
    if (swiperSlideActive) {
      window.addEventListener('resize', handleResize)
      handleResize()
    } else {
      window.removeEventListener('resize', handleResize)
    }
  }, [swiperSlideActive])

  return (
    <div className="w-full h-full flex flex-col p-2 xs:p-4 rounded-[3px] bg-ct-secondary-color-950">
      <div className="text-xl font-semibold text-center text-ct-active-color tracking-wider mb-2 uppercase">{nameProject}</div>
      <div className="flex-1 flex flex-col-reverse sm:flex-row gap-x-3 sm:gap-x-6">
        <div className="sm:basis-2/3 basis-full">
          <div className="mb-2">
            <div className="text-gray-300 text-base font-medium mb-1">Description</div>
            <div className="text-ct-text-color text-sm text-justify">
              {description}
            </div>
          </div>
          <div className="mt-auto">
            <div className="text-gray-300 text-base font-medium mb-2">Technologies</div>
            <div className="flex gap-4 flex-wrap pl-4">
              {technologies.map((tech, index) =>
                <ToolTip key={index} title={tech.name}>
                  <div className="size-11 grid place-content-center p-1">
                    <img className='w-full' src={tech.logo} alt="" />
                  </div>
                </ToolTip>
              )}
            </div>
          </div>
        </div>
        <div className="sm:basis-1/3 basis-0">
          <div ref={boxImgRef} className="w-full h-[90%] max-h-max bg-transparent rounded-md overflow-hidden shadow-[0_0_30px] shadow-ct-primary-color-950 relative group">
            <div className="h-max absolute top-0 left-0">
              <img
                style={{ '--height': `${boxImgHeight}px` }}
                className='w-full h-auto group-hover:-translate-y-[calc(100%-var(--height))] transition-all duration-[4000ms]'
                src={imageProject}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-4 justify-center mb-2">
        <ButtonLink link={linkProject.demo} BtnColor='secondary' icon={<SiVercel />} title={'Demo'} />
        <ButtonLink link={linkProject.source_code} BtnColor='secondary' icon={<GrGithub />} title={'Code'} />
      </div>
    </div>
  )
}

export default ProjectCardSlice