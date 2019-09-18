import { JsonTravellerInterface } from '../json-traveller.interface';
import JsonItemInterface from '../types/json-item.interface';

export default class NoIterator implements JsonTravellerInterface {
    currentItem: JsonItemInterface;
    isEnd: boolean = true;
    rootItem: JsonItemInterface;

    constructor(item: JsonItemInterface) {
        this.currentItem = item;
        this.rootItem = item;
    }

    next(): JsonItemInterface | null {
        return null;
    }

}
