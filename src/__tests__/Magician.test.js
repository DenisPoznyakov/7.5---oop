import { expect, test } from '@jest/globals';
import Magician from '../class/Magician.js';

test('should create a Magician with correct stats', () => {
      const magician = new Magician('John');
      const correct = {
        attack: 10,
        defence: 40,
        health: 100,
        level: 1,
        name: 'John',
        type: 'Magician'
    };

    expect(magician).toEqual(correct);
});