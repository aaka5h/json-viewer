import { JsonTravellerInterface } from '../json-traveller.interface';
import JsonItemInterface from '../types/json-item.interface';

export class ObjectTraveller implements JsonTravellerInterface {
    currentItem: JsonItemInterface;
    isEnd: boolean = false;

    get rootItem(): JsonItemInterface {
        return this.item.value.iterator.rootItem;
    }

    constructor(private item: JsonItemInterface) {
        this.currentItem = this.item.value.iterator.rootItem;
    }

    next(): JsonItemInterface | null {
        this.currentItem = this.item.value.iterator.next();
        if (!this.currentItem) {
            this.isEnd = true;
            return null;
        }
        return this.currentItem;
    }

}
