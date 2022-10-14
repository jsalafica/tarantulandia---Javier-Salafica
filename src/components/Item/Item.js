import './Item.css';

const Item = ({title, price, image, stage, stock}) => {
    return (
        <div className='items'>
            <img src={image} alt="imagen" />
            <h2>{title}</h2>
            <h3>{stage}</h3>
            {stock!==0 ? 
            <h3 className='price'>${price}</h3> 
            : 
            <h3 className='price'>Sin stock</h3> }
        </div>
    )
}

export default Item;