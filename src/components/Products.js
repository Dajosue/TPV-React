import React from 'react';
import Icon from "@mdi/react";
import { mdiPlusCircle } from '@mdi/js';



const Products = ({ products = [], setFinalList, finalList = [] }) => {

    function recordProduct(product) {
        return function () {
            (setFinalList) && setFinalList([...finalList, product]);
        }
    }

    return (
        <div className="col scrollProductos">
            <div className="row">
                {products.map((item, index) => (
                    <div className="col-3" key={index} styles={{ width: "18rem" }}>
                        <button className="btn btn-outline-primary btns-productos" onClick={recordProduct(item)}>
                            {item.nombre}<br></br>{item.description}
                            {/*{item.description}<br></br>*/}
                            {item.precio} €<br></br>
                            <Icon path={mdiPlusCircle} title="Table" size={1} color="blue" />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default Products;