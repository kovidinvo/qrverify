import { ChangeDetectorRef, Component, ElementRef, OnInit, Sanitizer, TestabilityRegistry, ViewChild } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
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
  isCodeScanned = false;
  stream: MediaStream | undefined
  qrscan : QrScanner | undefined
  qrCodeUrl : SafeResourceUrl

  constructor(private sanitizer: DomSanitizer) { 
    this.qrCodeUrl = this.sanitizer.bypassSecurityTrustResourceUrl("")
  }

   ngOnInit(): void {
    this.qrvideo=document.querySelector("#qrcode")
  }

  async startVideo() {
    try {      
      this.stream = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: {
            ideal: "enviromnent"
          }
        }
      })
      this.qrvideo.srcObject = this.stream
      this.qrvideo.play()
      this.played=true      
    } catch(e) {
      console.debug(e)
    }
  }

  async initQrCode() {
    this.qrscan = new QrScanner(this.qrvideo,result => this.codeScanned(result))
    await this.qrscan.start()
  }
  

  onStartScan() {
    this.startVideo()
    this.initQrCode()
  }

  stopVideo() {
    this.stream!!.getVideoTracks().forEach( tr => tr.stop())
    this.qrvideo.srcObject=null
    this.played=false
  }

  async codeScanned(result:string) {
    await this.stopVideo()
    this.qrCodeUrl=this.sanitizer.bypassSecurityTrustResourceUrl(result)
  }
 
}
