import { Component } from '@angular/core';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.page.html',
  styleUrls: ['./gallery.page.scss'],
})
export class GalleryPage {

  photos: Photo[] = [];

  constructor() { }

  async takePhoto() {
    const photo = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 90
    });

    // Ajoutez la photo à la liste des photos
    this.photos.unshift(photo);

    // Sauvegardez la photo dans le stockage de l'appareil
    this.savePhoto(photo);
  }

  async savePhoto(photo: Photo) {
    // Convertir l'image en base64
    const response = await fetch(photo.webPath!);
    const blob = await response.blob();
    const base64Data = await this.convertBlobToBase64(blob) as string;

    // Sauvegarder l'image dans le système de fichiers
    const fileName = new Date().getTime() + '.jpeg';
    await Filesystem.writeFile({
      path: fileName,
      data: base64Data,
      directory: Directory.Data
    });

    console.log('Photo sauvegardée :', fileName);
  }

  convertBlobToBase64 = (blob: Blob) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = reject;
    reader.onload = () => {
      resolve(reader.result);
    };
    reader.readAsDataURL(blob);
  });


}
