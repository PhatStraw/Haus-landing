import axios from 'axios';
import StarIcon from '@/assets/icons/star';
import { useCallback, useState } from 'react';
import Image from 'next/image';
import TwitterLogo from '../../public/icons/twitter.svg';

const NFTListItem = ({ imgSrc, title }) => {
  const [shareText, setShareText] = useState('SHARE');

  const shareOnTwitter = useCallback(async () => {
    const text = `@${title.replace(
      /\s/g,
      ''
    )} for Haus Experiement. \n\nFollow instructions on hausepxeriment.com/honoraries to claim your honorary NFT 😊🌟`;

    try {
      window.open(
        `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`,
        '_blank'
      );
    } catch (error) {
      console.error('Error generating tweet intent:', error);
    }
  }, [title]);

  if (!title) return <div className="hidden lg:block" />;
  return (
    <div className="w-full flex flex-col items-center gap-[10px] grid-item">
      <Image
        src={imgSrc}
        alt="Honorary Claim 1"
        width={248}
        height={248}
        className="honorary-image"
      />
      <div className="p-[10px] text-[20px] bg-white text-black flex items-center gap-[10px] font-[700] w-fit">
        <StarIcon width={20} height={20} color="#FD6E2C" />
        {title}
        <StarIcon width={20} height={20} color="#FD6E2C" />
      </div>
      <button
        className="primary-btn w-fit flex gap-[10px] items-center justify-center group"
        onMouseEnter={() => setShareText('TWEET')}
        onMouseLeave={() => setShareText('SHARE')}
        onClick={shareOnTwitter}
      >
        <Image
          src={TwitterLogo}
          alt="Twiiter logo"
          width={20}
          height={20}
          className="hidden group-hover:inline-flex"
        />{' '}
        {shareText}
      </button>
    </div>
  );
};

export default NFTListItem;
