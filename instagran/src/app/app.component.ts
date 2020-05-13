import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  title = 'Instagram';

  ngOnInit(): void {

    //Informacoes acesso ao banco
    let firebaseConfig = {
      apiKey: "AIzaSyCoIwLARaXOeE0WRVq9fOcuBoxMYcl4JKI",
      authDomain: "instagram-clone-54358.firebaseapp.com",
      databaseURL: "https://instagram-clone-54358.firebaseio.com",
      projectId: "instagram-clone-54358",
      storageBucket: "instagram-clone-54358.appspot.com",
      messagingSenderId: "154371522803",
      appId: "1:154371522803:web:e18daab4d29aaa1a197786",
      measurementId: "G-2YC74EX964"
    };

    firebase.initializeApp(firebaseConfig)
  }

}
