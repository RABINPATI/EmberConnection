import Route from '@ember/routing/route';

export default class ContactRoute extends Route {
    async model(){

         let response = await fetch("http://localhost:4600/api/offices");
        // let response = await fetch("http://localhost:4600/api/Resturant");
        let data = await response.json();
        return data;
    }
}

