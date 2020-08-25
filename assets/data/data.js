export const users = [
  {
    id: 0,
    name: "Jhon Doe",
    email: "doe@rekord.com",
    avatar:
      "http://xvelopers.com/wp/themes/rekord/wp-content/uploads/sites/48/2019/03/u4.jpg",
  },
  {
    id: 1,
    name: "Sam Doe",
    email: "sam@rekord.com",
    avatar:
      "http://xvelopers.com/wp/themes/rekord/wp-content/uploads/sites/48/2019/03/u5.jpg",
  },
  {
    id: 1,
    name: "Rak Doe",
    email: "rak@rekord.com",
    avatar:
      "http://xvelopers.com/wp/themes/rekord/wp-content/uploads/sites/48/2019/03/u6.jpg",
  },
];

function unsplashImage(id, width = 570) {
  return `https://images.unsplash.com/photo-${id}?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=${width}&q=80 750w"`;
}
function slugify(text) {
  return text
    .toString()                     // Cast to string
    .toLowerCase()                  // Convert the string to lowercase letters
    .normalize('NFD')       // The normalize() method returns the Unicode Normalization Form of a given string.
    .trim()                         // Remove whitespace from both sides of a string
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
    .replace(/\-\-+/g, '-');        // Replace multiple - with single -
}
export const photos = [
  {
    id: 0,
    title: "one",
    thumbnail: unsplashImage("1492684223066-81342ee5ff30", 500),
    image: unsplashImage("1492684223066-81342ee5ff30", 1000),
    url: "#",
    category: "rock",
  },
  {
    id: 1,
    title: "one",
    thumbnail: unsplashImage("1468359601543-843bfaef291a", 300),
    image: unsplashImage("1468359601543-843bfaef291a", 1100),
    url: "#",
    category: "rock",
  },
  {
    id: 3,
    title: "one",
    thumbnail: "https://source.unsplash.com/random/",
    image: unsplashImage("1468359601543-843bfaef291a", 1300),
    url: "#",
    category: "rock",
  },
  {
    id: 4,
    title: "one",
    thumbnail: "https://source.unsplash.com/random/wow",
    image: unsplashImage("1578559117711-f80f34af785f", 1100),
    url: "#",
    category: "rock",
  },
  {
    id: 5,
    title: "one",
    thumbnail: "https://source.unsplash.com/random/love",
    image: unsplashImage("1552158875-de73c16fea5d", 1400),
    url: "#",
    category: "rock",
  },
  {
    id: 6,
    title: "one",
    thumbnail: unsplashImage("1516368694098-47836cebec97", 250),
    image: unsplashImage("1516368694098-47836cebec97", 900),
    url: "#",
    category: "rock",
  },

  {
    id: 7,
    title: "one",
    thumbnail: unsplashImage("1473691955023-da1c49c95c78", 600),
    image: unsplashImage("1473691955023-da1c49c95c78", 900),
    url: "#",
    category: "rock",
  },
];

