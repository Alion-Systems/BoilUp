import { SimulationEngine } from './engine';
import { EmailService } from './services/email';

const simulation = new SimulationEngine({
  emailRecipient: 'phoneste29@gmail.com',
  updateInterval: 3600000 // 1 hour
});

simulation.start().catch(console.error);