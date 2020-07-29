
/* returns random color in #000000 format */
export function randomColor() {
  return "#"+((1<<24)*Math.random()|0).toString(16)
}

/* test color for lightness
*  color must be in #000000 format */
export function isLightColor(color = '') {
  if(color.length !== 7)
    return undefined
  // colors #8xxxxx or #xx8xxx or #xxxx8x is light
  return color[1] > '7' || color[3] > '7' || color[5] > '7'
}

/* url(val) */
export function url(url) {
  return 'url(' + url + ')'
}
