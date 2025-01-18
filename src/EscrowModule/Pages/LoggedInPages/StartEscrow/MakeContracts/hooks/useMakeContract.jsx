import { setRef } from '@mui/material'
import React,{useState,useEffect,useRef} from 'react'

function useMakeContract() {
const [terms,setTerms] = useState([])
const [index, setIndex] = useState(0)
const containerRef = React.useRef(null);
const [inputValue, setInputValue] = useState("");
useEffect(()=>{
setIndex((prevIndex) =>{setIndex(prevIndex + 1)})
},[terms])
const addTerm = () => {
    if (inputValue.trim() === "") {
      alert("Please enter a term before adding!");
      return;
    }
    setTerms((prevTerms) => [...prevTerms, inputValue.trim()]);
    setInputValue("");
  };
  return {
   terms,setTerms,index,addTerm,setInputValue,inputValue,containerRef
  }
}

export default useMakeContract