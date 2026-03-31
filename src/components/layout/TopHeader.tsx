import Image from 'next/image';
import Link from 'next/link';

export default function TopHeader() {
  return (
    <header className="bg-header w-full text-white">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* 1. Left Section (Logo) */}
        <div className="flex-shrink-0">
          <Link href="/">
            <Image
              src="/icons/winstore-logo-header.svg"
              alt="Winstore Logo"
              width={180}
              height={45}
              className="object-contain"
              priority
            />
          </Link>
        </div>

        {/* 2. Middle Section (Search Bar) */}
        <div className="flex-grow max-w-2xl mx-8">
          <div className="flex items-center bg-bg-main rounded-md overflow-hidden h-11">
            {/* Category Dropdown */}
            <button className="flex items-center space-x-2 px-4 h-full border-r border-gray-200 cursor-pointer hover:bg-gray-50 transition">
              <span className="text-input-placeholder text-sm">
                All categories
              </span>
              <Image
                src="/icons/down-arrow.svg"
                alt="Dropdown"
                width={10}
                height={10}
              />
            </button>

            {/* Input Field */}
            <input
              type="text"
              placeholder="Search for products"
              className="flex-grow h-full px-4 outline-none text-black placeholder:text-input-placeholder bg-transparent"
            />

            {/* Search Button */}
            <button
              aria-label="Search"
              className="h-full px-6 bg-btn-gray flex items-center justify-center cursor-pointer transition hover:brightness-95"
            >
              <Image
                src="/icons/search.svg"
                alt="Search"
                width={18}
                height={18}
              />
            </button>
          </div>
        </div>

        {/* 3. Right Section (Contact & Actions) */}
        <div className="flex items-center space-x-8">
          {/* Contact Block */}
          <div className="flex items-center space-x-3">
            <Image
              src="/icons/headphone.svg"
              alt="Call Us"
              width={34}
              height={34}
              className="mt-1"
            />
            <div className="flex flex-col leading-tight">
              <span className="text-xs text-white/90">Call Us Now</span>
              <span className="font-bold text-base text-white">
                +011 5827918
              </span>
              <Link
                href="/signin"
                className="text-xs text-white/90 hover:underline mt-0.5"
              >
                Sign In
              </Link>
            </div>
          </div>

          {/* Action Icons */}
          <div className="flex items-center space-x-6">
            <Link
              href="/account"
              className="hover:opacity-80 transition"
              aria-label="User Account"
            >
              <Image
                src="/icons/user.svg"
                alt="User Account"
                width={24}
                height={24}
              />
            </Link>
            <Link
              href="/wishlist"
              className="hover:opacity-80 transition"
              aria-label="Wishlist"
            >
              <Image
                src="/icons/heart.svg"
                alt="Wishlist"
                width={24}
                height={24}
              />
            </Link>

            {/* Cart Block */}
            <Link
              href="/cart"
              className="flex items-center space-x-2 hover:opacity-80 transition"
            >
              <div className="relative">
                <Image
                  src="/icons/shopping-cart.svg"
                  alt="Cart"
                  width={24}
                  height={24}
                />
                <span className="absolute -top-4 left-2 text-badge-yellow text-[22px] font-medium leading-none">
                  3
                </span>
              </div>
              <span className="text-sm font-medium">Cart</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
