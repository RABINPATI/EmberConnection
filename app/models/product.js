import Model,{attr} from '@ember-data/model';

export default class ProductModel extends Model {

    @attr name;
    @attr type;
    @attr price;
    @attr description;
    @attr qty;
    @attr image;
}
