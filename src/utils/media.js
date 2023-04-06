export default function media(prop, s, m, l) {
  let str = ``

  if (typeof s !== 'undefined') {
    str += `
      ${prop}: ${s};
    `
  }

  if (typeof m !== 'undefined') {
    str += `
      @media (width > 500px) {
        ${prop}: ${m};
      }
    `
  }

  if (typeof l !== 'undefined') {
    str += `
      @media (width > 768px) {
        ${prop}: ${l};
      }
    `
  }

  return str
}