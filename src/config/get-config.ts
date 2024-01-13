import {getConfigConverter} from "../helpers/get-config.converter";

export interface IGetConfig {
  nodeEnv: string;
  swagger: boolean;
  port: number;
  totalFormSizeMb: number
}

// default configuration
export const defaultConfig: IGetConfig = {
  nodeEnv: 'default',
  swagger: false,
  port: 3000,
  totalFormSizeMb: 50
}

const getConfig = getConfigConverter(defaultConfig);

console.log('current configuration: ' + Object.entries(getConfig).map(([key, value]) => `${key} (${value})`).join(', '));

export default getConfig;
