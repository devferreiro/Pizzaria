import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';

import Imagem1 from '../../images/gallery/foto1.png'
import Imagem2 from '../../images/gallery/foto2.png'
import Imagem3 from '../../images/gallery/foto3.png'
import Imagem4 from '../../images/gallery/foto4.png'
import Imagem5 from '../../images/gallery/foto5.png'



const items = [
  {
    src: Imagem1,
    altText: 'Pizza1',
    caption: 'Pizza1',
    key: 1,
  },
  {
    src: Imagem2,
    altText: 'Pizza2',
    caption: 'Pizza2',
    key: 2,
  },
  {
    src: Imagem3,
    altText: 'Pizza3',
    caption: 'Pizza3',
    key: 3,
  },
  {
    src: Imagem4,
    altText: 'Pizza4',
    caption: 'Pizza4',
    key: 4,
  },
  {
    src: Imagem5,
    altText: 'Pizza5',
    caption: 'Pizza5',
    key: 5,
  },
  
];

function Example(args) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} />
        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      {...args}
    >
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );
}

export default Example;