import './Item.css';

const Item = ({title, price, image}) => {
    return (
        <div className='items'>
            <img src={image} alt="title" />
            <h2>{title}</h2>
            <h3>${price}</h3>
        </div>
    )
}

export default Item;