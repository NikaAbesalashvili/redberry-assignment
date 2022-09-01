export const imageToBinaryString = async (imageFile) => {
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader();

        fileReader.readAsText(imageFile);

        fileReader.onload = () => {
            resolve(fileReader.result);
        };

        fileReader.onerror = (error) => {
            reject(error);
        };
    });
};