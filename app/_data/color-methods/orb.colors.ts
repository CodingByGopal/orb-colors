export const normalizeHex = (hex: string) => {
    if (!hex) return null;

    hex = hex.replace('#', '').trim().toLowerCase();

    if (hex.length === 3) {
        return hex.split('').map((ch: string) => ch + ch).join('');
    }

    if (hex.length === 6) {
        return hex;
    }

    return null; // invalid hex
}

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