import PortfolioSingle from "../single";
import { PortfolioListPropsTypes } from "./portfolioList.type";

const PortfolioList: React.FC<PortfolioListPropsTypes> = ({
  portfolioList,
}) => {
  return (
    <div className="h-full w-full  bg-[#E5E5E5] grid xl:grid-rows-2 xl:grid-flow-col gap-2 py-12 px-2 ">
      {portfolioList.map((item) => {
        return (
          <PortfolioSingle
            key={item.slug}
            description={item.description}
            title={item.title}
            thumb={item.thumb}
            slug={item.slug}
          />
        );
      })}
    </div>
  );
};

export default PortfolioList;