export const artists = [
  {
    id:0,
    name: "Atif Aslam",
    avatar:
      "http://xvelopers.com/wp/themes/rekord/wp-content/uploads/sites/48/2019/03/u4.jpg",
    albums: 7,
    category: 'A',
  },
  {
    id:1,
    name: "Atif khan",
    avatar:
      "http://xvelopers.com/wp/themes/rekord/wp-content/uploads/sites/48/2019/03/u1.jpg",
    albums: 7,
    category: 'A',
  },
  {
    id:2,
    name: "Ahas Joe",
    avatar:
      "http://xvelopers.com/wp/themes/rekord/wp-content/uploads/sites/48/2019/03/u2.jpg",
    albums: 7,
    category: 'A',
  },
  {
    id:3,
    name: "Sara Joe",
    avatar:
      "http://xvelopers.com/wp/themes/rekord/wp-content/uploads/sites/48/2019/03/u5.jpg",
    albums: 3,
    category: 'C',
  },
  {
    id:4,
    name: "Bara Joe",
    avatar:
      "http://xvelopers.com/wp/themes/rekord/wp-content/uploads/sites/48/2019/03/u6.jpg",
    albums: 34,
    category: 'B',
  },
  {
    id:5,
    name: "Bouni Joe",
    avatar:
      "http://xvelopers.com/wp/themes/rekord/wp-content/uploads/sites/48/2019/03/u7.jpg",
    albums: 9,
    category: 'B',
  },
  {
    id:6,
    name: "Boi Joe",
    avatar:
      "http://xvelopers.com/wp/themes/rekord/wp-content/uploads/sites/48/2019/03/u3.jpg",
    albums: 5,
    category: 'B',
  },
  {
    id:7,
    name: "DJ Aslam",
    avatar:
      "http://xvelopers.com/wp/themes/rekord/wp-content/uploads/sites/48/2019/03/u4.jpg",
    albums: 7,
    category: 'D',
  },
  {
    id:8,
    name: "Dpou khan",
    avatar:
      "http://xvelopers.com/wp/themes/rekord/wp-content/uploads/sites/48/2019/03/u1.jpg",
    albums: 2,
    category: 'D',
  },
  {
    id:9,
    name: "Dyndaia Joe",
    avatar:
      "http://xvelopers.com/wp/themes/rekord/wp-content/uploads/sites/48/2019/03/u2.jpg",
    albums: 3,
    category: 'D',
  },

];

export const playListTracks = [


  {
    id: 1,
    title: "Sound Helix Sample Track",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    thumbnail:
      "https://xvelopers.com/wp/themes/rekord/wp-content/uploads/sites/48/2019/03/a6.jpg",
    artists: artists.slice(1, 4),
    time: "5:03",
    category: "rock",
  },
  {
    id: 2,
    title: "Helix Sample Track",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
    thumbnail:
      "https://xvelopers.com/wp/themes/rekord/wp-content/uploads/sites/48/2019/03/a6.jpg",
    artists: artists.slice(1, 4),
    time: "5:03",
    category: "rock",
  },
  {
    id: 0,
    title: "Live Radio Stream",
    isStream: true,
    url: "http://live.radiom.fr/live600.opus",
    thumbnail:
      "https://xvelopers.com/wp/themes/rekord/wp-content/uploads/sites/48/2019/03/a6.jpg",
    artists: artists.slice(1, 4),
    time: "5:03",
    category: "rock",
  },

];



