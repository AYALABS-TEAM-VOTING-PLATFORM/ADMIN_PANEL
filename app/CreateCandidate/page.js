"use client";
import React, { useState } from "react";
import DoughnutChart from "@/components/DoughnutChart";
import Image from "next/image";
import { BiChevronDown } from "react-icons/bi";
import "react-datetime/css/react-datetime.css";
import Datetime from "react-datetime";
import {
  _createCandidate,
  _createElection,
  pinFile,
} from "@/constants/_helperFunctions";

export default function CreateCandidate() {
  const [formData, setFormData] = useState({
    year: "",
    candidateId: "",
    name: "",
    imageURI: "",
    position: "",
    about: "",
  });
  const [loading, setLoading] = useState();

  const _addElection = async (e) => {
    e.preventDefault();

    const data = await pinFile({ ...formData, loading, setLoading });
    console.log(data.result.IpfsHash);

    await _createCandidate({
      ...formData,
      imageURI: data.result.IpfsHash,
      loading,
      setLoading,
    });
    setLoading(false);
  };
  console.log(formData);
  return (
    <div className="ml-20 md:ml-20 mt-5 sm:ml-0 md:ml-0">
      <div className=" bg-white rounded-md py-5 w-full px-5 pt-10">
        <h3 className="mb-7 text-3xl font-semibold text-center text-[#121212]">
          Create Candidate
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
              name="name"
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, name: e.target.value }))
              }
              value={formData.name}
              placeholder="Enter Name"
              className="text-[#121212] px-3 py-2 border-2"
            />
          </div>

          {/* second input */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-5 mb-5">
            <input
              type="text"
              name="candidateId"
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  candidateId: e.target.value,
                }))
              }
              value={formData.candidateId}
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
              placeholder="Enter About Candidate"
              className="text-[#121212] px-3 py-2 border-2"
            />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-5 mb-5">
            <input
              type="text"
              name="position"
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  position: e.target.value,
                }))
              }
              value={formData.position}
              placeholder="Enter Position For this Candidate"
              className="text-[#121212] px-3 py-2 border-2"
            />
            <input
              type="file"
              onChange={(e) => {
                let file = e.target.files[0];
                let reader = new FileReader();
                // Set the callback for when reading is complete
                reader.onloadend = () => {
                  // Use reader.result to get the base64 string
                  setFormData((prev) => ({
                    ...prev,
                    imageURI: reader.result,
                  }));
                };

                // Read the file
                if (file) {
                  reader.readAsDataURL(file);
                } else {
                  setFormData((prev) => ({
                    ...prev,
                    imageURI: "",
                  }));
                }
              }}
              placeholder="Enter About Candidate"
              className="text-[#121212] px-3 py-2 border-2"
            />
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
