import amber from './assets/amber.webp';
import copper from './assets/copper.webp';
import diamond from './assets/diamond.webp';
import emerald from './assets/emerald.webp';
import fern from './assets/fern.webp';
import gold from './assets/gold.webp';
import iron from './assets/iron.webp';
import nautilidae from './assets/nautilidae.webp';
import raptor from './assets/raptor.webp';
import ruby from './assets/ruby.webp';
import sapphire from './assets/sapphire.webp';
import scrap from './assets/scrap.webp';
import silver from './assets/silver.webp';
import stego from './assets/stego.webp';
import stone from './assets/stone.webp';
import trex from './assets/trex.webp';
import trice from './assets/trice.webp';
import trilobite from './assets/trilobite.webp';
import up from './assets/up.svg';
import down from './assets/down.svg';
import close from './assets/close.svg';

export type Tile = string;

export const tiles: Record<string, Tile> = {
    nautilidae,
    raptor,
    scrap,
    stego,
    trex,
    trice,
    trilobite,
    fern,
    copper,
    gold,
    iron,
    silver,
    stone,
    amber,
    emerald,
    sapphire,
    ruby,
    diamond,
    up,
    down,
    close
};
