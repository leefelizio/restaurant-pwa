import { Component } from '@angular/core';
import { Storage, getDownloadURL, ref, uploadBytes } from '@angular/fire/storage';
// import { Camera, CameraResultType } from '@capacitor/camera';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss'
})
export class SettingsComponent {

  constructor(
    private readonly _storage: Storage
  ){}

  test($event: any){
    console.log('test (file upload)', $event.target.files[0])
  }

  async uploadFile($event: any){
    const file = $event.target?.files?.[0]
    if(!file){
      // return; is the equivalent of die() on PHP
      return;
    }
    // create configuration bucket storage
    const path = 'demo/' + file.name;
    const storageRef = ref(this._storage, path);

    // can add a test for file extension (file type)

    // upload file into bucket
    const uploadTask = await uploadBytes(storageRef, file);
    // console.log(uploadTask);

    // request public URL
    const url = getDownloadURL(uploadTask.ref);
    // console.log(url);
  }

// -- Capacitor Camera 
// async takePic(){
//   // you can stock the photo in a const result  
//   const result = await Camera.getPhoto({
//       ResultType: CameraResultType.Uri
//     })
//     console.log(result)
//     this.imgURL = result.webPath;
//     // here I can add code to save the img
//     // on capacitor there is something
// }

// usage
// <button (click)="takePic()"> Take a pic </button>
// <img *ngIf="imgURL" [src]="imgURL" />

}

