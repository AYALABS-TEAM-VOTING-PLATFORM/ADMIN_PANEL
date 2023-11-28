"use client";
import React, { useState } from "react";
import DoughnutChart from "@/components/DoughnutChart";
import Image from "next/image";
import { BiChevronDown } from "react-icons/bi";
import "react-datetime/css/react-datetime.css";
import Datetime from "react-datetime";
import { _createElection } from "@/constants/_helperFunctions";

export default function AddElection() {
  const [formData, setFormData] = useState({
    year: "",
    _name: "",
    _electionId: "",
    _startDate: null,
    _endDate: null,
    about: "",
  });
  const [loading, setLoading] = useState();

  const _addElection = async (e) => {
    e.preventDefault();
    setLoading(true);
    const _startTime = Math.floor(new Date(formData._startDate) / 1000);
    const _endTime = Math.floor(new Date(formData._endDate).getTime() / 1000);

    await _createElection({
      ...formData,
      loading,
      setLoading,
      _startTime: _startTime.toString(),
      _endTime: _endTime.toString(),
    });
    setLoading(false);
  };

  return (
    <div className="ml-20 md:ml-20 mt-5 sm:ml-0 md:ml-0">
      <div className=" bg-white rounded-md py-5 w-full px-5 pt-10">
        <h3 className="mb-7 text-3xl font-semibold text-center text-[#121212]">
          Add Election
        </h3>
        <form className="">
          {/* first input */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-5 mb-5">
            <input
              type="text"
              name="year"
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, year: e.target.value }))
              }
              value={formData.year}
              placeholder="Enter Year"
              className="text-[#121212] px-3 py-2 border-2"
            />
            <input
              type="text"
              name="_name"
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, _name: e.target.value }))
              }
              value={formData._name}
              placeholder="Enter Name"
              className="text-[#121212] px-3 py-2 border-2"
            />
          </div>

          {/* second input */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-5 mb-5">
            <input
              type="text"
              name="_electionId"
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  _electionId: e.target.value,
                }))
              }
              value={formData._electionId}
              placeholder="Enter Election ID"
              className="text-[#121212] px-3 py-2 border-2"
            />
            <input
              type="text"
              name="about"
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  about: e.target.value,
                }))
              }
              value={formData.about}
              placeholder="Enter About The Election"
              className="text-[#121212] px-3 py-2 border-2"
            />
          </div>

          {/* third input */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-5">
            <div>
              <h3>Start Date</h3>
              <Datetime
                value={null}
                onChange={(value) => {
                  setFormData((e) => ({
                    ...e,
                    _startDate: value._d,
                  }));
                  console.log(value._d);
                }}
              />
            </div>
            <div>
              <h3>End Date</h3>
              <Datetime
                value={null}
                onChange={(value) => {
                  setFormData((e) => ({
                    ...e,
                    _endDate: value._d,
                  }));
                  console.log(value._d);
                }}
              />{" "}
            </div>
          </div>

          <button
            disabled={loading}
            onClick={_addElection}
            type="submit"
            className="w-full bg-[#5570F1] rounded-lg text-white p-2 px-4 font-semibold mt-5"
          >
            {loading ? "Adding Election" : "Add ELection"}
          </button>
        </form>
      </div>
    </div>
  );
}
