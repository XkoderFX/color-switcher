export const generateColorsArray = () => {
    const colors = [];
    for (let i = 0; i < 9; i++) {
        colors.push(generateColor());
    }
    return colors;
};

export const generateColor = () =>
    `#${Math.floor(Math.random() * 16777215).toString(16)}`;
