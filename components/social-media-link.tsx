import Image from "next/image";

interface SocialMediaLinkProps {
  href: string;
  imageSrc: string;
  alt: string;
  text: string;
}

export function SocialMediaLink({
  href,
  imageSrc,
  alt,
  text,
}: SocialMediaLinkProps) {
  return (
    <>
      <a
        href={href}
        target="_blank"
        rel="noreferrer noopenner"
        className="relative block w-8 h-8 sm:hidden"
      >
        <Image
          src={imageSrc}
          alt={alt}
          fill
          className="object-contain object-center"
        />
      </a>

      <a
        href={href}
        target="_blank"
        rel="noreferrer noopenner"
        className="hidden sm:flex items-center space-x-4"
      >
        <Image
          src={imageSrc}
          alt={alt}
          width={36}
          height={36}
          className="object-contain object-center"
        />

        <span className="manrope-font text-base text-light-primary sm:w-[140px] sm:min-w-[140px]">
          {text}
        </span>
      </a>
    </>
  );
}
