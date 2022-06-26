export default class Pokemon{
    constructor(
        id = 1,
        name = 'name',
        hp = 1,
        cp = 1,
        
        picture = 'http=//...',
        types = ['Normal'],
        created = new Date())
        {
            this.id = id;
            this.name = name;
            this.hp = hp;
            this.cp = cp;
           
            this.picture = picture;
            this.types = types;
            this.created = created;


    }



}