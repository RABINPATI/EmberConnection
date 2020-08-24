import Model,{attr} from '@ember-data/model';

export default class AboutModel extends Model {
    @attr title;
    @attr description;
    @attr image;
}
