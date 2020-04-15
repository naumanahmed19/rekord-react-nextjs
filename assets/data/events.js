

const events = [
    {
      id: 0,
      title: "New York park live",
      venue: "33 Cliveden Close, Melbourne VIC 3000, Australia",
      slug: slugify("New York park live"),
      content: `  <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Adipisci alias aliquid at cum deleniti, eveniet facere, facilis,
        id incidunt maiores nesciunt perferendis quas quia quidem quos
        reiciendis saepe temporibus veniam?
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Adipisci alias aliquid at cum deleniti, eveniet facere, facilis,
        id incidunt maiores nesciunt perferendis quas quia quidem quos
        reiciendis saepe temporibus veniam?
      </p>`,
      btnLabel: "Buy Now At iTunes",
      btnUrl: "#",
      artists: artists.slice(1, 3),
      date: "25 Mar 2021",
      startTime: "7:00 PM",
      endTime: "11:00 PM",
    },
    {
      id: 1,
      title: "Gzbc Night Event",
      slug: slugify("Gzbc Night Event"),
      venue: "33 Cliveden Close, Melbourne VIC 3000, Australia",
      content: `  <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Adipisci alias aliquid at cum deleniti, eveniet facere, facilis,
      id incidunt maiores nesciunt perferendis quas quia quidem quos
      reiciendis saepe temporibus veniam?
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Adipisci alias aliquid at cum deleniti, eveniet facere, facilis,
      id incidunt maiores nesciunt perferendis quas quia quidem quos
      reiciendis saepe temporibus veniam?
    </p>`,
      btnLabel: "Buy Now At iTunes",
      btnUrl: "#",
      artists: artists.slice(3, 4),
      date: "25 Mar 2021",
      startTime: "7:00 PM",
      endTime: "11:00 PM",
    },
    {
      id: 2,
      title: "Gzbc Night Event",
      slug: slugify("Gzbc Night Event"),
      venue: "33 Cliveden Close, Melbourne VIC 3000, Australia",
      content: `  <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Adipisci alias aliquid at cum deleniti, eveniet facere, facilis,
      id incidunt maiores nesciunt perferendis quas quia quidem quos
      reiciendis saepe temporibus veniam?
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Adipisci alias aliquid at cum deleniti, eveniet facere, facilis,
      id incidunt maiores nesciunt perferendis quas quia quidem quos
      reiciendis saepe temporibus veniam?
    </p>`,
    thumbnail: "https://source.unsplash.com/570x200/?event",
      btnLabel: "Buy Now At iTunes",
      btnUrl: "#",
      artists: artists.slice(3, 7),
      date: "25 Mar 2021",
      startTime: "7:00 PM",
      endTime: "11:00 PM",
    },
    {
      id: 3,
      title: "Amsterdam  park live",
      venue: "33 Cliveden Close, Melbourne VIC 3000, Australia",
      slug: slugify("Amsterdam  park live"),
      content: `  <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Adipisci alias aliquid at cum deleniti, eveniet facere, facilis,
        id incidunt maiores nesciunt perferendis quas quia quidem quos
        reiciendis saepe temporibus veniam?
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Adipisci alias aliquid at cum deleniti, eveniet facere, facilis,
        id incidunt maiores nesciunt perferendis quas quia quidem quos
        reiciendis saepe temporibus veniam?
      </p>`,
      btnLabel: "Buy Now At iTunes",
      btnUrl: "#",
      artists: artists.slice(1, 3),
      date: "25 Mar 2021",
      startTime: "7:00 PM",
      endTime: "11:00 PM",
    },
    {
      id: 4,
      title: "Paris Night Event",
      slug: slugify("Paris Night Event"),
      venue: "33 Cliveden Close, Melbourne VIC 3000, Australia",
      content: `  <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Adipisci alias aliquid at cum deleniti, eveniet facere, facilis,
      id incidunt maiores nesciunt perferendis quas quia quidem quos
      reiciendis saepe temporibus veniam?
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Adipisci alias aliquid at cum deleniti, eveniet facere, facilis,
      id incidunt maiores nesciunt perferendis quas quia quidem quos
      reiciendis saepe temporibus veniam?
    </p>`,
      btnLabel: "Buy Now At iTunes",
      btnUrl: "#",
      artists: artists.slice(3, 4),
      date: "30 July 2021",
      startTime: "7:00 PM",
      endTime: "11:00 PM",
    },
    {
      id: 5,
      title: "London Night Event",
      slug: slugify("London Night Event",),
      content: `  <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Adipisci alias aliquid at cum deleniti, eveniet facere, facilis,
      id incidunt maiores nesciunt perferendis quas quia quidem quos
      reiciendis saepe temporibus veniam?
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Adipisci alias aliquid at cum deleniti, eveniet facere, facilis,
      id incidunt maiores nesciunt perferendis quas quia quidem quos
      reiciendis saepe temporibus veniam?
    </p>`,
      venue: "33 Cliveden Close, Melbourne VIC 3000, Australia",
      btnLabel: "Buy Now At iTunes",
      btnUrl: "#",
      artists: artists.slice(3, 7),
      date: "01 Aug 2021",
      startTime: "7:00 PM",
      endTime: "11:00 PM",
    },
    {
      id: 6,
      title: "New York park live",
      venue: "33 Cliveden Close, Melbourne VIC 3000, Australia",
      slug: slugify("New York park live"),
      thumbnail: "https://source.unsplash.com/570x400/?music",
      content: `  <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Adipisci alias aliquid at cum deleniti, eveniet facere, facilis,
        id incidunt maiores nesciunt perferendis quas quia quidem quos
        reiciendis saepe temporibus veniam?
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Adipisci alias aliquid at cum deleniti, eveniet facere, facilis,
        id incidunt maiores nesciunt perferendis quas quia quidem quos
        reiciendis saepe temporibus veniam?
      </p>`,
      btnLabel: "Buy Now At iTunes",
      btnUrl: "#",
      artists: artists.slice(1, 3),
      date: "17 Mar 2021",
      startTime: "7:00 PM",
      endTime: "11:00 PM",
    },
    {
      id: 7,
      title: "Cafe Studio Night Event",
      slug: slugify("Cafe Studio Night Event"),
      venue: "33 Cliveden Close, Melbourne VIC 3000, Australia",
      btnLabel: "Buy Now At iTunes",
      btnUrl: "#",
      artists: artists.slice(3, 4),
      date: "30 Mar 2021",
      startTime: "7:00 PM",
      endTime: "11:00 PM",
    },
    {
      id: 8,
      title: "Lahore Night Event",
      slug: slugify("Lahore Night Event"),
      venue: "33 Cliveden Close, Melbourne VIC 3000, Australia",
      thumbnail:
        "http://xvelopers.com/wp/themes/rekord/wp-content/uploads/sites/48/2019/03/v11.jpg",
      btnLabel: "Buy Now At iTunes",
      btnUrl: "#",
      artists: artists.slice(3, 7),
      date: "25 Mar 2021",
      startTime: "7:00 PM",
      endTime: "11:00 PM",
    },
  ];