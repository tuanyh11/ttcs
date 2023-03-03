import React from 'react';
import { useParams } from 'react-router-dom';
import Shop from '../Shop';
import product from '../../assets/data/product';
import dataCategory from '../../assets/data/ListCategory';
const CateDetail = () => {
    const { slug } = useParams();
    const dataCate = dataCategory.data.productCategories.edges.find((product) => String(product.node.slug) === slug) || {};
    return (
        <>
            <Shop categories={true} dataCate={dataCate} />
        </>
    );
};

export default CateDetail;