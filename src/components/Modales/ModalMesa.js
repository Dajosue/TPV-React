import React from "react";
import Icon from "@mdi/react";
import { mdiTableFurniture } from "@mdi/js";
import { mdiClose } from "@mdi/js";
import urlPersonalized from "../config/config";

const ModalMesa = ({ idMesa = 0, setIdMesa, setFinalList}) => {
  function handleClickSaveTable() {
    let INITURL = urlPersonalized();

    let id = document.getElementById("inputIdMesa").value || 0;

    console.log("idMesa: " + id);

    fetch(INITURL + "RestMesas/show/" + id)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.response);
        let respuestaData = data.response;
        if (respuestaData == undefined) {
          let statusMesa = data.estado;
          //console.log("statusMesa: " + statusMesa);

          document
            .getElementById("submit_btn")
            .setAttribute("data-bs-dismiss", "modal");
          // por si estan activos
          document.getElementById("alert-warning").hidden = true;
          document.getElementById("alert-success").hidden = true;
          document.getElementById("alert-danger").hidden = true;

          // 1 = estado de mesa activa
          if (statusMesa == 1) {
            document
              .getElementById("submit_btn")
              .removeAttribute("data-bs-dismiss");
            document.getElementById("alert-danger").hidden = false;
            document.getElementById("alert-danger").innerHTML =
              "La mesa seleccionada se encuentra ocupada";
          }

          // 0 = la mesa esta libre
          if (statusMesa == 0) {
            setIdMesa && setIdMesa(id);
            setFinalList && setFinalList([]);
            document.getElementById("alert-success").hidden = false;
            document.getElementById("alert-success").innerHTML =
              "La mesa seleccionada se encuentra libre";
            document.getElementById("submit_btn").click();

            const update = {
              id_mesa: parseInt(idMesa),
              estado: 1,
            };

            const options = {
              method: "POST",
              body: JSON.stringify(update),
            };

            fetch(INITURL + "RestMesas/update/" + idMesa, options);
          }

          console.log("statusMesa: " + statusMesa);
        } else {
          // muestro que no existe la mesa indicada
          document.getElementById("alert-warning").hidden = false;
          document.getElementById("alert-warning").innerHTML =
            "La mesa seleccionada no se encuentra en la base de datos";
        }
      })
      .catch((error) => console.log(error));
  }
  return (
    <div id="modalMesaMain">
      <div
        class="modal fade"
        id="modalMesa"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="modalMesaLabel"
        aria-hidden="false"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="modalMesaLabel">
                Inserte el número de mesa
              </h5>
            </div>
            <div class="modal-body">
              <input
                type="number"
                class="form-control"
                placeholder="Nº Mesa"
                id="inputIdMesa"
              />
              <div
                class="alert alert-danger mt-2"
                role="alert"
                id="alert-danger"
                hidden
              ></div>
              <div
                class="alert alert-warning mt-2"
                role="alert"
                id="alert-warning"
                hidden
              ></div>
              <div
                class="alert alert-success mt-2"
                role="alert"
                id="alert-success"
                hidden
              ></div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-primary"
                data-bs-dismiss="modal"
              >
                Salir
              </button>
              <button
                type="button"
                class="btn btn-primary"
                onClick={handleClickSaveTable}
                id="submit_btn"
              >
                Aceptar
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* ./modal Nº Mesa - Open */}
    </div>
  );
};

export default ModalMesa;
