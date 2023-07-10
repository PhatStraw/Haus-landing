import { honoraries } from '@/data/honoraries';
import NFTListItem from './NFTListItem';

const NFTList = () => {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-[20px] gap-y-[40px] mt-10 ">
      {honoraries.map((honorary) => {
        return (
          <NFTListItem
            key={honorary?.title}
            imgSrc={honorary?.image?.src}
            title={honorary?.title}
          />
        );
      })}
    </div>
  );
};

export default NFTList;
