import StarIcon from '@/assets/icons/star';
import Image from 'next/image';

const NFTListItem = ({ imgSrc }) => {
  return (
    <div className="w-fit flex flex-col items-center gap-[10px]">
      <Image src={imgSrc} alt="Honorary Claim 1" width={248} height={248} />
      <div className="p-[10px] text-[20px] bg-white text-black flex items-center gap-[10px] font-[700] w-fit">
        <StarIcon width={20} height={20} color="#FD6E2C" />
        KSICRYPTO
        <StarIcon width={20} height={20} color="#FD6E2C" />
      </div>
      <p className="text-center text-[13px] w-[75%]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore
      </p>
      <button className="primary-btn w-fit">SHARE</button>
    </div>
  );
};

export default NFTListItem;
