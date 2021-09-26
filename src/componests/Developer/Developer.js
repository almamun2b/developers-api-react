import React from 'react';
import './Developer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Developer = (props) => {
    const { image, name, email, gender, phone, salary, designation } = props.developer;
    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div className='developer card'>
            <div className='image'>
                <img src={image} alt="" />
            </div>
            <div className='mt-3 card-body'>
                <h4 className='text-primary'>Name: {name}</h4>
                <p><span className='fw-bold'>Designation:</span> {designation}</p>
                <p><span className='fw-bold'>Gender:</span> {gender}</p>
                <p><span className='fw-bold'>Email:</span> {email}</p>
                <p><span className='fw-bold'>Phone:</span> {phone}</p>
                <p><span className='fw-bold'>Salary:</span> {salary}</p>
            </div>
            <div>
                <button onClick={() => props.handleAddToCart(props.developer)}
                    className='btn btn-primary'>{cartIcon} Add to Cart</button>
                <p className='fs-3 mt-3 g-3 d-flex justify-content-evenly'>
                    <a href="https://facebook.com"><i class="fab fa-facebook text-primary"></i></a>
                    <a href="https://linkedin.com"><i class="fab fa-linkedin text-primary"></i></a>
                    <a href="https://twitter.com"><i class="fab fa-twitter text-info"></i></a>
                </p>
            </div>
        </div>
    );
};

export default Developer;