export const tracks = [
  {
    id: 0,
    title: "Never let me go",
    url: "https://xvelopers.com/demos/html/record/assets/media/track1.mp3",
    thumbnail:
      "https://xvelopers.com/wp/themes/rekord/wp-content/uploads/sites/48/2019/03/a6.jpg",
    artists: artists.slice(1, 4),
    time: "5:03",
    category: "rock",
  },
  {
    id: 1,
    title: "We will be together",
    url: "https://xvelopers.com/demos/html/record/assets/media/track2.mp3",
    thumbnail: "https://xvelopers.com/demos/html/record/assets/img/demo/a1.jpg",
    cover: "https://xvelopers.com/wp/themes/rekord/wp-content/uploads/sites/48/2019/03/a7.jpg",
      artists: artists.slice(5,8),
    time: "4:03",
    category: "sufi",
  },
  {
    id: 2,
    title: "Wo Lamhy wo batain",
    url: "https://xvelopers.com/demos/html/record/assets/media/track3.mp3",
    thumbnail: "https://xvelopers.com/demos/html/record/assets/img/demo/a2.jpg",
      artists: artists.slice(1,4),
    time: "7:03",
    category: "pop",
  },
  {
    id: 3,
    title: "Nacg to fice",
    url: "http://xvelopers.com/wp/themes/rekord/wp-content/uploads/sites/48/2019/03/track66.mp3",
    thumbnail: "https://xvelopers.com/demos/html/record/assets/img/demo/a3.jpg",
      artists: artists.slice(5, 8),
    time: "7:03",
    category: "jazz",
  },
  {
    id: 4,
    title: "No one better than you",
    url: "http://xvelopers.com/wp/themes/rekord/wp-content/uploads/sites/48/2019/03/track7c.mp3",
    thumbnail: "https://xvelopers.com/demos/html/record/assets/img/demo/a4.jpg",
      artists: artists.slice(1, 4),
    time: "7:03",
    category: "classic",
  },
  {
    id: 5,
    title: "Root cause of love",
    url: "http://xvelopers.com/wp/themes/rekord/wp-content/uploads/sites/48/2019/03/track7b.mp3",
    thumbnail: "https://xvelopers.com/demos/html/record/assets/img/demo/a5.jpg",
      artists: artists.slice(5, 8),
    time: "5:03",
    category: "rock",
  },
  {
    id: 6,
    title: "Xami ki thara",
    url: "http://xvelopers.com/wp/themes/rekord/wp-content/uploads/sites/48/2019/03/track7a.mp3",
    thumbnail: "https://xvelopers.com/demos/html/record/assets/img/demo/a6.jpg",
      artists: artists.slice(1, 4),
    time: "5:03",
    category: "rock",
  },
  {
    id: 7,
    title: "Who is the best",
    url: "http://xvelopers.com/wp/themes/rekord/wp-content/uploads/sites/48/2019/03/track8e.mp3",
    thumbnail: "https://xvelopers.com/demos/html/record/assets/img/demo/a4.jpg",
      artists: artists.slice(5, 8),
    time: "5:03",
    category: "rock",
  },
  {
    id: 8,
    title: "Crush it now",
    url: "http://xvelopers.com/wp/themes/rekord/wp-content/uploads/sites/48/2019/03/track8d.mp3",
    thumbnail:
      "https://xvelopers.com/demos/html/record/assets/img/demo/a3.jpg",
      artists: artists.slice(1, 4),
    time: "5:03",
    category: "rock",
  },
  {
    id: 9,
    title: "Will you be my friend",
    url: "http://xvelopers.com/wp/themes/rekord/wp-content/uploads/sites/48/2019/03/track8c.mp3",
    thumbnail: "https://xvelopers.com/demos/html/record/assets/img/demo/a8.jpg",
    artist: "Atif Aslam",
    time: "5:03",
    category: "rock",
  },
  {
    id: 16,
    title: "Spank at wall",
    url: "http://xvelopers.com/wp/themes/rekord/wp-content/uploads/sites/48/2019/03/track8a.mp3",
    thumbnail: "https://xvelopers.com/demos/html/record/assets/img/demo/a1.jpg",
      artists: artists.slice(5, 8),
    time: "5:03",
    category: "rock",
  },
];





function artistWhere(category){
  return artists.filter(artist => artist.category === category);
}

export const artistsByCategory = [
  {
    category: 'A',
    artists: artistWhere('A'),
  },
  {
    category: 'B',
    artists: artistWhere('B'),
  },
  {
    category: 'C',
    artists: artistWhere('C'),
  }
  ,  {
    category: 'D',
    artists: artistWhere('D'),
  }
];

export const slides = [
  {
    title: "Mitaric",
    subtitle: `Sed eget orci eleifend enim mattis suscipit. <br />
            Suspendisse potenti non ipsum.`,
    image:
      "http://xvelopers.com/wp/themes/rekord/wp-content/uploads/sites/48/2019/03/b1.jpg",
    btnLabel: "Buy Now At iTunes",
    url: "#",
  },
  {
    title: "Mitaricccc",
    subtitle: `  Sed eget orci eleifend enim mattis suscipit. <br />
              Suspendisse potenti non ipsum.`,
    image:
      "http://xvelopers.com/wp/themes/rekord/wp-content/uploads/sites/48/2019/03/b3.jpg",
    btnLabel: "Buy Now At iTunesccc",
    url: "#",
  },
];

