
import {  homeTabs, albums,posts, events,tracks, slides } from "../../assets/data/data";


import {
  BaseSlider,
  Layout,
  AlbumCarousel,
  PostCarousel,
  CategoryTabs,
  EventList ,
} from "../../components";
const Home = () => {
  return (
    <div>
    <BaseSlider slides={slides} />
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
