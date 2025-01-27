// Базовый класс Character
class Character {
    constructor(name, type) {
      const types = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
      if (typeof name !== 'string' || name.length < 2 || name.length > 10) {
        throw new Error('Имя должно быть строкой от 2 до 10 символов');
      }
      if (!types.includes(type)) {
        throw new Error('Некорректный тип персонажа');
      }
      this.name = name;
      this.type = type;
      this.health = 100;
      this.level = 1;
      const characteristics = {
        Bowman: { attack: 25, defence: 25 },
        Swordsman: { attack: 40, defence: 10 },
        Magician: { attack: 10, defence: 40 },
        Undead: { attack: 25, defence: 25 },
        Zombie: { attack: 40, defence: 10 },
        Daemon: { attack: 10, defence: 40 },
      };
      this.attack = characteristics[type].attack;
      this.defence = characteristics[type].defence;
    }
  
    levelUp() {
      if (this.health <= 0) {
        throw new Error('Нельзя повысить уровень умершего персонажа');
      }
      this.level += 1;
      this.attack *= 1.2;
      this.defence *= 1.2;
      this.health = 100;
    }
  
    damage(points) {
      this.health -= points * (1 - this.defence / 100);
      if (this.health < 0) this.health = 0;
    }
  }
  
  // Дочерние классы
  class Bowman extends Character {
    constructor(name) {
      super(name, 'Bowman');
    }
  }
  
  class Swordsman extends Character {
    constructor(name) {
      super(name, 'Swordsman');
    }
  }
  
  class Magician extends Character {
    constructor(name) {
      super(name, 'Magician');
    }
  }
  
  class Daemon extends Character {
    constructor(name) {
      super(name, 'Daemon');
    }
  }
  
  class Undead extends Character {
    constructor(name) {
      super(name, 'Undead');
    }
  }
  
  class Zombie extends Character {
    constructor(name) {
      super(name, 'Zombie');
    }
  }
  
  export { Character, Bowman, Swordsman, Magician, Daemon, Undead, Zombie };
  