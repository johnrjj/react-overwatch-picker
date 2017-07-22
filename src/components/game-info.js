import React from 'react';
import styled from 'styled-components';

const GameInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 32px 23px;
`;

const MatchInfo = styled.div``;

const MapInfo = styled.div`
  font-size: 28px;
  font-family: Overwatch;
  font-style: italic;
  position: relative;
  top: -42px;
  left: 13px;
  color: #fff;
`;

const GameTypeInfo = styled.div`
  font-size: 90px;
  font-style: italic;
  font-family: Overwatch;
  color: #ce1631;
`;

const HeroInfo = styled.div`
  font-size: 55px;
  font-style: italic;
  font-family: Overwatch;
  color: #fff;
  position: relative;
  top: 13px;
  left: -12px;
`;

const GameInfo = ({ gameType, mapName, selectedHero }) =>
  <GameInfoContainer>
    <MatchInfo>
      <GameTypeInfo>
        {gameType}
      </GameTypeInfo>
      <MapInfo>
        {mapName}
      </MapInfo>
    </MatchInfo>
    <HeroInfo>
      {selectedHero}
    </HeroInfo>
  </GameInfoContainer>;

export { GameInfo };
