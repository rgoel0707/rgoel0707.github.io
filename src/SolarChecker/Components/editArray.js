import React, { useState } from "react";
import { keyGoogle } from "../../APIkeys";
import { useDispatch } from 'react-redux';
import polygonArea from "../Utilities/polygonArea";
import { editRoofArea } from "../../Store/inputDataSlice";

export default function EditArray({ address, handleRoofClick }) {
  const url = `https://maps.googleapis.com/maps/api/staticmap?center=${address}&zoom=21&size=400x400&maptype=satellite&key=${keyGoogle}`;
  const [x1, setx1] = useState(0);
  const [y1, sety1] = useState(0);
  const [x2, setx2] = useState(0);
  const [y2, sety2] = useState(0);
  const [x3, setx3] = useState(0);
  const [y3, sety3] = useState(0);
  const [x4, setx4] = useState(0);
  const [y4, sety4] = useState(0);
  const [i, setI] = useState(1);

  const dispatch = useDispatch();

  const handleClick = (e) => {
    switch (i) {
      case 1:
        setx1(e.pageX);
        sety1(e.pageY);
        break;
      case 2:
        setx2(e.pageX);
        sety2(e.pageY);
        break;
      case 3:
        setx3(e.pageX);
        sety3(e.pageY);
        break;
      case 4:
        setx4(e.pageX);
        sety4(e.pageY);
        updateArea();
        break;
      default:
        break;
    }
    setI(prev => prev + 1);
  }
  const updateArea = () => {
    const Coords = [{ x: x1, y: y1 }, { x: x2, y: y2 }, { x: x3, y: y3 }, { x: x4, y: y4 }];
    const area = polygonArea(Coords);
    dispatch(editRoofArea(area));
  }

  const resetCorners = () => {
    setI(1);
    setx1(0);
    setx2(0);
    setx3(0);
    setx4(0);
    sety1(0);
    sety2(0);
    sety3(0);
    sety4(0);
  }

  return (
    <div className="roof-editor">
      <div className="roof-buttons">
      <button onClick={handleRoofClick}>Edit Roof Area</button>
      {x1!==0 && <button className='secondary-button' onClick={resetCorners}>Reset Markers</button>}
      </div>
      <p className='white-text' style={{marginBottom:'16px'}}>Update your roof area to get a more accurate estimate</p>
      <p className='white-text' style={{marginBottom:'8px'}}>Click on the 4 corners of the area where panels can be placed</p>

      <img src={url} alt='map' onClick={handleClick} />
      <p className='white-text' style={{ position: 'absolute', left: x1, top: y1 }}><i class="fa-solid fa-location-dot"></i></p>
      <p className='white-text' style={{ position: 'absolute', left: x2, top: y2 }}><i class="fa-solid fa-location-dot"></i></p>
      <p className='white-text' style={{ position: 'absolute', left: x3, top: y3 }}><i class="fa-solid fa-location-dot"></i></p>
      <p className='white-text' style={{ position: 'absolute', left: x4, top: y4 }}><i class="fa-solid fa-location-dot"></i></p>

    </div>
  )
}
