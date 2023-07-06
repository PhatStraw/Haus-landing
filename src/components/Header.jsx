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
        <Image src="/images/logo.svg" alt="logo" width={99} height={64} />

        <ul className="flex items-center gap-[20px]">
          <li className="nav-item">HONOTARY</li>
          <li className="nav-item">CREW</li>
          <li className="nav-item">FEATURES</li>
          <li className="nav-item">LOOKBOOK</li>
          <li className="nav-item">SHOP</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
