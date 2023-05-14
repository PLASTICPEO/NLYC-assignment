import Frame from "../../../assets/images/Frame.svg";

const Hero: React.FC<{}> = () => {
  return (
    <div className="flex jusify-center items-center flex-col px-5 xl:px-0">
      <div className="mb-5">
        <img src={Frame} />
      </div>
      <div>
        <p className="font-roboto  text-center text-white">
          BUREIKOU - [BOO-REY-KOO] JAPANESE 無礼講
        </p>
        <p className="font-roboto text-center text-white">
          putting everything aside to be yourself
        </p>
      </div>
    </div>
  );
};

export default Hero;
