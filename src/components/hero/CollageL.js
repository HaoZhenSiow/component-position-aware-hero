import styled from 'styled-components'
import Image from 'next/image'
import media from '@/utils/media'

const CollageStyled = createCollageStyled()

export default function CollageL(props) {
  return (
    <CollageStyled className={props.className}>
      <div>
        <Image
          className="collage-a"
          src="/images/office-stock-foto-space-aesthetics-studio-stock-dutch-design-11-800x1200.jpg"
          alt="aesthetics studio design"
          width="800"
          height="1200"
        />
        <Image
          className="collage-b"
          src="/images/heritage-is-home-stock-foto-peter-baas-05-800x1200.jpg"
          alt="heritage is home"
          width="800"
          height="1200"
        />
      </div>
      <div>
      <Image
        src="/images/journal-get-to-kno-jeroen-stock-800x1203.jpg" 
        alt="Jeroen Stock"
        width="800"
        height="1203"
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
    <div>
      <Image
        className="collage-a"
        src="/images/office-stock-foto-space-aesthetics-studio-stock-dutch-design-02-800x1200.jpg"
        alt="aesthetics studio"
        width="800"
        height="1200"
      />
      <Image
        className="collage-b"
        src="/images/le-coin-des-lions-stock-foto-space-aesthetics-studio-stock-dutch-design-12-800x1200.jpg" alt="aesthetics studio"
        width="800"
        height="1200"
      />
    </div>
    </CollageStyled>
  );
}

function createCollageStyled() {
  return styled.div`
    position: absolute;
    top: 60%;
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

    img.collage-a {
      display: var(--collage-a);
    }

    img.collage-b {
      display: var(--collage-b);
    }

    div:nth-of-type(1) {
      ${media('--img-width', '38vw', 'calc(38vw * .6)', 'calc(38vw * .5)')}
      ${media('top', '-70px', '0')}
      left: 0;
    }

    div:nth-of-type(2) {
      ${media('--img-width', '28vw', 'calc(28vw * .5)')}
      ${media('top', '30px', '60px', '90px')}
      ${media('left', '-75px', null, '-150px')}
    }

    div:nth-of-type(3) {
      ${media('--img-width', '28vw', 'calc(28vw * .5)')}
      top: 80px;
      left: 90px;
      ${media('display', 'block', 'none')}
    }

    div:nth-of-type(4) {
      --img-width: 10vw;
      ${media('display', 'none', 'block')}
      ${media('top', '90px', null, '180px')}
      left: -20px;
    }
  `
}