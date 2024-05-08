export function removeHTMLArtifacts(input: string): string {
  // Regular expression to match all occurrences of <p> and </p> tags and &nbsp;
  return input.replace(/<\/?p>|&nbsp;/g, "");
}
