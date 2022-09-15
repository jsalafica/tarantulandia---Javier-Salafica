import './Item.css';

const Item = ({title, price, image, stage}) => {
    return (
        <div className='items'>
            <img src={image} alt="title" />
            <h2>{title}</h2>
            <h3>{stage}</h3>
            <h3 className='price'>${price}</h3>
        </div>
    )
}

export default Item;