import cls from '.';
describe('cls', () => {
   test('with only first param', () => {
      expect(cls('only first param')).toBe('only first param');
   });
   test('with additional class', () => {
      expect(cls('first param', {}, ['additional class'])).toBe(
         'first param additional class'
      );
   });
   test('with mods', () => {
      expect(cls('first param', { hovered: true, scrollable: true })).toBe(
         'first param hovered scrollable'
      );
   });

   test('with falsy mods', () => {
      expect(cls('first param', { hovered: true, scrollable: false })).toBe(
         'first param hovered'
      );
   });

   test('with undefined mods', () => {
      expect(cls('first param', { hovered: true, scrollable: undefined })).toBe(
         'first param hovered'
      );
   });

   test('complete stack', () => {
      expect(cls('first param', { mode: true }, ['additional'])).toBe(
         'first param additional mode'
      );
   });
});
