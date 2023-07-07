import StarIcon from '@/assets/icons/star';
import Image from 'next/image';

const Header = () => {
  return (
    <header>
      <div className="w-full bg-secondary overflow-hidden">
        <p className="scrolling-text italic font-[700] text-[16px] text-[#FFC007] font-secondary">
          ALWAYS REMEMBER REAL LIFE IS JUST A NIGHTMARE YOU WAKE UP FROM WHEN
          YOU DIE. HAUS 2023. COMING SOON. ALWAYS REMEMBER REAL LIFE IS JUST A
          NIGHTMARE YOU WAKE UP FROM WHEN YOU DIE. HAUS 2023. COMING SOON.
        </p>
      </div>
      <div className="w-full h-[400px] relative">
        <Image
          src="/images/header-banner.png"
          fill
          alt="header banner image"
          className="object-cover"
        />
      </div>
      <nav className="w-full flex justify-between items-center p-4">
        <Image src="/icons/logo.svg" alt="logo" width={99} height={64} />

        <ul className="flex items-center gap-[20px]">
          <li className="nav-item">HONOTARY</li>
          <li className="nav-item">CREW</li>
          <li className="nav-item">FEATURES</li>
          <li className="nav-item">LOOKBOOK</li>
          <li className="nav-item">SHOP</li>
        </ul>
      </nav>
      <section aria-label="Nav Banner" className="w-full h-[768px] relative">
        <div className="w-[50%] inset-center z-10 flex flex-col gap-[10px]">
          <div className="w-full flex flex-col px-[34px] py-[24px] bg-[#292C2D] items-center justify-center">
            <div className="p-[12px] text-[38px] bg-primary flex items-center gap-[30px] font-[700]">
              <StarIcon width={20} height={20} color="#000" />
              ON THE LIST?
              <StarIcon width={20} height={20} color="#000" />
            </div>
            <span className="font-[400] mt-4">
              Claim your HNUS by sharing it on twitter
            </span>
            <div className="mt-6 flex w-full flex-col gap-[10px] text-[15px]">
              <div className="flex w-full items-start gap-[2rem]">
                <StarIcon width={18} height={18} color="#FD6E2C" />

                <span className="font-[400] text-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore
                </span>
              </div>
            </div>
          </div>

          <div className="w-full flex flex-col px-[24px] py-[24px] bg-[#292C2D] items-center justify-center">
            <div className="p-[12px] text-[38px] bg-primary flex items-center gap-[30px] font-[700]">
              <StarIcon width={20} height={20} color="#000" />
              NOT ON THE LIST?
              <StarIcon width={20} height={20} color="#000" />
            </div>
            <span className="font-[400] mt-4">
              Claim your HNUS by sharing it on twitter
            </span>
            <div className="mt-6 flex w-full flex-col gap-[10px] text-[15px]">
              <div className="flex w-full items-start gap-[2rem]">
                <StarIcon width={18} height={18} color="#FD6E2C" />

                <span className="font-[400] text-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore
                </span>
              </div>
              <div className="flex w-full items-start gap-[2rem]">
                <StarIcon width={18} height={18} color="#FD6E2C" />

                <span className="font-[400] text-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore
                </span>
              </div>
              <div className="flex w-full items-start gap-[2rem]">
                <StarIcon width={18} height={18} color="#FD6E2C" />

                <span className="font-[400] text-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore
                </span>
              </div>
            </div>
            <button className="primary-btn mt-8 border-black after:bg-black before:bg-black">
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
    </header>
  );
};

export default Header;