export const albums = [
  {
    id: 0,
    title: "Good Things",
    slug: slugify("Good Things"),
    subtitle: `<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br>Architecto atque
      aut blanditiis consectetur</p>`,
    image: "https://xvelopers.com/demos/html/record/assets/img/demo/a1.jpg",
    cover:
      "http://xvelopers.com/wp/themes/rekord/wp-content/uploads/sites/48/2019/03/b3.jpg",
    btnLabel: "Buy Now At iTunes",
    btnUrl: "#",
    liked: false,
    likes:33,
    artists,
    tracks: tracks.slice(1,2),
  },
  {
    id: 1,
    title: "New Life Started",
    slug: slugify("New Life Started"),
    subtitle: `<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br>Architecto atque
      aut blanditiis consectetur</p>`,
    image: "https://xvelopers.com/demos/html/record/assets/img/demo/a2.jpg",
    cover: "https://source.unsplash.com/2400x700/?music",
    btnLabel: "Buy Now At iTunes",
    btnUrl: "#",
    liked: false,
    likes:33,
    artists,
    tracks: tracks.slice(3,4),
  },
  {
    id: 2,
    title: "Tip Top Tik",
    slug: slugify("Tip Top Tik"),
    subtitle: `<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br>Architecto atque
      aut blanditiis consectetur</p>`,
    image: "https://xvelopers.com/demos/html/record/assets/img/demo/a3.jpg",
    cover: "https://source.unsplash.com/2400x700/?event",
    btnLabel: "Buy Now At iTunes",
    btnUrl: "#",
    liked: false,
    likes:33,
    artists,
    tracks,
  },
  {
    id: 3,
    title: "Some rock some",
    slug: slugify("Some rock some"),
    subtitle: `<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br>Architecto atque
      aut blanditiis consectetur</p>`,
    image: "	https://xvelopers.com/demos/html/record/assets/img/demo/a4.jpg",
    cover: "https://source.unsplash.com/2400x700/?music",
    btnLabel: "Buy Now At iTunes",
    btnUrl: "#",
    liked: false,
    likes:33,
    artists,
    tracks,
  },
  {
    id: 4,
    title: "I believe in you",
    slug: slugify("I believe in you"),
    subtitle: `<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br>Architecto atque
      aut blanditiis consectetur</p>`,
    image: "	https://xvelopers.com/demos/html/record/assets/img/demo/a5.jpg",
    cover: "https://source.unsplash.com/2400x700/?music",
    btnLabel: "Buy Now At iTunes",
    btnUrl: "#",
    liked: false,
    likes:33,
    artists,
    tracks,
  },
  {
    id: 5,
    title: "You love me too",
    slug: slugify("You love me too"),
    subtitle: `<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br>Architecto atque
      aut blanditiis consectetur</p>`,
    image: "	https://xvelopers.com/demos/html/record/assets/img/demo/a6.jpg",
    cover: "https://source.unsplash.com/2400x700/?music",
    btnLabel: "Buy Now At iTunes",
    btnUrl: "#",
    liked: false,
    likes:33,
    artists,
    tracks,
  },
  {
    id: 6,
    title: "Nice to have We ",
    slug: slugify("Nice to have We"),
    subtitle: `<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br>Architecto atque
      aut blanditiis consectetur</p>`,
    image: "	https://xvelopers.com/demos/html/record/assets/img/demo/a7.jpg",
    cover: "https://source.unsplash.com/2400x700/?music",
    btnLabel: "Buy Now At iTunes",
    btnUrl: "#",
    liked: false,
    likes:33,
    artists,
    tracks,
  },
  {
    id: 7,
    title: "Where We Belong",
    slug: slugify("Where We Belong"),
    subtitle: `<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br>Architecto atque
      aut blanditiis consectetur</p>`,
    image: "	https://xvelopers.com/demos/html/record/assets/img/demo/a8.jpg",
    cover: "https://source.unsplash.com/2400x700/?music",
    btnLabel: "Buy Now At iTunes",
    btnUrl: "#",
    liked: false,
    likes:33,
    artists,
    tracks,
  },
];

