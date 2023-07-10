import Image from 'next/image';
import { Inter } from 'next/font/google';
import StarIcon from '@/assets/icons/star';
import NFTList from '@/components/NFTList';
import cautiontape from '../../public/images/cautiontape.jpg';
import { useCallback, useEffect } from 'react';
import { RandomCrapInfo } from '@/data/randomCrapInfo';
import MeetFamCard from '@/components/MeetFamCard';
import TeamSwipe from '@/components/TeamSwipe';
import RandomCard from '@/components/RandomCard';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        padding: 0,
        margin: '5px 0 0 0',
      }}
    >
      <div className="main-container">
        <div className="meet-fam-container">
          <MeetFamCard />
          <div className="team-swipe-holder">
            <h4 className="team-intro">INTRODUCING</h4>
            <TeamSwipe />
          </div>
        </div>
        <div className="random-crap-container">
          <h4 className="random-crap-start-title">RANDOM CRAP</h4>
          {RandomCrapInfo.map((i) => (
            <RandomCard key={i.title} item={i} />
          ))}
          <div className="caution" style={{}}>
            <Image src={cautiontape} fill={true} alt="cauton tape 1" />
          </div>
          <div className="caution-two" style={{}}>
            <Image
              src={cautiontape}
              fill={true}
              unoptimized
              alt="cauton tape 1"
            />
          </div>
          <div className="caution-three" style={{}}>
            <Image
              src={cautiontape}
              fill={true}
              unoptimized
              alt="cauton tape 1"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
