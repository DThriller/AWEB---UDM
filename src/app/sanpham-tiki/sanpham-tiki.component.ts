import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sanpham-tiki',
  templateUrl: './sanpham-tiki.component.html',
  styleUrls: ['./sanpham-tiki.component.css']
})
export class SanphamTikiComponent implements OnInit {
  sanphamtiki = [
    {links: '#' , img: './assets/images/lazada.png' , tile: 'Khuyến mãi đặc biệt tháng 10 DM mệt vlerr', price: '40.000'} ,
    {links: '#', img: './assets/images/Shopee.jpg' , tile: 'Khuyến mãi đặc biệt tháng 9 mua hay không ?', price: '39.000'},
    {links: '#' , img: './assets/images/Shopee.jpg' , tile: 'Khuyến mãi đặc biệt tháng 10 mua hay không ?', price: '40.000'} ,
    {links: '#' , img: './assets/images/Shopee.jpg' , tile: 'Khuyến mãi đặc biệt tháng 10 mua hay không ?', price: '40.000'} ,
    {links: '#' , img: './assets/images/Shopee.jpg' , tile: 'Khuyến mãi đặc biệt tháng 10 mua hay không ?', price: '40.000'} ,
    {links: '#' , img: './assets/images/Shopee.jpg' , tile: 'Khuyến mãi đặc biệt tháng 10 mua hay không ?', price: '40.000'} ,
    {links: '#' , img: './assets/images/Shopee.jpg' , tile: 'Khuyến mãi đặc biệt tháng 10 mua hay không ?', price: '40.000'} ,
    {links: '#' , img: './assets/images/Shopee.jpg' , tile: 'Khuyến mãi đặc biệt tháng 10 mua hay không ?', price: '40.000'} ,
  ];
  constructor() { }

  ngOnInit() {
  }

}
