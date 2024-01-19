import { useState } from "react";

const useUploadImg = (initialData) => {
  
  const [fileSrc, setFileSrc] = useState(initialData);

  const handleUploadImg = (e) => {
      const file = e.target.files ? e.target.files[0] : null;
      if (!file) return;

      const formData = new FormData();
      formData.append("upFile", file, file.name);

      previewFile(file);
  };

  function previewFile(file) {
    let reader;
    if (file) {
      reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function (event) {
        const result = event.target?.result;
        console.log(result);
        setFileSrc(result);
      };
    }
  }

  return [fileSrc, handleUploadImg];
};

export default useUploadImg;