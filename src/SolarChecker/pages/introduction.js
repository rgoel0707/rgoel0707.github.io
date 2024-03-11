import React, { useRef, useEffect } from 'react';

export default function Introduction(props) {
  const autocompleteInputRef = useRef(null);
  useEffect(() => {
    const autocomplete = new window.google.maps.places.Autocomplete(
      autocompleteInputRef.current, {
      //componentRestrictions: { country: 'UK' }
    }
    );
    autocomplete.addListener('place_changed', () => {
      const place = autocomplete.getPlace();
      console.log(place);
    });
  }, []);


  return (
    <div className="introduction">
      <p id='page-1-line-1' className='white-text'>Should I install solar on my house?</p>
      <form onSubmit={props.handleSubmit}>
        <input type="text" id="address-input" className='text-entry address' placeholder="Enter your address" name="address" ref={autocompleteInputRef}></input>
        <br />
        <br />
        <button type="submit" id='submit-button' >CHECK</button>
      </form>
    </div>
  )
}
