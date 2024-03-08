import { Feature } from "@/types/feature";
import { join } from "path";
import { json } from "stream/consumers";
import Image from "next/image";
import Link from "next/link";

const SingleFeature = ({ feature }: any) => {
  return (

    <Link href={`/services/${feature.id}`}>
      <div className="w-full shadow-shadow-chat h-full p-8 rounded-md group md:hover:text-white duration-300  md:hover:bg-[#219ebc] ">
        <div className="wow fadeInUp" data-wow-delay=".1s">
          <div className="mb-10 flex justify-center w-full object-cover rounded-md bg-opacity-10 text-primary">
            <Image
              alt=""
              src={`${process.env.BACKEND_URL}${feature.gallery}`}
              className="h-[100px] w-[100px] aspect-square md:w-72 xl:w-48 block"
              width={2000}
              height={0}
            />
          </div>
          <h3 className="mb-4 text-xl  font-semibold ">
            {feature?.title}
          </h3>
          <p className="pr-[10px] md:group-hover:text-white duration-200 ease-linear text-[#222222d1] text-base font-medium leading-relaxed">
            {feature?.short_content}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default SingleFeature;
