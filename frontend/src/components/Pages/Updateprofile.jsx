import React from "react";
// import DatePicker from "react-datepicker";
import userImg from "../../images/user-icon.png";
import { edit, trash } from "../../utils/icons";

const Updateprofile = () => {
  return (
    <div className="update grid lg:grid-cols-3 grid-cols-1 ">
      <div className="user-image flex justify-center">
        <div className="lg:mt-12 mt-4">
          <img
            src={userImg}
            alt="user-img"
            className="w-32 mb-4 border-4 border-white rounded-[50%]"
          />
          <div className="icons text-[1.5rem] flex gap-6 items-center justify-center">
            <span className="text-[#222260]">{edit}</span>
            <span className="text-[#ff0000]">{trash}</span>
          </div>
        </div>
      </div>
      <div className="form col-span-2">
        <h2 className="text-center p-2 font-semibold mt-8">
          Personal Details :
        </h2>
        <div className="flex flex-wrap gap-4">
          <div className="grow shrink-0 basis-[250px] ">
            <input type="text" placeholder="Full Name" />
          </div>
          <div className="grow shrink-0 basis-[250px]">
            <input type="email" placeholder="Email" />
          </div>
          <div className="grow shrink-0 basis-[250px]">
            <input type="number" placeholder="Phone Number" />
          </div>
        </div>
        {/* <h2 className="text-center p-2 font-semibold mt-8">
          Add Bank Accounts & Card:
        </h2>
        <div className="flex flex-wrap gap-4">
          <div className="grow shrink-0 basis-[250px] ">
            <input type="number" placeholder="account no" />
          </div>
          <div className="grow shrink-0 basis-[250px]">
            <input type="text" placeholder="ifsc no" />
          </div>
          <div className="grow shrink-0 basis-[250px]">
            <input type="text" placeholder="branch name" />
          </div>
        </div> */}
        {/* <h2 className="text-center p-2 font-semibold">Add Card :</h2> */}
        {/* <div className="flex flex-wrap gap-4 mt-4">
          <div className="grow shrink-0 basis-[250px] ">
            <select
              name="card"
              id="card"
              placeholder="select card type"
              className="m-0"
            >
              <option value="">Credit</option>
              <option value="">Debit</option>
            </select>
          </div>
          <div className="grow shrink-0 basis-[250px]">
            <input type="number" placeholder="card no" />
          </div>
          <div className="grow shrink-0 basis-[250px]">
            <DatePicker
              id="expirydate"
              placeholderText="select expiry date"
              dateFormat="dd/MM/yyyy"
            />
          </div>
          <div className="grow shrink-0 basis-[250px]">
            <input type="text" placeholder="cvv" />
          </div>
        </div> */}
        <div className="btn text-center">
          <button className=" mt-8 px-4 py-2 rounded font-bold text-white bg-[#87ce5b] hover:bg-[#42ad00]">
            Verify
          </button>
        </div>
      </div>
    </div>
  );
};

export default Updateprofile;
