// Define your models here.

export interface Model {
  id: string;
  label: string;
  apiIdentifier: string;
  description: string;
}

export const models: Array<Model> = [
  {
    id: 'gemini-1.5-flash-8b',
    label: 'Gemini 1.5 Flash 8B',
    apiIdentifier: 'gemini-1.5-flash-8b',
    description: 'Small model for fast, lightweight tasks',
  },
  {
    id: 'gemini-1.5-pro',
    label: 'Gemini 1.5 Pro',
    apiIdentifier: 'gemini-1.5-pro',
    description: 'Large model for complex, multi-step tasks',
  },
] as const;

export const DEFAULT_MODEL_NAME: string = 'gemini-1.5-flash-8b';
