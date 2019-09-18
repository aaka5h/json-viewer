import JsonItemInterface from '../types/json-item.interface';
import { JsonTravellerInterface } from '../json-traveller.interface';
import NoIterator from './no-iterator';

export class EmptyItem implements JsonItemInterface {
    iterator: JsonTravellerInterface;
    key: string | number | null;
    value: any;

    constructor(key, private type: 'array' | 'object' = 'object') {
        this.key = key;
        this.type === 'object' ? this.value = '{}' : this.value = '[]';
        this.iterator = new NoIterator(this);
    }

}
