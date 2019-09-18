import {JsonTravellerInterface} from '../json-traveller.interface';
import JsonItemInterface from '../types/json-item.interface';

export default class ArrayTraveller implements JsonTravellerInterface {
    currentItem: JsonItemInterface;
    isEnd: boolean = false;
    rootItem: JsonItemInterface;
    private _index = 0;

    constructor(private item: JsonItemInterface) {
        this.rootItem = this.currentItem = this.item.value && this.item.value[0];
        this.isEnd = (this._index) === this.item.value.length;
    }

    next(): JsonItemInterface | null {
        this._index++;
        this.isEnd = (this._index) === this.item.value.length;
        return this.isEnd ? null : this.item.value[this._index];
    }

}
