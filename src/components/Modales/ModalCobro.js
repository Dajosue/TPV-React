import React from "react";
import urlPersonalized from "../config/config";
import handleClickMesas from "../config/configMesas";

const ModalCobro = ({ setFinalList, setIdMesa, idMesa, setMesasOn }) => {
  function cerrar() {
    console.log("cerrar");

      let idSendMesa = idMesa;

      (setFinalList) && setFinalList([]);
      (setIdMesa) && setIdMesa(0);

      fetch(urlPersonalized() + "RestMesas/updateMesa/" + idMesa, {
        method: "POST",
        body: JSON.stringify({
          id_mesa: idSendMesa,
          estado: 0,
        }),
      })
        .then((response) => response.json())
        .then((data) => console.log(data));
        handleClickMesas(setMesasOn);
      fetch(urlPersonalized() + "RestMesaMarchando/delete/" + idMesa);
  }

  return (
    <div>
      {/* ./modal Mensaje */}
      <div
        class="modal fade"
        id="modalCobro"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="modalCobroLabel"
        aria-hidden="false"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="modalCobroLabel">
                Inserte el importe recibido
              </h5>
            </div>
            <div class="modal-body">
              <label>¿Esta seguro que desea cerrar la mesa?:</label>
            </div>
            <div class="modal-footer d-md-block">
              <button
                type="button"
                class="btn btn-primary"
                ata-bs-dismiss="modal"
              >
                Sacar Ticket
              </button>
              <button
                type="button"
                class="btn btn-primary"
                data-bs-dismiss="modal"
                onClick={cerrar}
              >
                Cerrar Mesa
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalCobro;
