import "./style.css";
import getData from "./service/getData.service";
import handlData from "./components/handleData";
import loading from "./components/load";
const container = document.getElementById("root");
container.innerHTML = loading();
window.addEventListener("load", () => {
  setTimeout(() => {
    getData()
      .then((data) => {
        data.forEach((user) => {
          container.innerHTML = handlData(user);
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, 500);
});
