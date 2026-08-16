interface LetterRollMenuProps {
  text: string;
  className?: string;
}

export function LetterRollMenu({ text, className = '' }: LetterRollMenuProps) {
  return (
    <span className={`relative inline-flex ${className}`}>
      {text.split('').map((ch, i) => {
        const display = ch === ' ' ? ' ' : ch;
        return (
          <span
            key={i}
            className="relative inline-block overflow-hidden"
            style={{ height: '1.2em' }}
          >
            <span
              className="block transition-transform duration-300 ease-out group-hover:-translate-y-full"
              style={{ transitionDelay: `${i * 18}ms` }}
            >
              {display}
            </span>
            <span
              aria-hidden="true"
              className="absolute left-0 top-0 block translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0"
              style={{ transitionDelay: `${i * 18}ms` }}
            >
              {display}
            </span>
          </span>
        );
      })}
    </span>
  );
}
