import Image from 'next/image';
import { Inter } from 'next/font/google';
import StarIcon from '@/assets/icons/star';
import NFTList from '@/components/NFTList';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className="w-full px-4 py-8 flex justify-center items-center flex-col">
      <div className="p-[12px] text-[20px] lg:text-[38px] bg-primary flex items-center gap-[30px] font-[700]">
        <StarIcon width={20} height={20} color="#000" />
        HONORARY CLAIM
        <StarIcon width={20} height={20} color="#000" />
      </div>

      <NFTList />
    </main>
  );
}
