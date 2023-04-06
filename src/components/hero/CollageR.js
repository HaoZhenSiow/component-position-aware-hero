import styled from 'styled-components'
import Image from 'next/image'
import media from '@/utils/media'

const CollageStyled = createCollageStyled()

export default function CollageR(props) {
  return (
  <CollageStyled className={props.className}>
    <div>
      <Image
        className="collage-a"
        src="/images/office-stock-foto-space-aesthetics-studio-stock-dutch-design-07-800x1200.jpg"
        alt="aesthetics studio"
        width="800"
        height="1200"
      />
      <Image
        className="collage-b horizontal"
        src="/images/rustic-family-house-in-breda-stock-dutch-design-foto-peter-baas-12-800x533.jpg"
        alt="rustic family house in breda"
        width="800"
        height="533"
      />
    </div>
    <div>
      <Image
        className="collage-a"
        src="/images/office-stock-foto-peter-baas-stock-dutch-design-19-800x1200.jpg" 
        alt="office photo"
        width="800"
        height="1203"
      />
      <Image
        className="collage-b"
        src="/images/amsterdam-foto-space-aesthetics-studio-stock-dutch-design-interior-02-800x1067.jpg" 
        alt="aesthetics studio interior"
        width="800"
        height="1067"
      />
    </div>
    <div>
      <Image
        src="/images/leonie-hendriks-blog-800x1203.jpg"
        alt="Leonie Hendriks"
        width="800"
        height="1203"
      />
    </div>
    
  </CollageStyled>
  )
}

function createCollageStyled() {
  return styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    translate: -50% -50%;
    width: min-content;
    perspective: 500px;
    div {
      line-height: 0;
      position: absolute;
      translate: -50% -50%;
      transition: transform 1000ms cubic-bezier(.17,.29,.59,1);
      transform: 
        rotateY(var(--rotate-x-axis))
        rotateX(var(--rotate-y-axis))
        translateX(calc(var(--translate-x)))
        translateY(calc(var(--translate-y)))
    }

    div > img {
      width: var(--img-width);
      height: calc(1200/800 * var(--img-width));
    }

    div > img.horizontal {
      object-fit: cover;
    }

    img.collage-a {
      display: var(--collage-a);
    }

    img.collage-b {
      display: var(--collage-b);
    }

    div:nth-of-type(1) {
      ${media('--img-width', '30vw', 'calc(30vw * 0.6)', 'calc(30vw * .5)')}
      ${media('top', '-60px', null, '-60px')}
      left: 0;
    }

    div:nth-of-type(2) {
      ${media('--img-width', '20vw', 'calc(20vw * .5)')}
      top: 13vw;
      ${media('left', '2vw')}
    }

    div:nth-of-type(3) {
      ${media('--img-width', '28vw', 'calc(28vw * .5)')}
      ${media('top', null, '2vh', '5vh')}
      ${media('left', null, '8vw')}
    }
  `
}