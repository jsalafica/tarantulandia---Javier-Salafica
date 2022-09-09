import "./ItemDetail.css";

const ItemDetail = ({ item }) => {
  return (
    <div className='item'>
            <img src={item.image} alt="title" />
            <h2>{item.title}</h2>
            <h4>{item.detail}</h4>
            <h3>${item.price}</h3>
        </div>
  )
}

export default ItemDetail