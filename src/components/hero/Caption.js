import styled from 'styled-components'
import media from '@/utils/media';

const CaptionStyled = styled.div`
  color: white;
  display: inline-flex;
  flex-direction: column;
  ${media('align-items', 'center', 'flex-start')}
  position: absolute;
  ${media('top', '70%', '50%')}
  left: 50%;
  translate: -50% -50%;
  ${media('width', '80vw', 'auto')}


  * {
    ${media('text-align', 'center', 'left')}
  }

  h1 {
    font-family: 'Lora', serif;
    font-weight: 400;
    ${media('font-size', '40px', '60px', '7vw')}
    ${media('line-height', '45px', '50px', '1em')}
    ${media('letter-spacing', '0px', '5px', '.01em')}
    width: min-content;
    ${media('translate', 'none', '-.1em')}
  }

  p {
    ${media('letter-spacing', '10px', '5px', '.7em')}
    line-height: 2em;
    font-weight: 600;
    ${media('margin-top', '.5em', '1em')}
    ${media('font-size', '12px', '10px', '1vw')}
  }

  br {
    ${media('display', 'none', 'block')}
  }

  &::before {
    content: '';
    ${media('width', '', '12em', '23vw')}
    aspect-ratio: 1;
    border: solid rgba(255, 255, 255, .4);
    ${media('border-width', '', '1.5px')}
    border-radius: 100%;
    position: absolute;
    translate: -50% -50%;
    top: 95%;
    left: 20%;
    transition: transform 1000ms cubic-bezier(.17,.29,.59,1);
    transform: 
      translateX(var(--translate-x))
      translateY(var(--translate-y));
  }
`

export default function Caption(props) {
  return (
    <CaptionStyled className={props.className}>
      <h1>Making Enchanting Memories</h1>
      <p>LEONIE HENDRIKSE<br/> & JERDEN STOCK</p>
    </CaptionStyled>
  );
}