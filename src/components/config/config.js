function urlPersonalized() {
  let urlPersonalized = "";
  switch ("pro") {
    case "dev":
      urlPersonalized = "http://dajosueapi.test/";
      break;
    case "pro":
      urlPersonalized = "https://dajosue.jtorsuarz.com/";
      break;
  }
  return urlPersonalized;
}


export default urlPersonalized;