import { Injectable } from '@nestjs/common';
import { CarsService } from 'src/cars/cars.service';
import { CARS_SEED } from './data/cars.seed';
import { BrandService } from 'src/brand/brand.service';
import { BRANDS_SEED } from 'src/cars/data/cars.seed';

@Injectable()
export class SeedService {
  constructor(
    private readonly carsService: CarsService,
    private readonly brandService: BrandService,
  ) {}

  pupulateDB() {
    this.carsService.fillCarsWithSeedData(CARS_SEED);
    this.brandService.fillBrandWithSeedData(BRANDS_SEED);

    return `Seed executed`;
  }
}
