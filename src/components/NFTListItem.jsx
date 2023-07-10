import StarIcon from '@/assets/icons/star';
import Image from 'next/image';

const NFTListItem = ({ imgSrc, title }) => {
  if (!title) return <div className="hidden lg:block" />;
  return (
    <div className="w-fit flex flex-col items-center gap-[10px] grid-item">
      <Image src={imgSrc} alt="Honorary Claim 1" width={248} height={248} />
      <div className="p-[10px] text-[20px] bg-white text-black flex items-center gap-[10px] font-[700] w-fit">
        <StarIcon width={20} height={20} color="#FD6E2C" />
        {title}
        <StarIcon width={20} height={20} color="#FD6E2C" />
      </div>
      <button className="primary-btn w-fit">SHARE</button>
    </div>
  );
};

export default NFTListItem;
