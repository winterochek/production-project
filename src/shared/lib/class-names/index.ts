type Mods = Record<string, boolean | string>;

const cls = (
   cls: string,
   mods: Mods = {},
   additional: string[] = []
): string => {
   return [
      cls,
      ...additional,
      ...Object.entries(mods)
         .filter(([, value]) => Boolean(value))
         .map(([cls]) => cls),
   ].join(' ');
};
export default cls;
