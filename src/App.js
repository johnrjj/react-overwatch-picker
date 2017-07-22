import React, { Component } from 'react';
import styled from 'styled-components';
import { HeroOptions } from './components/hero-options';
import { UserSelectedHeroInfo } from './components/hero-select';
import { GameInfo } from './components/game-info';
import { PrimaryButton } from './components/buttons';
import Background from './assets/img/bastion.jpg';

const AppContainer = styled.div`
  display: grid;
  height: 600px;
  width: 100%;
  grid-template-columns: 1fr;
  grid-template-rows: 268px 39px 140px 83px 1fr;
  grid-template-areas: "top" "countdown" "selections" "heroes" "select";
  background: url(${Background}) no-repeat;
  background-size: cover;
`;

const PlayerSelections = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 77px);
  justify-content: center;
  grid-column-gap: 29px;
  grid-area: selections;
`;

const heroes = [
  ['genji', 'mccree', 'pharah', 'reaper', 'soldier76', 'sombra', 'tracer'],
  ['bastion', 'hanzo', 'junkrat', 'mei', 'torbjorn', 'widowmaker'],
  ['dva', 'orisa', 'reinhardt', 'roadhog', 'winston', 'zarya'],
  ['ana', 'lucio', 'mercy', 'symmetra', 'zenyatta'],
];

class App extends Component {
  state = {
    gameType: 'Attack',
    mapName: `King's Row`,
    selectedHero: 'bastion',
  };
  render() {
    const { gameType, mapName, selectedHero } = this.state;

    return (
      <AppContainer>
        <GameInfo
          gameType={gameType}
          mapName={mapName}
          selectedHero={selectedHero}
        />
        <PlayerSelections>
          <UserSelectedHeroInfo hero="bastion" username="thehazzard" />
          <UserSelectedHeroInfo hero="orisa" username="arya" />
          <UserSelectedHeroInfo hero="dva" username="swagmaster" />
          <UserSelectedHeroInfo hero="winston" username="flex42" />
          <UserSelectedHeroInfo hero="genji" username="swankytiger" />
          <UserSelectedHeroInfo hero="lucio" username="din" />
        </PlayerSelections>
        <HeroOptions
          selectedHero={selectedHero}
          onSelectHero={ev => console.log(ev, 'selected hero')}
          heroes={heroes}
        />
        <PrimaryButton>Select</PrimaryButton>
      </AppContainer>
    );
  }
}

export default App;
