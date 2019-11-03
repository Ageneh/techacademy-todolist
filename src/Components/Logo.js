import React from 'react';

const logoSrc = "http://www.tech-academy.io/wp-content/uploads/2018/11/white_logo_transparent-e1541684410304.png";

export const Logo = () => {
    return (
        <div className={"logo-wrapper"}>
            <img src={logoSrc}
                 alt="TechAcademy"/>
        </div>
    );
};

export default Logo;
