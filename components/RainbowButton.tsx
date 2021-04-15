import { useRainbow } from "../hooks/useRainbow";

export const MagicRainbowButton = ({ children, intervalDelay = 2000 }) => {
  // The hook should take 1 argument, `intervalDelay`.
  // it should return an object in this shape:
  /*
      {
        '--magic-rainbow-color-0': hsl(...),
        '--magic-rainbow-color-1': hsl(...),
        '--magic-rainbow-color-2': hsl(...),
      }
    */
  const colors = useRainbow({ intervalDelay });
  const colorKeys = Object.keys(colors);
  return (
    <button
      style={{
        // Spread the colors to define them as custom properties
        // on this element
        ...colors,
        color: "white",
        border: "none",
        width: 300,
        height: 60,
        fontSize: 21,
        borderRadius: 5,
        // Use the keys to set the same transition on all props.
        transition: `
            ${colorKeys[0]} ${intervalDelay}ms linear 0s,
            ${colorKeys[1]} ${intervalDelay}ms linear 0s,
            ${colorKeys[2]} ${intervalDelay}ms linear 0s
          `,
        // Use those property values in our gradient.
        // Values go from 2 to 0 so that colors radiate
        // outwards from the top-left circle, not inwards.
        background: `
            radial-gradient(
              circle at top left,
              var(${colorKeys[2]}),
              var(${colorKeys[1]}),
              var(${colorKeys[0]})
            )
          `,
      }}
    >
      {children}
    </button>
  );
};
