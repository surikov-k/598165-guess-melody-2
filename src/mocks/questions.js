const genreGame = (id, genre) => {
  return {
    id,
    type: `genre`,
    question: genre,
    choices: [
      {
        src: `https://upload.wikimedia.org/wikipedia/commons/8/89/Ugandan_national_anthem%2C_performed_by_the_U.S._Navy_Band.wav`,
        genre: `rock`,
      },
      {
        src: `https://upload.wikimedia.org/wikipedia/commons/8/89/Ugandan_national_anthem%2C_performed_by_the_U.S._Navy_Band.wav`,
        genre: `pop`,
      },
      {
        src: `https://upload.wikimedia.org/wikipedia/commons/8/89/Ugandan_national_anthem%2C_performed_by_the_U.S._Navy_Band.wav`,
        genre: `jazz`,
      },
      {
        src: `https://upload.wikimedia.org/wikipedia/commons/8/89/Ugandan_national_anthem%2C_performed_by_the_U.S._Navy_Band.wav`,
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
      src: `https://upload.wikimedia.org/wikipedia/commons/8/89/Ugandan_national_anthem%2C_performed_by_the_U.S._Navy_Band.wav`,
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
  artistGame(22, `Jim Beam`),
  genreGame(1, `folk`),
  artistGame(34, `Jack Daniels`),
];

export const settings = {
  time: 7,
  errorCount: 4
};
