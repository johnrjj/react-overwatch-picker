import React from 'react';
import styled from 'styled-components';

// Hero Options to choose from
import GenjiOptionImg from '../assets/img/heroes/genji.png';
import MccreeOptionImg from '../assets/img/heroes/mccree.png';
import PharahOptionImg from '../assets/img/heroes/pharah.png';
import ReaperOptionImg from '../assets/img/heroes/reaper.png';
import Soldier76OptionImg from '../assets/img/heroes/soldier-76.png';
import SombraOptionImg from '../assets/img/heroes/sombra.png';
import TracerOptionImg from '../assets/img/heroes/tracer.png';
import BastionOptionImg from '../assets/img/heroes/bastion.png';
import HanzoOptionImg from '../assets/img/heroes/hanzo.png';
import JunkratOptionImg from '../assets/img/heroes/junkrat.png';
import MeiOptionImg from '../assets/img/heroes/mei.png';
import TorbjornOptionImg from '../assets/img/heroes/torbjorn.png';
import WidowmakerOptionImg from '../assets/img/heroes/widowmaker.png';
import DvaOptionImg from '../assets/img/heroes/dva.png';
import OrisaOptionImg from '../assets/img/heroes/orisa.png';
import ReinhardtOptionImg from '../assets/img/heroes/reinhardt.png';
import RoadhogOptionImg from '../assets/img/heroes/roadhog.png';
import WinstonOptionImg from '../assets/img/heroes/winston.png';
import ZaryaOptionImg from '../assets/img/heroes/zarya.png';
import AnaOptionImg from '../assets/img/heroes/ana.png';
import LucioOptionImg from '../assets/img/heroes/lucio.png';
import MercyOptionImg from '../assets/img/heroes/mercy.png';
import SymmetraOptionImg from '../assets/img/heroes/symmetra.png';
import ZenyattaOptionImg from '../assets/img/heroes/zenyatta.png';

const heroOption = {
  genji: GenjiOptionImg,
  mccree: MccreeOptionImg,
  pharah: PharahOptionImg,
  reaper: ReaperOptionImg,
  soldier76: Soldier76OptionImg,
  sombra: SombraOptionImg,
  tracer: TracerOptionImg,
  bastion: BastionOptionImg,
  hanzo: HanzoOptionImg,
  junkrat: JunkratOptionImg,
  mei: MeiOptionImg,
  torbjorn: TorbjornOptionImg,
  widowmaker: WidowmakerOptionImg,
  dva: DvaOptionImg,
  orisa: OrisaOptionImg,
  reinhardt: ReinhardtOptionImg,
  roadhog: RoadhogOptionImg,
  winston: WinstonOptionImg,
  zarya: ZaryaOptionImg,
  ana: AnaOptionImg,
  lucio: LucioOptionImg,
  mercy: MercyOptionImg,
  symmetra: SymmetraOptionImg,
  zenyatta: ZenyattaOptionImg,
};

const HeroOption = styled.div`
  background: black;
  background-image: ${props => `url(${heroOption[props.hero]})`};
  width: 30px;
  height: 44px;
  margin-right: 3.2px;
  background-size: cover;
  transform: translate3D(0px, 0px, 0px) skewX(-15deg);
  transform-origin: bottom left;
  box-shadow: inset 0px 2px 0px 0px #fff, inset 0px -1px 0px 0px #fff;
  border-radius: 3px;
  transition-duration: 25ms;
  :hover {
    transform: translateZ(0) scale(1.15) skewX(-15deg) translate(-2px, 2px);
    box-shadow: 0 0 0 3px #fff;
    z-index: 2;
  }
`;

const HeroOptionSelected = styled.div`
  background: #fe8a02;
  background-image: ${props => `url(${heroOption[props.hero]})`};
  width: 30px;
  height: 44px;
  margin-right: 3.2px;
  background-size: cover;
  transform: translateZ(0) scale(1.6) skewX(-15deg) translate(-3px, 10px);
  transform-origin: bottom left;
  box-shadow: 0px 0px 8px 5px #fe8a02;
  border-style: solid;
  border: 3px solid #fff;
  border-bottom: solid 10px #fff;
  border-radius: 3px;
  transition-duration: 25ms;
  z-index: 3;
`;

const Heroes = styled.div`
  grid-area: heroes;
  display: grid;
  grid-template-columns: 241px 213px 206px 177px;
  grid-column-gap: 32px;
  justify-content: center;
`;

const Category = styled.div`
  display: flex;
  align-items: center;
`;

const HeroOptions = ({ selectedHero, onSelectHero, heroes }) =>
  <Heroes>
    {heroes.map((heroCategory, i) =>
      <Category key={i}>
        {heroCategory.map(
          hero =>
            selectedHero === hero
              ? <HeroOptionSelected
                  key={hero}
                  onClick={() => onSelectHero(hero)}
                  hero={hero}
                />
              : <HeroOption
                  key={hero}
                  onClick={() => onSelectHero(hero)}
                  hero={hero}
                />
        )}
      </Category>
    )}
  </Heroes>;

export { HeroOptions };
