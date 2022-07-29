import { z as zod } from 'zod';
import vehicleZodSchema from './IVehicle';

const carZodSchema = vehicleZodSchema.extend({
  doorsQty: zod.number({
    required_error: 'DoorsQty is required',
    invalid_type_error: 'DoorsQty must be a number',
  })
    .gte(2, { message: 'DoorsQty must be greater than or equal two' })
    .lte(4, { message: 'DoorsQty must be less than or equal to four' }),
  seatsQty: zod.number({
    required_error: 'seatsQty is required',
    invalid_type_error: 'seatsQty must be a number',
  })
    .gte(2, { message: 'SeatsQty must be greater than or equal two' })
    .lte(7, { message: 'SeatsQty must be less than or equal to seven' }),
});

export type ICar = zod.infer<typeof carZodSchema>;
export default carZodSchema;
