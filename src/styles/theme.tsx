type ModeType = "Light" | "Dark";

export interface themeContentInterface {
    background: string;
    body: string;
}

export interface themeInterface {
    [key: string]: themeContentInterface;
}

const white = "#FFFFFF";
const black = "#161617";
const gray = "#F8F8F9";

const themeLight: themeContentInterface = {
    background: gray,
    body: black,
};

const themeDark: themeContentInterface = {
    background: black,
    body: white,
};

const themes: themeInterface = {
    light: themeLight,
    dark: themeDark,
};

const theme = (mode: ModeType): themeContentInterface => (mode === "Dark" ? themes["dark"] : themes["light"]);

export default theme;
