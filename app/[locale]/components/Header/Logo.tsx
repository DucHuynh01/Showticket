import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Logo = () => {
    return (
        <div className="w-[400px] md:w-[250px] xl:min-h-[50px] max-w-full px-4 xl:mr-[30px]">
            <Link
                href="/"
                className="header-logo flex justify-center items-center w-full"
            >
                <Image
                    src="/images/logo/lo1.png"
                    alt="logo"
                    width={400}
                    height={60}
                    className="w-[50px] sm:w-[60px] rounded-sm dark:hidden"
                />
                <Image
                    src="/images/logo/logo3i.svg"
                    alt="logo"
                    width={400}
                    height={60}
                    className="w-full dark:hidden"
                />
            </Link>
        </div>
    );
}

export default Logo;