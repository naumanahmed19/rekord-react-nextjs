
import {users} from '.';

export const data = [
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