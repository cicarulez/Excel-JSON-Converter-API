import {getConfigConverter} from "../helpers/get-config.converter";

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

const getConfig = getConfigConverter(defaultConfig);

console.log('Current Configuration:');
console.log(JSON.stringify(getConfig, null, 2));

export default getConfig;
