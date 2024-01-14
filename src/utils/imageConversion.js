export const convertImageToBase64 = async(imageFile) => {
    return new Promise((resolve, reject) => {
      if (!imageFile) {
        reject('No image file provided');
        return;
      }
      const reader = new FileReader();
      reader.onload = () => {
        const base64String = reader.result;
        resolve(base64String);
      };
      reader.onerror = (error) => {
        reject(error);
      };
      reader.readAsDataURL(imageFile);
    });
  }  