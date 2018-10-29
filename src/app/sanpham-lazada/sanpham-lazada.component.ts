
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sanpham-lazada',
  templateUrl: './sanpham-lazada.component.html' ,
  styleUrls: ['./sanpham-lazada.component.css']
})
export class SanphamLazadaComponent implements OnInit {
  sanphamlazada = [
    {links: '#' , img: './assets/images/Shopee.jpg' , tile: 'Khuyến mãi đặc biệt tháng 10 DM mệt vlerr', price: '40.000'} ,
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
    console.log('Vao component San pham Lazada thanh cong');
  }

}
