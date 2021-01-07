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
        <div style={{ height: 300, background: '#EEE' }}><h2>featured 1</h2><img src ="https://i.imgur.com/74FF5Nt.png" height="200"></img><p>description</p></div>
        <div style={{ height: 300, background: '#EEE' }}><h2>featured 2</h2><img src ="https://i.imgur.com/74FF5Nt.png" height="200"></img><p>description</p></div>
        <div style={{ height: 300, background: '#EEE' }}><h2>featured 3</h2><img src ="https://i.imgur.com/74FF5Nt.png" height="200"></img><p>description</p></div>
        <div style={{ height: 300, background: '#EEE' }}><h2>featured 4</h2><img src ="https://i.imgur.com/74FF5Nt.png" height="200"></img><p>description</p></div>
        <div style={{ height: 300, background: '#EEE' }}><h2>featured 5</h2><img src ="https://i.imgur.com/74FF5Nt.png" height="200"></img><p>description</p></div>
        <div style={{ height: 300, background: '#EEE' }}><h2>featured 6</h2><img src ="https://i.imgur.com/74FF5Nt.png" height="200"></img><p>description</p></div>
      </ItemsCarousel>
    </div>
  );
};