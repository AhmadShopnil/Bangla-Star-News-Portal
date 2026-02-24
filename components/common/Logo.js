import Link from 'next/link';
import Image from 'next/image';
import logoImg from '@/public/images/logo2.png'; 

const Logo = () => {
  return (
    <Link href="/" className="hidden md:block relative z-[60] bg-white">
      <div className="w-[110px] h-[92px] flex items-center justify-center transition-transform duration-200 hover:scale-105">
        <Image
          src={logoImg}
          alt="Bangla Star Logo"
          width={110}      // Tailwind w-[110px]
          height={92}      // Tailwind h-[92px]
          priority          // optional: high priority for above-the-fold
          className="object-contain"
        />
      </div>
    </Link>
  );
};

export default Logo;