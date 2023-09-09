import cogoToast from "cogo-toast";

class Toaster {
    success = (message) => {
        let options = { position: "top-right", heading: "Success", hideAfter: 4 };
        cogoToast.success(message, options);
    };

    error = (message) => {
        let options = { position: "top-right", heading: "Error", hideAfter: 4 };

        cogoToast.error(message, options);
    };

    info = (message) => {
        let options = { position: "top-right", heading: "Info" };
        cogoToast.info(message, options);
    };

    msgInfo = (message) => {
        let options = { position: "top-right" };
        cogoToast.info(message, options);
    };
}

export const toast = new Toaster();
