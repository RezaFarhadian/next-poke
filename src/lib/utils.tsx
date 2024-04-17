export function capitalizeFirstLetter(str: string):string {
  return str
    .charAt(0)
    .toLocaleUpperCase()
    + str.slice(1)
}

export function getLastSegmentOfURL(url: string):string|undefined {
  const segments = new URL(url).pathname.split('/');
  const last = segments.pop() || segments.pop();

  return last
}
