import Image from 'next/image';
import Link from 'next/link';

const trendingLinks = [
  'Installments',
  'Electronics',
  'Grocery',
  'Health & Beauty',
  'Home Appliances',
  'Mobile Accessories',
];

const informationLinks = [
  'About Us',
  'Contact Us',
  'FAQs',
  'Shipping & Return',
  'Privacy policy',
  'Terms & Conditions',
];

const customerCareLinks = [
  'My Account',
  'Track Your Order',
  'Recently Viewed',
  'Wishlist',
  'Compare',
  'Become a Vendor',
];

const paymentIcons = [
  { src: '/icons/visa-card.svg', alt: 'Visa' },
  { src: '/icons/master-card.svg', alt: 'Mastercard' },
  { src: '/icons/card-card.svg', alt: 'Cash on Delivery' },
  { src: '/icons/installment.svg', alt: 'Easy Installment Plans' },
];

const socialIcons = [
  { src: '/icons/facebook.svg', alt: 'Facebook', href: '#' },
  { src: '/icons/twitter.svg', alt: 'Twitter', href: '#' },
  { src: '/icons/linkedin.svg', alt: 'LinkedIn', href: '#' },
  { src: '/icons/instagram.svg', alt: 'Instagram', href: '#' },
];

function FooterHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-accent-primary font-sans text-[18px] font-semibold mb-6 tracking-wide">
      {children}
    </h3>
  );
}

function FooterLinkList({ links }: { links: string[] }) {
  return (
    <ul className="flex flex-col gap-3">
      {links.map((link) => (
        <li key={link}>
          <Link
            href="#"
            className="font-sans text-sm text-gray-300 hover:text-white transition-colors duration-200"
          >
            {link}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default function Footer() {
  return (
    <footer className="w-full bg-footer font-sans">
      {/* ── Main Footer Content ── */}
      <div className="max-w-[1500px] mx-auto px-4 pt-16 pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* ── Brand & Contact ── */}
          <div>
            <Image
              src="/icons/winstore-logo-footer.svg"
              alt="Winstore"
              width={160}
              height={40}
              className="mb-6 w-40 h-auto"
            />

            {/* Phone */}
            <p className="text-accent-primary text-sm font-medium mb-2">
              Got questions? Call us 24/7!
            </p>
            <p className="text-gray-300 text-sm leading-6 mb-6">
              03 111 666 144
              <br />
              0317 1777015.
            </p>

            {/* Email */}
            <p className="text-accent-primary text-sm font-medium mb-1">
              Contact info
            </p>
            <p className="text-gray-300 text-sm mb-6">info@winstore.pk</p>

            {/* Social Icons */}
            <div className="flex items-center gap-4">
              {socialIcons.map(({ src, alt, href }) => (
                <Link
                  key={alt}
                  href={href}
                  aria-label={alt}
                  className="opacity-80 hover:opacity-100 transition-opacity"
                >
                  <Image
                    src={src}
                    alt={alt}
                    width={22}
                    height={22}
                    className="w-5 h-5 brightness-0 invert"
                  />
                </Link>
              ))}
            </div>
          </div>

          {/* ── Trending ── */}
          <div>
            <FooterHeading>Trending</FooterHeading>
            <FooterLinkList links={trendingLinks} />
          </div>

          {/* ── Information + Payment ── */}
          <div>
            <FooterHeading>Information</FooterHeading>
            <FooterLinkList links={informationLinks} />

            {/* Payment Methods */}
            <div className="mt-8 grid grid-cols-4 gap-2 w-full">
              {paymentIcons.map(({ src, alt }) => (
                <div
                  key={alt}
                  className="bg-white rounded px-1 py-1 flex items-center justify-center h-9 w-full"
                >
                  <Image
                    src={src}
                    alt={alt}
                    width={52}
                    height={28}
                    className="h-6 w-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* ── Customer Care ── */}
          <div>
            <FooterHeading>Customer Care</FooterHeading>
            <FooterLinkList links={customerCareLinks} />
          </div>
        </div>
      </div>

      {/* ── Copyright Bar ── */}
      <div className="w-full bg-black/40">
        <div className="max-w-[1500px] mx-auto px-4 py-4">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Winstore. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
