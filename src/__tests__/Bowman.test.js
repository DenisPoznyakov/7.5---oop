import { expect, test } from '@jest/globals';
import Bowman from '../class/Bowman.js';

test('should create a Bowman with correct stats', () => {
      const bowman = new Bowman('John');
      const correct = {
        attack: 25,
        defence: 25,
        health: 100,
        level: 1,
        name: 'John',
        type: 'Bowman'
    };

    expect(bowman).toEqual(correct);
});