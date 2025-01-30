import { expect, test } from '@jest/globals';
import Zombie from '../class/Zombie.js';

test('should create a Zombie with correct stats', () => {
      const zombie = new Zombie('John');
      const correct = {
        attack: 40,
        defence: 10,
        health: 100,
        level: 1,
        name: 'John',
        type: 'Zombie'
    };

    expect(zombie).toEqual(correct);
});