import "./TextField.css"

function TextField({type="text",onchange=()=>{},name="" ,placeholder="Name Here",value=""}) {
  return (
    <input className="text-field" type={type} onChange={onchange} name={name} placeholder={placeholder} 
    value={value}/>
  )
}

export default TextField