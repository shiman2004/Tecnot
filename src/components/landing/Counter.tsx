import { motion, useSpring, useTransform, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';
import './Counter.css';

interface NumberProps {
  mv: any;
  number: number;
  height: number;
}

function Number({ mv, number, height }: NumberProps) {
  let y = useTransform(mv, (latest: number) => {
    let placeValue = latest % 10;
    let offset = (10 + number - placeValue) % 10;
    let memo = offset * height;
    if (offset > 5) {
      memo -= 10 * height;
    }
    return memo;
  });

  return (
    <motion.span className="counter-number" style={{ y }}>
      {number}
    </motion.span>
  );
}

interface DigitProps {
  place: number | string;
  value: number;
  height: number;
  digitStyle?: React.CSSProperties;
  shouldAnimate: boolean;
}

function Digit({ place, value, height, digitStyle, shouldAnimate }: DigitProps) {
  const isDecimal = place === '.';
  const valueRoundedToPlace = isDecimal ? 0 : Math.floor(value / (place as number));
  const animatedValue = useSpring(0, { 
    stiffness: 100, 
    damping: 30,
    mass: 1
  });

  useEffect(() => {
    if (!isDecimal && shouldAnimate) {
      // Delay the animation slightly for effect
      const timer = setTimeout(() => {
        animatedValue.set(valueRoundedToPlace);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [animatedValue, valueRoundedToPlace, isDecimal, shouldAnimate]);

  if (isDecimal) {
    return (
      <span className="counter-digit" style={{ height, ...digitStyle, width: 'fit-content' }}>
        .
      </span>
    );
  }

  return (
    <span className="counter-digit" style={{ height, ...digitStyle }}>
      {Array.from({ length: 10 }, (_, i) => (
        <Number key={i} mv={animatedValue} number={i} height={height} />
      ))}
    </span>
  );
}

interface CounterProps {
  value: number;
  fontSize?: number;
  padding?: number;
  places?: (number | string)[];
  gap?: number;
  borderRadius?: number;
  horizontalPadding?: number;
  textColor?: string;
  fontWeight?: number | string;
  containerStyle?: React.CSSProperties;
  counterStyle?: React.CSSProperties;
  digitStyle?: React.CSSProperties;
  gradientHeight?: number;
  gradientFrom?: string;
  gradientTo?: string;
  topGradientStyle?: React.CSSProperties;
  bottomGradientStyle?: React.CSSProperties;
}

export default function Counter({
  value,
  fontSize = 100,
  padding = 0,
  places = [...value.toString()].map((ch, i, a) => {
    if (ch === '.') {
      return '.';
    } else {
      return (
        10 **
        (a.indexOf('.') === -1
          ? a.length - i - 1
          : i < a.indexOf('.')
          ? a.indexOf('.') - i - 1
          : -(i - a.indexOf('.')))
      );
    }
  }),
  gap = 8,
  borderRadius = 4,
  horizontalPadding = 8,
  textColor = 'inherit',
  fontWeight = 'inherit',
  containerStyle,
  counterStyle,
  digitStyle,
  gradientHeight = 16,
  gradientFrom = 'black',
  gradientTo = 'transparent',
  topGradientStyle,
  bottomGradientStyle,
}: CounterProps) {
  const height = fontSize + padding;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  const defaultCounterStyle = {
    fontSize,
    gap: gap,
    borderRadius: borderRadius,
    paddingLeft: horizontalPadding,
    paddingRight: horizontalPadding,
    color: textColor,
    fontWeight: fontWeight,
  };

  const defaultTopGradientStyle = {
    height: gradientHeight,
    background: `linear-gradient(to bottom, ${gradientFrom}, ${gradientTo})`,
  };

  const defaultBottomGradientStyle = {
    height: gradientHeight,
    background: `linear-gradient(to top, ${gradientFrom}, ${gradientTo})`,
  };

  return (
    <span ref={ref} className="counter-container" style={containerStyle}>
      <span className="counter-counter" style={{ ...defaultCounterStyle, ...counterStyle }}>
        {places.map((place, index) => (
          <Digit 
            key={`${place}-${index}`} 
            place={place} 
            value={value} 
            height={height} 
            digitStyle={digitStyle}
            shouldAnimate={isInView}
          />
        ))}
      </span>
      <span className="gradient-container">
        <span className="top-gradient" style={topGradientStyle ? topGradientStyle : defaultTopGradientStyle}></span>
        <span
          className="bottom-gradient"
          style={bottomGradientStyle ? bottomGradientStyle : defaultBottomGradientStyle}
        ></span>
      </span>
    </span>
  );
}