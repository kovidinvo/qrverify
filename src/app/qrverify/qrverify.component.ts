import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import  QrScanner  from 'qr-scanner'

QrScanner.WORKER_PATH = "../../qr-scanner-worker.min.js"


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
  qrscan : QrScanner | undefined

  constructor() { 
  }

   ngOnInit(): void {
    this.qrvideo=document.querySelector("#qrcode")
    this.initVideo()
    this.initQrCode()
  }

  async initVideo() {
    try {      
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

  async initQrCode() {
    this.qrscan = new QrScanner(this.qrvideo,result => console.log(result))
    await this.qrscan.start()
  }
  
  onToggle() {
    if(this.played) {
      this.track0?.stop()
      //this.qrvideo.stop()
    }
    else {
      this.initVideo()
    }
    this.played=!this.played
  }

}
