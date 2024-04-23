import { MdOutlineError } from 'react-icons/md'
import clsx from 'clsx'

function ButtonLink({ link, icon, title, BtnColor }) {
  return (
    <a
      href={link || ''}
      className='mt-4 w-max min-w-20 h-8 p-[1.5px] rounded-full flex items-center justify-center group bg-gradient-to-r from-ct-active-color to-ct-sub-active-color'
    >
      <div
        className={clsx(
          'w-full h-full uppercase font-semibold rounded-full flex flex-col justify-center items-center duration-300 group-hover:bg-transparent overflow-hidden',
          BtnColor === 'secondary' ? 'bg-ct-secondary-color-950' : 'bg-ct-primary-color-950'
        )}
      >
        <div className="duration-300 text-xl text-ct-primary-color-900 -translate-y-full group-hover:translate-y-[40%]">
          {icon || <MdOutlineError />}
        </div>
        <div className="duration-300 px-4 text-xs -translate-y-[70%] group-hover:translate-y-[70%] text-ct-text-color">
          {title || 'No title'}
        </div>
      </div>
    </a>
  )
}

export default ButtonLink