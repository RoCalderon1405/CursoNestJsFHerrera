import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interfaces';
import { v4 as uuid } from 'uuid';
import { CreateCarDto, UpdateCarDto } from './dto';

@Injectable()
export class CarsService {
  private cars: Car[] = [
    {
      id: uuid(),
      brand: 'Toyota',
      model: 'Corolla',
    },
    {
      id: uuid(),
      brand: 'Honda',
      model: 'Civic',
    },
    {
      id: uuid(),
      brand: 'Jeep',
      model: 'Cherokee',
    },
  ];

  findAll() {
    return this.cars;
  }

  findOneById(id: string) {
    const car = this.cars.find((car) => car.id === id);
    if (!car) {
      throw new NotFoundException(`No se econtró el carro con el id: ${id}`);
    }
    console.log(car);

    return car;
  }

  editCar(id: string) {
    const car = this.cars.find((car) => car.id === id);
  }

  create(CreateCarDto: CreateCarDto) {
    const newCar: Car = {
      id: uuid(),
      ...CreateCarDto,
    };
    this.cars.push(newCar);

    return newCar;
  }

  update(id: string, updateCarDto: UpdateCarDto) {
    let carDb = this.findOneById(id);

    this.cars = this.cars.map((car) => {
      if (car.id === id) {
        carDb = {
          ...carDb,
          ...updateCarDto,
          id,
        };
        return carDb;
      }
      return car;
    });

    return carDb;
  }

  delete(id: string) {
    let carDb = this.findOneById(id);

    if (!carDb) throw new Error(`No car database found with id: ${id}`);

    this.cars = this.cars.filter((car) => car.id !== id);

    return {
      message: `Car with id ${id} deleted successfully`,
      data: this.cars,
    };
  }

  fillCarsWithSeedData(cars: Car[]) {
    this.cars = cars;
  }
}
