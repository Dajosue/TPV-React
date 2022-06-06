import React from 'react';
import Icon from "@mdi/react";
import { mdiTableFurniture } from '@mdi/js';
import { mdiClose } from '@mdi/js';

const ModalMensaje = () => {
    return (
        <div>
            {/* ./modal mensaje */}
            <div class="modal face" id="modalMensaje" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="modalMensajeLabel" aria-hidden="true" >
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="modalLMensajeLabel">Inserte un mensaje</h5>
                        </div>
                        <div class="modal-body">
                            <input type="text" class="form-control" placeholder="Mensaje" />
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Aceptar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default ModalMensaje;