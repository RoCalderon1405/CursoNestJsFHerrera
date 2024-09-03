import { Car } from "src/cars/interfaces/car.interfaces";
import { v4 as uuid } from 'uuid';

export const CARS_SEED: Car[] = [
    {
        id: uuid(),
        brand:'ToyotaSeed',
        model:'Civic'
    },
    {
        id: uuid(),
        brand:'Susuki',
        model:'sport'
    },
    {
        id: uuid(),
        brand:'Mazda',
        model:'sport3'
    },
]