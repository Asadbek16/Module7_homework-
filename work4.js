// Родительская функция для электроприборов
function ElectricDevice(name, power) {
    this.name = name;
    this.power = power;
    this.pluggedIn = false;
  }
  
  // Методы включения/выключения прибора
  ElectricDevice.prototype.plugIn = function() {
    if (!this.pluggedIn) {
      this.pluggedIn = true;
      console.log(this.name + " включен в розетку");
    }
  };
  
  ElectricDevice.prototype.unplug = function() {
    if (this.pluggedIn) {
      this.pluggedIn = false;
      console.log(this.name + " выключен из розетки");
    }
  };
  
  // Конкретный прибор - Настольная лампа
  function DeskLamp(brightness) {
    ElectricDevice.call(this, "Настольная лампа", 60);
    this.brightness = brightness;
  }
  
  DeskLamp.prototype = Object.create(ElectricDevice.prototype);
  DeskLamp.prototype.constructor = DeskLamp;
  
  // Дополнительный метод для настольной лампы
  DeskLamp.prototype.setBrightness = function(brightness) {
    this.brightness = brightness;
    console.log("Яркость настольной лампы установлена на " + brightness);
  };
  
  // Конкретный прибор - Компьютер
  function Computer(brand, processor) {
    ElectricDevice.call(this, "Компьютер", 500);
    this.brand = brand;
    this.processor = processor;
  }
  
  Computer.prototype = Object.create(ElectricDevice.prototype);
  Computer.prototype.constructor = Computer;
  
  // Дополнительный метод для компьютера
  Computer.prototype.start = function() {
    console.log("Компьютер " + this.brand + " с процессором " + this.processor + " запущен");
  };
  
  // Создание экземпляров каждого прибора
  var deskLamp = new DeskLamp(100);
  var computer = new Computer("HP", "Intel Core i7");
  
  // Включение приборов
  deskLamp.plugIn();
  computer.plugIn();
  
  // Вызов дополнительного метода настольной лампы
  deskLamp.setBrightness(50);
  
  // Суммарная потребляемая мощность всех включенных приборов
  var totalPower = deskLamp.power + computer.power;
  console.log("Суммарная потребляемая мощность всех включенных приборов: " + totalPower + " Вт");