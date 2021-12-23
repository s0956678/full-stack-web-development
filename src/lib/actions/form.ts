export const enhance = (form: HTMLFormElement) => {
    console.log("Form mounted to DOM.");

    return {
        destroy() {
            console.log("Form removed from DOM.")
        }
    }
};