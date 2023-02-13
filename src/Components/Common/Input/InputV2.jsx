import React from 'react'
import './input.css'

const InputV2 = ({label = "lable", type = "text", Symbol, Tag = "input", className, ...rest}) => {
    return (
        <div className='container-inputv2'>
          <Tag  type={type} className={ className || "inputv2"} {...rest} />
          {Symbol  ? Symbol  : null}
        </div>
      )
}

export default InputV2