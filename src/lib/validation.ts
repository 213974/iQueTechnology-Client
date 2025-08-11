// src/lib/validation.ts
import { z } from 'zod';

export const quoteSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters long.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  company: z.string().optional(),
  phone: z.string().optional(),
  message: z.string().min(10, { message: 'Message must be at least 10 characters long.' }),
});