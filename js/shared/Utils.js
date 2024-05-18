export class Utils {
  static createElement({ tagName, className, id, style, content, htmlFor }) {
    const element = document.createElement(tagName);
    if (className) element.className = className;
    if (id) element.id = id;
    if (htmlFor) element.htmlFor = htmlFor;
    if (style) element.style.cssText = style;
    if (content) element.innerHTML = content;
    return element;
  }

  static createFragment() {
    return document.createDocumentFragment();
  }
}
