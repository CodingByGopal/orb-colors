const getRandomColorValues = () => ({
    r: Math.floor(Math.random() * 256),
    g: Math.floor(Math.random() * 256),
    b: Math.floor(Math.random() * 256),
});

export const getRandomHexColor = () => {
    const { r, g, b } = getRandomColorValues();
    return `#${[r, g, b]
        .map(v => v.toString(16).padStart(2, "0"))
        .join("")}`;
};

export const getRandomRGBColor = () => {
    const { r, g, b } = getRandomColorValues();
    return `rgb(${r}, ${g}, ${b})`;
};