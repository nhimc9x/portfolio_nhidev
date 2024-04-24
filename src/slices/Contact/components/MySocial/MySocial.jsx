function MySocial({ icon, link, classAnimate }) {
  return (
    <div className={classAnimate}>
      <a
        href={link || ''}
        className="size-9 rounded-lg bg-ct-active-color/80 grid place-content-center translate-y-0 shadow-lg
      hover:-translate-y-1.5 hover:shadow-[0_6px_32px_-2px] hover:shadow-ct-sub-active-color/40 hover:bg-ct-sub-active-color
     text-ct-secondary-color-950 hover:text-ct-secondary-color-300 duration-500"
      >
        <div className="size-5 *:w-full *:h-full">
          {icon}
        </div>
      </a>
    </div>
  )
}

export default MySocial