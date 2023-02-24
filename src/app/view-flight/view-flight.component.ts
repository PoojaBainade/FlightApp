import { Component } from '@angular/core';
import { concat } from 'rxjs';
import { Flight } from '../flight';
import { FlightDTO } from '../flight-dto';
import { FlightOperationsService } from '../flight-operations.service';

@Component({
  selector: 'app-view-flight',
  templateUrl: './view-flight.component.html',
  styleUrls: ['./view-flight.component.css']
})
export class ViewFlightComponent {

  allFlights: FlightDTO[] = [];

  constructor(private flightService: FlightOperationsService) {

  }
  getFlightByCarrier(carrierName: string) {
    this.flightService.getFlightByCarrierName(carrierName).subscribe(
      data => {
        console.log("data :- " + data);

        this.allFlights = data;
      }, err => {
        console.log("error from spring ", err);

      }
    );
  }

  getFlightBySource(sourceAirport: string) {
    this.flightService.getFlightBySourceAirport(sourceAirport).subscribe(
      data => {
        console.log("data :- " + data);

        this.allFlights = data;
      }, err => {
        console.log("error from spring ", err);

      }
    );
  }
  getFlightByDestination(destinationAirport: string) {
    this.flightService.getFlightByDestinationAirport(destinationAirport).subscribe(
      data => {
        console.log("data :- " + data);

        this.allFlights = data;
      }, err => {
        console.log("error from spring ", err);

      }
    );
  }
  getAllFlights() {
    this.flightService.getAllFlightFromSpring().subscribe(
      data => {
        console.log("data:-" + data);
        this.allFlights = data;
      }, err => {
        console.log("error from spring", err);
      }

    );
  }
  goForBooking(flight:string)
  {
    let flightId = parseInt(flight);
    console.log(" code for booking "+flightId+" flight");
}
goForReview(flight:string)
  {
    let flightId = parseInt(flight);
    console.log(" code for Review "+flightId+" flight");
}

}



























