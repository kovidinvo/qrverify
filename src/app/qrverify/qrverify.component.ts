import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-qrverify',
  templateUrl: './qrverify.component.html',
  styleUrls: ['./qrverify.component.scss']
})
export class QrverifyComponent implements OnInit {

  qrvideo :any;
  played = false;
  track0: MediaStreamTrack | undefined;
  stream: MediaStream | undefined

  constructor() { 

  }

  async ngOnInit(): Promise<void> {
    try {
      this.qrvideo=document.querySelector("#qrcode")
      this.stream = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: {
            ideal: "enviromnent"
          }
        }
      })
      this.track0 = this.stream.getVideoTracks()[0]
      console.debug(`get video from ${this.track0.label}`)
      this.qrvideo.srcObject = this.stream
      this.qrvideo.play()
      this.played=true
    } catch(e) {
      console.debug(e)
    }
  }
  
  onToggle() {
    if(this.played) {
      this.track0?.stop()
      this.qrvideo.display="none";
    }
    else {
      this.ngOnInit()
      this.qrvideo.display="box";
    }
    this.played=!this.played
  }

}
