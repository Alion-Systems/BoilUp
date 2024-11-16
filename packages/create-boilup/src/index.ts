#!/usr/bin/env node
import { Command } from 'commander';
import chalk from 'chalk';
import ora from 'ora';
import inquirer from 'inquirer';

console.log(chalk.blue(`
██████╗  ██████╗ ██╗██╗     ██╗   ██╗██████╗ 
██╔══██╗██╔═══██╗██║██║     ██║   ██║██╔══██╗
██████╔╝██║   ██║██║██║     ██║   ██║██████╔╝
██╔══██╗██║   ██║██║██║     ██║   ██║██╔═══╝ 
██████╔╝╚██████╔╝██║███████╗╚██████╔╝██║     
╚═════╝  ╚═════╝ ╚═╝╚══════╝ ╚═════╝ ╚═╝     
`));

const program = new Command()
  .name('create-boilup')
  .description('Create Next.js applications the easy way')
  .version('0.1.0')
  .argument('[project-directory]', 'Directory to create the project in')
  .option('--typescript', 'Use TypeScript (default)', true)
  .option('--javascript', 'Use JavaScript instead of TypeScript')
  .option('--template <template-name>', 'Specify a template to use')
  .action(async (projectDirectory: string | undefined, options: any) => {
    if (!projectDirectory) {
      const answers = await inquirer.prompt([
        {
          type: 'input',
          name: 'projectDirectory',
          message: 'What is your project named?',
          default: 'my-app'
        }
      ]);
      projectDirectory = answers.projectDirectory;
    }

    const spinner = ora('Creating your BoilUp project...').start();

    try {
      // TODO: Implement project creation logic
      spinner.succeed('Project created successfully!');
      
      console.log('\n' + chalk.green('Success!') + ' Created ' + chalk.cyan(projectDirectory) + ' at ' + process.cwd());
      console.log('\nInside that directory, you can run several commands:');
      console.log('\n  ' + chalk.cyan('npm run dev'));
      console.log('    Starts the development server.');
      console.log('\n  ' + chalk.cyan('npm run build'));
      console.log('    Builds the app for production.');
      console.log('\n  ' + chalk.cyan('npm start'));
      console.log('    Runs the built app in production mode.');
      console.log('\nWe suggest that you begin by typing:');
      console.log('\n  ' + chalk.cyan('cd') + ' ' + projectDirectory);
      console.log('  ' + chalk.cyan('npm run dev'));
    } catch (error) {
      spinner.fail('Failed to create project');
      console.error(chalk.red('Error:'), error);
      process.exit(1);
    }
  });

program.parse();
