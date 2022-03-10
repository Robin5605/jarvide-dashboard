import {useState, useCallback} from 'react'

interface IToggleSwitchProps {
  onSwitchOff?: () => void,
  onSwitchOn?: () => void,
  checked?: boolean
}

/**
 * Component that crates a switch button
 * 
 * @component
 * @example
 * <div className = "w-[200px] h-[100px]">
 *  <ToggleSwitch onSwitchOn={() => {
 *    //do something when switch is on
 *   } checked="true"} />
 * </div>
 * 
 * return (
 *  <ToggleSwitch onSwitchOff={() => void} onSwitchOn={() => void} checked="true | false" />
 * ) 
 */

//Don't ask why the prop that determines weather it's switched on is called "checked". I can't get it to work with another name. If someone can fix this please call the new prop "toggled".

const ToggleSwitch = ({onSwitchOff, onSwitchOn, checked=false}:IToggleSwitchProps) => {

  const [width, setWidth] = useState(0)
  const [newPos, setNewPos] = useState(0)
  const [pad, setPad] = useState(0)

  const Toggle = useCallback((toggle) => {
    if(toggle !== null){
      setNewPos(parseInt(window.getComputedStyle(toggle).width))
      setWidth(parseInt(window.getComputedStyle(toggle, ":after").height))
      setPad(parseInt(window.getComputedStyle(toggle).padding))
    }
  })

  const Checkbox = useCallback((checkbox) => {
    if(checkbox !== null){

      checkbox.checked = checked
      
      checkbox.onclick = (event) => {
        if(checkbox.checked){
          if(onSwitchOn){
            onSwitchOn()
          }
        }
        else{
          if(onSwitchOff){
            onSwitchOff()
          }
        }
      }
    }
  })
  
  return(
    <div className="relative w-full h-full flex items-center">
      <style jsx>{`
        span.toggle::after {
          width: ${width}px;
        }
        input.checkbox:checked ~ span.toggle::after{
          transform: translate(${newPos - width - (2 * pad)}px, 0px);
        }
      `}</style>
      <input ref = {Checkbox} type="checkbox" className="checkbox z-10 absolute peer w-full h-full rounded-full appearance-none" />
      <span ref= {Toggle} className={`toggle w-full h-full flex items-center shrink-0 bg-gray-300 p-[5%] rounded-full duration-300 after:duration-300 after:bg-white after:rounded-full after:h-[100%] peer-checked:bg-green-400 peer-checked:after:duration-300 peer-default:duration-300`} />
    </div>
  )
}

export default ToggleSwitch
