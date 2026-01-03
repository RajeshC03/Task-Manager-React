import "./Button.css"

function Button({text="name year",onclick=()=>{},classname="",style}) {
  return (
    <button onClick={onclick} className={`btn ${classname}`} style={style}>{text}</button>
  )
}

export default Button

