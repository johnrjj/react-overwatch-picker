import React from 'react';
import styled from 'styled-components';

import HeroPortrait from '../assets/img/hero-portrait.png';

// Selected Hero Portrait Images
import GenjiSelectedImg from '../assets/img/selected-heroes/genji.png';
import MccreeSelectedImg from '../assets/img/selected-heroes/mccree.png';
import PharahSelectedImg from '../assets/img/selected-heroes/pharah.png';
import ReaperSelectedImg from '../assets/img/selected-heroes/reaper.png';
import Soldier76SelectedImg from '../assets/img/selected-heroes/soldier-76.png';
import SombraSelectedImg from '../assets/img/selected-heroes/sombra.png';
import TracerSelectedImg from '../assets/img/selected-heroes/tracer.png';
import BastionSelectedImg from '../assets/img/selected-heroes/bastion.png';
import HanzoSelectedImg from '../assets/img/selected-heroes/hanzo.png';
import JunkratSelectedImg from '../assets/img/selected-heroes/junkrat.png';
import MeiSelectedImg from '../assets/img/selected-heroes/mei.png';
import TorbjornSelectedImg from '../assets/img/selected-heroes/torbjorn.png';
import WidowmakerSelectedImg from '../assets/img/selected-heroes/widowmaker.png';
import DvaSelectedImg from '../assets/img/selected-heroes/dva.png';
import OrisaSelectedImg from '../assets/img/selected-heroes/orisa.png';
import ReinhardtSelectedImg from '../assets/img/selected-heroes/reinhardt.png';
import RoadhogSelectedImg from '../assets/img/selected-heroes/roadhog.png';
import WinstonSelectedImg from '../assets/img/selected-heroes/winston.png';
import ZaryaSelectedImg from '../assets/img/selected-heroes/zarya.png';
import AnaSelectedImg from '../assets/img/selected-heroes/ana.png';
import LucioSelectedImg from '../assets/img/selected-heroes/lucio.png';
import MercySelectedImg from '../assets/img/selected-heroes/mercy.png';
import SymmetraSelectedImg from '../assets/img/selected-heroes/symmetra.png';
import ZenyattaSelectedImg from '../assets/img/selected-heroes/zenyatta.png';

const heroSelected = {
  genji: GenjiSelectedImg,
  mccree: MccreeSelectedImg,
  pharah: PharahSelectedImg,
  reaper: ReaperSelectedImg,
  soldier76: Soldier76SelectedImg,
  sombra: SombraSelectedImg,
  tracer: TracerSelectedImg,
  bastion: BastionSelectedImg,
  hanzo: HanzoSelectedImg,
  junkrat: JunkratSelectedImg,
  mei: MeiSelectedImg,
  torbjorn: TorbjornSelectedImg,
  widowmaker: WidowmakerSelectedImg,
  dva: DvaSelectedImg,
  orisa: OrisaSelectedImg,
  reinhardt: ReinhardtSelectedImg,
  roadhog: RoadhogSelectedImg,
  winston: WinstonSelectedImg,
  zarya: ZaryaSelectedImg,
  ana: AnaSelectedImg,
  lucio: LucioSelectedImg,
  mercy: MercySelectedImg,
  symmetra: SymmetraSelectedImg,
  zenyatta: ZenyattaSelectedImg,
};

const Selection = styled.div`
  background: url(${HeroPortrait}) no-repeat;
  background-size: 100%;
  background-position: center 10px;
`;

const Hero = styled.div`
  width: 100%;
  height: 96px;
  background-repeat: no-repeat;
  background-size: 70%;
  background-image: ${props => `url(${heroSelected[props.hero]})`};
  background-position: 18px 2px;
  clip-path: polygon(
    100% 0,
    100% 58%,
    79% 58%,
    78% 58%,
    78% 68%,
    51% 80%,
    22% 68%,
    23% 61%,
    0 0
  );
  margin-bottom: 10px;
`;

const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Name = styled.div`
  font-family: Overwatch;
  font-style: italic;
  font-size: 18px;
  color: #57f2ff;
  margin-right: 3px;
`;

const HeroDropdown = styled.div`
  display: flex;
  justify-content: center;
  transform: scaleY(-1);
  height: 11px;
  width: 11px;
  border: 1px solid #fff;
  border-radius: 9px;
  :after {
    content: "^";
    color: #fff;
    padding-left: 1px;
    font-family: Overwatch;
  }
`;

const UserSelectedHeroInfo = ({ username, hero }) =>
  <Selection>
    <Hero hero={hero} />
    <Info>
      <Name>
        {username}
      </Name>
      <HeroDropdown />
    </Info>
  </Selection>;

export { UserSelectedHeroInfo };
