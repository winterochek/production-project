export type Mods = Record<string, boolean | string | undefined>;

const cls = (
  cls: string,
  mods: Mods = {},
  additional: Array<string | undefined> = [],
): string => [
  cls,
  ...additional,
  ...Object.entries(mods)
    .filter(([, value]) => Boolean(value))
    .map(([cls]) => cls),
].join(' ');
export default cls;
