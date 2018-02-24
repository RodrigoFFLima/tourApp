export class Init{
    load(){
        if(localStorage.getItem('markers') === null || localStorage.getItem('markers') === undefined){
            console.log('No markers found... creating');

            var markers = [

                {
                    name:'Fitsmind',
                    lat: 59.118170,
                    lng: 10.230705,
                    draggable: true
                },
                {
                    name:'McDonalds',
                    lat: 59.913513,
                    lng: 10.749573,
                    draggable: true
                },
                {
                    name:'Starbucks',
                    lat: 59.912641,
                    lng: 10.752550,
                    draggable: true
                }
            ];
            localStorage.setItem('markers', JSON.stringify(markers));
        } else{
            console.log('Loading markers....');
        }
    }
}