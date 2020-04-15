import Layout from "../../components/Layout";
import {  homeTabs, albums, events,tracks } from "../../assets/data/data";


import {
  HomeSlider,
  AlbumCarousel,
  PostCarousel,
  CategoryTabs,
  EventList 
} from "../../components";

const Home = () => {
  return (
    <div>
    <HomeSlider />
    <Layout>
        <div className="p-3b">
        <section>
          <AlbumCarousel albums={albums} />
        </section>
        <section className="section">
          <PostCarousel
            title="Latest Posts"
            subtitle="Checkout What's new at our blog"
            posts={albums}
          />
        </section>
        <section className="section mt-4">
          <div className="row row-eq-height">
            <div className="col-lg-8">
              <CategoryTabs
                title="Latest Posts"
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
