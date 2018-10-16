import { HeaderComponent } from './header/header.component';
import { Component } from '@angular/core';
export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}
export interface Color {
  color: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  tiles: Tile[] = [
    {text: '1', cols: 1, rows: 28, color: '#9E9E9E'},
  ];
  color_header1_ts: Color[] = [
  {color: '#43A047'}
  ];
  color_header2_ts: Color[] = [
    {color: '#212121'}
  ];
  color_content_menu_ts: Color[] = [
    {color: '#fafafa'}
  ];
  color_content_main1_ts: Color[] = [
    {color: '#a255ff'}
  ];
  color_footer_mail_ts: Color[] = [
    {color: '#111111' }
  ];
  color_footer_ts: Color [] = [
    {color: '#000a12'}
  ];
  color_copyright_ts: Color [] = [
    {color: '#000a12'}
  ];
  color_KM_ts: Color [] = [
    {color: '#212121'}
  ];
  color_content_main_ts: Color[] = [
    {color: '#606060'}
  ];
  color_background_xemthem_ts: Color[] = [
    {color: '#f5f5f5'}
  ];

  covers: Tile[] = [
    {text: 'cover', cols: 1, rows: 1, color: '#00E5FF' }
  ];
  content1s: Tile[] = [
    {text: 'content1', cols: 3, rows: 1, color: '#FFEE58'},
    {text: 'content1', cols: 9, rows: 1, color: '#212121'}
  ];
  space1s: Tile[] = [
    {text: 'space1', cols: 1, rows: 1, color: '#FAFAFA' }
  ];
  content2s: Tile[] = [
    {text: 'content2', cols: 3, rows: 1, color: '#212121'},
    {text: 'content2', cols: 9, rows: 1, color: '#FFEE58'}
  ];
  space2s: Tile[] = [
    {text: 'space2', cols: 1, rows: 1, color: '#FAFAFA' }
  ];
  footers: Tile[] = [
    {text: 'footer', cols: 1, rows: 1, color: '#000000' }
  ];
  ends: Tile[] = [
    {text: 'footer', cols: 1, rows: 1, color: '#000000' }
  ];

}
