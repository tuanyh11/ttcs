import React from 'react'

const NextButton = ({className, onClick, classCustom}) => {
  return (
    <div>
        <div
        
        className={`${classCustom || ''} ${className} top-1/3  z-50  right-5 before:hidden hidden lg:block`}
        onClick={onClick}
      >
        <button className="fa-solid fa-angle-right w-10 h-10 bg-main-color text-sm text-white rounded-full"></button>
      </div>
    </div>
  )
}

export default NextButton