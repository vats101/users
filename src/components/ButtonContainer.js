import React from 'react'
import {useNavigate} from 'react-router-dom';

const ButtonContainer = ({ users }) => {
    const navigate=useNavigate();
    const handleClick=(e)=>{
        const isButton = e.target.nodeName === 'BUTTON';
        if (!isButton) {
            return;
        }
        navigate(`/singleuser/${e.target.id}`);
    }
    return (
        <div className='wrapper' onClick={(e)=>handleClick(e)}>
            {
                users.map((user, idx) => {
                    return (
                        <button key={idx+1} id={idx+1} className="userbtn">
                            User {idx+1}
                        </button>
                    )
                })
            }
        </div>
    )
}

export default ButtonContainer