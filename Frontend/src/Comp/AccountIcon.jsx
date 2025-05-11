import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
import { useNavigate } from 'react-router-dom'; // To redirect after logout

const AccountIcon = ({username}) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Remove the username from localStorage
        localStorage.removeItem("username");
        localStorage.removeItem("id");
        window.location.reload()
        navigate('/'); // Redirect to homepage
    };

    return (
        <div>
            <ul className="flex flex-grow flex-row items-center mr-[60px] gap-7">
            <li>
                <a href="" className="text-white bg-[#caa98e] hover:border-black hover:shadow-xl rounded-xl px-5 py-1.5 text-xl">Saved</a>
                </li>
                <li><Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic" className="w-10 h-10 bg-gray-300 rounded-full text-xl text-gray-700">
                    {username[0].toUpperCase()}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item onClick={handleLogout}className="bg-white p-1 rounded-xl border-gray-800 border-2">Logout</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                </li>
            </ul>
        </div>
    )
}

export default AccountIcon
