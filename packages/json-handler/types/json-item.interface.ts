import { JsonTravellerInterface } from '../json-traveller.interface';

export default interface  JsonItemInterface {
    iterator: JsonTravellerInterface;

    value: any;
    key: string | number | null;
}
