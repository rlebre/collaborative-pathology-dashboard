import { Injectable } from '@angular/core';

import { ToasterConfig } from 'angular2-toaster';
import 'style-loader!angular2-toaster/toaster.css';
import { NbToastStatus } from '@nebular/theme/components/toastr/model';

import { NbGlobalLogicalPosition, NbGlobalPhysicalPosition, NbGlobalPosition, NbToastrService } from '@nebular/theme';


@Injectable()
export class ToastrService {

    config: ToasterConfig;

    index = 1;
    destroyByClick = true;
    duration = 3500;
    hasIcon = true;
    position: NbGlobalPosition = NbGlobalPhysicalPosition.TOP_RIGHT;
    preventDuplicates = false;


    constructor(private toastrService: NbToastrService,) {
    }

    makeSuccessToastr(title: string, content: string){
      let status: NbToastStatus = NbToastStatus.SUCCESS;

      const config = {
          status: status,
          destroyByClick: this.destroyByClick,
          duration: this.duration,
          hasIcon: this.hasIcon,
          position: this.position,
          preventDuplicates: this.preventDuplicates,
        };
        const titleContent = title ? `${title}` : '';
  
        this.index += 1;
        this.toastrService.show(
          content,
          `${titleContent}`,
          config);

    }

    makeWarningToastr(){

    }


}
