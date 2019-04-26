import { Component } from '@angular/core';
import { MouseEvent } from '@agm/core';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  title: string = 'My first AGM project';
  zoom: number = 8;
  lat: number = 4.662387;
  lng: number =  -74.069037;

  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  }
  
  mapClicked($event: MouseEvent) {
    this.markers.push({
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: true
    });
  }
  
  markerDragEnd(m: marker, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
  }
  
  markers: marker[] = [
	  { 
      label: "Nogal",	
      lat: 4.664544,	
      lng:-74.053240,
      draggable: false
      },
      { 
      label: "El Japón",	
      lat: 4.670167,	
      lng:-74.050353,
      draggable: false
      },
      { 
      label: "EL Virrey",	
      lat: 4.674010,	
      lng:-74.056312,
      draggable: false
      },
      { 
      label: "Alcazarez",	
      lat: 4.662574,	
      lng:-74.068967,
      draggable: false
      },
      { 
      label: "La Araña",	
      lat: 4.664588,	
      lng:-74.064247,
      draggable: false
      },
      { 
      label: "Muequeta",	
      lat: 4.654207,	
      lng:-74.069004,
      draggable: false
      },
      { 
      label: "San Luis",	
      lat: 4.648214,	
      lng:-74.069232,
      draggable: false
      },
      { 
      label: "Gustavo Uribe Botero",	
      lat: 4.651232,	
      lng:-74.052982,
      draggable: false
      },
      { 
      label: "Garces Navas",	
      lat: 4.712776,	
      lng:-74.116750,
      draggable: false
      },
      { 
      label: "Bella Vista",	
      lat: 4.644981,	
      lng:-74.174244,
      draggable: false
      },
      { 
      label: "San Cristobal Sur",	
      lat: 4.573455,	
      lng:-74.083909,
      draggable: false
      },
      { 
      label: "Nueva Autopista",	
      lat: 4.721370,	
      lng:-74.049152,
      draggable: false
      },
      
  ]
}

// just an interface for type safety.
interface marker {
	lat: number;
	lng: number;
	label?: string;
	draggable: boolean;
}



