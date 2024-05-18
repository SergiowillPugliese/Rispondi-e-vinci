/**
 * Genera uno stile CSS per un paragrafo con i parametri specificati.
 *
 * @param {string} color - Il colore del testo.
 * @param {string} position - L'allineamento del testo.
 * @param {string} size - La dimensione del testo.
 * @param {string} weight - Il peso del font.
 * @returns {string} Una stringa contenente lo stile CSS.
 */
export const checkpointSizeParagraphStyle = (color, position, size, weight) => {
  return `
        color: ${color};
        text-align: ${position};
        font-size: ${size};
        font-weight: ${weight};
    `;
};
