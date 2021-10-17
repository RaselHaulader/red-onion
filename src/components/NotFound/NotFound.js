import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'

const NotFound = () => {
    return (
        <div className="notFound d-flex align-items-end justify-content-center">
             <Link to="/" className="btn btn-danger">Home</Link>
        </div>
    );
};

export default NotFound;