import "./style.css";
import getData from "./service/getData.service";
import handleData from "./components/handleData";
import loading from "./components/load";
const container = document.getElementById("root");
container.innerHTML = loading();
window.addEventListener("load", () => {
  getData()
  .then((data) => {
    container.innerHTML = "";
    data.forEach((item) => {
      const innerContainer = document.createElement("div");
      innerContainer.innerHTML = handleData(item);
      container.appendChild(innerContainer);
    });
  })
  .catch((error) => {
    console.log(error);
  });
});
