import { Component, OnInit } from "@angular/core";

export interface Crew {
  userId: number[];
  crewId: number;
  crewName: string;
}

export interface User {
  id: number;
  name: string;
}

@Component({
  selector: "app-test",
  templateUrl: "./test.component.html",
  styleUrls: ["./test.component.scss"]
})
export class TestComponent implements OnInit {
  public crewData: Crew[] = [
    { userId: [2], crewId: 1, crewName: "Apron" },
    { userId: [1], crewId: 2, crewName: "Runway" },
    { userId: [4], crewId: 3, crewName: "Taxiway" },
    { userId: [3], crewId: 4, crewName: "Hirzon" }
  ];

  public userData: User[] = [
    { id: 1, name: "John" },
    { id: 2, name: "Mike" },
    { id: 3, name: "Bill" },
    { id: 4, name: "Will" }
  ];

  public crewClear: boolean;

  constructor() {
    this.selectComparator = this.selectComparator.bind(this);
  }

  ngOnInit() {
    this.crewClear = false;
    // console.log(this.crewData[0].userId.includes(4));
    // console.log(Object.keys(this.crewData).includes("2"));
    // console.log(this.crewData.find(x => x.userId == 4).userId[0]);
  }

  onClearCrew() {
    this.crewClear = true;
    console.log(this.crewClear);
  }

  onResetCrewClear() {
    this.crewClear = false;
    console.log(this.crewClear);
  }

  selectComparator(id) {
    return +id === this.crewData.userId;
    // instance from https://github.com/angular/material2/issues/2143
  }
}
