import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { editMonthlyAcProd, editPage, selectData, selectUserInput } from '../../Store/inputDataSlice';
import { useSelector } from 'react-redux';
import { keyPvWatts } from '../../APIkeys';
import EditBills from '../Components/editBills';
import EditArray from '../Components/editArray';

async function callPvWatts(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export default function Result(props) {
  const dispatch = useDispatch();


  //Calculations
  const monthly_ac_prod = useSelector(selectData('monthly_ac_prod'));
  const tariff = useSelector(selectUserInput('tariff'));

  const monthlyBills = useSelector(selectUserInput('bills'));
  const monthlyCons = monthlyBills.map(bill => bill[1] / tariff);
  const yearlyCons = monthlyCons.reduce((ac, cv) => ac + cv);
  const yearlyProd = (monthly_ac_prod.length !== 0) ? monthly_ac_prod.reduce((ac, cv) => ac + cv) : 0;
  const yearlyDiff = yearlyCons - yearlyProd;
  let oldBill = monthlyBills.reduce(((ac, cv) => ac + cv[1]),0);
  let newBill = 0;
  if (yearlyDiff > 0) {
    newBill = yearlyDiff * tariff;
  }
  let yearlySavings = Math.round(oldBill - newBill);


  const userAddress = props.address;
  const roofArea = useSelector(selectUserInput('roofArea'));
  let panelWidth = 1.10; //in metres
  let panelHeight = 1.70; // in metres
  let panelArea = panelHeight * panelWidth;
  let panelWatt = 420;
  let panelCount = roofArea / panelArea; //approximation
  let systemSize = panelCount * panelWatt / 1000;

  const [isLoading, setIsLoading] = useState(false);
  const [showBills, setShowBills] = useState(true);
  const [showArray, setShowArray] = useState(true);

  useEffect(() => {
    const getMonthlyProd = async (url) => {
      setIsLoading(true);
      const response = await callPvWatts(url);
      const acOutputs = response.outputs.ac_monthly;
      dispatch(editMonthlyAcProd(acOutputs));
      setIsLoading(false);
    }
    let pvWattsURL = `https://developer.nrel.gov/api/pvwatts/v8.json?api_key=${keyPvWatts}&azimuth=180&system_capacity=${systemSize}&losses=14&array_type=1&module_type=0&gcr=0.4&dc_ac_ratio=1.2&inv_eff=96.0&radius=0&dataset=nsrdb&tilt=10&address=${userAddress}&soiling=12|4|45|23|9|99|67|12.54|54|9|0|7.6&albedo=0.3&bifaciality=0.7`;
    getMonthlyProd(pvWattsURL);
  }, [dispatch, userAddress, systemSize])


  const handleClick = () => {
    dispatch(editPage(1));
  }

  const handleRoofClick = () => {
    setShowArray(prev => !prev)
  }

  return (
    <div className="result">
      <p className='white-text back-text-button' onClick={handleClick}>{'<'} <u>Back</u></p>
      {isLoading ? <p className='white-text result-loading'>Loading...</p> : (
        <div className='result-loading'>
          <p id='page-2-line-1' className='white-text'>You can save £ {yearlySavings} per year if you install solar</p>
          <div className='result-numbers'>
            <p className='white-text result-number'>Estimated current bill per year: £ {Math.round(oldBill)}</p>
            <p className='white-text result-number'>Estimated solar production per year: {Math.round(yearlyProd)} kWh</p>
            <p className='white-text result-number'>Estimated new bill per year: £ {Math.round(newBill)}</p>
          </div>
        </div>)}
      <div className='divider'></div>
      <div className='actions-div'>
        <div className='bills-div'>
          <button onClick={() => setShowBills(prev => !prev)}>Edit bills</button>
          <p className='white-text'>Update your current bills to get a more accurate estimate</p>
          {showBills && <EditBills />}
        </div>
        <div className='roof-div'>
          {showArray ? <EditArray handleRoofClick={handleRoofClick} address={userAddress} /> : <button onClick={handleRoofClick}>Edit Roof Area</button> }
        </div>
      </div>
    </div>
  )
}
