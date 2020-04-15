

 function unsplashImage(id, width = 570) {
    return `https://images.unsplash.com/photo-${id}?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=${width}&q=80 750w"`;
  }
 const photos = [
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
  