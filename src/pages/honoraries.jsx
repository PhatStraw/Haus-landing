import Image from 'next/image';
import { Inter } from 'next/font/google';
import StarIcon from '@/assets/icons/star';
import NFTList from '@/components/NFTList';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className="w-full px-4 py-8 flex justify-center items-center flex-col">
      <section
        aria-label="Nav Banner"
        className="w-full h-[768px] relative mb-10"
      >
        <div className="w-[90%] lg:w-[50%] inset-center z-10 flex flex-col gap-[10px]">
          <div className="w-full flex flex-col px-[30px] md:px-[34px] py-[20px] md:py-[24px] bg-[#292C2D] items-center justify-center">
            <div className="p-[12px] text-[20px] lg:text-[38px] bg-primary flex items-center gap-[30px] font-[700]">
              <StarIcon width={20} height={20} color="#000" />
              ON THE LIST?
              <StarIcon width={20} height={20} color="#000" />
            </div>
            <span className="font-[400] mt-4 text-center w-full">
              Claim your 1/1 Haus NFT by sharing It on Twitter
            </span>
            <div className="mt-6 flex w-full flex-col gap-[10px] text-[15px]">
              <div className="flex w-full items-start gap-[0.5rem] md:gap-[2rem]">
                <StarIcon width={18} height={18} color="#FD6E2C" />

                <span className="font-[400] text-center">
                  Click the share button and share on twitter. Our team will
                  notice and reach out to you.
                </span>
              </div>
            </div>
          </div>

          <div className="w-full flex flex-col px-[24px] py-[24px] bg-[#292C2D] items-center justify-center">
            <div className="p-[12px] text-[20px] lg:text-[38px] bg-primary flex items-center gap-[30px] font-[700]">
              <StarIcon width={20} height={20} color="#000" />
              NOT ON THE LIST?
              <StarIcon width={20} height={20} color="#000" />
            </div>
            <span className="font-[400] mt-4 text-center">
              Win a rare Haus NFTs, merch (hoodies, tees, stickers), and WL
              today by spreading the word:
            </span>
            <div className="mt-6 flex w-full flex-col gap-[10px] text-[15px] mb-6">
              <div className="flex w-full items-start gap-[0.5rem] md:gap-[2rem]">
                <StarIcon width={18} height={18} color="#FD6E2C" />

                <span className="font-[400] text-center">
                  Posting tweets about your favorite people on this list.
                </span>
              </div>
              <div className="flex w-full items-start gap-[0.5rem] md:gap-[2rem]">
                <StarIcon width={18} height={18} color="#FD6E2C" />

                <span className="font-[400] text-center">
                  Must use the share to Twitter link from this site.
                </span>
              </div>
              <div className="flex w-full items-start gap-[0.5rem] md:gap-[2rem]">
                <StarIcon width={18} height={18} color="#FD6E2C" />

                <span className="font-[400] text-center">
                  Additional details will be released on our twitter soon. Make
                  sure those alerts are on.
                </span>
              </div>
            </div>
            <button className="primary-btn mt-8">SHARE</button>
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
