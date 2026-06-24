import { Atom, Dna, FlaskConical, Leaf } from "lucide-react";

const leftIcons = [
  { Icon: Atom, top: "15%", size: 70 },
  { Icon: Dna, top: "60%", size: 60 },
];

const rightIcons = [
  { Icon: FlaskConical, top: "25%", size: 70 },
  { Icon: Leaf, top: "70%", size: 70 },
];

export default function FloatingScienceBg() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {leftIcons.map(({ Icon, top, size }, i) => (
        <Icon
          key={`left-${i}`}
          className="absolute text-white/10 animate-floatSpin"
          style={{
            left: "5%",
            top,
            width: size,
            height: size,
            animationDelay: `${i * 0.6}s`,
          }}
        />
      ))}

      {rightIcons.map(({ Icon, top, size }, i) => (
        <Icon
          key={`right-${i}`}
          className="absolute text-white/10 animate-floatSpin"
          style={{
            right: "5%",
            top,
            width: size,
            height: size,
            animationDelay: `${i * 0.6}s`,
          }}
        />
      ))}
    </div>
  );
}