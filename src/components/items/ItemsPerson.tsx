import { useState } from "react";


export default function ItemsPerson() {
    const [keepState, setkeepState] = useState<boolean>(false);
  return (
    <>
        <div className=" rounded-md">
            <button 
            className=" ring-offset-red-400 bg-amber-950 p-3 rounded-md "
            // onFocus={()=>setkeepState(true)} 
            onMouseDown={()=>setkeepState(true)} 
            onMouseUp={()=>setkeepState(false)}
            >Keep Press</button>
        </div>
        <div>
            <div>
                <div className={`${keepState?"flex item-person":"hidden"} bg-blue-600 p-5`}>
                    <p>...</p>
                </div>
            </div>
        </div>
    </>
  )
}
