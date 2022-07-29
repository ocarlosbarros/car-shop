import { z as zod } from 'zod';

const vehicleZodSchema = zod.object({
  model: zod.string({
    required_error: 'Model is required',
    invalid_type_error: 'Model must be a string',
  }).min(3, { message: 'Model must be 3 ore more characters long' }),
  year: zod.number({
    required_error: 'Please select a date and time',
    invalid_type_error: 'That\'s not a date!',
  }).min(1900, { message: 'Year to old not supported.' })
    .max(2022, { message: 'Not supported future year.' }),
  color: zod.string({
    required_error: 'Color is required',
    invalid_type_error: 'Color must be a string',
  }).min(3, { message: 'Color must be 3 ore more characters long' }),
  buyValue: zod.number({
    required_error: 'Buy Value is required',
    invalid_type_error: 'Buy Value must be a number',
  }),
});

export type IVehicle = zod.infer<typeof vehicleZodSchema>;

export default vehicleZodSchema;
