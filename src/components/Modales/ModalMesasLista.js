import React from "react";
import Icon from "@mdi/react";
import { mdiTableFurniture } from "@mdi/js";
import { mdiClose } from "@mdi/js";
import urlPersonalized from "../config/config";

const ModalMesasLista = ({ mesasOn = [], setFinalList, setIdMesa }) => {

  function openMesa(openMesaId) {
    return () => {
      console.log("openMesa: " + openMesaId);
      fetch(urlPersonalized()+`/RestMesaMarchando/showList/${openMesaId}`)
      .then(res => res.json())
      .then(data => {
        (setFinalList) && setFinalList(data);
        (setIdMesa) && setIdMesa(openMesaId);
      });
    }
  }


  return (
    <div>
      <div
        class="modal fade"
        id="modalMesas"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="modalMesasLabel"
        aria-hidden="false"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="modalMesasLabel">
                Mesas abiertas
              </h5>
            </div>
            <div class="modal-body">
              <div class="container">
                <div class="row scrollMesasAbiertas">
                  {mesasOn.map((mesa, index) => (
                    <div class="col-2" key={index}>
                      <button type="button" class="btn btn-success mx-1" onClick={openMesa(mesa.num_mesa)}>
                      <Icon
                        path={mdiTableFurniture}
                        title="Table"
                        size={1}
                        color="white"
                      />
                      <p>{mesa.num_mesa}</p>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div class="modal-footer d-md-block">
              <button
                type="button"
                class="btn btn-primary"
                data-bs-dismiss="modal"
              >
                <Icon path={mdiClose} title="Table" size={1} color="white" />
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* ./modal Mostrar Mesa */}
    </div>
  );
};

export default ModalMesasLista;
