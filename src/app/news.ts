export interface News {
    id:number;
    catID:number;
    title:string;
    description:string;
    picture:string;
}

export let NewList:Array<News>=
[
    {
        id:1,
        catID:1,
        title:"Choque en Alameda",
        description:"Accidente automovilistico en Santiago",
        picture:"1.jpg"
    },
    {
        id:2,
        catID:3,
        title:"Barcelona v/s Real Madrid",
        description:"El Clásico Español",
        picture:"2.jpg"
    },
    {
        id:3,
        catID:2,
        title:"Vacuna Covid-19",
        description:"Nueva Vacuna Covid-19",
        picture:"3.jpg"
    }
]
