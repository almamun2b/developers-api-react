import React from 'react';
import './Developer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Developer = (props) => {
    const { image, name, email, gender, phone, salary, designation } = props.developer;
    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div className='developer'>
            <div className='image'>
                <img src={image} alt="" />
            </div>
            <div className=''>
                <h4 className='pt-3 text-primary'>Name: {name}</h4>
                <p>Designation: {designation}</p>
                <p>Gender: {gender}</p>
                <p>Email: {email}</p>
                <p>Phone: {phone}</p>
                <p>Salary: {salary}</p>
            </div>
            <div>
                <button onClick={() => props.handleAddToCart(props.developer)}
                    className='btn btn-primary'>{cartIcon} Add to Cart</button>
                <p className='fs-3 mt-3 g-3'>
                    <a href="https://facebook.com"><i class="fab fa-facebook text-primary"></i></a> 
                    <a href="https://twitter.com"><i class="fab fa-twitter text-info"></i></a>
                </p>
            </div>
        </div>
    );
};

export default Developer;