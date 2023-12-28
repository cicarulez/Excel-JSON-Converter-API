import { getConfigHelper } from './get-config-helper';

export interface IGetConfig {
  nodeEnv: string;
  swagger: boolean;
  port: number;
}

export const defaultConfig: IGetConfig = {
  nodeEnv: 'default',
  swagger: false,
  port: 3000
}

const getConfig = getConfigHelper(defaultConfig);

export default getConfig;
