import { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import {
    profilPending,
    profilFirstName,
    profilLastName,
    profilError,
} from "../pages/User/userSlice";

import { userUpdate } from '../services/userUpdate';


/**
 * @ returns {JSX.Element} JSX.Element handling the user page
 */

export default function UserHeader() {
    const dispatch = useDispatch();
    const { firstName, lastName } = useSelector((state) => state.profil);
    
    const localStorageFirstName = localStorage.getItem("firstName");
    const localStorageLastName = localStorage.getItem("lastName");
    

    useEffect(() => {
        if (localStorageFirstName && localStorageLastName) {
            dispatch(profilFirstName(localStorageFirstName));
            dispatch(profilLastName(localStorageLastName));
        }
    }, [dispatch, localStorageFirstName, localStorageLastName]);

    const [isEdit, setIsEdit] = useState(false);
    const [newName, setNewName] = useState({
        firstName: '',
        lastName: '',
    });

    function editButton(e) {
        e.preventDefault();
        setIsEdit(!isEdit);
    }

    async function handleSubmit(e){
        e.preventDefault();
        dispatch(profilPending());
        try {
            const newUser = await userUpdate(newName);
            dispatch(profilFirstName(newUser.body.firstName));
            dispatch(profilLastName(newUser.body.lastName));
            setIsEdit(!isEdit);
        } catch (error) {
            dispatch(profilError(error.response.data.message));
        }
    }

    function handleChange({currentTarget}){
        const { name, value } = currentTarget;
        setNewName({
            ...newName,
            [name]: value,
        });
    }


    return (
        <>
            {!isEdit ? (
                <div className="header">
                    <h1>Welcome Back
                        <br />
                        {firstName + ' ' + lastName} !
                    </h1>
                    <button className='edit-button' onClick={editButton}>Edit Name</button>
                </div>
            ) : (
                <div className="header">
                    <h1>Welcome Back</h1>
                        <br />
                        <form className="edit-name-content" onSubmit={handleSubmit}>
                            <div className="header-user-content-name">
                                <input
                                    type="text"
                                    className="header-user-content-name-firstname"
                                    placeholder={firstName}
                                    name="firstName"
                                    onChange={handleChange}
                                    required
                                />
                                <input
                                    type="text"
                                    className="header-user-content-name-firstname"
                                    placeholder={lastName}
                                    name="lastName"
                                    onChange={handleChange}
                                    required
                                />
                                <button className="edit-button" type="submit">Save</button>
                            </div>
                            <div className="header-user-content-cancel">
                                <button className="edit-button" onClick={editButton}>Cancel</button>
                            </div>
                        </form>
                </div>
            )}
        </>
    );
}