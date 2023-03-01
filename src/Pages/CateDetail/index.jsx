import React from 'react';
import { useParams } from 'react-router-dom';
import Shop from '../Shop';
import product from '../../assets/data/product';
const CateDetail = () => {
    const { slug } = useParams();
    console.log(slug);
    console.log(product.data.products.edges);
    return (
        <>
            <Shop categories={true} />
        </>
    );
};

export default CateDetail;