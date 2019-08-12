import JsonItemInterface from './types/json-item.interface';

export interface JsonTravellerInterface {
    isEnd: boolean;
    currentItem: JsonItemInterface;
    rootItem: JsonItemInterface;

    next(): JsonItemInterface | null;
}
