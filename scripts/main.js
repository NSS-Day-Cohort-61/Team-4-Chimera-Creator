import { chimera } from "./chimera.js";

const mainHTML = document.querySelector(".chimera");

const renderHTML = () => {
  mainHTML.innerHTML = chimera();
};

renderHTML();
