import React from 'react'
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';

import './SocialMedia.css';

const SocialMedia = () => {
    return (
        <div className='SocalMedia'>
            <FacebookIcon style={{ fontSize: 35 }}/>
            <TwitterIcon style={{ fontSize: 35 }} />
            <InstagramIcon style={{ fontSize: 35 }}/>
        </div>
    )
}

export default SocialMedia;