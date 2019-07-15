import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})


export class PostFormComponent implements OnInit {

  @Output() submitted = new EventEmitter<any>();
  @Input() playlist : Object[];

name: string;
artist: string;
album: string;

newSong(name, artist, album){
  this.name = name;
  this.artist = artist;
  this.album = album;
  let song = {
    name: name,
    artist: artist,
    album: album
  }
  this.submitted.emit(song);
  console.log(song);
}

  constructor() { }



  ngOnInit() {
  }

}
