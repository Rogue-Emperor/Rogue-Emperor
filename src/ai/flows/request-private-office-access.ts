'use server';
/**
 * @fileOverview A Genkit flow for moderating access to a "Private Office".
 *
 * - requestPrivateOfficeAccess - A function that handles the private office access request.
 * - RequestPrivateOfficeAccessInput - The input type for the requestPrivateOfficeAccess function.
 * - RequestPrivateOfficeAccessOutput - The return type for the requestPrivateOfficeAccess function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const RequestPrivateOfficeAccessInputSchema = z.object({
  identityAndPurposeDescription: z
    .string()
    .describe(
      'A free-form description of the user\'s identity and purpose for seeking access to the Private Office.'
    ),
});
export type RequestPrivateOfficeAccessInput = z.infer<
  typeof RequestPrivateOfficeAccessInputSchema
>;

const RequestPrivateOfficeAccessOutputSchema = z.object({
  accessGranted: z
    .boolean()
    .describe(
      'Whether the user meets the criteria for further engagement and should be granted access.'
    ),
  reasoning: z
    .string()
    .describe(
      'A brief explanation for the decision to grant or deny access, outlining the key factors considered.'
    ),
});
export type RequestPrivateOfficeAccessOutput = z.infer<
  typeof RequestPrivateOfficeAccessOutputSchema
>;

export async function requestPrivateOfficeAccess(
  input: RequestPrivateOfficeAccessInput
): Promise<RequestPrivateOfficeAccessOutput> {
  return requestPrivateOfficeAccessFlow(input);
}

const requestPrivateOfficeAccessPrompt = ai.definePrompt({
  name: 'requestPrivateOfficeAccessPrompt',
  input: {schema: RequestPrivateOfficeAccessInputSchema},
  output: {schema: RequestPrivateOfficeAccessOutputSchema},
  prompt: `You are an AI assistant designed to evaluate requests for access to a highly exclusive "Private Office".
Your task is to analyze the provided free-form description of a prospective partner or high-net-worth individual's identity and purpose.
Based on the description, determine if the individual meets the criteria for further engagement with the CEO's team. Prioritize clarity, relevance, and alignment with high-level business objectives.

Here is the user's description:
{{{identityAndPurposeDescription}}}

Make a clear decision on whether access should be granted (true/false) and provide a concise reasoning.`,
});

const requestPrivateOfficeAccessFlow = ai.defineFlow(
  {
    name: 'requestPrivateOfficeAccessFlow',
    inputSchema: RequestPrivateOfficeAccessInputSchema,
    outputSchema: RequestPrivateOfficeAccessOutputSchema,
  },
  async input => {
    const {output} = await requestPrivateOfficeAccessPrompt(input);
    return output!;
  }
);
