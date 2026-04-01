// Centralized theme configuration
export const GOLD = '#d4af37';
export const GOLD_GRADIENT = `linear-gradient(135deg, ${GOLD}, #b57c1c)`;

export const MATERIALS = [
    { name: 'Matte Alabaster', hex: '#E6E4DF' },
    { name: 'Satin Grey', hex: '#7A7C7E' },
    { name: 'Travertine Stone', hex: '#C2B8A3' },
    { name: 'Charcoal', hex: '#2A2B2E' },
];

export const INTERIOR_STATIONS = [
    {
        label: 'Living Lounge',
        description: 'Bespoke entertainment zone with custom lounge seating and panoramic views.',
        cameraPos: [-32.42, 22.96, -11.99],
        target: [-18.70, 20.93, -0.37],
        floorplanPos: { x: 25, y: 75 },
    },
    {
        label: 'Dining Area',
        description: 'Modern 6-seater minimalist arrangement designed for luxury hosting.',
        cameraPos: [55.36, 18.45, 19.46],
        target: [50.88, 17.95, 18.52],
        floorplanPos: { x: 60, y: 60 },
    },
    {
        label: 'Gourmet Kitchen',
        description: 'Italian marble countertops paired with integrated smart-home appliances.',
        cameraPos: [53.60, 19.75, -26.55],
        target: [53.64, 19.15, -21.99],
        floorplanPos: { x: 65, y: 35 },
    },
];

export const getTheme = (isLightMode) => ({
    light: {
        bg: '#f5f5f0',
        text: '#1a1a1a',
        textMuted: '#6b6b6b',
        panel: 'rgba(255, 255, 255, 0.65)',
        panelBorder: 'rgba(0, 0, 0, 0.08)',
        navBg: 'rgba(255, 255, 255, 0.75)',
        navBorder: 'rgba(0, 0, 0, 0.1)',
        inputBg: 'rgba(0, 0, 0, 0.05)',
    },
    dark: {
        bg: '#0a0a0a',
        text: '#ffffff',
        textMuted: '#a0a0a0',
        panel: 'rgba(0, 0, 0, 0.30)',
        panelBorder: 'rgba(255, 255, 255, 0.1)',
        navBg: 'rgba(10, 10, 10, 0.80)',
        navBorder: 'rgba(255, 255, 255, 0.1)',
        inputBg: 'rgba(255, 255, 255, 0.05)',
    },
}[isLightMode ? 'light' : 'dark']);