import NFTListItem from './NFTListItem';

const NFTList = () => {
  return (
    <div className="w-full grid grid-cols-4 gap-x-[20px] gap-y-[40px] mt-10">
      <NFTListItem imgSrc={'/images/claim-1.png'} />
      <NFTListItem imgSrc={'/images/claim-2.png'} />
      <NFTListItem imgSrc={'/images/claim-3.png'} />
      <NFTListItem imgSrc={'/images/claim-4.png'} />
      <NFTListItem imgSrc={'/images/claim-5.png'} />
      <NFTListItem imgSrc={'/images/claim-6.png'} />
      <NFTListItem imgSrc={'/images/claim-7.png'} />
      <NFTListItem imgSrc={'/images/claim-8.png'} />
      <NFTListItem imgSrc={'/images/claim-9.png'} />
      <NFTListItem imgSrc={'/images/claim-10.png'} />
    </div>
  );
};

export default NFTList;
