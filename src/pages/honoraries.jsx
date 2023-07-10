import Image from 'next/image';
import { Inter } from 'next/font/google';
import StarIcon from '@/assets/icons/star';
import NFTList from '@/components/NFTList';
import HausStar from '../../public/icons/hausstar.svg';
import HausStarBlack from '../../public/icons/hausstarblack.svg';
import { useCallback } from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const shareOnTwitter = useCallback(async () => {
    const text = `Stand a chance to win rare Haus NFTs on hausexperiement.com @hausexperiement`;

    try {
      window.open(
        `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`,
        '_blank'
      );
    } catch (error) {
      console.error('Error generating tweet intent:', error);
    }
  }, []);
  return (
    <main className="w-full px-4 py-8 flex justify-center items-center flex-col">
      <section
        aria-label="Nav Banner"
        className="w-full h-[768px] relative mb-10"
      >
        <div className="w-[90%] lg:w-[50%] inset-center z-10 flex flex-col gap-[10px]">
          <div className="w-full flex flex-col px-[30px] md:px-[34px] py-[20px] md:py-[24px] bg-[#292C2D] items-center justify-center">
            <div className="p-[12px] text-[16px] lg:text-[38px] bg-primary flex items-center gap-[30px] font-[700]">
              <Image
                src={HausStarBlack}
                alt="haus star black"
                width={24}
                height={24}
              />
              ON THE LIST?
              <Image
                src={HausStarBlack}
                alt="haus star black"
                width={24}
                height={24}
              />
            </div>
            <span className="font-[400] mt-4 text-center w-full">
              Claim your 1/1 Haus NFT by sharing It on Twitter
            </span>
            <div className="mt-6 flex w-full flex-col gap-[10px] text-[15px]">
              <div className="flex w-full items-start gap-[0.5rem] md:gap-[2rem]">
                <Image
                  src={HausStar}
                  alt="haus star black"
                  width={24}
                  height={24}
                />

                <span className="font-[400] text-left">
                  Click the share button and share on twitter. Our team will
                  notice and reach out to you.
                </span>
              </div>
            </div>
          </div>

          <div className="w-full flex flex-col px-[24px] py-[24px] bg-[#292C2D] items-center justify-center">
            <div className="p-[12px] text-[16px] lg:text-[38px] bg-primary flex items-center gap-[30px] font-[700]">
              <Image
                src={HausStarBlack}
                alt="haus star black"
                width={24}
                height={24}
              />
              NOT ON THE LIST?
              <Image
                src={HausStarBlack}
                alt="haus star black"
                width={24}
                height={24}
              />
            </div>
            <span className="font-[400] mt-4 text-center">
              Win a rare Haus NFT, merch (hoodies, tees, stickers), and
              Whitelist today by spreading the word:
            </span>
            <div className="mt-6 flex w-full flex-col gap-[10px] text-[15px] mb-6">
              <div className="flex w-full items-start gap-[0.5rem] md:gap-[2rem]">
                <Image
                  src={HausStar}
                  alt="haus star black"
                  width={24}
                  height={24}
                />

                <span className="font-[400] text-left">
                  Posting tweets about your favorite people on this list.
                </span>
              </div>
              <div className="flex w-full items-start gap-[0.5rem] md:gap-[2rem]">
                <Image
                  src={HausStar}
                  alt="haus star black"
                  width={24}
                  height={24}
                />

                <span className="font-[400] text-left">
                  Must use the share to Twitter link from this site.
                </span>
              </div>
              <div className="flex w-full items-start gap-[0.5rem] md:gap-[2rem]">
                <Image
                  src={HausStar}
                  alt="haus star black"
                  width={24}
                  height={24}
                />

                <span className="font-[400] text-left">
                  Additional details will be released on our twitter soon. Make
                  sure those alerts are on.
                </span>
              </div>
            </div>
            <button className="primary-btn mt-8" onClick={shareOnTwitter}>
              SHARE
            </button>
          </div>
        </div>
        <Image
          src="/images/nav-banner.png"
          alt="Nav banner"
          fill
          className="object-cover z-5"
        />
      </section>
      <div className="p-[12px] text-[20px] lg:text-[38px] bg-primary flex items-center gap-[30px] font-[700]">
        <StarIcon width={20} height={20} color="#000" />
        HONORARY CLAIM
        <StarIcon width={20} height={20} color="#000" />
      </div>

      <NFTList />
    </main>
  );
}
