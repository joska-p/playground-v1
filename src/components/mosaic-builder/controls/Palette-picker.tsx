import { defaultPalette } from "../tiles/default-options";
import { Palette } from "./Palette";

type Props = {
  palettes: string[][];
  currentPalette: string[];
  handleSetNewColors: () => void;
};

const PalettePicker = ({ palettes, currentPalette, handleSetNewColors }: Props) => {
  return (
    <fieldset className="flex h-[176px] w-full flex-col flex-wrap justify-center gap-2 overflow-x-auto p-2 has-[:focus-visible]:ring-4 has-[:focus-visible]:ring-secondary md:h-auto md:flex-row md:gap-4">
      <Palette
        palette={defaultPalette}
        handleSetNewColors={handleSetNewColors}
        checked={defaultPalette.join(",") === currentPalette.join(",")}
        aria-label="Default palette"
      />
      {palettes.map((palette) => (
        <Palette
          key={palette.toSorted().join(",")}
          palette={palette}
          handleSetNewColors={handleSetNewColors}
          checked={palette.join(",") === currentPalette.join(",")}
          aria-label={palette.join(",")}
        />
      ))}
    </fieldset>
  );
};

export { PalettePicker };
