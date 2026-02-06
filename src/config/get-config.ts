import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';
import { z } from 'zod';

export interface IGetConfig {
  nodeEnv: string;
  swagger: boolean;
  port: number;
  totalFormSizeMb: number;
}

const env = process.env.NODE_ENV || 'development';
const root = process.cwd();

const baseEnvPath = path.join(root, '.env');
if (fs.existsSync(baseEnvPath)) {
  dotenv.config({ path: baseEnvPath });
}

const envSpecificPath = path.join(root, `.env.${env}`);
if (fs.existsSync(envSpecificPath)) {
  dotenv.config({ path: envSpecificPath });
}

const configSchema = z.object({
  NODE_ENV: z.string().default(env),
  SWAGGER: z.coerce.boolean().default(false),
  PORT: z.coerce.number().int().positive().default(3000),
  TOTAL_FORM_SIZE_MB: z.coerce.number().int().positive().default(50)
});

const parsed = configSchema.safeParse(process.env);
if (!parsed.success) {
  const errors = parsed.error.issues.map((issue: z.ZodIssue) => `${issue.path.join('.')}: ${issue.message}`);
  throw new Error(`Invalid environment configuration: ${errors.join(', ')}`);
}

const getConfig: IGetConfig = {
  nodeEnv: parsed.data.NODE_ENV,
  swagger: parsed.data.SWAGGER,
  port: parsed.data.PORT,
  totalFormSizeMb: parsed.data.TOTAL_FORM_SIZE_MB
};

console.log(
  'current configuration: ' +
    Object.entries(getConfig)
      .map(([key, value]) => `${key} (${value})`)
      .join(', ')
);

export default getConfig;
