import './style.css';

import img1 from '../../img/i1.jpg';
import img2 from '../../img/i2.jpg';
import img3 from '../../img/i3.jpg';
import img4 from '../../img/i4.jpg';
import img5 from '../../img/i5.jpg';


const EntryFieldBackgroundBand = () => {
    return (
        <div className="band">
            <div className="band-img">
                <img src={img1} alt="illustration" />
            </div>
            <div className="band-img">
                <img src={img2} alt="illustration" />
            </div>
            <div className="band-img">
                <img src={img3} alt="illustration" />
            </div>
            <div className="band-img">
                <img src={img4} alt="illustration" />
            </div>
            <div className="band-img">
                <img src={img5} alt="illustration" />
            </div>
        </div>
    );
}

export default EntryFieldBackgroundBand;