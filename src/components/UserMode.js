import React, { useContext } from 'react'
import { UserModeContext } from '../contexts/UserModeContext';
import './UserMode.css';
import Switch from '@mui/material/Switch';
function UserMode({handleSwitchChange}) {
    const isUserEdit = useContext(UserModeContext);
    return (
        <div className='alert-user'>
            <div>
                <h2>Learn Context</h2>
                <h3> Alert if some todo is on edit mode</h3>
                <div>UserMode {isUserEdit ? 'On' : 'Off'}</div>
                <Switch checked={isUserEdit}  onChange={handleSwitchChange} inputProps={{ 'aria-label': 'controlled' }} />
            </div>
        </div>

    )
}

export default UserMode