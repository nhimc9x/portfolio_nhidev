import generateClassAnimate from '~/utils/generateClassAnimate'

function SkillCard({ swiperSlideActive, index, skillLogo, title, completed }) {

  return (
    <div
      style={{
        animationDelay: swiperSlideActive ? (500 + index * 100) + 'ms' : '0ms'
      }}
      className={generateClassAnimate(
        '',
        swiperSlideActive,
        'animate__bounceIn'
      )}>
      <div style={{ filter: !completed && 'brightness(.15)', pointerEvents: !completed && 'none' }}
        className="mdl:size-[120px] size-[80px] mdl:text-sm text-xs scale-100 hover:scale-105 rounded-md border border-ct-secondary-color-900 shadow-lg
     hover:shadow-ct-sub-active-color/30 hover:border-ct-sub-active-color transition-all duration-300 text-ct-text-color hover:text-ct-sub-active-color"
      >
        <div className="w-full h-full flex flex-col justify-center items-center gap-1.5">
          <img className='h-1/3' src={skillLogo} alt={`Logo ${title}`} />
          <div className="select-none">{title}</div>
        </div>
      </div>
    </div>
  )
}

export default SkillCard
