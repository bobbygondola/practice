import React, {useState} from 'react'
import '../App.css';

function Dropdown({ options, selected, onSelectedChange }) {
    const [open, setOpen] = useState(false)

    const renderedOptions = options.map((option) => {
        if (option.value === selected.value){
            return null;
        }
        return (
            <div 
              key={option.value} 
              className="item"
              onClick={() => {onSelectedChange(option)}}
              >
                {option.label}
            </div>
        )
    })

    //open dropdown conditionally if clicked. State -> Set classNames below.
    return (
        <div className="dropDownComponent">
            <div className="ui form">
                <div className="field">
                    <label className="label">Select a color</label>
                    <div
                    //Event Bubbling invokes all onClicks in parent divs. Toggling the 
                    //menu open and closed on select.
                    onClick={() => setOpen(!open)}
                    className={`ui selection dropdown ${open ? 'visible active' : ''}`}
                    >
                        <i className="dropdown icon"></i>
                        <div className="text">{selected.label}</div>
                        <div className={`menu ${open ? 'visible transition' : ''}`}>
                            {renderedOptions}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dropdown
