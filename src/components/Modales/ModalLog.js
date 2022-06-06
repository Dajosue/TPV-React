import React from 'react';
import urlPersonalized from '../config/config';



const ModalLog = ({setLoginData}) => {

    function recoverySesion(){
    
             document.getElementById("alert-warning-id").hidden = true;
             let id = document.getElementById("id_send").value;
            let INITURL = urlPersonalized();
        
            fetch(INITURL + "RestUsuarios/Login/"+ id)
            .then(res => res.json())
            .then(data => {
                let dataResponse = data.response;
    
                if(dataResponse === undefined){
        
                    (setLoginData) && setLoginData(data);
                    document.getElementById("alert-warning-id").hidden = true;
                    document.getElementById('recoveryBTN').setAttribute("data-bs-dismiss", "modal")
                    document.getElementById('recoveryBTN').click();
    
                }else{
        
                    document.getElementById("alert-warning-id").innerHTML = "Usuario no registrado";
                    document.getElementById("alert-warning-id").hidden = false;
        
                }
            })
            .catch(error => console.log(error));
            //document.getElementById('recoveryBTN').setAttribute("data-bs-dismiss", "pepito perez")
    
    }


    return (
        
        <div>
            {/* ./modal Login */}
            <div class="modal fade" id="modalLoging" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="modalLogingLabel" aria-hidden="false">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="modalLogingLabel">Inserte su número de identificación</h5>
                        </div>
                        <div class="modal-body">
                            <input type="number" class="form-control" placeholder="Número Identificación" id="id_send"/>
                            <div class="alert alert-warning mt-2" role="alert" id="alert-warning-id" hidden></div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-primary"  onClick={recoverySesion} id="recoveryBTN">Aceptar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }

    export default ModalLog;