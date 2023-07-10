import * as React from 'react';
import Image from 'next/image';
export default function RandomCard(props) {
  return (
    <div sx={{}} id="random-card">
      <div
        style={{
          margin: '4px',
          paddding: '10px 0 0 8px',
        }}
        className="random-title"
      >
        {props.item.title}
      </div>
      <div className="random-card-content">
        <div className="images-class" id="random-img">
          <Image
            src={props.item.image}
            fill={true}
            alt="Picture of the author"
          />
          {/* <div style={{ paddingTop, position: 'relative', minHeight: '100px' }} >
            <Image 
            src={props.item.image} 
            quality={100}
            alt="Picture of the author"
            layout="fill"
            objectFit="contain"
            sizes="(min-width: 300px) 100vw, 33vw"
            onLoad={({ target }) => {
              const { naturalWidth, naturalHeight } = target;
              setPaddingTop(`calc(100% / (${naturalWidth} / ${naturalHeight})`);
            }}
            />
          </div> */}
        </div>
        <div
          style={{
            padding: 0,
            margin: 0,
          }}
        >
          <div id="random-description">{props.item.description}</div>
        </div>
      </div>
    </div>
  );
}
