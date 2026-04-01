import Image from 'next/image';
import Link from 'next/link';

export default function TopHeader() {
  return (
    <header className="bg-header w-full text-white">
      <div className="w-full mx-auto px-4 md:px-8 xl:px-20 py-4 flex flex-col xl:flex-row items-center justify-between gap-4 xl:gap-0">
        {/* Mobile Top Row: Logo & Icons */}
        <div className="w-full xl:w-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src="/icons/winstore-logo-header.svg"
                alt="Winstore Logo"
                width={140}
                height={35}
                className="object-contain md:w-[180px] md:h-[45px]"
                priority
              />
            </Link>
          </div>

          {/* Mobile Actions */}
          <div className="flex xl:hidden items-center space-x-5">
            <Link
              href="/account"
              className="hover:opacity-80 transition"
              aria-label="User Account"
            >
              <Image
                src="/icons/user.svg"
                alt="User Account"
                width={20}
                height={20}
              />
            </Link>
            <Link
              href="/cart"
              className="flex items-center hover:opacity-80 transition relative"
              aria-label="Cart"
            >
              <Image
                src="/icons/shopping-cart.svg"
                alt="Cart"
                width={20}
                height={20}
              />
              <span className="absolute -top-3 left-2 text-badge-yellow text-[18px] font-medium leading-none">
                3
              </span>
            </Link>
          </div>
        </div>

        {/* Middle Section (Search Bar) */}
        <div className="w-full xl:flex-grow md:max-w-xl lg:max-w-[70%] xl:max-w-2xl md:mx-auto xl:mx-8">
          <div className="flex items-center bg-bg-main rounded-md overflow-hidden h-10 md:h-11">
            {/* Category Dropdown */}
            <button className="hidden sm:flex items-center space-x-2 px-3 lg:px-4 h-full border-r border-gray-200 cursor-pointer hover:bg-gray-50 transition flex-shrink-0">
              <span className="text-input-placeholder text-xs lg:text-sm whitespace-nowrap">
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
              className="flex-grow h-full px-3 lg:px-4 text-sm outline-none text-black placeholder:text-input-placeholder bg-transparent min-w-0"
            />

            {/* Search Button */}
            <button
              aria-label="Search"
              className="h-full px-4 lg:px-6 bg-btn-gray flex items-center justify-center cursor-pointer transition hover:brightness-95 flex-shrink-0"
            >
              <Image
                src="/icons/search.svg"
                alt="Search"
                width={16}
                height={16}
                className="lg:w-[18px] lg:h-[18px]"
              />
            </button>
          </div>
        </div>

        {/* Right Section (Contact & Desktop Actions) */}
        <div className="hidden xl:flex items-center space-x-6 xl:space-x-8 flex-shrink-0">
          {/* Contact Block */}
          <div className="hidden xl:flex items-center space-x-3">
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
          <div className="flex items-center space-x-4 xl:space-x-6">
            <Link
              href="/account"
              className="hover:opacity-80 transition"
              aria-label="User Account"
            >
              <Image
                src="/icons/user.svg"
                alt="User Account"
                width={22}
                height={22}
                className="xl:w-[24px] xl:h-[24px]"
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
                width={22}
                height={22}
                className="xl:w-[24px] xl:h-[24px]"
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
                  width={22}
                  height={22}
                  className="xl:w-[24px] xl:h-[24px]"
                />
                <span className="absolute -top-4 left-2 text-badge-yellow text-[20px] xl:text-[22px] font-medium leading-none">
                  3
                </span>
              </div>
              <span className="hidden xl:inline text-sm font-medium pt-1">
                Cart
              </span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
