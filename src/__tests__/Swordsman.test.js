import { expect, test } from '@jest/globals';
import Swordsman from '../class/Swordsman.js';

test('should create a Swordsman with correct stats', () => {
      const swordsman = new Swordsman('John');
      const correct = {
        attack: 40,
        defence: 10,
        health: 100,
        level: 1,
        name: 'John',
        type: 'Swordsman'
    };

    expect(swordsman).toEqual(correct);
});