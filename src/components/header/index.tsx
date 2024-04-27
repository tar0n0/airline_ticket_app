import React from 'react';
import AspectRatio from "@mui/joy/AspectRatio";

import HeaderLogo from '../../assets/images/headerLogo.jpeg'

const  Header: React.FunctionComponent = (): JSX.Element =>  {
    return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <AspectRatio ratio="2" sx={{ width: 150 }}>
                <img
                    src={HeaderLogo}
                    loading="lazy"
                    alt=""
                />
            </AspectRatio>
        </div>
    )

}

export default Header;
