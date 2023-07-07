import Hamburger from 'hamburger-react';
import { useEffect } from 'react';

const MobileMenu = ({ mobileMenuOpen, setMobileMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className="fixed lg:hidden z-20 w-[100vw] h-[100vh] bg-black bg-opacity-[0.5] overflow-y-hidden">
      <div className="w-[60%] flex flex-col h-[100%] bg-black ml-auto">
        <div
          className="ml-auto"
          onClick={() => {
            document.body.style.overflow = 'auto';
            setMobileMenuOpen(!mobileMenuOpen);
          }}
        >
          <Hamburger size={20} toggled={mobileMenuOpen} />
        </div>
        <ul className="flex flex-col items-start gap-[20px] text-white px-6 py-6">
          <li className="nav-item">HONOTARY</li>
          <li className="nav-item">CREW</li>
          <li className="nav-item">FEATURES</li>
          <li className="nav-item">LOOKBOOK</li>
          <li className="nav-item">SHOP</li>
        </ul>
      </div>
    </div>
  );
};

export default MobileMenu;
