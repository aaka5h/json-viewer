import JsonItemInterface from '../types/json-item.interface';
import { JsonTravellerInterface } from '../json-traveller.interface';
import NoIterator from './no-iterator';
import { ObjectTraveller } from './object-traveller';
import ArrayTraveller from './array-traveller';

export class JsonItem implements JsonItemInterface {

    key: string | null;
    value: any;
    iterator: JsonTravellerInterface;

    constructor(
        key: string | null,
        value: any,
    ) {
        if (typeof value !== 'object') {
            this.key = key;
            this.value = value;
            this.iterator = new NoIterator(this);
        } else if (Array.isArray(value)) {
            this.key = key;
            this.value = value;
            this.iterator = new ArrayTraveller(this);
        } else if (value) {
            this.key = key;
            const result: JsonItemInterface[] = [];
            Object.keys(value).forEach(k => {
                if (value.hasOwnProperty(k))
                    result.push(new JsonItem(k, value[k]));
            });
            this.value = new JsonItem(null, result);
            this.iterator = new ObjectTraveller(this);
        } else {
            this.key = key;
            this.value = null;
            this.iterator = new ObjectTraveller(this);
        }
    }


}
