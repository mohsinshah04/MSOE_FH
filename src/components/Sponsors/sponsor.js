import './sponsor.css'

import SF from '../../assets/SF-logo.png'
import SAE from '../../assets/sae-logo.png'
import Regal from '../../assets/Regal-logo.png'
import SolidWorks from '../../assets/solidworks-logo.png'
import Polaris from '../../assets/Polaris-Industries-Logo.png'
import OZ from '../../assets/OZRace-logo.png'
import MilTool from '../../assets/MilTool-logo.png'
import JWS from '../../assets/jwspeaker-logo.png'
import Hoosier from '../../assets/hoosier-logo.png'
import Hayes from '../../assets/hayes-logo.png'
import Generac from '../../assets/generac-logo.png'
import Evology from '../../assets/evology-logo.png'
import HE from '../../assets/HE-logo.png'
import IEEE from '../../assets/IEEE-logo.png'

const sponsor = () => {
    return (
        <div className='test'>
        <div id="sponsors">
            <h1 className="contactPageTitle">Our Sponsors</h1>
            <p className="sponsorDesc">A huge thank you to all our sponsors. Your generous contributions and encouragement are essential to our success. Thanks to your backing, we are able to pursue our engineering goals with passion and determination.
<br/>Your support is more than just financial; it fuels our innovation, drives our ambition, and plays a crucial role in our journey. We are grateful for your belief in our vision and for being such an integral part of our pursuit of excellence. 
</p>
            <div className="sponsorImgs">
                <img src={SF} alt="sponsor" className="sponsorImg" />
                <img src={SAE} alt="sponsor" className="sponsorImg" />
                <img src={Regal} alt="sponsor" className="sponsorImg" />
                <img src={SolidWorks} alt="sponsor" className="sponsorImg" />
                <img src={Polaris} alt="sponsor" className="sponsorImg" />
                <img src={OZ} alt="sponsor" className="sponsorImg" />
                <img src={MilTool} alt="sponsor" className="sponsorImg" />
                <img src={JWS} alt="sponsor" className="sponsorImg" />
                <img src={Hoosier} alt="sponsor" className="sponsorImg" />
                <img src={Hayes} alt="sponsor" className="sponsorImg" />
                <img src={Generac} alt="sponsor" className="sponsorImg" />
                <img src={Evology} alt="sponsor" className="sponsorImg" />
                <img src={HE} alt="sponsor" className="sponsorImg" />
                <img src={IEEE} alt="sponsor" className="sponsorImg" />
            </div>
        </div>
        </div>
    )
}

export default sponsor