import React, { useEffect } from "react";
import Icon from "@mdi/react";
import { mdiTableFurniture } from "@mdi/js";
import urlPersonalized from "./config/config";
import handleClickMesas from "./config/configMesas";
import handleClickMarchar from "./config/configMarchar";


const FooterButtons = ({ lista_ = [], setMesasOn, mesaActual = 0 }) => {
  return (
    <div className="container footer-btns">
      <div className="row">
        <div className="col-12">
          <div className="row">
            <div className="col-2">
              <button
                className="btn btn-marchar"
                onClick={() => handleClickMarchar(lista_, mesaActual)}
              >
                Marchar
              </button>
            </div>
            <div className="col-2">
              <button
                className="btn btn-mensaje"
                data-bs-toggle="modal"
                data-bs-target="#modalMensaje"
              >
                Mensaje
              </button>
            </div>
            <div className="col-2">
              <button
                className="btn btn-Mesas"
                data-bs-toggle="modal"
                data-bs-target="#modalMesas"
                onClick={handleClickMesas(setMesasOn)}
              >
                Mesas
              </button>
            </div>
            <div className="col-2">
              <button
                className="btn btn-cobro"
                data-bs-toggle="modal"
                data-bs-target="#modalCobro"
              >
                Cobrar
              </button>
            </div>
            <div className="col-2">
              <button
                className="btn btn-mesa"
                data-bs-toggle="modal"
                data-bs-target="#modalMesa"
              >
                Nº
                <Icon
                  path={mdiTableFurniture}
                  title="Table"
                  size={1}
                  color="black"
                />
              </button>
            </div>
            <div className="col-2">
            <label
                className="btn btn-numMesa"
              >
              Actual : <span>{mesaActual != 0 ? mesaActual : 0}</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterButtons;
