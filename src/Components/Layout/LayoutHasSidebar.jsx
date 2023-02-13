import React from 'react'

const LayoutHasSidebar = ({children}) => {
  return (
    <div>
        {/* sidebar here */}
        <div className=""></div>
        <div className="">{children}</div>
    </div>
  )
}

export default LayoutHasSidebar