import { capitalize } from '../stringHelpers';

describe('string helpers', () => {
  describe('capitalize', () => {
    it('kapitalizes a string', () => {
      expect(capitalize('bla')).toEqual('Bla');
    });
  });
});
