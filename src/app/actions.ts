'use server';

import { z } from 'zod';
import { requestPrivateOfficeAccess } from '@/ai/flows/request-private-office-access';

const accessSchema = z.object({
  identityAndPurposeDescription: z.string().min(50, {
    message: 'Please provide a detailed description of at least 50 characters.',
  }),
});

type State = {
  status: 'success' | 'error' | 'idle';
  message: string;
  accessGranted?: boolean;
};

export async function handleAccessRequest(
  prevState: State,
  formData: FormData
): Promise<State> {
  const validatedFields = accessSchema.safeParse({
    identityAndPurposeDescription: formData.get('identityAndPurposeDescription'),
  });

  if (!validatedFields.success) {
    return {
      status: 'error',
      message:
        validatedFields.error.flatten().fieldErrors
          .identityAndPurposeDescription?.[0] || 'Invalid input.',
    };
  }

  try {
    const aiResponse = await requestPrivateOfficeAccess(validatedFields.data);

    return {
      status: 'success',
      message: aiResponse.reasoning,
      accessGranted: aiResponse.accessGranted,
    };
  } catch (error) {
    console.error('AI request failed:', error);
    return {
      status: 'error',
      message: 'An unexpected error occurred. Please try again later.',
    };
  }
}
