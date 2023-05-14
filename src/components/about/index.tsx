import frameblack from "../../assets/images/Frameblack.svg";

const AboutUs: React.FC<{}> = ({}) => {
  return (
    <div className="w-full min-h-screen py-12 xl:py-0 bg-[#E5E5E5] flex flex-col justify-center items-center font-roboto">
      <div className="mb-5 px-5 xl:px-0">
        <img src={frameblack} />
      </div>
      <div className="w-9/12">
        <div className="pb-4">
          <h2 className="font-bold">About us</h2>
          <p>--</p>
        </div>
        <div className="flex justify-between gap-x-4">
          <div className="w-1/2">
            <p className="text-sm">
              About us Booreykoo is a branding, web development, design, and
              marketing firm with more than fourteen years of industry
              experience, serving clients worldwide. Welcome to the future of
              design.
            </p>
            <p className="text-sm mt-4">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
              consequat. Duis autem vel eum iriure dolor in hendrerit in
              vulputate velit esse molestie consequat, delenit vel illum dolore
              delenit eu feugiat nulla facilisis at vero eros et accumsan et
              iusto odio dignissim qui blandit praesent luptatum zzril delenit
              augue duis dolore te delenit feugait nulla se molestie consequat,
              delenit vel illum dolore delenit eu feugiat nulla facilisis at
              vero eros et accumsan et iusto odio dignissim qui blandit praesent
              luptatum zzril delenit augue duis dolore te delenit feugait nulla
              elit esse delenit molestie cet facilisi
            </p>
          </div>
          <div className="w-1/2">
            <p className="text-sm">
              Booreykoo is a branding, web development, design, and marketing
              firm with more than fourteen years of industry experience, serving
              clients worldwide. Welcome to the future of design ut laoreet
              dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
              quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut
              aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor
              in hendrerit in vulputate velit esse.
            </p>
            <p className="text-sm mt-4">
              Molestie consequat, delenit vel illum dolore delenit eu feugiat
              nulla facilisis at vero eros et accumsan et iusto odio dignissim
              qui blandit praesent luptatum zzril delenit augue duis dolore te
              delenit feugait nulla se molestie consequat, delenit vel illum
              dolore delenit eu feugiat nulla facilisis at vero eros et accumsan
              et iusto odio dignissim qui blandit praesent luptatum zzril
              delenit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
