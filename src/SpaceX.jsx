import React from 'react';
import Missions from './Missions';
import SpaceXcontainer from './SpaceX.style';

const SpaceX = () => {
    return(
        <SpaceXcontainer>
            <header className="header">SPACE-X</header>
            <div className="information">
            <Missions />
            </div>

        </SpaceXcontainer>
    );
};
export default SpaceX;