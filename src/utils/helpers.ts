export function removeHTMLArtifacts(input: string): string {
  // Regular expression to match all occurrences of <p> and </p> tags and &nbsp;
  return input.replace(/<\/?p>|<\/?i>|&nbsp;/g, "");
}

export const truncateText = (string: string, n: number) =>
  string?.length > n ? string.substr(0, n - 1) + "..." : string;
