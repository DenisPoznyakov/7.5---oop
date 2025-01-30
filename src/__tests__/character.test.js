import { expect, test } from '@jest/globals';
import Character from '../class/Character.js';
import Bowman from '../class/Bowman.js';

test('should throw an error if name is invalid', () => {
  expect(() => new Character('A', 'Bowman')).toThrow('Имя должно быть строкой от 2 до 10 символов');
  expect(() => new Character('A very long name', 'Bowman')).toThrow('Имя должно быть строкой от 2 до 10 символов');
});

test('should throw an error if type is invalid', () => {
  expect(() => new Character('John', 'InvalidType')).toThrow('Некорректный тип персонажа');
});

test('should level up character and increase stats', () => {
  const character = new Bowman('John', 'Bowman');
  character.levelUp();
  const correct = {
    attack: 30,
    defence: 30,
    health: 100,
    level: 2,
    name: 'John',
    type: 'Bowman'
  };
  expect(character).toEqual(correct);
});

test('should throw an error when trying to level up a dead character', () => {
  const character = new Bowman('John', 'Bowman');
  character.damage(200);
  expect(character.health).toBe(0);
  expect(() => character.levelUp()).toThrow('Нельзя повысить уровень умершего персонажа');
});

test('should reduce health when taking damage', () => {
  const character = new Bowman('John', 'Bowman');
  character.damage(20);
  expect(character.health).toBe(85);
});

test('should not have health below 0', () => {
  const character = new Bowman('John', 'Bowman');
  character.damage(200);
  expect(character.health).toBe(0);
});
