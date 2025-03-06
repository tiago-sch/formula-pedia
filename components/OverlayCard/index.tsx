import { type CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";

type OverlayCardProps = {
  image: string;
  alt: string;
  title: string;
  text?: string;
  buttonText: string;
  buttonHref: string;
}

const CARD_RADIUS_OVERWRITE = { "--radius-box": "0.25rem" } as CSSProperties;

const OverlayCard = ({
  image,
  alt,
  title,
  text,
  buttonText,
  buttonHref
}: OverlayCardProps) => (
  <div
    className="card bg-base-100 image-full w-full shadow-sm rounded"
    style={CARD_RADIUS_OVERWRITE}
  >
    <figure>
      <Image src={image} alt={alt} width={640} height={200}/>
    </figure>
    <div className="card-body rounded">
      <h2 className="card-title">{title}</h2>
      <p>{text}</p>
      <div className="card-actions justify-end">
        <Link
          className="btn btn-primary"
          href={buttonHref}
          prefetch={false}
        >
          {buttonText}
        </Link>
      </div>
    </div>
  </div>
);

export default OverlayCard;
