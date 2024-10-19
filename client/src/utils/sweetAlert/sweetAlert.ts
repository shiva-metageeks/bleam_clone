import Swal from "sweetalert2";

type sweetAlertType = 'error' | 'success' | 'warning' | 'info';
type sweetAlertPosition = 'top' | 'top-start' | 'top-end' | 'center' | 'center-start' | 'center-end' | 'bottom' | 'bottom-start' | 'bottom-end';


export const sweetAlert = ({type, title, text, confirmButtonText, position}: {type: sweetAlertType, title: string, text: string, confirmButtonText: string, position: sweetAlertPosition  }) => {

    Swal.fire({
        title: title,
        text: text ,
        icon: type || "success",
        confirmButtonText: confirmButtonText || "OK",
        position: position || "top"
    })
}
