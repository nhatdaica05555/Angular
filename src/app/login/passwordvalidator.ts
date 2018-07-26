import { FormControl, AbstractControl } from "@angular/forms";

 

export class passwordvalidator{
    static cannotContainSpace(formControl : FormControl){
        if (formControl.value.indexOf(' ') >= 0){
            return {
                cannotContainSpace : true
            }
        }
        return null;
    }


    static shouldBeUnique(formControl : FormControl){
        setTimeout( () => {
            if (formControl.value === "mosh"){
                return {
                    shouldBeUnique : true
                }
            }
        } , 2000);
      
        return null;
    }
}