export const events = [
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

export const comments = [
  {
    id: 0,
    content:
      "The scrub itself looks great and all but we can’t really get over the fact that it contains ACTUAL METEORITE DUST FROM OUTER SPACE. Each pack even comes with its own unique code so you can check out where and when your space dust came from (ours was from a meteorite that crashed into Morocco). This also means no two scrubs are the same, which is great because I don’t want to share my space dust with anyone else.",
    user: users[0],
    replies: [
      {
        id: 0,
        content:
          "where and when your space dust came from (ours was from a meteorite that crashed into Morocco).",
        user: users[1],
        replies: [
          {
            id: 0,
            content:
              "Reply Level Three where and when your space dust came from",
            user: users[2],
          },
          {
            id: 1,
            content:
              "Reply Level Three where and when your space dust came from",
            user: users[1],
          },
        ],
      },
      {
        id: 1,
        content:
          "when your space dust came from (ours was from a meteorite that crashed). when your space dust came from (ours was from a meteorite that crashed ",
        user: users[2],
      },
    ],
  },
  {
    id: 1,
    content:
      "where and when your space dust came from (ours was from a meteorite that crashed into Morocco).",
    user: users[0],
  },
  {
    id: 2,
    content:
      "when your space dust came from (ours was from a meteorite that crashed). when your space dust came from (ours was from a meteorite that crashed ",
    user: users[1],
  },
];

export const videos = [
  {
    id: 0,
    title: "Desireless – Voyage Royage",
    slug: slugify("Desireless – Voyage Royage"),
    content: `<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br>Architecto atque
      aut blanditiis consectetur</p>`,
    thumbnail:
      "http://xvelopers.com/wp/themes/rekord/wp-content/uploads/sites/48/2019/03/v1.jpg",
    url: "https://www.youtube.com/embed/GhifGWqFgMU?controls=0",
    artists,
    comments,
  },
  {
    id: 1,
    title: "Bayan Hai k tum be",
    slug: slugify("Bayan Hai k tum be"),
    content: `<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br>Architecto atque
      aut blanditiis consectetur</p>`,
    thumbnail:
      "http://xvelopers.com/wp/themes/rekord/wp-content/uploads/sites/48/2019/03/v2.jpg",
    url: "https://www.youtube.com/embed/GhifGWqFgMU?controls=0",
    artists,
    comments,
  },
  {
    id: 2,
    title: "Kia din badal gay",
    slug: slugify("Kia din badal gay"),
    content: `<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br>Architecto atque
      aut blanditiis consectetur</p>`,
    thumbnail:
      "http://xvelopers.com/wp/themes/rekord/wp-content/uploads/sites/48/2019/03/v3.jpg",
    url: "https://www.youtube.com/embed/GhifGWqFgMU?controls=0",
    artists,
    comments,
  },
  {
    id: 3,
    title: "Desireless – Voyage Royage",
    slug: slugify("Desireless – Voyage Royage"),
    content: `<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br>Architecto atque
      aut blanditiis consectetur</p>`,
    thumbnail:
      "http://xvelopers.com/wp/themes/rekord/wp-content/uploads/sites/48/2019/03/v4.jpg",
    url: "https://www.youtube.com/embed/GhifGWqFgMU?controls=0",
    artists,
    comments,
  },
  {
    id: 4,
    title: "Desireless – Voyage Royage",
    slug: slugify("Desireless – Voyage Royage"),
    content: `<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br>Architecto atque
      aut blanditiis consectetur</p>`,
    thumbnail:
      "http://xvelopers.com/wp/themes/rekord/wp-content/uploads/sites/48/2019/03/v5.jpg",
    url: "https://www.youtube.com/embed/GhifGWqFgMU?controls=0",
    artists,
    comments,
  },
  {
    id: 5,
    title: "Desireless – Voyage Royage",
    slug: slugify("Desireless – Voyage Royage"),
    content: `<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br>Architecto atque
      aut blanditiis consectetur</p>`,
    thumbnail:
      "http://xvelopers.com/wp/themes/rekord/wp-content/uploads/sites/48/2019/03/v6.jpg",
    url: "https://www.youtube.com/embed/GhifGWqFgMU?controls=0",
    artists,
    comments,
  },
  {
    id: 6,
    title: "Desireless – Voyage Royage",
    slug: slugify("Desireless – Voyage Royage"),
    content: `<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br>Architecto atque
      aut blanditiis consectetur</p>`,
    thumbnail:
      "http://xvelopers.com/wp/themes/rekord/wp-content/uploads/sites/48/2019/03/v7.jpg",
    url: "https://www.youtube.com/embed/GhifGWqFgMU?controls=0",
    artists,
    comments,
  },
  {
    id: 7,
    title: "Desireless – Voyage Royage",
    slug: slugify("Desireless – Voyage Royage"),
    content: `<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br>Architecto atque
      aut blanditiis consectetur</p>`,
    thumbnail:
      "http://xvelopers.com/wp/themes/rekord/wp-content/uploads/sites/48/2019/03/v8.jpg",
    url: "https://www.youtube.com/embed/GhifGWqFgMU?controls=0",
    artists,
    comments,
  },
];

export const posts = [
  {
    id: 0,
    title: "New Amazing Rock Music Band in Town Performing Live",
    type:'video',
    excerpt: `
    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    Aspernatur cum dolorem ea earum esse fuga incidunt iure,
    magni molestias neque omnis optio perspiciatis, quibusdam
    quod ratione, recusandae saepe temporibus unde...`,
    content: `<p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    Aspernatur cum dolorem ea earum esse fuga incidunt iure,
    magni molestias neque omnis optio perspiciatis, quibusdam
    quod ratione, recusandae saepe temporibus unde...
    <p>				Yes, really.</p>
    <p>First, it was the <a href="https://fashionjournal.com.au/beauty/news/i-tried-frank-body-shimmer-scrub-waitlist-50000" target="_blank" rel="noopener noreferrer">unicorn scrub</a>.</p>
    <p>Now, we bring you a body scrub formulated from actual meteors from outer space. Yes, really.</p>
    <p>The aptly-named Blaq Meteor Shower Scrub is a blend of ingredient-activated charcoal and fragments of matter from the cosmos, to provide you with a gentle exfoliation and glow.</p>
    <p>The scrub itself looks great and all but we can’t really get over the fact that it contains ACTUAL METEORITE DUST FROM OUTER SPACE.</p>
    <p>Each pack even comes with its own unique code so you can check out where and when your space dust came from (ours was from a meteorite that crashed into Morocco).</p>
    <p>This also means no two scrubs are the same, which is great because I don’t want to share my space dust with anyone else.</p>
    <p>We’re not sure how you get into the business of mining meteorite dust, but we’re all about turning it into an iridescent shower scrub.</p>
    <p>The future is now, people.</p>
    <p>Check it out for yourself <a href="https://meteor.blaq.co/" target="_blank" rel="noopener noreferrer">here</a>.	
  </p>`,
    slug: "new-amazing-rock-music",
    date: "09 July, 2019",
    thumbnail: "https://source.unsplash.com/1600x500/?nature,water",
    category: "International",
    author: users[0],
    comments,
  },
  {
    id: 1,
    title: "Rekord Music & Events Template",
    type:'video',
    excerpt: `
    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    Aspernatur cum dolorem ea earum esse fuga incidunt iure,
    magni molestias neque omnis optio perspiciatis, quibusdam
    quod ratione, recusandae saepe temporibus unde...`,
    content: `<p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    Aspernatur cum dolorem ea earum esse fuga incidunt iure,
    magni molestias neque omnis optio perspiciatis, quibusdam
    quod ratione, recusandae saepe temporibus unde...
    <p>				Yes, really.</p>
    <p>First, it was the <a href="https://fashionjournal.com.au/beauty/news/i-tried-frank-body-shimmer-scrub-waitlist-50000" target="_blank" rel="noopener noreferrer">unicorn scrub</a>.</p>
    <p>Now, we bring you a body scrub formulated from actual meteors from outer space. Yes, really.</p>
    <p>The aptly-named Blaq Meteor Shower Scrub is a blend of ingredient-activated charcoal and fragments of matter from the cosmos, to provide you with a gentle exfoliation and glow.</p>
    <p>The scrub itself looks great and all but we can’t really get over the fact that it contains ACTUAL METEORITE DUST FROM OUTER SPACE.</p>
    <p>Each pack even comes with its own unique code so you can check out where and when your space dust came from (ours was from a meteorite that crashed into Morocco).</p>
    <p>This also means no two scrubs are the same, which is great because I don’t want to share my space dust with anyone else.</p>
    <p>We’re not sure how you get into the business of mining meteorite dust, but we’re all about turning it into an iridescent shower scrub.</p>
    <p>The future is now, people.</p>
    <p>Check it out for yourself <a href="https://meteor.blaq.co/" target="_blank" rel="noopener noreferrer">here</a>.	
  </p>`,
    slug: "rekord-music-events-template",
    date: "09 July, 2019",
    thumbnail: "https://source.unsplash.com/1600x500/?event",
    category: "International",
    author: users[0],
    comments,
  },
  {
    id: 2,
    title: "Rekord Music & Events Template",
    excerpt: `
    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    Aspernatur cum dolorem ea earum esse fuga incidunt iure,
    magni molestias neque omnis optio perspiciatis, quibusdam
    quod ratione, recusandae saepe temporibus unde...`,
    content: `<p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    Aspernatur cum dolorem ea earum esse fuga incidunt iure,
    magni molestias neque omnis optio perspiciatis, quibusdam
    quod ratione, recusandae saepe temporibus unde...
    <p>				Yes, really.</p>
    <p>First, it was the <a href="https://fashionjournal.com.au/beauty/news/i-tried-frank-body-shimmer-scrub-waitlist-50000" target="_blank" rel="noopener noreferrer">unicorn scrub</a>.</p>
    <p>Now, we bring you a body scrub formulated from actual meteors from outer space. Yes, really.</p>
    <p>The aptly-named Blaq Meteor Shower Scrub is a blend of ingredient-activated charcoal and fragments of matter from the cosmos, to provide you with a gentle exfoliation and glow.</p>
    <p>The scrub itself looks great and all but we can’t really get over the fact that it contains ACTUAL METEORITE DUST FROM OUTER SPACE.</p>
    <p>Each pack even comes with its own unique code so you can check out where and when your space dust came from (ours was from a meteorite that crashed into Morocco).</p>
    <p>This also means no two scrubs are the same, which is great because I don’t want to share my space dust with anyone else.</p>
    <p>We’re not sure how you get into the business of mining meteorite dust, but we’re all about turning it into an iridescent shower scrub.</p>
    <p>The future is now, people.</p>
    <p>Check it out for yourself <a href="https://meteor.blaq.co/" target="_blank" rel="noopener noreferrer">here</a>.	
  </p>`,
    slug: "rekord-music-events-template",
    date: "09 July, 2019",
    thumbnail: "https://source.unsplash.com/1600x500/?event",
    category: "International",
    author: users[0],
    comments,
  },
];

export const homeTabs = [
  {
    title: "Rock",
    category: "rock",
  },
  {
    title: "Jazz",
    category: "jazz",
  },
  {
    title: "Classic",
    category: "classic",
  },
  {
    title: "Sufi",
    category: "sufi",
  },
  {
    title: "Pop",
    category: "pop",
  },
];
