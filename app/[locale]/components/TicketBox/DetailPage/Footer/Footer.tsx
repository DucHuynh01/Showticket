import React from 'react'
import { RiPhoneLine } from 'react-icons/ri'
import { FaEnvelope } from 'react-icons/fa';
import { CiLocationOn } from "react-icons/ci";
import { IoSend } from "react-icons/io5";
import Image from 'next/image';
const Footer = () => {
    return (
        <div className='w-full h-[650px] bg-gray-700 text-gray-300'>
            <div className='mt-[50px] flex pt-[50px] '>
                <div className='block pl-[50px]'>
                    <div>
                        <div className='text-[12px]'>
                            <p className='text-[12px] font-bold'>Hotline</p>
                            <p className='mt-[10px] flex'> <RiPhoneLine />
                                <span className='pb-[5px] pl-[5px]'>Monday - Firday(8h30 AM - 6h30 PM)</span>
                            </p>
                            <p className='text-[#42c742] text-[16px] font-bold'>
                                1900.6408
                            </p>
                            <p className='mt-[20px]'>
                                <p className='font-bold'>
                                    Email
                                </p>
                                <p className='mt-[10px] flex'>
                                    <FaEnvelope />
                                    <span className='pb-[5px] pl-[5px]'>
                                        support@ticketbox.vn
                                    </span>
                                </p>
                            </p>
                            <p className='mt-[20px]'>
                                <p className='font-bold'>
                                    Office
                                </p>
                                <p className='mt-[10px] flex'>
                                    <CiLocationOn />
                                    <span className='pb-[5px] pl-[5px]'>
                                        52 Ut Tich, Ward 4, Tan Binh District, HCMC
                                    </span>
                                </p>
                            </p>
                            <p className='mt-[20px]'>
                                <p className='font-bold'>
                                    Help center
                                </p>
                                <p className='mt-[10px] flex'>

                                    <span className='pb-[5px] '>
                                        Frequently asked questions
                                    </span>
                                </p>
                            </p>
                        </div>
                    </div>
                </div>
                <div className='block ml-[280px] text-[12px]'>
                    <p className='mt-[20px]'>
                        <p className='font-bold'>
                            For Customer
                        </p>
                        <p className='mt-[10px] '>

                            <span className='pb-[5px] '>
                                Booking instruction
                            </span>
                            <p className='pt-[-10px]'>
                                Customer terms of use
                            </p>
                        </p>
                    </p>
                    <p className='mt-[30px]'>
                        <p className='font-bold'>
                            For Organizer
                        </p>
                        <p className='mt-[10px] '>

                            <span className='pb-[5px] '>
                                Work with us
                            </span>
                            <p className='pt-[-10px]'>
                                Subscribe to our hottest events
                            </p>
                        </p>


                    </p>

                    <p className='mt-[30px]'>
                        <p className='font-bold'>
                            Subscribe to our hottest events
                        </p>
                        <p className='mt-[10px] relative '>
                            <input
                                className="bg-gray-700 w-[350px] h-[40px] border border-white pl-[25px] rounded"
                                type="text"
                                placeholder="Your Email"
                            />
                            <FaEnvelope className="absolute top-1/2 left-2 transform -translate-y-1/2 text-green-500 " />
                            <IoSend className="absolute top-1/2 left-[320px] transform -translate-y-1/2" />

                        </p>


                    </p>
                </div>
                <div className='block ml-[250px] text-[12px]'>
                    <p className='mt-[30px]'>
                        <p className='font-bold'>
                            Our Company
                        </p>
                        <p className='mt-[10px] block'>

                            <span className='pb-[5px] '>
                                About us
                            </span>
                            <p>
                                Operational regulations
                            </p>
                            <p>
                                Information privacy policy
                            </p>
                            <p>
                                Dispute settlement policy
                            </p>
                            <p>
                                Payment privacy policy
                            </p>
                            <p>
                                Return and inspection policy
                            </p>
                            <p>
                                Shipping and delivery conditions
                            </p>
                            <p>
                                Payment methods
                            </p>
                        </p>
                    </p>
                </div>
            </div>
            <hr className='border-b border-gray-200 opacity-50 mt-8 '></hr>
            <div className='flex'>
                <div className='ml-[50px] mt-[50px]'>
                    <p>Ticketbox App</p>
                    <p className='mt-[10px]'>
                        <Image
                            src="/images/about/ggplay.jpg"
                            alt="Description of image"
                            width={130}
                            height={130}
                        />
                    </p>
                    <p className='mt-[10px]'>
                        <Image
                            src="/images/about/appstore.jpg"
                            alt="Description of image"
                            width={130}
                            height={130}
                        />
                    </p>
                </div>

                <div className='ml-[400px] mt-[50px]'>
                    <p>Check-in app for organizer
                    </p>

                    <p className='mt-[7px]'>
                        <Image
                            src="/images/about/mobile.jpg"
                            alt="Description of image"
                            width={130}
                            height={130}
                        />
                    </p>
                </div>

                <div className='ml-[400px] mt-[50px]'>
                    <div>
                        <p className='font-bold'>Follow us
                        </p>

                        <p className='mt-[7px] flex'>
                            <Image
                                src="http://sguru.org/facebook-logo/facebook-logo-png-20/"
                                alt="Description of image"
                                width={30}
                                height={30}
                            />
                            <Image
                                src="https://logos-world.net/wp-content/uploads/2020/04/Instagram-icon-Logo-2016-present.png"
                                alt="Description of image"
                                width={50}
                                height={50}
                            />
                        </p>
                    </div>

                    <div className='mt-215px]'>
                        <p className='font-bold mt-[40px]'>Language
                        </p>

                        <p className='mt-[7px] flex'>
                            <Image
                                src="/images/about/vn.jpg"
                                alt="Description of image"
                                width={50}
                                height={30}
                            />
                            <Image
                                src="/images/about/anh.jpg"
                                alt="Description of image"
                                width={60}
                                height={60}
                                className='ml-[5px]'
                            />
                        </p>
                    </div>
                </div>
            </div>

            <div className='flex bg-[#1D1D1D] mt-[50px] w-full h-[230px] ' >
                <div className=' mt-[50px] ml-[50px]'>
                    <div>
                        <p>
                            <Image
                                src="/images/about/tikit.jpg"
                                alt="Description of image"
                                width={150}
                                height={150}
                                className=''
                            />
                        </p>
                        <p className='mt-[10px] flex'>
                            <span className='pb-[5px] '>Vietnams premier ticketing platform for events
                            </span>
                        </p>
                    </div>
                </div>
                <div>

                </div>
                <div>

                </div>
                <div className='block ml-[150px] w-[580px] text-[12px]'>
                    <p className='mt-[50px]'>
                        <p className='font-bold'>
                            Ticketbox Co.Ltd
                        </p>
                        <p className='mt-[10px] block'>

                            <span className='pb-[5px] '>
                                Legal representative: Tran Ngoc Thai Son
                            </span>
                            <p>
                                Address: 3rd floor, Tower A, Viettel Building, 285 Cach Mang Thang Tam, Ward 12, District 10, HCMC.
                            </p>
                            <p>
                                Hotline: 1900.6408 - Email: support@ticketbox.vn
                            </p>
                            <p>
                                Business registration certificate number: 0313605444, first issued on January 7, 2016 by the Department of Planning and Investment of Ho Chi Minh City
                            </p>

                        </p>
                    </p>
                </div>

                <div className='block ml-[150px] text-[12px]'>
                    <p className='mt-[50px]'>
                        <p className='font-bold'>
                            <Image
                                src="/images/about/lg.jpg"
                                alt="Description of image"
                                width={200}
                                height={200}
                                className=''
                            />
                        </p>

                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer