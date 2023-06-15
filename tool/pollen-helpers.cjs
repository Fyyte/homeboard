const { defineConfig } = require('pollen-css/utils')

const _linearClamp = (
  fromWidth,
  toWidth,
  minSize,
  maxSize,
  unit,
  minSizeLiteral,
  maxSizeLiteral
) => {
  const pixelsPerRem = 16
  fromWidth = parseFloat(fromWidth)
  toWidth = parseFloat(toWidth)

  const fromWidthTxt = `${fromWidth}px`
  const toWidthTxt = `${toWidth}px`

  if (unit === 'rem') {
    fromWidth = fromWidth / pixelsPerRem
    toWidth = toWidth / pixelsPerRem
  }

  minSize = parseFloat(minSize)
  maxSize = parseFloat(maxSize)

  minSizeLiteral ??= `${minSize}${unit}`
  maxSizeLiteral ??= `${maxSize}${unit}`

  const slope = (maxSize - minSize) / (toWidth - fromWidth)
  const yAxisIntersection = -fromWidth * slope + minSize
  const preferredValue = `${yAxisIntersection}${unit} + ${slope * 100}vw`

  return `clamp(${minSizeLiteral}, ${preferredValue}, ${maxSizeLiteral}) /* ${fromWidthTxt} -> ${toWidthTxt} */`
}

const linearScale = (
  containerWidths,
  scales,
  fromWidth,
  toWidth,
  minScale,
  maxScale
) =>
  _linearClamp(
    containerWidths[fromWidth],
    containerWidths[toWidth],
    scales[minScale],
    scales[maxScale],
    'rem',
    `var(--scale-${minScale})`,
    `var(--scale-${maxScale})`
  )

const linearSize = (
  containerWidths,
  sizes,
  fromWidth,
  toWidth,
  minSize,
  maxSize
) =>
  _linearClamp(
    containerWidths[fromWidth],
    containerWidths[toWidth],
    sizes[minSize],
    sizes[maxSize],
    'px',
    `var(--size-${minSize})`,
    `var(--size-${maxSize})`
  )

const linearPx = (containerWidths, fromWidth, toWidth, minSize, maxSize) =>
  _linearClamp(
    containerWidths[fromWidth],
    containerWidths[toWidth],
    minSize,
    maxSize,
    'px'
  )

const linearRem = (containerWidths, fromWidth, toWidth, minSize, maxSize) =>
  _linearClamp(
    containerWidths[fromWidth],
    containerWidths[toWidth],
    minSize,
    maxSize,
    'rem'
  )

function typeset(scale, line, family, weight = family) {
  return `var(--weight-${weight}) var(--scale-${scale})/${line} var(--font-${family})`
}

const autoGrid = (columns) => {
  // Just a bit smaller than the optimal percentage of the content-max width.
  const optimalSize = `0.6 * var(--width-content-max) / ${columns}`

  // To avoid having more columns than desired, we'll make sure that the min
  // in minmax is always 1px wider than the column size if it was `columns + 1`.
  const maximumSize = `100% / ${columns + 1} + 1px`

  return `repeat(auto-fit, minmax(min(max(${optimalSize}, ${maximumSize}), 100%), 1fr));`
}

module.exports = {
  autoGrid,
  typeset,
  linearScale,
  linearSize,
  linearPx,
  linearRem,
}
