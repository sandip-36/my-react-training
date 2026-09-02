import css from './Item.module.css'

const Item = ({fooditem, bought, buttonTxt}) => {
    
    return(
        <>
         <li className={`${css.txtcolor} list-group-item ${bought && 'active'}`}>
            <span>{fooditem}</span>
            <button className='btn btn-success float-end' 
            onClick={buttonTxt}
            >Buy</button>
            </li>
        </>
    )
}

export default Item;