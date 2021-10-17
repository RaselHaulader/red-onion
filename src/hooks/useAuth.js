import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';

const useAuth = () => {
    const allContext = useContext(AuthContext)
    return allContext
};

export default useAuth;