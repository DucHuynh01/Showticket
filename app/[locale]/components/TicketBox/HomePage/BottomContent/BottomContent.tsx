import React from "react";
import { IoMdAdd } from "react-icons/io";
import { IoAdd } from "react-icons/io5";

export default function BottomContent() {
    return (
        <section className="bg-white py-[50px]">
            <div className="container text-center">
                <div className="mb-[30px] w-full text-[30px] text-[#666666]">
                    Hãy bắt đầu bán vé sự kiện của bạn với TicketBox!
                </div>
                <div className="w-100">
                    <a
                        href="/"
                        className="border-1 mx-auto my-[15px] flex w-[280px] items-center justify-between border-[#7ca629] bg-[#90ba3e] hover:bg-[#7ca629]"
                    >
                        <div className="border-r-1 border-[#374911cb] p-4">
                            <span className="input-group-addon tkb-bg-color">
                                <IoMdAdd className="text-[24px] font-bold text-[#5c7b17]" />
                            </span>
                        </div>
                        <div className="p-y-4 flex flex-1 justify-center">
                            <input
                                type="button"
                                className="text-md font-bold text-white"
                                value="Tạo sự kiện"
                            />
                        </div>
                    </a>
                </div>
                <p className="text-[#666666]">
                    Liên hệ bộ phận phát triển kinh doanh, vui lòng gọi:&nbsp;
                    <a className="font-bold  ">1900.6408</a>
                </p>
            </div>
        </section>
    );
}
