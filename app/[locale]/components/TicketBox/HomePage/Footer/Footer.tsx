import React from "react";
import { FaEnvelope } from "react-icons/fa6";
import { IoMdSend } from "react-icons/io";

export default function Footer() {
    return (
        <>
            <section className="bg-[#393f4e] py-[40px]">
                <div className="mx-auto max-w-[1200px]">
                    <div className=" my-[30px] flex items-start px-[15px]">
                        <div className="mb-[30px] flex-1 px-[15px]">
                            <div>
                                <div className="mb-1 text-xs font-bold text-[#C9C9C9]">
                                    Hotline
                                </div>

                                <div className="my-1 py-1 text-xs text-[#AAAAAA]">
                                    Thứ 2 - Thứ 6 (8:30 - 18:30)
                                </div>
                                <div className="text-md my-1 py-1 font-bold text-[#2DC275]">
                                    1900.6408
                                </div>
                            </div>
                            <br />
                            <div>
                                <div className="mb-1 text-xs font-bold text-[#C9C9C9]">
                                    Email
                                </div>
                                <div className="my-1 py-1 text-xs text-[#AAAAAA]">
                                    {" "}
                                    support@ticketbox.vn
                                </div>
                            </div>
                            <br />
                            <div>
                                <div className="mb-1 text-xs font-bold text-[#C9C9C9]">
                                    Văn phòng
                                </div>
                                <div className="my-1 py-1 text-xs text-[#AAAAAA]">
                                    52 Út Tịch, Phường 4, Quận Tân Bình, TP. Hồ
                                    Chí Minh
                                </div>
                            </div>
                        </div>
                        <div className="mb-[30px] flex-1 px-[15px]">
                            <div>
                                <div className="mb-1 text-xs font-bold text-[#C9C9C9]">
                                    Dành cho ban tổ chức
                                </div>

                                <div className="my-1 py-1 text-xs text-[#AAAAAA]">
                                    Hợp tác với chúng tôi
                                </div>
                            </div>
                            <br />
                            <div>
                                <div className="mb-1 text-xs font-bold text-[#C9C9C9]">
                                    Về công ty chúng tôi
                                </div>

                                <div className="my-1 py-1 text-xs text-[#AAAAAA]">
                                    Thông tin về TicketBox
                                </div>
                                <div className="my-1 py-1 text-xs text-[#AAAAAA]">
                                    Điều khoản sử dụng
                                </div>
                                <div className="my-1 py-1 text-xs text-[#AAAAAA]">
                                    Quy chế hoạt động sàn TMĐT
                                </div>
                                <div className="my-1 py-1 text-xs text-[#AAAAAA]">
                                    Cơ chế giải quyết tranh chấp/ khiếu nại
                                </div>
                            </div>
                        </div>
                        <div className="mb-[30px] flex-1 px-[15px]">
                            <div>
                                <div className="mb-1 text-xs font-bold text-[#C9C9C9]">
                                    Dành cho khách hàng
                                </div>

                                <div className="my-1 py-1 text-xs text-[#AAAAAA]">
                                    Hướng dẫn mua vé
                                </div>
                            </div>
                            <br />
                            <div>
                                <div className="mb-1 text-xs font-bold text-[#C9C9C9]">
                                    Trung tâm hỗ trợ
                                </div>

                                <div className="my-1 py-1 text-xs text-[#AAAAAA]">
                                    Câu hỏi thường gặp
                                </div>
                            </div>
                            <br />
                            <div>
                                <div className="mb-1 text-xs font-bold text-[#C9C9C9]">
                                    Đăng ký nhận email về các sự kiện hot nhất
                                </div>

                                <div className="items-cneter flex text-xs text-[#AAAAAA]">
                                    <p className="relative mt-[10px] ">
                                        <input
                                            className="h-[40px] w-[350px] rounded border-2 border-[#525d74] bg-gray-700 pl-[25px]"
                                            type="text"
                                            placeholder="Your Email"
                                        />
                                        <FaEnvelope className="absolute left-2 top-1/2 -translate-y-1/2 transform text-green-500 " />
                                        <IoMdSend className="absolute left-[320px] top-1/2 -translate-y-1/2 transform" />
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mb-[30px] h-[1px] w-full bg-[#ffffff0d]"></div>
                <div className="mx-auto max-w-[1200px]">
                    <div className=" mb-[30px] mt-[60px] flex items-start px-[15px]">
                        <div className="mb-[30px] flex-1 px-[15px]">
                            <div>
                                <div className="mb-1 text-xs font-bold text-[#C9C9C9]">
                                    Ứng dụng Ticketbox
                                </div>

                                <div className="mt-3 py-1 text-xs text-[#AAAAAA]">
                                    <img src="https://static.tkbcdn.com/site/global/content-v2/img/tkbCHPlay.svg" />
                                </div>
                                <div className="mt-3 py-1 text-xs text-[#AAAAAA]">
                                    <img src="https://static.tkbcdn.com/site/global/content-v2/img/tkbAppStore.svg" />
                                </div>
                            </div>
                        </div>
                        <div className="mb-[30px] flex-1 px-[15px]">
                            <div>
                                <div className="mb-1 text-xs font-bold text-[#C9C9C9]">
                                    Ứng dụng check-in cho Ban Tổ chức
                                </div>

                                <div className="mt-3 py-1 text-xs text-[#AAAAAA]">
                                    <img src="https://static.tkbcdn.com/site/global/content-v2/img/checkinApp.svg" />
                                </div>
                            </div>
                        </div>
                        <div className="mb-[30px] flex-1 px-[15px]">
                            <div>
                                <div className="mb-1 text-xs font-bold text-[#C9C9C9]">
                                    Theo dõi chúng tôi
                                </div>
                                <div className="flex items-center gap-x-4">
                                    <div className="mt-3 py-1 text-xs text-[#AAAAAA]">
                                        <img src="https://static.tkbcdn.com/site/global/content-v2/img/facebook.svg" />
                                    </div>
                                    <div className="mt-3 py-1 text-xs text-[#AAAAAA]">
                                        <img src="https://static.tkbcdn.com/site/global/content-v2/img/instagram.svg" />
                                    </div>
                                </div>
                            </div>
                            <div className="mt-3">
                                <div className="mb-1 text-xs font-bold text-[#C9C9C9]">
                                    Ngôn ngữ
                                </div>
                                <div className="flex items-center gap-x-4">
                                    <div className="mt-3 py-1 text-xs text-[#AAAAAA]">
                                        <img
                                            className="h-[26px] w-[38px]"
                                            src="https://static.tkbcdn.com/site/global/content-v2/img/lang-vi.svg"
                                        />
                                    </div>
                                    <div className="mt-3 py-1 text-xs text-[#AAAAAA]">
                                        <img
                                            className="h-[26px] w-[38px]"
                                            src="https://static.tkbcdn.com/site/global/content-v2/img/lang-en.svg"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-[#1D1D1D] py-[40px]">
                <div className="mx-auto max-w-[1200px]">
                    <div className="flex items-start text-xs text-[#393F4E]">
                        <div className="flex-42 flex px-[15px]">
                            <div>
                                <img
                                    className="h-10 w-10"
                                    src="https://static.tkbcdn.com/site/global/content-v2/img/ticketbox-logo-100.png?v2"
                                />
                            </div>
                            <div className="ml-4">
                                Hệ thống quản lý và phân phối vé sự kiện hàng
                                đầu Việt Nam <br /> TicketBox Co. Ltd. © 2016
                            </div>
                        </div>
                        <div className="flex-58 flex px-[15px]">
                            <div className="max-w-[506px] text-left">
                                Công ty TNHH Ticketbox
                                <br />
                                Đại diện theo pháp luật: Trần Ngọc Thái Sơn
                                <br />
                                Địa chỉ: Tầng 3, Tháp A, Tòa nhà Viettel, 285
                                Cách Mạng Tháng Tám, Phường 12, Quận 10, TP. Hồ
                                Chí Minh
                                <br />
                                Hotline: 1900.6408 - Email: support@ticketbox.vn
                                <br />
                                Giấy chứng nhận đăng ký doanh nghiệp số:
                                0313605444, cấp lần đầu ngày 07/01/2016 bởi Sở
                                Kế Hoạch và Đầu Tư TP. Hồ Chí Minh
                            </div>
                            <div>
                                <img
                                    className="h-10"
                                    alt="ticketbox"
                                    title="ticketbox"
                                    src="https://static.tkbcdn.com/site/global/content-v2/img/license1.jpg"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
