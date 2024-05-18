import { Utils } from "../shared/Utils.js";
import { checkpointSizeParagraphStyle } from "../shared/style.js";

/**
 * La classe Template gestisce la creazione e il rendering del layout dell'applicazione.
 */
export class Template {
  #app = document.getElementById("app");
  #sidecontainer = Utils.createElement({ tagName: "div", id: "sidecontainer" });
  #maincontainer = Utils.createElement({ tagName: "div", id: "maincontainer" });

  /**
   * Inserisce un campo di input per il nome dell'utente e un pulsante per confermare l'inserimento.
   * @returns {Promise<string>} Una promessa che risolve con il nome dell'utente inserito.
   */
  async insertName() {
    const fragment = Utils.createFragment();
    const div = Utils.createElement({ tagName: "div", id: "formContainer" });
    const input = Utils.createElement({
      tagName: "input",
      id: "name",
      className: "name",
    });
    const label = Utils.createElement({
      tagName: "label",
      className: "name",
      content: "Inserisci il tuo nome",
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
          alert("Per favore, inserisci il tuo nome.");
        }
      });
    });
  }

  /**
   * Imposta il layout di base dell'applicazione.
   * @param {Array} elContent1 - Un array di contenuti da visualizzare nella vista laterale.
   */
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
      console.error("Errore nell'inizializzazione dell'applicazione:", error);
    }
  }

  /**
   * Crea il layout della vista laterale.
   * @param {Array} prizes - Un array di premi da visualizzare nella vista laterale.
   * @returns {DocumentFragment} Un frammento di documento contenente il layout della vista laterale.
   */
  #createSideViewTemplate = (prizes) => {
    const fragment = Utils.createFragment();
    prizes.forEach((prize) => {
      const prizeStyle = prize.checkpoint
        ? checkpointSizeParagraphStyle("#DA2525", "center", "60px", "bold")
        : checkpointSizeParagraphStyle("#000", "center", "45px", "bold");
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

  /**
   * Aggiunge il nome dell'utente nella vista principale.
   * @param {string} userName - Il nome dell'utente da visualizzare.
   * @returns {DocumentFragment} Un frammento di documento contenente il nome dell'utente.
   */
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
