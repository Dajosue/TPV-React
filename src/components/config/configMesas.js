import urlPersonalized from "./config";


function handleClickMesas(setMesasOn) {
    let initURL = urlPersonalized();
  
    return () => {
      fetch(initURL + "RestMesas/getMesasAbiertas")
        .then((response) => response.json())
        .then((data) => {
          if (data !== null) {
            setMesasOn && setMesasOn(data);
          }
        })
        .catch((error) => console.log(error));
    };
  }
  
  export default handleClickMesas;