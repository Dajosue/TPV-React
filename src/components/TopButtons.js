import React, { useEffect } from 'react';
import urlPersonalized from './config/config';

const TopButtons = ({ setProducts }) => {

    const [LoginShow, setLogginShow] = React.useState(true);
    
    let INITURL = urlPersonalized();

    const fetchBebidas = (url) => {
        fetch(url)
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.log(error))
    }

    function GetData() {
        fetchBebidas(INITURL+"RestBebidas");
    }
    function GetData2() {
        fetchBebidas(INITURL+"RestPlatosCarta");
    }
    function GetData3() {
        fetchBebidas(INITURL+"RestDesayuno");
    }
    function GetData4() {
        fetchBebidas(INITURL+"RestMeriendas");
    }
    function GetData5() {
        fetchBebidas(INITURL+ "RestPersonal");
    }

    return (
        <div className="container mb-4">
            <div className="row">        
                <div className="col-2">
                    <button className="btn btn-nav" onClick={GetData}>Bebidas</button>
                </div>
                <div className="col-2">
                    <button className="btn btn-nav" onClick={GetData2}>Carta</button>
                </div>
                <div className="col-2">
                    <button className="btn btn-nav" onClick={GetData3}>Desayuno</button>

                </div>
                <div className="col-2">
                    <button className="btn btn-nav" onClick={GetData4}>Meriendas</button>
                </div>
                <div className="col-2">
                    <button className="btn btn-nav" onClick={GetData5}>Personal</button>
                </div>
                <div className="col-2 ">
                    <button type='button' className="btn btn-navLog" data-bs-toggle="modal" data-bs-target="#modalLoging">Login</button>
                </div>
            </div>
            
        </div>
    );

}

export default TopButtons;