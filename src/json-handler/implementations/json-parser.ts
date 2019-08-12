import JsonItemInterface from '../types/json-item.interface';
import { JsonParserInterface } from '../json-parser.interface';
import { JsonItem } from './json-item';
import { JsonTravellerInterface } from '../json-traveller.interface';
import { ObjectTraveller } from './object-traveller';

export default class JsonParser implements JsonParserInterface {

    constructor(private readonly json: any) {
    }

    build(): JsonItemInterface {
        try {
            const parsed = JSON.parse(this.json);
            return new JsonItem(null, parsed);
        } catch (e) {
            console.error('invalid json',e);
            return {
                key: 'none',
                value: 'json parse failed',
                iterator: null,
            }
        }
    }


}
