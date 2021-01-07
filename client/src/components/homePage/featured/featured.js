import './featured.css';
import React, { useState } from 'react';
import ItemsCarousel from 'react-items-carousel';
 
export default () => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 30;
  return (
    <div style={{ padding: `0 ${chevronWidth}px` }}>
      <ItemsCarousel
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={3}
        gutter={30}
        leftChevron={<button>{'<'}</button>}
        rightChevron={<button>{'>'}</button>}
        outsideChevron
        chevronWidth={chevronWidth}
      >
        <div style={{ height: 300, background: '#EEE' }}>First card</div>
        <div style={{ height: 300, background: '#EEE' }}>Second card</div>
        <div style={{ height: 300, background: '#EEE' }}>Third card</div>
        <div style={{ height: 300, background: '#EEE' }}>Fourth card</div>
      </ItemsCarousel>
    </div>
  );
};