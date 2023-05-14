import { PortfolioDetailPropsTypes } from "./portfolioDetail.types";

const PortfolioDetail: React.FC<PortfolioDetailPropsTypes> = ({
  portfolioDetails,
}) => {
  return (
    <div className="w-full h-screen bg-[#E5E5E5] xl:flex flex-nowrap justify-center pt-[10%]">
      <div className="xl:text-start text-center xl:mr-[20%]">
        <p className="font-bold ">{portfolioDetails.title}</p>
        <p>--</p>
        <p>{portfolioDetails.description}</p>
      </div>
      <div>
        <img
          className="xl:w-full xl:max-h-96 p-2"
          src={portfolioDetails.thumb}
        />
      </div>
    </div>
  );
};

export default PortfolioDetail;
