// Extract year from the title and sort last 10 comics by year descending
export const sortComicsByYear = (comics) =>
  comics
    .filter((item) => {
      const match = item.name.match(/\b\d{4}\b/g);
      return parseInt(match) > 2005;
    })
    .sort(
      (comicA, comicB) =>
        parseInt(comicB.name.match(/\b\d{4}\b/g)) -
        parseInt(comicA.name.match(/\b\d{4}\b/g)),
    );


