import React from 'react';
import './Banner.css';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';


const Banner = () => {
    return (
        <div className="banner">
            <div>
                <h1>Best Food waiting for your belly</h1>
                <InputGroup className="mt-4 w-75 mx-auto search-container">
                    <FormControl
                        placeholder="Search Food"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                        className="rounded-pill border-0 mb-5 p-2 ps-4"
                    />
                    <Button className="color-btn p-2 rounded-pill px-3 search-btn" id="button-addon2">
                        Search 
                    </Button>
                </InputGroup>
            </div>
        </div>
    );
};

export default Banner;