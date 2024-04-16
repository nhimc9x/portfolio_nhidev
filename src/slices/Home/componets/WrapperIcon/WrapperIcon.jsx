
function WrapperIcon({ icon, linkTo }) {
  return (
    <a href={linkTo || ''}
      className="flex justify-center items-center size-[46px] cursor-pointer rounded text-ct-secondary-color-800
    bg-gradient-to-tr from-[#097795] via-[#00bcdc] to-[#097795] hover:text-ct-active-color hover:shadow-[0_5px_35px_-7px] hover:shadow-ct-active-color/50
    hover:scale-105 duration-300 hover:from-[#097795] hover:to-[#097795] *:w-[60%]">
      {icon}
    </a>
  )
}

export default WrapperIcon