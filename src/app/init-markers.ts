export class Init{
    load(){
        if(localStorage.getItem('markers') === null || localStorage.getItem('markers') === undefined){
            console.log('No markers found... creating');

            var markers = [

                {
                    name:'Companhia 1',
                    lat: 42.458279,
                    lng: -70.930498,
                    draggable: true
                },
                {
                    name:'Companhia 2',
                    lat: 42.358279,
                    lng: -70.940498,
                    draggable: true
                },
                {
                    name:'Companhia 3',
                    lat: 42.558279,
                    lng: -70.930498,
                    draggable: true
                }
            ];
            localStorage.setItem('markers', JSON.stringify(markers));
        } else{
            console.log('Loading markers....');
        }
    }
}