import StarIcon from '@/assets/icons/star';
import Hamburger from 'hamburger-react';
import Image from 'next/image';
import MobileMenu from './MobileMenu';
import { useState } from 'react';
import { appRoutes } from '@/routes';
import NavLink from './custom/NavLink';
import Link from 'next/link';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header>
      {mobileMenuOpen && (
        <MobileMenu
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
        />
      )}
      <div className="w-full bg-secondary overflow-hidden">
        <p className="scrolling-text italic font-[700] text-[16px] text-[#FFC007] font-secondary">
          ALWAYS REMEMBER REAL LIFE IS JUST A NIGHTMARE YOU WAKE UP FROM WHEN
          YOU DIE. HAUS 2023. COMING SOON. ALWAYS REMEMBER REAL LIFE IS JUST A
          NIGHTMARE YOU WAKE UP FROM WHEN YOU DIE. HAUS 2023. COMING SOON.
        </p>
      </div>
      <div className="w-full h-[200px] lg:h-[400px] relative">
        <Image
          src="/images/header-banner.png"
          fill
          alt="header banner image"
          className="object-cover"
        />
      </div>
      <nav
        className="w-full flex justify-between items-center p-4 bg-[#0C0C0C] z-10"
        id="navbar"
      >
        <Link href="/">
          <Image src="/icons/logo.svg" alt="logo" width={99} height={64} />
        </Link>

        <ul className="hidden lg:flex items-center gap-[20px]">
          {appRoutes.map((route) => {
            return (
              <NavLink
                key={route.title}
                href={route.path}
                activeClassName="text-primary"
              >
                <li className="nav-item">{route.title}</li>
              </NavLink>
            );
          })}
        </ul>

        <div className="lg:hidden">
          <Hamburger
            size={20}
            toggled={mobileMenuOpen}
            toggle={setMobileMenuOpen}
          />
        </div>
      </nav>
      <section aria-label="Nav Banner" className="w-full h-[768px] relative">
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
