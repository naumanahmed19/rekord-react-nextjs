import Layout from "../../components/Layout";
import {  homeTabs, albums,posts, events,tracks } from "../../assets/data/data";


import {
  HomeSlider,
  AlbumCarousel,
  PostCarousel,
  CategoryTabs,
  EventList ,
  PostWidget
} from "../../components";
import Slider from "react-slick";
    
var settings = {
  dots: true,

  // responsive: [
  //   {
  //     breakpoint: 768,
  //     settings: {
  //       arrows: false,
  //       centerMode: true,
  //       centerPadding: "40px",
  //       slidesToShow: 3
  //     }
  //   },
  //   {
  //     breakpoint: 480,
  //     settings: {
  //       arrows: false,
  //       centerMode: true,
  //       centerPadding: "40px",
  //       slidesToShow: 1
  //     }
  //   }
  // ]
};
const Home = () => {
  return (
    <div>
    <HomeSlider />
    <Layout>
        <div className="p-3b">
        <section>
          <AlbumCarousel 
             title="Latest Posts"
             subtitle="Checkout What's new at our blog"
          albums={albums}  pp={events} />
        </section>
        <section className="section">
          <PostCarousel
            title="Latest Posts"
            subtitle="Checkout What's new at our blog"
            posts={posts}
          />
        </section>
        <section className="section mt-4">
          <div className="row row-eq-height">
            <div className="col-lg-8">
              <CategoryTabs
                title="Latest Tracks"
                subtitle="Checkout What's new at our blog"
                tracks={tracks}
                tabs={homeTabs}
              />
            </div>
            <div className="col-lg-4">
              <EventList events={events.slice(0,3)} />
            </div>
          </div>
        </section>
        <section className="mb-5">
          <AlbumCarousel albums={albums} />
        </section>
      </div>
    </Layout>
    </div>
  );
};
export default Home;
