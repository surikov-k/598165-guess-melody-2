const genreGame = (id, genre) => {
  return {
    id,
    type: `genre`,
    question: genre,
    choices: [
      {
        src: `https://upload.wikimedia.org/wikipedia/commons/1/1f/Uganda_flag_and_national_anthem_-_Oh_Uganda_Land_o.ogg`,
        genre: `rock`,
      },
      {
        src: `https://upload.wikimedia.org/wikipedia/commons/1/1f/Uganda_flag_and_national_anthem_-_Oh_Uganda_Land_o.ogg`,
        genre: `pop`,
      },
      {
        src: `https://upload.wikimedia.org/wikipedia/commons/1/1f/Uganda_flag_and_national_anthem_-_Oh_Uganda_Land_o.ogg`,
        genre: `jazz`,
      },
      {
        src: `https://upload.wikimedia.org/wikipedia/commons/1/1f/Uganda_flag_and_national_anthem_-_Oh_Uganda_Land_o.ogg`,
        genre: `rock`,
      },
    ],
  };
};

const artistGame = (id, artist) => {
  return {
    id,
    type: `artist`,
    question: {
      artist,
      src: `https://upload.wikimedia.org/wikipedia/commons/transcoded/8/89/Ugandan_national_anthem%2C_performed_by_the_U.S._Navy_Band.wav/Ugandan_national_anthem%2C_performed_by_the_U.S._Navy_Band.wav.ogg`,
    },
    choices: [
      {
        src: `https://placehold.it/134x134`,
        artist: `John Snow`,
      },
      {
        src: `https://placehold.it/134x134`,
        artist: `Jack Daniels`,
      },
      {
        src: `https://placehold.it/134x134`,
        artist: `Jim Beam`,
      },
    ],
  };
};

export const games = [
  genreGame(0, `rock`),
  genreGame(1, `folk`),
  artistGame(22, `Jim Beam`),
  artistGame(34, `Jack Daniels`),
];

export const settings = {
  time: 7,
  errorCount: 4
};
