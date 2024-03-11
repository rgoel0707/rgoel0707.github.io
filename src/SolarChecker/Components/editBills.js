import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { editBills, inputInfo } from "../../Store/inputDataSlice";

export default function EditBills() {
  const bills = useSelector(inputInfo).bills;
  const dispatch = useDispatch();



  return (
    <div className="popup bills-popup">
      {bills.map((bill, ind) => (
        <div className="bill-sliders" key={ind} >
          <label className="month white-text">{bill[0]}</label>
          <input className='bill-slider' type='range' min="10" max="400" step="1" value={bill[1]} onChange={(e) => {
            dispatch(editBills({ month_index: ind, value: e.target.value }));
          }} />
          <span className="bill-value white-text">{bill[1]}</span>
        </div>
      ))}

    </div>
  )
}
