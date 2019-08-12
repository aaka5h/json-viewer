import { JsonTravellerInterface } from '../json-traveller.interface';
import JsonItemInterface from '../types/json-item.interface';

export default class ArrayTraveller implements JsonTravellerInterface {
    currentItem: JsonItemInterface;
    isEnd: boolean;
    rootItem: JsonItemInterface;
    private _index = 0;

    constructor(private item: JsonItemInterface) {
        this.currentItem = this.item.value && this.item.value[0];
    }

    next(): JsonItemInterface | null {
        this.isEnd = (++this._index) === this.item.value.length;
        return this.item.value[this._index];
    }

}
