import z from 'zod'

const basicSchema = z.object({
  name: z.string({
    invalid_type_error: 'Invalid name',
    required_error: 'The name is required'
  }),
  type: z.enum(['Single', 'Double', 'Triple'], {
    required_error: 'Type is required.',
    invalid_enum_value: 'Type format not valid.'
  }),
  price: z.number({
    required_error: 'Price is required.'
  }).positive(),
  status: z.enum(['Available', 'Occupied', 'Maintenance'], {
    required_error: 'Status is required.',
    invalid_enum_value: 'Status format not valid.'
  }),
})

export function validateBasic (input) {
  return basicSchema.safeParse(input)
}
