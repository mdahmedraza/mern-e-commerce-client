import React from 'react';
import './ProductCategory.scss';
import { useNavigate } from 'react-router-dom';

const categories = [
    {
        id: 1,
        title: 'gadgets',
        image: 'https://i.ibb.co/SGVkd3m/c1.jpg'
    },
    {
        id: 2,
        title: 'womeng fashion',
        image: 'https://i.ibb.co/nQKLjrW/c2.jpg'
    },
    {
        id: 3,
        title: 'sport sneakers',
        image: 'https://i.ibb.co/fNkBYgr/c3.jpg'
    }
]

const Category = ({title, image}) => {
    const navigate = useNavigate();
    return(
        <div className='category'>
            <h3>{title}</h3>
            <img src={image} alt="" />
            <button className='--btn' onClick={()=>navigate('/shop')}>
                {'shop Now>>>'}
            </button>
        </div>
    )
}
const ProductCategory = () => {
    return(
        <div className='categories'>
            {categories.map((cat)=>{
                return(
                    <div key={cat.id} className='--flex-center'>
                        <Category title={cat.title} image={cat.image} />
                    </div>
                )
            })}
        </div>
    )
}

export default ProductCategory;