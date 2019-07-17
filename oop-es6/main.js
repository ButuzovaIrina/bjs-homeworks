class Weapon {
  constructor(name, attack, durability, range) {
    this.name = name;
    this.attack = attack;
    this.durability = durability;
    this.begindurability = durability;
    this.range = range;
 }
  takeDamage(damage) {
    this.durability = this.durability - damage; 
    if (this.durability > 0) {
      return this.durability;   
    } else {
      return this.durability = 0;
    }
  }
  getDamage() {
    if (this.durability === 0) {
      return this.attack = 0;
    }
    if (this.durability === Infinity || this.durability <= ((this.begindurability - this.durability) / 100 * 30)) {
       return this.attack;
    } else {
      return this.attack / 2;
    }
  }
  isBroken() {
    if (this.durability > 0 || this.durability === Infinity) {
      return false;
    } else {
    return true; 
    } 
  }
}

/* Первая задача
const arm = new Weapon('Рука', 1, Infinity, 1);
const bow = new Weapon('Лук', 10, 200, 3);
const sword = new Weapon('Меч', 25, 500, 1);
const knife = new Weapon('Нож', 5, 300, 1);
const staff = new Weapon('Посох', 8, 300, 2);
const longBow = new Weapon('Длинный лук', 15, 200, 4);
const battleax = new Weapon('Секира', 27, 800, 1);
const stormStaff = new Weapon('Посох бури', 10, 300, 3);*/

// Задача 2

class Arm extends Weapon {
  constructor(name, attack, durability, range) {
    super (name, attack, durability, range);
    this.name = 'Рука';
    this.attack =  1;
    this.durability =  Infinity;
    this.range = 1;
  }
}

class Bow extends Weapon {
  constructor(name, attack, durability, range) {
    super (name, attack, durability, range);
    this.name = 'Лук';
    this.attack =  10;
    this.durability =  200;
    this.range = 3;
  }
}

class Sword extends Weapon {
  constructor(name, attack, durability, range) {
    super (name, attack, durability, range);
    this.name = 'Меч';
    this.attack =  25;
    this.durability =  500;
    this.range = 1;
  }
}

class Knife extends Weapon {
  constructor(name, attack, durability, range) {
    super (name, attack, durability, range);
    this.name = 'Нож';
    this.attack =  5;
    this.durability =  300;
    this.range = 1;
  }
}
class Staff extends Weapon {
  constructor(name, attack, durability, range) {
    super (name, attack, durability, range);
    this.name = 'Посох';
    this.attack =  8;
    this.durability =  300;
    this.range = 2;
  }
}

class LongBow extends Bow {
  constructor(name, attack, durability, range) {
    super (name, attack, durability, range);
    this.name = 'Длинный лук';
    this.attack =  15;
    this.range = 4;
  }
}

class Battleax extends Sword {
  constructor(name, attack, durability, range) {
    super (name, attack, durability, range);
    this.name = 'Секира';
    this.attack =  27;
    this.durability =  800;
  }
}

class StormStaff extends Staff {
  constructor(name, attack, durability, range) {
    super (name, attack, durability, range);
    this.name = 'Посох бури';
    this.attack =  10;
    this.range = 3;
  }
}

const arm = new Arm();

console.log(arm.name); 
console.log(arm.attack); 
console.log(arm.durability); 
console.log(arm.range); 

const bow = new Bow();

console.log(bow.name); // Лук
console.log(bow.attack); // 10
console.log(bow.durability); // 200
console.log(bow.range); // 3

const sword = new Sword();

console.log(sword.name); 
console.log(sword.attack); 
console.log(sword.durability); 
console.log(sword.range); 

const knife = new Knife();

console.log(knife.name); 
console.log(knife.attack); 
console.log(knife.durability); 
console.log(knife.range); 

const staff = new Staff();

console.log(staff.name); 
console.log(staff.attack); 
console.log(staff.durability); 
console.log(staff.range); 

const longBow = new LongBow();

console.log(longBow.name); 
console.log(longBow.attack); 
console.log(longBow.durability); 
console.log(longBow.range); 

const battleax = new Battleax();

console.log(battleax.name); 
console.log(battleax.attack); 
console.log(battleax.durability); 
console.log(battleax.range); 

const stormStaff = new StormStaff();

console.log(stormStaff.name); 
console.log(stormStaff.attack); 
console.log(stormStaff.durability); 
console.log(stormStaff.range); 



/*
sword.takeDamage(5);
console.log(sword.durability); // 495

sword.takeDamage(50);
console.log(sword.durability); // 0

arm.takeDamage(20);
console.log(arm.durability); // Infinity

bow.takeDamage(20);
console.log(bow.durability); // 180

console.log(bow.durability); // 0
console.log(bow.getDamage()); // 0

console.log(arm.durability); // Infinity
console.log(arm.getDamage()); // 1

console.log(bow.durability); // 0
console.log(bow.isBroken()); // true

console.log(arm.durability); // Infinity
console.log(arm.isBroken()); // false

longBow.takeDamage(200);
console.log(longBow.durability); // 0*/

//Задача 3

class StudentLog {
  constructor(studentName) {
    this.studentName = studentName;
    this.marks = [];
  }
  getName () {
    return this.studentName;
  }

  addGrade(grade, subject) { 
    if (isNaN(parseInt(grade))) {
      console.log(`Вы пытались поставить оценку ${grade} по предмету ${subject}. Допускаются только числа от 1 до 5.`);
    }
    if (this.marks.length === 0) {
      this.marks.push({subjectName: subject, mark: [grade]});
    }
    for (let i = 0; i < this.marks.length; i++) {
      if (this.marks[i].subjectName === subject) {
        //console.log(this.marks[i]);
        this.marks[i].mark.push(grade);
      } else {
        this.marks.push({subjectName: subject, mark: [grade]});
      }
    }  
    return this.marks;
  }

  getAverageBySubject(subject) {
    let subjectIndex;// = this.marks.indexOf(this.marks.subjectName = subject);
    for (let i = 0; i < this.marks.length; i++) {
      if (this.marks[i].subjectName === subject) {
        subjectIndex = i;
        break;
      }
    }
    console.log(subjectIndex, this.marks[subjectIndex].mark.length);
    let average = 0;
    for (let i = 0; i < this.marks[subjectIndex].mark.length; i++) {
      average += this.marks[subjectIndex].mark[i];
      console.log(this.marks[subjectIndex].mark[i], average);
    }
    return average = average/this.marks[subjectIndex].mark.length;
  }
}

const log = new StudentLog('Олег Никифоров');


/*
console.log(log.getName()) // Олег Никифоров

console.log(log.addGrade(5, 'algebra'));
console.log(log.addGrade(4, 'algebra'));
console.log(log.addGrade(5, 'algebra'));
// 1
console.log(log.addGrade(5, 'geometry'));
console.log(log.addGrade(3, 'poem'));
console.log(log.addGrade(5, 'fisica'));

console.log(log.addGrade('отлично!', 'math'));
// Вы пытались поставить оценку "отлично!" по предмету "math". Допускаются только числа от 1 до 5.
// 0

console.log(log.addGrade(4, 'algebra'));
// 1



console.log(log.addGrade(25, 'geometry'));
// Вы пытались поставить оценку "25" по предмету "geometry". Допускаются только числа от 1 до 5.
// 1 */
//console.log(log.getAverageBySubject('algebra')); // 3
//console.log(log.getAverageBySubject('geometry')); // 4.5

//console.log(log.getAverageBySubject('math')); // 0