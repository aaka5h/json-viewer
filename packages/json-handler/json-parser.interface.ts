import JsonItemInterface from './types/json-item.interface';
import { JsonTravellerInterface } from './json-traveller.interface';

export interface JsonParserInterface {
    build(json: any): JsonItemInterface;
}
