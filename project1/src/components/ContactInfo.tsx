import React from "react";
import { IoIosPhonePortrait } from "react-icons/io";
import { HiOutlineMail } from "react-icons/hi";

const ContactInfo = () => (
  <div className="flex flex-col gap-6 ml-0 md:ml-24">
    <div className="text-center md:text-left">
      <h1 className="text-5xl text-emerald-500 font-light">
        Green<span className="italic font-semibold">Shop</span>
      </h1>
      <p className="text-gray-400 mt-5">Món quà từ thiên nhiên</p>
    </div>

    <p className="text-gray-500 text-sm leading-relaxed">
      DKT được thành lập với niềm đam mê và khát vọng thành công trong lĩnh vực
      Thương mại điện tử. Chúng tôi đã và đang khẳng định được vị trí hàng đầu
      bằng những sản phẩm
    </p>

    <div className="space-y-2 text-gray-600 text-sm">
      <div className="flex items-center gap-2">
        <IoIosPhonePortrait className="text-green-600" />
        (84‑4)66.558.868
      </div>
      <div className="flex items-center gap-2">
        <HiOutlineMail className="text-green-600" />
        infor@dkt.com.vn
      </div>
    </div>
  </div>
);

export default ContactInfo;
