"use client";

import React, { useEffect, useState } from "react";
import DoughnutChart from "@/components/DoughnutChart";
import Image from "next/image";
import { BiChevronDown } from "react-icons/bi";
import AvatarImage from "@/public/profile.svg";
import Link from "next/link";
import { _addCandidate, _getCandidates } from "@/constants/_helperFunctions";

export default function AddCandidate() {
  const [loading, setLoading] = useState(false);
  const [candidates, setCandidates] = useState([]);
  const [candidateData, setCandidateData] = useState({
    _electionId: "",
    candidateId: "",
    _year: "",
  });
  const [show, setShow] = useState(false);
  const getCandidates = async () => {
    setLoading(true);
    const response = await _getCandidates({ loading, setLoading });
    setCandidates([...response]);
    setLoading(false);
  };

  const handleAddElection = async () => {
    setLoading(true);
    await _addCandidate({ ...candidateData, loading, setLoading });
    setLoading(false);
  };
  useEffect(() => {
    getCandidates();
  }, []);

  console.log(candidateData);
  return (
    <div>
      {candidates.length == 0 ? (
        <h1>No Candidates</h1>
      ) : (
        candidates?.map((val) => {
          return (
            <Candidate
              image={val["1"]}
              _year={val["7"]}
              candidateId={val["6"].toString()}
              setCandidateData={setCandidateData}
              setShow={setShow}
              name={val["0"]}
              loading={loading}
            />
          );
        })
      )}
      <div className="ml-20 md:ml-20 mt-4">
        <Link href="/CreateCandidate">
          <button className="pr-6 pt-4 pb-4 pl-4 rounded-md bg-[#5570F1] text-white">
            Create Candidate
          </button>
        </Link>
      </div>
      {show && (
        <div className="pop-up">
          <input
            type="text"
            name="year"
            onChange={(e) =>
              setCandidateData((prev) => ({
                ...prev,
                _electionId: e.target.value,
              }))
            }
            placeholder="Enter ID of Election"
            className="text-[#121212] px-3 py-2 border-2"
          />
          <div>
            <button
              className="pr-6 pt-4 pb-4 pl-4 rounded-md bg-[#5570F1] text-white mr-6"
              onClick={() => handleAddElection()}
            >
              Add Candidate
            </button>
            <button
              className="pr-6 pt-4 pb-4 pl-4 rounded-md bg-[#5570F1] text-white"
              onClick={() => setShow(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

const Candidate = ({
  image,
  _year,
  candidateId,
  setCandidateData,
  setShow,
  name,
  loading,
}) => {
  const [imageURIURL, setImageURI] = useState("");

  console.log(image);
  const getImage = async () => {
    const requestURL = "https://ipfs.io/ipfs/" + image;

    const tokenURIResponse = await (await fetch(requestURL)).json();
    console.log(tokenURIResponse);
    const imageURI = tokenURIResponse.image;
    const imageURIURL = imageURI.replace("ipfs://", "https://ipfs.io/ipfs/");
    console.log(imageURIURL);
    setImageURI(imageURIURL);
  };
  useEffect(() => {
    getImage();
  }, []);

  return (
    <div className="ml-20 md:ml-20 mt-5 sm:ml-0 md:ml-0 bg-white rounded-md p-10 pl-20 pr-[20px] mt-[20px] sm:ml-[0px] md:ml-[0px] sm:pl-7 md:pl-7">
      <div className="">
        <div className="flex justify-between">
          <div className="flex items-center gap-10">
            <Image src={imageURIURL} width={50} height={50} alt="image" />
            <span>{name}</span>
          </div>
          <button
            className="pr-6 pt-4 pb-4 pl-4 rounded-md bg-[#5570F1] text-white"
            onClick={() => {
              setCandidateData((prev) => ({
                ...prev,
                candidateId: candidateId,
                _year: _year,
              }));
              setShow(true);
            }}
          >
            {loading ? "Adding Candidate" : "Add Candidate"}
          </button>
        </div>
      </div>
    </div>
  );
};
