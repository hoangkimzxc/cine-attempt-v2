export function removeHTMLArtifacts(input: string): string {
  // Regular expression to match all occurrences of <p> and </p> tags and &nbsp;
  return input.replace(/<\/?p>|<\/?i>|<\/?strong>|&nbsp;/g, "");
}

export const truncateText = (string: string, n: number) =>
  string?.length > n ? string.substr(0, n - 1) + "..." : string;

export const randomRangePicSum = (min: number, max: number): string => {
  return `https://picsum.photos/id/${
    Math.floor(Math.random() * (max - min + 1)) + min
  }/1000/1000`;
};

export const renderImage = (imgSrc: string): string => {
  return imgSrc
    ? `https://image.tmdb.org/t/p/original/${imgSrc}`
    : randomRangePicSum(1, 200)
    ? randomRangePicSum(1, 200)
    : "https://picsum.photos/1000";
};
