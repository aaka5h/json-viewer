import JsonItemInterface from '../types/json-item.interface';
import { JsonParserInterface } from '../json-parser.interface';
import { JsonItem } from './json-item';
import { EmptyItem } from './empty-item';

export default class JsonParser implements JsonParserInterface {

    constructor(private readonly json: any) {
    }

    build(): JsonItemInterface {
        try {
            const parsed = JSON.parse(this.json);
            return new JsonItem(null, parsed);
        } catch (e) {
            throw new Error('invalid json entered 🤷‍♂️:'+ e);
        }
    }


}
