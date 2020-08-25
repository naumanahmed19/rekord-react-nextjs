import { backgroundImage } from "../../helpers/Utils";

const Banner = ({children,image}) => {
  return (
    <section
      className="relative xv-slide"
      data-bg-possition="left"
      data-bg-repeat="false"
      style={backgroundImage(image)}
    >
      <div className="has-bottom-gradient">
        {children}
      </div>
      <div className="bottom-gradient "></div>
    </section>
  );
};

export default Banner;
