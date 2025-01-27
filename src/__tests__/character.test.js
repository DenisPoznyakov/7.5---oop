/* globals describe, expect, it */

import { Character, Bowman, Swordsman, Magician, Daemon, Undead, Zombie } from '../character.js';

describe('Character class', () => {
  it('should throw an error if name is invalid', () => {
    expect(() => new Character('A', 'Bowman')).toThrow('Имя должно быть строкой от 2 до 10 символов');
    expect(() => new Character('A very long name', 'Bowman')).toThrow('Имя должно быть строкой от 2 до 10 символов');
  });

  it('should throw an error if type is invalid', () => {
    expect(() => new Character('John', 'InvalidType')).toThrow('Некорректный тип персонажа');
  });

  it('should create a character with valid name and type', () => {
    const character = new Character('John', 'Bowman');
    expect(character.name).toBe('John');
    expect(character.type).toBe('Bowman');
    expect(character.health).toBe(100);
    expect(character.level).toBe(1);
    expect(character.attack).toBe(25);
    expect(character.defence).toBe(25);
  });

  it('should level up character and increase stats', () => {
    const character = new Character('John', 'Bowman');
    character.levelUp();
    expect(character.level).toBe(2);
    expect(character.attack).toBe(30);
    expect(character.defence).toBe(30);
    expect(character.health).toBe(100);
  });

  it('should throw an error when trying to level up a dead character', () => {
    const character = new Character('John', 'Bowman');
    character.damage(200);
    expect(character.health).toBe(0);
    expect(() => character.levelUp()).toThrow('Нельзя повысить уровень умершего персонажа');
  });

  it('should reduce health when taking damage', () => {
    const character = new Character('John', 'Bowman');
    character.damage(20);
    expect(character.health).toBe(85);
  });

  it('should not have health below 0', () => {
    const character = new Character('John', 'Bowman');
    character.damage(200);
    expect(character.health).toBe(0);
  });
});

describe('Bowman class', () => {
  it('should create a Bowman with correct stats', () => {
    const bowman = new Bowman('John');
    expect(bowman.name).toBe('John');
    expect(bowman.type).toBe('Bowman');
    expect(bowman.attack).toBe(25);
    expect(bowman.defence).toBe(25);
  });
});

describe('Swordsman class', () => {
  it('should create a Swordsman with correct stats', () => {
    const swordsman = new Swordsman('John');
    expect(swordsman.name).toBe('John');
    expect(swordsman.type).toBe('Swordsman');
    expect(swordsman.attack).toBe(40);
    expect(swordsman.defence).toBe(10);
  });
});

describe('Magician class', () => {
  it('should create a Magician with correct stats', () => {
    const magician = new Magician('John');
    expect(magician.name).toBe('John');
    expect(magician.type).toBe('Magician');
    expect(magician.attack).toBe(10);
    expect(magician.defence).toBe(40);
  });
});

describe('Daemon class', () => {
  it('should create a Daemon with correct stats', () => {
    const daemon = new Daemon('John');
    expect(daemon.name).toBe('John');
    expect(daemon.type).toBe('Daemon');
    expect(daemon.attack).toBe(10);
    expect(daemon.defence).toBe(40);
  });
});

describe('Undead class', () => {
  it('should create an Undead with correct stats', () => {
    const undead = new Undead('John');
    expect(undead.name).toBe('John');
    expect(undead.type).toBe('Undead');
    expect(undead.attack).toBe(25);
    expect(undead.defence).toBe(25);
  });
});

describe('Zombie class', () => {
  it('should create a Zombie with correct stats', () => {
    const zombie = new Zombie('John');
    expect(zombie.name).toBe('John');
    expect(zombie.type).toBe('Zombie');
    expect(zombie.attack).toBe(40);
    expect(zombie.defence).toBe(10);
  });
});