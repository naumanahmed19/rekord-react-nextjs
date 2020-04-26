import { Nav, Tabs, Tab } from "react-bootstrap";
import { TrackList } from "../components";

const CategoryTabs = ({ title, subtitle, tabs, tracks }) => {
  return (
    <div className="card no-b mb-md-3 p-2">
      <div className="card-header no-bg transparent">
        <div>
          <h4>{title}</h4>
          <p>{subtitle}</p>

          <div className="nav-material">
            <Tabs
              defaultActiveKey="rock"
              transition={false}
              id="noanim-tab-example"
            >
              {tabs.map((tab, index) => (
                <Tab eventKey={tab.category} title={tab.title} key={index}>
                  <div className="my-4">
                    <TrackList
                      style="full"
                      tracks={tracks.filter(
                        (track) => track.category == tab.category
                      )}
                    />
                  </div>
                </Tab>
              ))}
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryTabs;
