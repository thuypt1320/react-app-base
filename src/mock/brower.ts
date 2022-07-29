import { setupWorker } from 'msw';
import { handlers } from 'src/mock/handlers';
export const worker = setupWorker(...handlers);
