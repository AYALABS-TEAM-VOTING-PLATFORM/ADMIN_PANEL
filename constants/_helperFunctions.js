import { ethers } from "ethers";
import { PROVIDER, governanceAddres } from "./addresses";
import governanceABI from "./GovernanceAbi.json";
import axios from "axios";

// const API = `http://localhost:3001/api`;
const API = "https://voting-platform-server3.onrender.com/api";

const _errorFunc = ({ error, message, setLoading, loading }) => {
  //   console.log(error);
  setLoading(loading);
};

let CONTRACT;
async function connect() {
  const provider = new ethers.BrowserProvider(window.ethereum);
  await provider.send("eth_requestAccounts", []);
  const signer = await provider.getSigner();
  CONTRACT = new ethers.Contract(governanceAddres, governanceABI, signer);
}
connect();

export const _getVotersAll = async ({ loading, setLoading }) => {
  try {
    // Now you can call the functions of the CONTRACT
    let votersData = await CONTRACT.getAllVoters();
    return votersData;
  } catch (error) {
    console.log(error);
    _errorFunc({
      error: error,
      message: "Something occured",
      loading,
      setLoading,
    });
  }
};

export const _getVoter = async ({ loading, setLoading }) => {
  try {
    // Now you can call the functions of the CONTRACT
    let voter = await CONTRACT.getVoter();
    return voter;
  } catch (error) {
    console.log(error);
    _errorFunc({
      error: error,
      message: "Something occured",
      loading,
      setLoading,
    });
  }
};

export const _getCandidates = async ({ loading, setLoading }) => {
  try {
    // Now you can call the functions of the CONTRACT
    let candidates = await CONTRACT.getAllCondidates();
    return candidates;
  } catch (error) {
    console.log(error);
    _errorFunc({
      error: error,
      message: "Something occured",
      loading,
      setLoading,
    });
  }
};

export const _getElections = async ({ loading, setLoading }) => {
  try {
    // Now you can call the functions of the CONTRACT
    let elections = await CONTRACT.getAllElections();
    return elections;
  } catch (error) {
    console.log(error);
    _errorFunc({
      error: error,
      message: "Something occured",
      loading,
      setLoading,
    });
  }
};

export const _getElection = async ({
  loading,
  setLoading,
  electionId,
  year,
}) => {
  try {
    // Now you can call the functions of the CONTRACT
    let election = await CONTRACT.getAllElection(electionId, year);
    return election;
  } catch (error) {
    console.log(error);
    _errorFunc({
      error: error,
      message: "Something occured",
      loading,
      setLoading,
    });
  }
};

export const _hasMinted = async ({ loading, setLoading, electionId, year }) => {
  try {
    // Now you can call the functions of the CONTRACT
    let mintedBool = await CONTRACT.hasMinted(year, electionId);
    return mintedBool;
  } catch (error) {
    console.log(error);
    _errorFunc({
      error: error,
      message: "Something occured",
      loading,
      setLoading,
    });
  }
};

export const _isVerified = async ({ loading, setLoading }) => {
  try {
    // Now you can call the functions of the CONTRACT
    let verifiedBool = await CONTRACT.isVerified();
    return verifiedBool;
  } catch (error) {
    console.log(error);
    _errorFunc({
      error: error,
      message: "Something occured",
      loading,
      setLoading,
    });
  }
};

export const _vote = async ({
  loading,
  setLoading,
  year,
  electionId,
  tokenAddress,
  value,
  startDate,
  endDate,
  candidateId,
}) => {
  try {
    // Now you can call the functions of the CONTRACT
    await CONTRACT.vote(
      year,
      electionId,
      tokenAddress,
      value,
      startDate,
      endDate,
      candidateId
    );
    return true;
  } catch (error) {
    console.log(error);
    _errorFunc({
      error: error,
      message: "Something occured",
      loading,
      setLoading,
    });
    return false;
  }
};

