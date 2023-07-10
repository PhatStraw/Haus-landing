import * as React from 'react';
import Image from 'next/image';
import team from '../../public/images/main.png';
export default function MeetFamCard() {
  const [paddingTop, setPaddingTop] = React.useState('0');

  return (
    <div style={{ width: '100%', backgroundColor: 'white' }}>
      <div className="images-class" id="meet-fam-img">
        <Image
          src={team}
          fill={true}
          quality={100}
          style={{ backgroundColor: '#fd6e2c', objectFit: 'cover' }}
          alt="Picture of the author"
        />
      </div>
      {/* <div id='meet-fam-img' className="images-class" style={{ paddingTop, position: 'relative' }} >
            <Image 
            src={team}
            quality={100}
            style={{ backgroundColor: "#fd6e2c"}}
            alt="Picture of the author"
            layout="fill"
            objectFit="contain"
            onLoad={({ target }) => {
              const { naturalWidth, naturalHeight } = target;
              setPaddingTop(`calc(100% / (${naturalWidth} / ${naturalHeight})`);
            }}
            />
          </div> */}
      <div
        style={{
          padding: 0,
          margin: 0,
        }}
      >
        <h6 className="meet-fam-title">MEET THE FAMILY: OPEN EDITION</h6>
        <div
          className="meet-fam-description"
          style={{
            color: '#212529',
          }}
        >
          To kick off the launch of Haus Experiment well be starting with a
          series of Open Edition NFTs mintable by all for FREE. Haus Experiment
          is a collection of 10,000 NFTs, uniting physical and digital fashion,
          heavily influenced by skate culture and internet counter-culture. Were
          a unique community built on distinct tribal values, set to thrive
          under the right conditions. Striving to bridge the fashion dichotomy
          authentically, we stand apart from less genuine initiatives with deep
          connections to street and internet culture, evidenced by our mindful
          actions and delivery.
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <button className="noselect" style={{ margin: '10px 0' }}>
          MINTING SOON
        </button>
      </div>
    </div>
  );
}
