import { z } from 'zod';

export interface ComponentConfig {
  name: string;
  type: 'server' | 'client';
  features: string[];
  props?: Record<string, z.ZodType>;
}

export function createComponent(config: ComponentConfig) {
  return {
    name: config.name,
    
    generate: async () => {
      // Generate component files
      const files = await generateComponentFiles(config);
      
      // Generate tests
      const tests = await generateTests(config);
      
      // Generate documentation
      const docs = await generateDocs(config);
      
      return {
        files,
        tests,
        docs
      };
    }
  };
}