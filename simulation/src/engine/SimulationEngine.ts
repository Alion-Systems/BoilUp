import { TeamSimulator } from './TeamSimulator';
import { ProjectSimulator } from './ProjectSimulator';
import { AnalyticsEngine } from './AnalyticsEngine';
import { EmailService } from '../services/email';

interface SimulationConfig {
  emailRecipient: string;
  updateInterval: number;
}

export class SimulationEngine {
  private teamSim: TeamSimulator;
  private projectSim: ProjectSimulator;
  private analytics: AnalyticsEngine;
  private emailService: EmailService;

  constructor(private config: SimulationConfig) {
    this.teamSim = new TeamSimulator();
    this.projectSim = new ProjectSimulator();
    this.analytics = new AnalyticsEngine();
    this.emailService = new EmailService(config.emailRecipient);
  }

  async start() {
    console.log('Starting simulation engine...');

    setInterval(async () => {
      const update = await this.runSimulationCycle();
      await this.processUpdate(update);
    }, this.config.updateInterval);
  }

  private async runSimulationCycle() {
    // Run simulations
    const teamUpdates = await this.teamSim.simulate();
    const projectUpdates = await this.projectSim.simulate();

    // Analyze results
    const analysis = await this.analytics.analyze({
      teams: teamUpdates,
      projects: projectUpdates
    });

    return {
      timestamp: new Date(),
      teams: teamUpdates,
      projects: projectUpdates,
      analysis
    };
  }

  private async processUpdate(update: any) {
    // Apply improvements
    await this.applyImprovements(update.analysis.improvements);

    // Send update email
    await this.emailService.sendUpdate({
      subject: 'BoilUp Simulation Update',
      content: this.generateUpdateEmail(update)
    });
  }
}