import JsonItemInterface from '../types/json-item.interface';
import { JsonTravellerInterface } from '../json-traveller.interface';
import NoIterator from './no-iterator';
import { ObjectTraveller } from './object-traveller';
import ArrayTraveller from './array-traveller';
import { EmptyItem } from './empty-item';

export class JsonItem implements JsonItemInterface {

    key: string | null;
    value: any;
    iterator: JsonTravellerInterface;

    constructor(
        key: string | null,
        value: any,
    ) {

        if (Array.isArray(value) && value.length && value[0].constructor.name === this.constructor.name) {
            this.key = key;
            this.value = value;
            this.iterator = new ArrayTraveller(this);
            return;
        }
        if (typeof value !== 'object') {
            this.key = key;
            this.value = value;
            this.iterator = new NoIterator(this);
        } else if (Array.isArray(value)) {
            this.key = key;
            const result: JsonItemInterface[] = [];
            let i = 0;
            for (let v of value) {
                result.push(new JsonItem(i.toString(), v));
                i++;
            }
            this.value = result.length ? new JsonItem(null, result) : new EmptyItem(null,  'array');
            this.iterator = new ArrayTraveller(this);
        } else if (value) {
            this.key = key;
            const result: JsonItemInterface[] = [];
            Object.keys(value).forEach(k => {
                if (value.hasOwnProperty(k))
                    result.push(new JsonItem(k, value[k]));
            });
            this.value = result.length ? new JsonItem(null, result) : new EmptyItem(null, 'object');
            this.iterator = new ObjectTraveller(this);
        } else {
            this.key = key;
            this.value = null;
            // this.iterator = new ObjectTraveller(this);
        }
    }


}
