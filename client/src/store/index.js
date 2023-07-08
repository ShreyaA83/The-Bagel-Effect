import { proxy } from "valtio";

const state= proxy({
    intro: true,
    color: "#EFBD48",
    isLogoTexture: false,
    isFullTexture: true,
    logoDecal: './spot.png',
    fullDecal: './spot.png',
});

export default state;