export const _addVoter = async ({ loading, setLoading }) => {
  try {
    // Now you can call the functions of the CONTRACT
    await CONTRACT.addVoter();
    return true;
  } catch (error) {
    console.log(error);
    _errorFunc({
      error: error,
      message: "Something occured",
      loading,
      setLoading,
    });
    return false;
  }
};

export const _mint = async ({
  year,
  _electionId,
  _tokenAddr,
  loading,
  setLoading,
}) => {
  try {
    // Now you can call the functions of the CONTRACT
    await CONTRACT.mint(year, _electionId, _tokenAddr);
    return true;
  } catch (error) {
    console.log(error);
    _errorFunc({
      error: error,
      message: "Something occured",
      loading,
      setLoading,
    });
    return false;
  }
};

//// ADMIN
export const _verifyVoter = async ({ voterAddress, loading, setLoading }) => {
  try {
    // Now you can call the functions of the CONTRACT
    await CONTRACT.verifyVoter(voterAddress);
    return true;
  } catch (error) {
    console.log(error);
    _errorFunc({
      error: error,
      message: "Something occured",
      loading,
      setLoading,
    });
    return false;
  }
};

export const _createCandidate = async ({
  year,
  candidateId,
  name,
  imageURI,
  position,
  about,
  loading,
  setLoading,
}) => {
  try {
    // Now you can call the functions of the CONTRACT
    console.log(imageURI);
    await CONTRACT.createCandidate(
      year,
      candidateId,
      name,
      imageURI,
      position,
      about
    );
    return true;
  } catch (error) {
    console.log(error);
    _errorFunc({
      error: error,
      message: "Something occured",
      loading,
      setLoading,
    });
    return false;
  }
};

export const _createElection = async ({
  year,
  _name,
  _electionId,
  _startDate,
  _endDate,
  loading,
  setLoading,
  _startTime,
  _endTime,
  about,
}) => {
  try {
    console.log({ _startTime, _endTime });
    // Now you can call the functions of the CONTRACT
    await CONTRACT.creatElection(
      year,
      _name,
      _electionId,
      _startTime,
      _endTime,
      about
    );
    return true;
  } catch (error) {
    console.log(error);
    _errorFunc({
      error: error,
      message: "Something occured",
      loading,
      setLoading,
    });
    return false;
  }
};

export const _addCandidate = async ({
  loading,
  setLoading,
  _electionId,
  candidateId,
  _year,
}) => {
  try {
    // Now you can call the functions of the CONTRACT
    await CONTRACT.addCandidate(_electionId, candidateId, _year);
    return true;
  } catch (error) {
    console.log(error);
    _errorFunc({
      error: error,
      message: "Something occured",
      loading,
      setLoading,
    });
    return false;
  }
};

///////////////////////////// API'S //////////////////////////////

export const pinFile = async ({
  name,
  description,
  imageloading,
  setLoading,
  loading,
  imageURI: image,
}) => {
  try {
    const response = await axios.post(`${API}/admin/pin-file`, {
      name,
      description,
      image,
    });

    return response.data;
  } catch (error) {
    console.log(error);
    _errorFunc({
      error: error,
      message: "Something occured",
      loading,
      setLoading,
    });
    return false;
  }
};

export const getVoters = async ({ setLoading, loading }) => {
  try {
    const response = await axios.get(`${API}/admin/get-voters`);

    return response.data;
  } catch (error) {
    console.log(error);
    _errorFunc({
      error: error,
      message: "Something occured",
      loading,
      setLoading,
    });
    return false;
  }
};

export const verifyVoter = async ({ setLoading, loading, walletAddress }) => {
  try {
    const response = await axios.put(
      `${API}/admin/verify-voter?walletAddress=${walletAddress}`
    );

    return response.data;
  } catch (error) {
    console.log(error);
    _errorFunc({
      error: error,
      message: "Something occured",
      loading,
      setLoading,
    });
    return false;
  }
};
