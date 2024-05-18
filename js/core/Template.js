import { Utils } from "../shared/Utils.js";
import { paragraph } from "../shared/style.js";

export class Template {
  #app = document.getElementById("app");
  #sidecontainer = Utils.createElement({ tagName: "div", id: "sidecontainer" });
  #maincontainer = Utils.createElement({ tagName: "div", id: "maincontainer" });

  async insertName() {
    const fragment = Utils.createFragment();
    const div = Utils.createElement({ tagName: "div", id: "fomrContainer" });
    const input = Utils.createElement({
      tagName: "input",
      id: "name",
      className: "name",
      placeholder: "Enter your name",
    });
    const label = Utils.createElement({
      tagName: "label",
      className: "name",
      content: "Enter your name",
      htmlFor: "name",
    });
    const button = Utils.createElement({
      tagName: "button",
      className: "name",
      content: "Start",
    });

    fragment.appendChild(label);
    fragment.appendChild(input);
    fragment.appendChild(button);
    div.appendChild(fragment);
    this.#app.appendChild(div);

    return new Promise((resolve) => {
      button.addEventListener("click", () => {
        const name = input.value.trim();
        if (name) {
          resolve(name);
        } else {
          alert("Please enter your name.");
        }
      });
    });
  }

  // Imposta il layout di base
  async baseViewTemplate(elContent1) {
    try {
      const userName = await this.insertName();
      const div = Utils.createElement({
        tagName: "div",
        id: "userNameContent",
      });
      div.appendChild(
        this.#addUserNameInMainView(
          userName.slice(0, 1).toUpperCase() + userName.slice(1)
        )
      );
      this.#sidecontainer.appendChild(this.#createSideViewTemplate(elContent1));
      this.#maincontainer.appendChild(div);
      this.#app.replaceChildren(this.#sidecontainer, this.#maincontainer);
    } catch (error) {
      console.error("Error initializing the game:", error);
    }
  }

  // Imposta il layout della vista laterale
  #createSideViewTemplate = (prizes) => {
    const fragment = Utils.createFragment();
    prizes.forEach((prize) => {
      const prizeStyle = prize.checkpoint
        ? paragraph("#DA2525", "center", "60px", "bold")
        : paragraph("#000", "center", "45px", "bold");
      const prizeElement = Utils.createElement({
        tagName: "p",
        className: "prizesValue",
        style: prizeStyle,
        content: prize.amount,
      });
      const divPrize = Utils.createElement({
        tagName: "div",
        className: "prizes",
        content: prizeElement.outerHTML,
      });
      fragment.appendChild(divPrize);
    });
    return fragment;
  };

  // Imposta il layout della vista principale
  #addUserNameInMainView = (userName) => {
    const fragment = Utils.createFragment();
    const h1 = Utils.createElement({
      tagName: "h1",
      className: "nameOfUser",
      content: `Nome Concorrente: ${userName}`,
    });
    fragment.appendChild(h1);
    return fragment;
  };
}
