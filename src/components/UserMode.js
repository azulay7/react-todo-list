import React, { useContext } from 'react'
import { UserModeContext } from '../contexts/UserModeContext';
import './UserMode.css'
function UserMode() {
    const isUserEdit = useContext(UserModeContext);
    return (
        <div className='alert-user'>
            <div>
                <h2>Learn Context</h2>
                <h3> Alert if some todo is on edit mode</h3>
                <div>UserMode {isUserEdit ? 'On' : 'Off'}</div>
            </div>
        </div>

    )
}

export default UserMode