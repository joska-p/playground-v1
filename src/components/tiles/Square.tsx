import { colorNames } from "#lib/colors.ts"
import { getRandom } from "#lib/utils.ts"

type Props = {
  colors?: string[]
  random?: boolean
}
const Square = ({ colors, random = true }: Props) => {
  const colorsToUse = random ? colorNames.toSorted(() => Math.random() - 0.5) : (colors as string[])

  const styleObject = {
    width: "var(--tile-width)",
    height: "var(--tile-height)",
    transition: "transform 0.5s ease-in-out",
    transform: `rotate(${[0, 90, 180, 270].sort(() => Math.random() - 0.5)[0]}deg)`,
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="square"
      viewBox="0 0 2 2"
      style={styleObject}
    >
      <rect
        style={{ transition: "fill 0.5s ease-in-out" }}
        fill={`var(${getRandom(colorsToUse)})`}
        x="0"
        y="0"
        width="1"
        height="1"
      />
      <rect
        style={{ transition: "fill 0.5s ease-in-out" }}
        fill={`var(${getRandom(colorsToUse)})`}
        x="1"
        y="0"
        width="1"
        height="1"
      />
      <rect
        style={{ transition: "fill 0.5s ease-in-out" }}
        fill={`var(${getRandom(colorsToUse)})`}
        x="0"
        y="1"
        width="1"
        height="1"
      />
      <rect
        style={{ transition: "fill 0.5s ease-in-out" }}
        fill={`var(${getRandom(colorsToUse)})`}
        x="1"
        y="1"
        width="1"
        height="1"
      />
    </svg>
  )
}

export default Square
