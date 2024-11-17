import { z } from 'zod';

export interface FeatureConfig {
  name: string;
  components?: string[];
  hooks?: string[];
  api?: {
    routes: string[];
    middleware?: string[];
  };
  database?: {
    models: string[];
    migrations: string[];
  };
}

export function createFeature(config: FeatureConfig) {
  return {
    name: config.name,
    
    setup: async () => {
      // Set up feature structure
      await createFeatureStructure(config);
      
      // Generate components
      if (config.components) {
        await generateComponents(config.components);
      }
      
      // Set up API routes
      if (config.api) {
        await setupAPIRoutes(config.api);
      }
      
      // Set up database
      if (config.database) {
        await setupDatabase(config.database);
      }
    },
    
    // Component generation
    components: {
      create: async (name: string) => {
        await generateComponent(name, config);
      }
    },
    
    // Hook generation
    hooks: {
      create: async (name: string) => {
        await generateHook(name, config);
      }
    }
  };
}