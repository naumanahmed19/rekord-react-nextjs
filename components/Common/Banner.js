import { backgroundImage } from "../../helpers/Utils";

const Banner = ({children,image}) => {
  return (
    <section
      class="relative xv-slide"
      data-bg-possition="left"
      data-bg-repeat="false"
      style={backgroundImage(image)}
    >
      <div class="has-bottom-gradient">
        {children}
      </div>
      <div class="bottom-gradient "></div>
    </section>
  );
};

export default Banner;
