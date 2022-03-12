'use strict'

import {useState, useCallback, useEffect, RefObject, FC, SVGProps, useRef} from 'react'
import {renderToString} from 'react-dom/server'

//This is the best I can do for now. It ain't much, but its honest work.
//bug with hexColor, will fix later
/*type hexColorDig = "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "0" | "A" | "B" | "C" | "D" | "E" | "F" | "a" | "b" | "c" | "d" | "e" | "f"

type hexColor = `${hexColorDig}${hexColorDig}${hexColorDig}${hexColorDig}${hexColorDig}${hexColorDig}`*/

type IToggleSwitchProps = {
  onSwitchOff?: () => void,
  onSwitchOn?: () => void,
  onLoad?: () => void,
  toggled?: string | boolean,
  colorOn?: /*hexColor*/string,
  colorOff?: /*hexColor*/string,
  imgOn?: SVGProps<SVGSVGElement>,
  imgOff?: SVGElement & HTMLElement
}

/**
 * Component that crates a switch button
 * 
 * @component
 * @example
 * <div className = "w-[200px] h-[100px]">
 *  <ToggleSwitch onSwitchOn={() => {
 *    //do something when switch is on
 *   } toggled="true"} />
 * </div>
 * 
 * return (
 *  <ToggleSwitch onSwitchOff={() => void} onSwitchOn={() => void} toggled="true | false" />
 * ) 
 */

const ToggleSwitch: FC<IToggleSwitchProps> = ({onSwitchOff, onSwitchOn, onLoad, toggled="false", colorOn="#4ADE80", colorOff="#d1d5db", imgOn, imgOff}) => {

  const boxRef = useRef<any>();

  const Checkbox = useCallback((checkbox) => {
    if(checkbox !== null){

      boxRef.current = checkbox;
      
      checkbox.onclick = () => {
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
  }, [onSwitchOff, onSwitchOn])

  useEffect(() => {
    if(onLoad){
      onLoad()
    }
  })

  useEffect(() => {
    boxRef.current = (/true/).test(toggled)
    boxRef.current.checked = toggled
  }, [toggled])
  return(
    <>
      <style jsx>{`
        //Container
        div{
          position: relitive;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
        }

        //ToggleSwitch
        input::after {
          animation-duration: 300ms;
          animation-name: turnOff;
          animation-fill-mode: forwards;
          content: "";
          height: 90%;
          margin-left: 2%;
          margin-right: 2%;
          position: absolute;
          aspect-ratio: 1/1;
          z-index: 1;
          background: ${imgOff? `url(data:image/svg+xml;charset=utf8,${encodeURIComponent(renderToString(imgOff))})`: "white"};
          background-size: cover;
          transition-duration: 300ms;
          border-radius: 9999px;
        }
        input:checked::after{
          animation-duration: 300ms;
          animation-name: turnOn;
          animation-fill-mode: forwards;
          background: ${imgOn? `url(data:image/svg+xml;charset=utf8,${encodeURIComponent(renderToString(imgOn))})`: "white"};
          background-size: cover;
          border-radius: 9999px;
        }
        input:checked::before{
          background: ${colorOn};
          transition-duration: 300ms;
        }
        input::before{
          position: absolute;
          content: "";
          width:100%;
          height: 100%;
          background:${colorOff};
          transition-duration: 300ms;
          border-radius: 9999px;
        }
        input{
          display: flex;
          align-items: center;
          flex-shrink: 0;
          appearance:none;
          position: relative;
          width: 100%;
          height: 100%;
          border-radius: 9999px;
        }

        //Animations
        @keyframes turnOn{
          from {
            left: 0%;
          }
          to {
            transform: translateX(-100%);
            left: 96%;
          }
        }
        @keyframes turnOff{
          from {
            transform: translateX(-100%);
            left: 96%;
          }
          to {
            left: 0%;
          }
        }
      `}</style>
      <div>
        <input ref = {Checkbox} type="checkbox" />
      </div>
    </>
  )
}

export default ToggleSwitch
