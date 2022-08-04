import { ICar } from '../../interfaces/ICar';

const carMock: ICar = {
    model: 'Chevrolet Impala',
    year: 1967,
    color: 'Black',
    buyValue: 50000,
    seatsQty: 6,
    doorsQty: 4,
}

const carMockWithId: ICar & { _id: string } = {
    _id: '507f1f77bcf86cd799439011',
    model: 'Chevrolet Impala',
    year: 1967,
    color: 'Black',
    buyValue: 50000,
    seatsQty: 6,
    doorsQty: 4,
}

export { carMock, carMockWithId };