import Model,{attr} from '@ember-data/model';

export default class HotelModel extends Model {
    @attr title;
    @attr itemlist;
}
