export const paragraph = (color, position, size, weight) => {
  return `
        color: ${color};
        text-align: ${position};
        font-size: ${size};
        font-weight: ${weight};
    `;
};
