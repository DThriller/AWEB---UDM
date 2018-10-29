
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sanpham',
  templateUrl: './sanpham.component.html',
  styleUrls: ['./sanpham.component.css']
})
export class SanphamComponent implements OnInit {
  sanpham = [
    {links: '#' , img: './assets/images/Shopee.jpg' , tile: 'Khuyến mãi đặc biệt tháng 10 DM mệt vlerr', price: '40.000'} ,
    {links: '#', img: './assets/images/Shopee.jpg' , tile: 'Khuyến mãi đặc biệt tháng 9 mua hay không ?', price: '39.000'},
    {links: '#' , img: './assets/images/Shopee.jpg' , tile: 'Khuyến mãi đặc biệt tháng 10 mua hay không ?', price: '40.000'} ,
    {links: '#' , img: './assets/images/Shopee.jpg' , tile: 'Khuyến mãi đặc biệt tháng 10 mua hay không ?', price: '40.000'} ,
    {links: '#' , img: './assets/images/Shopee.jpg' , tile: 'Khuyến mãi đặc biệt tháng 10 mua hay không ?', price: '40.000'} ,
    {links: '#' , img: './assets/images/Shopee.jpg' , tile: 'Khuyến mãi đặc biệt tháng 10 mua hay không ?', price: '40.000'} ,
    {links: '#' , img: './assets/images/Shopee.jpg' , tile: 'Khuyến mãi đặc biệt tháng 10 mua hay không ?', price: '40.000'} ,
    {links: '#' , img: './assets/images/Shopee.jpg' , tile: 'Khuyến mãi đặc biệt tháng 10 mua hay không ?', price: '40.000'} ,
  ];
  ngOnInit() {
  }

}
