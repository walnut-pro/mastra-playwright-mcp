import { Mastra } from '@mastra/core/mastra';
import { createLogger } from '@mastra/core/logger';
import { playwrightAgent } from './agents/playwright';

export const mastra = new Mastra({
  agents: { playwrightAgent },
  logger: createLogger({
    name: 'Mastra',
    level: 'info',
  }),
});
