import { expect, test } from '@jest/globals';
import Undead from '../class/Undead.js';

test('should create a Undead with correct stats', () => {
      const undead = new Undead('John');
      const correct = {
        attack: 25,
        defence: 25,
        health: 100,
        level: 1,
        name: 'John',
        type: 'Undead'
    };

    expect(undead).toEqual(correct);
});