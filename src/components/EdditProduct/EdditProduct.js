import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import * as actions from '../../store/actions/index';

function EditProduct(props) {
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [expiryDate, setExpiryDate] = useState('');
    const [image, setImage] = useState(null);
    const editProduct = props.editProduct[0];

    const submitHandler = e => {
        e.preventDefault();
        let images;

        if (image) {
            for (let img of image) {
                images = img;
            }
        } else {
            console.log('from eddit image else block>>>')
            images = editProduct.imageUrl;
        }

        const data = {
            name: name,
            price: +price,
            expiryDate: expiryDate,
            image: images
        }
        props.submitEditProduct(data, editProduct._id)
        props.history.push({ pathname: '/' })
    }


    useEffect(() => {
        if (editProduct) {
            setPrice(editProduct.price);
            setExpiryDate(editProduct.expiryDate);
            setName(editProduct.name);
        }
    }, [editProduct])


    if (!props.loading) {
        return (
            <div className="flex justify-center">
                <form className="w-2/6" onSubmit={ submitHandler }>
                    <div className="mb-8">
                        <label className="block pb-2" htmlFor="name">Name</label>
                        <input className="w-full py-2 px-4 border-b-2 rounded bg-gray-100 focus:border-blue-600 border-transparent" type="text" value={ name } name="name" placeholder="Product Name" onChange={ (e) => setName(e.target.value) } required />
                    </div>
                    <div className="mb-8">
                        <label className="block pb-2" htmlFor="price">Price</label>
                        <input className="w-full py-2 px-4 border-b-2 rounded bg-gray-100 focus:border-blue-600 border-transparent" type="text" value={ price } name="price" placeholder="Product Price" onChange={ (e) => setPrice(e.target.value) } required />
                    </div>
                    <div className="mb-8">
                        <label className="block pb-2" htmlFor="expiry-date">Expiry Date</label>
                        <input className="w-full py-2 px-4 rounded bg-gray-100" type="date" value={ expiryDate } name="expiry-date" onChange={ (e) => setExpiryDate(e.target.value) } required />
                    </div>
                    <div className="mb-8">
                        <label className="block pb-2" htmlFor="image">Image</label>
                        <input className="w-full py-2 px-4 border-b-2 rounded bg-gray-100 focus:border-blue-600 border-transparent" type="file" accept=".jpg, .jpeg, .png" name="image" onChange={ (e) => setImage(e.target.files) } />
                    </div>
                    <button className="bg-blue-600 py-1 px-6 ring focus:ring-4 rounded text-white" type="submit">submit</button>
                </form>
            </div>
        )
    }

    return <p style={ { textAlign: 'center', fontSize: '4rem' } }>loading...</p>

}

const mapStateToProps = state => {
    return {
        editProduct: state.productsRTR.editProduct,
        loading: state.productsRTR.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        submitEditProduct: (data, id) => dispatch(actions.submitEditProduct(data, id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(EditProduct));
