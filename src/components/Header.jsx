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
      <div className="w-full h-[100px] md:h-[200px] lg:h-[400px] relative">
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
          <Image
            src="/icons/logo.svg"
            alt="logo"
            width={99}
            height={64}
            className="cursor-pointer"
          />
        </Link>

        <ul className="hidden lg:flex items-center gap-[20px] z-10">
          {appRoutes.map((route) => {
            return (
              <div key={route.title} className="relative">
                {route.comingSoon ? (
                  <div key={route.title} className="relative group">
                    <li className="nav-item">{route.title}</li>
                    <div className="absolute hidden group-hover:inline-flex bg-white text-black font-[700] text-[1.5rem] rounded-[5px] w-max p-4">
                      COMING SOON
                    </div>
                  </div>
                ) : (
                  <NavLink href={route.path} activeClassName="text-primary">
                    <li className="nav-item">{route.title}</li>
                  </NavLink>
                )}
              </div>
            );
          })}
          <div className="dropdown-content" id="myDropdown">
            <a href="#">Coming Soon</a>
          </div>
        </ul>

        <div className="lg:hidden bg-primary text-black rounded-[5px] w-8 h-8 flex items-center justify-center">
          <div>
            <Hamburger
              size={16}
              toggled={mobileMenuOpen}
              toggle={setMobileMenuOpen}
            />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
