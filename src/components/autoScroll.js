import React, { useRef, useEffect } from 'react';

const highlightArray1 = [
  (<div className='highlight-tile'>
    <p>Coding</p>
  </div>),
  (<div className='highlight-tile'>
    <p>Product Management</p>
  </div>),
  (<div className='highlight-tile'>
    <p>IITK & IIMA</p>
  </div>)
]


export default function AutoScroll() {

  const containerRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (containerRef.current) {
        containerRef.current.scrollLeft += 2; // Adjust the scroll speed as needed
      }
    }, 50); // Adjust the interval duration as needed

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []); // Run only once on component mount

  return (
    <div className="highlight-container" ref={containerRef}>
      {highlightArray1}
    </div>
  );


}

