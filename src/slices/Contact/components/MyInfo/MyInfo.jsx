import { useState } from 'react'

function MyInfo({ startIcon, myInfomation, classAnimate }) {

  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(myInfomation)
    setCopied(true)
    setTimeout(() => setCopied(false), 900)
  }

  return (
    <div className={classAnimate}>
      <div onClick={handleCopy} className="flex gap-2 items-center cursor-pointer">
        <div
          className="size-[36px] relative text-xs rounded-full bg-ct-active-color grid place-content-center ring-ct-sub-active-color
      ring-offset-2 ring-offset-ct-primary-color-950 hover:bg-ct-sub-active-color hover:ring-1 duration-300 group"
        >
          <div className="scale-100 group-hover:scale-125 duration-300 text-ct-secondary-color-950 group-hover:text-ct-secondary-color-300">
            {startIcon}
          </div>

          {copied &&
            <div
              className="absolute bg-ct-secondary-color-950 px-1 py-[1px] rounded-sm text-ct-text-color text-[12px] right-[calc(100%+0.25rem)] top-1/2 -translate-y-1/2">
              Copied
            </div>}

        </div>
        <div className="text-transparent flex-1 text-wrap bg-clip-text bg-gradient-to-t from-ct-sub-active-color to-ct-active-color">{myInfomation}</div>
      </div>
    </div>
  )
}

export default MyInfo
