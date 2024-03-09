import React from "react";

export default function Card() {
    return (
        <div className="flex-1 px-[15px]">
            <div className="my-5 flex flex-col rounded-sm bg-white shadow-md">
                <div className="card-cover relative">
                    <div className="e-marker tkb-sprites hot-e"></div>
                    <a href="https://api-v2.ticketbox.vn/event/redirect/events/89460?platform=web">
                        <img src="https://images.tkbcdn.com/1/780/300/Upload/eventcover/2024/02/25/29CBC6.jpg?w=360&amp;maxheight=137&amp;mode=crop&amp;anchor=topcenter" />
                    </a>
                </div>
                <div className="card-body relative text-[14px]">
                    <div className="flex flex-col justify-between p-[10px]">
                        <div className="w-100 margin-bottom-0 table">
                            <div className="event-title table-cell">
                                <span className="text-[18px] font-bold">
                                    [9/3 ] - MINISHOW - CÂU TRẢ LỜI DUY NHẤT
                                    -HOÀNG HẢI
                                </span>
                            </div>
                            <div className="w-[50px] text-right"></div>
                        </div>
                        <div className="margin-bottom-0  w-ful table">
                            <div className="table-cell">
                                <div className="flex items-center justify-between py-4">
                                    <div className="event-price w-100">
                                        <span className="color-6">From</span>{" "}
                                        <strong className="text-green-500">
                                            350,000 VND
                                        </strong>
                                    </div>
                                    <div className="flex">
                                        <div className="flex items-center">
                                            <img
                                                src="https://static.tkbcdn.com/site/global/content-v2/img/calendar.svg"
                                                alt="calendar"
                                            />
                                            <span className="ml-1 text-[13px]">
                                                09.03.2024<span></span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-100">
                                    <div className="text-[12px] text-[#666666]">
                                        <div className="flex items-center justify-between">
                                            <div className="tag-kinds inline-block">
                                                <span className="ello-th color-c"></span>
                                                <a
                                                    data-category-selected="9"
                                                    className="tag-kind"
                                                    target="_blank"
                                                >
                                                    Art &amp; Culture
                                                </a>
                                                <a
                                                    data-category-selected="10"
                                                    className="tag-kind"
                                                    target="_blank"
                                                >
                                                    Theater &amp; Plays
                                                </a>
                                            </div>
                                            <span className="tag-venues">
                                                <span className="rounded-sm border border-[#ccc] p-[2px] uppercase">
                                                    <span className="before-icon ello-location-1"></span>
                                                    Vinh Phuc
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
