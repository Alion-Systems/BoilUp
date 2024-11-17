#!/usr/bin/env node
import { Command } from 'commander';
import { generateCommand } from './commands/generate';
import { featureCommand } from './commands/feature';
import { devCommand } from './commands/dev';

const program = new Command()
  .name('boilup')
  .description('Next.js development made easier than easy')
  .version('0.1.0');

program
  .addCommand(generateCommand)
  .addCommand(featureCommand)
  .addCommand(devCommand);

program.parse();