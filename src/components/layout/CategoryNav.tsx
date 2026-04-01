import Link from 'next/link';
import Image from 'next/image';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Easy Monthly Installments', href: '/installments' },
  { name: 'Shop by Brands', href: '/brands' },
  { name: 'Become a Vendor', href: '/vendor' },
];

const socialIcons = [
  { src: '/icons/facebook.svg', alt: 'Facebook', href: 'https://facebook.com' },
  { src: '/icons/twitter.svg', alt: 'Twitter', href: 'https://twitter.com' },
  { src: '/icons/linkedin.svg', alt: 'LinkedIn', href: 'https://linkedin.com' },
  {
    src: '/icons/instagram.svg',
    alt: 'Instagram',
    href: 'https://instagram.com',
  },
];

export default function CategoryNav() {
  return (
    <nav className="w-full bg-nav py-3 md:py-[16px] px-4">
      <div className="w-full mx-auto xl:px-16 flex flex-col xl:flex-row justify-between items-center gap-4 xl:gap-0">
        {/* Left Group: Browse Categories & Navigation Links */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 xl:gap-[45px] w-full xl:w-auto">
          {/* Browse Categories Button */}
          <button className="flex items-center gap-3 text-white hover:opacity-80 transition-opacity bg-white/10 md:bg-transparent px-4 py-2 md:p-0 rounded-md md:rounded-none w-full md:w-auto justify-center md:justify-start shrink-0">
            <Image
              src="/icons/hamburger.svg"
              alt="Menu"
              width={18}
              height={18}
              className="w-[18px] h-[18px] object-contain brightness-0 invert"
            />
            <span className="font-sans font-medium md:font-normal text-[16px] md:text-[17px] whitespace-nowrap">
              Browse By Category
            </span>
          </button>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2 md:gap-5 xl:gap-8 w-full md:w-auto">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-white/90 md:text-white font-sans font-normal text-[12px] md:text-[13px] hover:text-accent-primary transition-colors whitespace-nowrap"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Right Side: Social Icons */}
        <div className="flex items-center justify-center gap-4 md:gap-5 mt-2 xl:mt-0 shrink-0">
          {socialIcons.map((icon) => (
            <Link
              key={icon.alt}
              href={icon.href}
              className="hover:opacity-80 transition-opacity"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={icon.src}
                alt={icon.alt}
                width={20}
                height={20}
                className="w-[18px] h-[18px] md:w-[20px] md:h-[20px] object-contain brightness-0 invert"
              />
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
