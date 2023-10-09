import { Component, ViewChild, ElementRef, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent {
  @ViewChild("fileDropRef") fileDropEl: ElementRef;
  @Input() multipleFiles: boolean;
  @Input() inputType: string;

  files: any[] = [];
  invalidFiles: any[] = [];
  isDragActive: boolean = false;

  enterDragEvent() {
    this.isDragActive = true;
  }

  leaveDragEvent() {
    this.isDragActive = false;
  }

  onFileDropped($event: any) {
    this.prepareFilesList($event);
  };

  fileBrowseHandler(files: any) {
    this.prepareFilesList(files.target.files);
  };

  deleteFile(index: number) {
    this.files.splice(index, 1);
  };

  prepareFilesList(files: Array<any>) {
    this.invalidFiles = [];
    if (!this.multipleFiles) {
      this.files = [];
    }
    for (const item of files) {
      if (item && item.type === "text/csv") {
        let isDuplicate = false;
        this.files.forEach((ele: any) => {
          if (ele.name === item.name && ele.size === item.size && ele.type === item.type) {
            isDuplicate = true;
          };
        });
        if (isDuplicate === false) {
          this.files.push(item);
        };
      } else {
        this.invalidFiles.push(item.name);
      }
    };
    if (this.invalidFiles.length) {
      alert(`"${this.invalidFiles.length}" Non CSV Files removed from selection`);
    }
    this.fileDropEl.nativeElement.value = "";
  }

  formatBytes(bytes: any, decimals = 2) {
    if (bytes === 0) {
      return "0 Bytes";
    }
    const k = 1024;
    const dm = decimals <= 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
  }
}
