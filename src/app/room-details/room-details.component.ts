import { Component, OnInit } from '@angular/core';
import { Room } from '../room';
import { RoomService } from '../room.service';
import { RoomListComponent } from '../room-list/room-list.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-room-details',
  templateUrl: './room-details.component.html',
  styleUrls: ['./room-details.component.css']
})
export class RoomDetailsComponent implements OnInit {

  id!: number;
  room!: Room;

  constructor(private activatedRoute: ActivatedRoute,
    private router: Router, private roomService: RoomService) { }

  ngOnInit() {
    this.room = new Room();

    this.id = this.activatedRoute.snapshot.params['id'];

    this.roomService.getRoom(this.id)
      .subscribe(
        data => {
          console.log(data);
          this.room = data;
        },
        error => console.log(error)
      );
  }

  list() {
    this.router.navigate(['rooms']);
  }

}
