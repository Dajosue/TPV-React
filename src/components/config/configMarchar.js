import urlPersonalized from "./config";

function handleClickMarchar(list, idMesa) {
  console.log("handleClick");

  for (let item of list) {
    item.id_mesa = idMesa;
  }
  console.log(list);

  let formPost = JSON.stringify(list);

  console.log(formPost);

  let initURL = urlPersonalized();

  fetch(initURL + "RestMesaMarchando/create", {
    method: "POST",
    body: formPost,
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
}

export default handleClickMarchar;
