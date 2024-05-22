import { ColorBox, Palette } from '../../styles/Palette';

const colors = [
  '#FF6347',
  '#1E90FF',
  '#32CD32',
  '#FFD700',
  '#6A5ACD',
  '#FF69B4',
];

type ColorPaletteProps = {
  onSelect: (color: string) => void;
};

const ColorPalette = ({ onSelect }: ColorPaletteProps) => {
  return (
    <Palette>
      {colors.map((color) => (
        <ColorBox key={color} color={color} onClick={() => onSelect(color)} />
      ))}
    </Palette>
  );
};

export { ColorPalette };
