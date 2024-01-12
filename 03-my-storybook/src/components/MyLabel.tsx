import './MyLabel.css';

interface Props {
  /**
   * Text to display
   */
  label: string;
  /**
   * Label size
   */
  size?: 'normal' | 'h1' | 'h2' | 'h3';
  /**
   * All caps label
   */
  allCaps?: boolean;
  /**
   * Color text label
   */
  color?: 'text-primary' | 'text-secondary' | 'text-tertiary';
  /**
   * Custom color text label
   */
  fontColor?: string;
  /**
   * Background color label
   */
  backgroundColor?: string;
}

export const MyLabel = ({
  label,
  size = 'normal',
  allCaps = false,
  color,
  fontColor,
  backgroundColor,
}: Props) => {
  return (
    <span
      className={`${size} ${color} label`}
      style={{ color: fontColor, backgroundColor }}
    >
      {allCaps ? label.toUpperCase() : label}
    </span>
  );
};
