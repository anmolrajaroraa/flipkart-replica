import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deals-of-the-day',
  templateUrl: './deals-of-the-day.component.html',
  styleUrls: ['./deals-of-the-day.component.css']
})
export class DealsOfTheDayComponent{
  img_urls : Electronics[] = [];
  urls:string[] = ["https://rukminim1.flixcart.com/image/400/400/data-cable/usb-cable/j/s/h/sony-cp-ab150-wc-in-original-imaeg768eccbaa9n.jpeg?q=70", "https://rukminim1.flixcart.com/image/400/400/hair-dryer/r/e/d/panasonic-eh-nd-11-a62b-original-imaepgjbeshdtv8z.jpeg?q=70", "https://rukminim1.flixcart.com/image/400/400/j7rxpjk0/headphone/j/w/p/jbl-e35-original-imaexy2qsbgn4qvd.jpeg?q=70", "https://rukminim1.flixcart.com/image/400/400/jazodjk0/memory-card/microsdhc/s/h/d/sandisk-sdsquar-016g-gn6n-original-imafygydpjahykqe.jpeg?q=70"];
  constructor(){
    /*this.img_urls = ["https://rukminim1.flixcart.com/image/400/400/data-cable/usb-cable/j/s/h/sony-cp-ab150-wc-in-original-imaeg768eccbaa9n.jpeg?q=70", "https://rukminim1.flixcart.com/image/400/400/hair-dryer/x/k/z/philips-hp8643-46-hair-straightener-original-imaemxk7nxkmdw4v.jpeg?q=70", "https://rukminim1.flixcart.com/image/400/400/jbzedu80/mobile/b/a/z/ivoomi-i1s-na-original-imaff7sjdymy9hjb.jpeg?q=70", "https://rukminim1.flixcart.com/image/400/400/j95y4cw0/printer/y/u/q/canon-pixma-e3177-original-imaezynucmxb8rbh.jpeg?q=70"];*/
      for(let i:number = 0; i<4; i++){
      let tempObj:Electronics = new Electronics(this.urls[i], "Mobile Cables", "Under 299", "iVoltaa, Mivi & More");
          this.img_urls[i] = tempObj;
      }
  }
}
class Electronics{
  private src:string;
  private name:string;
  private price:string;
  private details:string;
  constructor(src, name, price, details){
      this.src = src;
      this.name = name;
      this.price = price;
      this.details = details;
  }
}