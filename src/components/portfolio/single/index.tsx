import { useState } from "react";
import { Link } from "react-router-dom";
import { PortfolioSinglePropsTypes } from "./portfolioSingle.types";

const PortfolioSingle: React.FC<PortfolioSinglePropsTypes> = ({
  slug,
  title,
  description,
  thumb,
}) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <Link
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
      to={slug}
      className="relative"
    >
      <img src={thumb} className="object-fill w-full h-full" />
      {isHovered ? (
        <div className="absolute bg-black/70 text-white flex flex-col justify-center top-0 left-0 w-full h-full px-5">
          <h2 className="text-xl">{title}</h2>
          <p>--</p>
          <p className="text-xs">{description}</p>
        </div>
      ) : null}
    </Link>
  );
};

export default PortfolioSingle;
