import React, {useState} from 'react';


interface MenuProps {
 
}

const Menu = ({}: MenuProps)=>{

    const [testing, setTesting] = useState(5)
    return(
        <>
     <div className="inputLabel">
          <label >
            Initial Funding
            <input
              type="number"
              value={testing}
              onChange={(e) =>
                setTesting(parseFloat(e.currentTarget.value))
              }
              className="inputBox"
            ></input>
            {testing > 0 && (
              <button onClick={(e) => alert('click')}>Submit</button>
            )}
          </label>
        </div>
        </>
    )
}

export default Menu;