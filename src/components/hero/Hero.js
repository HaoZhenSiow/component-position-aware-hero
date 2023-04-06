import React from 'react';
import styled from 'styled-components'
import media from '@/utils/media';

import Caption from './Caption';
import CollageL from './CollageL'
import CollageR from './CollageR';

const HeroStyled = createHeroStyled()

export default function Hero(props) {
  initHero()

  let isTouchDevice = false

  const content = (
    <HeroStyled 
      id='hero'
      className={props.className}
      onTouchStart={() => {isTouchDevice = true}}
      onMouseMove={e => {
        isTouchDevice || hoverHero(e)
      }}>
      <CollageL className='collage-l'/>
      <CollageR className='collage-r' />
      <Caption/>
    </HeroStyled>
  )

  return content
}

function createHeroStyled() {
  return styled.div`
    width: 100vw;
    height: 100vh;
    ${media('max-height', null, 'calc(100vw * .75)')}
    background-color: var(--hero-bg-color);
    position: relative;

    .collage-r {
      ${media('display', 'none', 'block')}
      left: 75%;
    }

    .collage-l {
      ${media('left', '50%', '25%')}
    }
  `
}

function initHero() {
  const style = `
    :root {
      --hero-bg-color: rgb(200, 159, 103);
      --collage-a: block;
      --collage-b: none;
    }
  `
  setStyleTag('data-hero', style)
}

function hoverHero(e) {
  const style = `
    :root {
      --hero-bg-color: ${(e.pageX < innerWidth/2)?'rgb(200, 159, 103)':'rgb(181, 150, 158)'};
      --rotate-x-axis: ${(e.pageX - innerWidth / 2) / 60}deg;
      --rotate-y-axis: ${(e.pageY - innerHeight / 2) / 50}deg;
      --translate-x: ${(e.pageX - innerWidth / 2) / 25}%;
      --translate-y: ${(e.pageY - innerHeight / 2) / 45}%;
      --collage-a: ${(e.pageX < innerWidth/2)?'block':'none'};
      --collage-b: ${(e.pageX < innerWidth/2)?'none':'block'};

    }
  ` 
  setStyleTag('data-hero', style)
  
}

function setStyleTag(meta, style) {
  if (typeof document !== "undefined") {
    const exist = document.querySelector(`[${meta}]`)
    const styleTag = document.createElement('style')
    styleTag.setAttribute(meta, '')
    styleTag.innerHTML = style
    if (exist) {
      exist.replaceWith(styleTag)
      return
    }
    document.head.appendChild(styleTag)
  }
}