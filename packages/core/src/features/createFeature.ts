// packages/core/src/features/createFeature.ts

interface Component {
  name: string;
  type: 'server' | 'client';
  features: string[];
}

interface Hook {
  name: string;
  returnType: string;
}

interface APIRoute {
  name: string;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
}

interface FeatureConfig {
  name: string;
  components?: Component[];
  hooks?: Hook[];
  api?: APIRoute[];
}

export function createFeature(config: FeatureConfig) {
  return {
    name: config.name,

    // Component generation
    components: {
      create: async (name: string) => {
        // Generate component
      },
    },

    // Hook generation
    hooks: {
      create: async (name: string) => {
        // Generate hook
      },
    },

    // API generation
    api: {
      create: async (name: string) => {
        // Generate API route
      },
    },
  };
}

// Example usage in packages/core/src/features/auth/index.ts
export const AuthFeature = createFeature({
  name: 'auth',
  components: [{ name: 'Login', type: 'client', features: [] }, { name: 'Register', type: 'client', features: [] }],
  hooks: [{ name: 'useAuth', returnType: 'AuthState' }],
  api: [{ name: 'login', method: 'POST' }, { name: 'register', method: 'POST' }],
});
