
function PageSlice({ bgColor, children }) {
  return (
    <div style={{ backgroundColor: bgColor || 'gray' }} className="w-full h-full">
      {children}
    </div>
  )
}

export default PageSlice