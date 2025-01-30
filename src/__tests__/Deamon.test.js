import { expect, test } from '@jest/globals';
import Daemon from '../class/Daemon.js';

test('should create a Daemon with correct stats', () => {
      const daemon = new Daemon('John');
      const correct = {
        attack: 10,
        defence: 40,
        health: 100,
        level: 1,
        name: 'John',
        type: 'Daemon'
    };

    expect(daemon).toEqual(correct);
});