export interface SectionTitleProps {
  /** primary accent color */
  highlightWord: string;
  /** the title text */
  mainText: string;
  /** allow overriding */
  className?: string;
}

export default function SectionTitle({
  highlightWord,
  mainText,
  className = '',
}: SectionTitleProps) {
  return (
    <h2
      className={`font-sans text-[28px] font-normal text-footer leading-tight ${className}`}
    >
      <span className="text-accent-primary">{highlightWord}</span>
      <span className="ml-[0.3em]">{mainText}</span>
    </h2>
  );
}
