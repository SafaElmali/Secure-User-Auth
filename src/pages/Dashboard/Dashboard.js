import React, { useContext } from 'react';
import { AuthContext } from '../../context/AutContext';
import Sidebar from './SideBar/SideBar';

const Dashboard = () => {
    const authContext = useContext(AuthContext);
    const { token, expiresAt, userInfo } = authContext.authState;

    return (
        <div style={{ display: 'flex' }}>
            <div>
                <Sidebar />
            </div>
            <div>
                <p>{token}</p>
                <p>{expiresAt}</p>
                <p>{userInfo.name}</p>
                <p>{userInfo.email}</p>
                <p>{userInfo.role}</p>
                <button onClick={authContext.logout}>Logout</button>
            </div>
        </div>
    )
}

export default Dashboard