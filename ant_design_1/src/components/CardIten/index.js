import "./CardItem.css"
function CardItem({title}){
    return<>
    <div className="cart__item">
        {title && <h4>{title}</h4>}
    </div>

    </>
}
export default CardItem