import React from 'react';


const LeftList = ({ finalList = [], setFinalList }) => {

    if (finalList.length <= 0) {

        return (
            <div className="col-4">
                <div className="row">
                    <h4>Lista Productos</h4>
                </div>
                <div className="row scrollPedidos">
                    <p className="card-text">No hay productos</p>
                </div>
            </div>
        );
    }


    var precioFinal = 0.00;
    var dataPrecio = finalList.map((item) => {
        precioFinal += parseFloat(item.precio);
    });

    function deleteItem(id, precio) {
        finalList.splice(id, 1);
        precioFinal -= parseFloat(precio);
        (setFinalList) && setFinalList([...finalList]);

    }

    return (
        <div className="col-4">
            <div className="row">
                <h4>Lista Productos</h4>
            </div>
            <div className="row scrollPedidos">
                <div className="list-group">
                    {finalList.map((item, index) => (
                    <ul class="list-group" key={index}>
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                        {item.nombre ? item.nombre : item.nombre_product}
                        <span class="badge badge-primary badge-pill bg-danger" onClick={() => deleteItem(index, item.precio)}>X</span>
                        </li>
                    </ul>
                    ))}

                </div>
            </div>
            <div className="row">
                <button type="button" className="btn btn-outline-primary">Precio: {precioFinal.toFixed(2)}</button>
            </div>
        </div>
    );
}

export default LeftList;