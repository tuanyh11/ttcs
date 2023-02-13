import React from 'react'
import './input.css'

const InputV1 = ({label = "lable", type = "text",Tag = "input", ...rest}) => {
  return (
    <div className='container-inputv1'>
      <label className='label-inputv1'>{label} <span className="required">*</span></label>
      <Tag  type={type} className={"inputv1"} {...rest} />
    </div>
  )
}

export default InputV1