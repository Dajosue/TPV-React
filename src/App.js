import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import Products from './components/Products';
import TopButtons from './components/TopButtons';
import LeftList from './components/LeftList';
import FooterButtons from './components/FooterButtons';
import ModalMesa from './components/Modales/ModalMesa';
import ModalLog from './components/Modales/ModalLog';
import ModalCobro from './components/Modales/ModalCobro';
import ModalMesasLista from './components/Modales/ModalMesasLista';
import ModalMensaje from './components/Modales/ModalMensaje';


function App() {
 

  const [finalList, setFinalList] = useState([]); // lista de productos final que se envian
  const [products, setProducts] = useState([]); // productos que se solicitan para seleccionar
  
  const [mesasOn, setMesasOn] = useState([]); // mesas activas
  
  const [mesaId, setMesaIDd] = useState(); // contiene la mesa actual

  const [loginData, setLoginData] = useState(); // para mostrar o no el login si existe o no los datos
  
  return (
    <div className="App p-1">
    {loginData !== undefined ? 
      [
      <TopButtons setProducts={setProducts} />,
      <div className="container">
        <div className="row">          
          <LeftList finalList={finalList} setFinalList={setFinalList}  />
          <Products products={products} setFinalList={setFinalList} finalList={finalList}/>
        </div>
      </div>,
      <FooterButtons lista_={finalList} setMesasOn={setMesasOn} mesaActual={mesaId}/>,
      <ModalCobro setFinalList={setFinalList} setIdMesa={setMesaIDd} idMesa={mesaId} setMesasOn={setMesasOn}/>,
      <ModalMesasLista mesasOn={mesasOn} setFinalList={setFinalList} setIdMesa={setMesaIDd}/>,
      <ModalMensaje/>,
      <ModalMesa idMesa={mesaId} setIdMesa={setMesaIDd} setFinalList={setFinalList} />]
       :  <ModalLog setLoginData={setLoginData}/>}
    </div>
    
  );
}

export default App;
