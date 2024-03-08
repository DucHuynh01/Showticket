import React, { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import LanguageToggle from "./LanguageToggle";

const HeaderTools = ({ languageData }) => {
    const [userClose, setUserClose] = useState(false);

    const userToggleHandler = () => {
        setUserClose(!userClose);
    }

    const myElementRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (myElementRef.current && !myElementRef.current.contains(event.target)) {
                setUserClose(false);
            }
        };

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <div className="flex z-[1000] items-center justify-end px-4">
            <div ref={myElementRef}>
                <button
                    onClick={userToggleHandler}
                    id="navbarToggler"
                    aria-label="Mobile Menu"
                    className="block text-[green] 2xl:hidden"
                >
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="text-[30px]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm9 11v-1a7 7 0 0 0-7-7h-4a7 7 0 0 0-7 7v1h2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z"></path>
                    </svg>
                </button>
                <div className={`2xl:min-w-[280px] absolute top-full right-0 p-[15px] transition ease duration-300 shadow-lg rounded-md bg-[white] 2xl:static 2xl:bg-[transparent] 2xl:shadow-none 2xl:p-0 2xl:flex ${userClose ? "opacity-100" : "opacity-0 hidden"}`}>
                    <Link href="/signup">
                        <button className="ease-in-up cursor-pointer rounded-md w-full py-3 px-10 text-base font-bold text-black transition duration-300 hover:bg-opacity-90 md:block md:px-9 lg:px-6 xl:px-9">Đăng ký</button>
                    </Link>
                    <Link href="/signin">
                        <button className="ease-in-up cursor-pointer rounded-md bg-[green] py-3 px-8 text-base font-bold text-white transition duration-300 hover:bg-opacity-90 hover:shadow-signUp md:block md:px-9 lg:px-6 xl:px-9">Đăng nhập</button>
                    </Link>
                </div>
            </div>
            {/* <ThemeToggler /> */}
            <LanguageToggle languageData={languageData} />
        </div>
    );
}

export default HeaderTools;