
// Родительский класс для электроприборов
class ElectricDevice {
    constructor(name, power) {
      this.name = name;
      this.power = power;
      this.pluggedIn = false;
    }
  
    // Методы включения/выключения прибора
    plugIn() {
      if (!this.pluggedIn) {
        this.pluggedIn = true;
        console.log(`${this.name} включен в розетку`);
      }
    }
  
    unplug() {
      if (this.pluggedIn) {
        this.pluggedIn = false;
        console.log(`${this.name} выключен из розетки`);
      }
    }
  }
  
  // Конкретный прибор - Настольная лампа
  class DeskLamp extends ElectricDevice {
    constructor(brightness) {
      super("Настольная лампа", 60);
      this.brightness = brightness;
    }
  
    // Дополнительный метод для настольной лампы
    setBrightness(brightness) {
      this.brightness = brightness;
      console.log(`Яркость настольной лампы установлена на ${brightness}`);
    }
  }
  
  // Конкретный прибор - Компьютер
  class Computer extends ElectricDevice {
    constructor(brand, processor) {
      super("Компьютер", 500);
      this.brand = brand;
      this.processor = processor;
    }
  
    // Дополнительный метод для компьютера
    start() {
      console.log(`Компьютер ${this.brand} с процессором ${this.processor} запущен`);
    }
  }
  
  // Создание экземпляров каждого прибора
  const deskLamp = new DeskLamp(100);
  const computer = new Computer("HP", "Intel Core i7");
  
  // Включение приборов
  deskLamp.plugIn();
  computer.plugIn();
  
  // Вызов дополнительного метода настольной лампы
  deskLamp.setBrightness(50);
  
  // Суммарная потребляемая мощность всех включенных приборов
  const totalPower = deskLamp.power + computer.power;
  console.log(`Суммарная потребляемая мощность всех включенных приборов: ${totalPower} Вт`);
  