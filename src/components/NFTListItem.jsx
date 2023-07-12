import StarIcon from '@/assets/icons/star';
import { useCallback, useState } from 'react';
import Image from 'next/image';
import TwitterLogo from '../../public/icons/twitter.svg';
import HausStar from '../../public/icons/hausstar.svg';

const NFTListItem = ({ imgSrc, title, tweet }) => {
  const [shareText, setShareText] = useState('SHARE');

  const shareOnTwitter = useCallback(async () => {
    try {
      if (!tweet)
        return alert(
          'No tweet available for this honorary. Please try again later.'
        );
      window.open(
        `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweet)}`,
        '_blank'
      );
    } catch (error) {
      console.error('Error generating tweet intent:', error);
    }
  }, [tweet]);

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
        <Image src={HausStar} alt="haus star black" width={20} height={20} />
        {title}
        <Image src={HausStar} alt="haus star black" width={20} height={20} />
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
          // className="hidden group-hover:inline-flex"
        />{' '}
        {shareText}
      </button>
    </div>
  );
};

export default NFTListItem;
