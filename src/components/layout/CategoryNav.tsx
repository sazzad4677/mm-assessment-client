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
    <nav className="w-full bg-nav py-[16px] px-4">
      <div className="max-w-[1500px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Left Group: Browse Categories & Navigation Links */}
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-[45px]">
          {/* Browse Categories Button */}
          <button className="flex items-center gap-3 text-white hover:opacity-80 transition-opacity">
            <Image
              src="/icons/hamburger.svg"
              alt="Menu"
              width={18}
              height={18}
              className="w-[18px] h-[18px] object-contain brightness-0 invert"
            />
            {/* Exactly 17px as shown in Figma Inspector */}
            <span className="font-sans font-normal text-[17px] whitespace-nowrap">
              Browse By Category
            </span>
          </button>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center items-center gap-5 xl:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                // Exactly 13px as shown in Figma Inspector
                className="text-white font-sans font-normal text-[13px] hover:text-accent-primary transition-colors whitespace-nowrap"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Right Side: Social Icons */}
        <div className="flex items-center gap-5">
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
                className="w-[20px] h-[20px] object-contain brightness-0 invert"
              />
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
