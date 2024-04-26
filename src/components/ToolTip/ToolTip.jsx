function ToolTip({ children, title }) {
  return (
    <div className="relative group">
      {children}
      <div
        className="absolute w-max hidden group-hover:block animate-tooltip-up-bottom top-0 left-1/2 -translate-x-1/2
      bg-[#212121] text-[10px] text-white rounded shadow-sm px-2 py-0.5">
        {title || 'No title'}
      </div>
    </div>
  )
}

export default ToolTip
