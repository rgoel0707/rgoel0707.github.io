import React from "react";
import Introduction from "./introduction";
import './SolarChecker.css';
import Result from "./result";
import { useSelector, useDispatch } from "react-redux";
import { editAddress, editPage, inputInfo, pageInfo } from "../../Store/inputDataSlice";

export default function SolarChecker(props) {
  let pageToDisplay = useSelector(pageInfo);
  let userAddress = useSelector(inputInfo).address;
  const dispatch=useDispatch();

  const handleSubmit = (e)=>{
    e.preventDefault();
    const address=e.target.elements.address.value;
    dispatch(editAddress(address));
    dispatch(editPage(2));
  }

  return (
    <div>
      <div className="about-me-bg-1"></div>
      <div className="about-me-bg-2"></div>
      <div className="page-container">
        <p className="page-name">Solar Potential Check</p>
        {pageToDisplay === 1 && <Introduction handleSubmit={handleSubmit}/>}
        {pageToDisplay === 2 && <Result address={userAddress} />}
        <footer>
          <p>&copy; 2024 Rishabh Goel. All rights reserved. V1.1</p>
        </footer>
      </div>
    </div>
  );
}
