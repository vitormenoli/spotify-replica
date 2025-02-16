import { Link, useLocation } from 'react-router-dom'
import SingleItem from './SingleItem'

const ItemList = ({ title, items, itemsArray, path, idPath }) => {

  const { pathname } = useLocation()

  const isHome = pathname === '/'
  const finalItems = isHome ? items : Infinity

  return (
        <div className="item-list">
            <div className="item-list__header">
                <h2>{title} populares</h2>

                {isHome ? (
                    <Link to={path} className="main__link">
                        Mostrar Tudo
                    </Link>
                ) : (
                    <></>
                )}
            </div>
    
            <div className="item-list__container">
                {itemsArray
                    .filter((currentValue, index) => index < finalItems)
                    .map((currObj, index) => (
                        <SingleItem
                            {...currObj}
                            idPath={idPath}
                            key={`${title}-${index}`}
                        />
                    ) )}
            </div>
        </div>
  )
}

export default ItemList