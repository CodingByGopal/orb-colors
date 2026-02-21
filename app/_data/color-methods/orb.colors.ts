export const normalizeHex = (input: string): string | null => {
    const hex = input.trim().replace(/^#/, '');

    if (!/^([A-Fa-f0-9]{3}|[A-Fa-f0-9]{6})$/i.test(hex)) {
        return null; // invalid input
    }

    // Expand 3-digit shorthand to 6-digit
    const fullHex = hex.length === 3 ? hex.split('').map(c => c + c).join('') : hex;

    return fullHex;
};
export const prepareColorSlug = (hexs: string) => {
    // space separated multiple hex colors and return a string of hex colors separated by '-'
    if (!hexs) return null;

    const colors = hexs?.trim()?.split(/\s+/);
    if (!colors) return null;

    const normalizedColors = colors?.map((color: string) => normalizeHex(color))
        .filter((color): color is string => Boolean(color));
    if (!normalizedColors) return null;

    const result = normalizedColors?.join('-');
    return result;
}