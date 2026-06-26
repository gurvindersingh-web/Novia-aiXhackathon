export function splitText(text) {
  return text.split('').map((char, i) => (
    <span
      key={i}
      className="inline-block animate-fade-in-up"
      style={{ animationDelay: `${i * 0.03}s`, animationFillMode: 'both' }}
    >
      {char === ' ' ? '\u00A0' : char}
    </span>
  ));
}
