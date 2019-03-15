import { Component } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  barcodeResult;

  constructor(private scanner: BarcodeScanner) {

  }

  async startScan() {
    console.log('do scanning...');
    const result = await this.scanner.scan();
    // alert(result.text + ', ' + result.format);
    this.barcodeResult = result;
  }

}
