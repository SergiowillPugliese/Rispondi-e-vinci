/**
 * Utils - Classe contenente metodi utili per la manipolazione del DOM.
 */
export class Utils {
  /**
   * Crea un nuovo elemento HTML con le proprietà e gli attributi specificati.
   *
   * @param {Object} params - Oggetto contenente le proprietà dell'elemento.
   * @param {string} params.tagName - Tipo di elemento HTML da creare (es. 'div', 'span', 'button').
   * @param {string} [params.className] - Classe CSS da assegnare all'elemento.
   * @param {string} [params.id] - ID da assegnare all'elemento.
   * @param {string} [params.style] - Stile CSS in formato testo da applicare all'elemento.
   * @param {string} [params.content] - Contenuto HTML da inserire all'interno dell'elemento.
   * @param {string} [params.htmlFor] - Attributo 'for' (usato principalmente con le etichette 'label').
   * @param {Object} [params.attributes] - Oggetto contenente altri attributi da aggiungere all'elemento.
   * @returns {HTMLElement} L'elemento HTML creato.
   *
   * @example
   * const button = Utils.createElement({
   *   tagName: 'button',
   *   className: 'btn btn-primary',
   *   id: 'myButton',
   *   style: 'color: white; background-color: blue;',
   *   content: 'Click Me',
   *   attributes: {
   *     'data-toggle': 'modal',
   *     'aria-label': 'Open Modal'
   *   }
   * });
   * document.body.appendChild(button);
   */
  static createElement({
    tagName,
    className,
    id,
    style,
    content,
    htmlFor,
    attributes,
  }) {
    const element = document.createElement(tagName);
    if (className) element.className = className;
    if (id) element.id = id;
    if (htmlFor) element.htmlFor = htmlFor;
    if (style) element.style.cssText = style;
    if (content) element.innerHTML = content;
    if (attributes) {
      for (const [key, value] of Object.entries(attributes)) {
        element.setAttribute(key, value);
      }
    }
    return element;
  }

  /**
   * Crea e restituisce un nuovo DocumentFragment.
   *
   * @returns {DocumentFragment} Un nuovo DocumentFragment.
   *
   * @example
   * const fragment = Utils.createFragment();
   * fragment.appendChild(document.createElement('div'));
   * document.body.appendChild(fragment);
   */
  static createFragment() {
    return document.createDocumentFragment();
  }
}
