import { getConfigHelper } from './get-config-helper';

export interface IGetConfig {
  nodeEnv: string;
  swagger: boolean;
  port: number;
  totalFormSizeMb: number
}

export const defaultConfig: IGetConfig = {
  nodeEnv: 'default',
  swagger: false,
  port: 3000,
  totalFormSizeMb: 50
}

const getConfig = getConfigHelper(defaultConfig);

console.log('Current Configuration:');
console.log(JSON.stringify(getConfig, null, 2));

export default getConfig;
