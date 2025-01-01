import { useState } from "react";
import "./PhotoUploader.css";

interface PhotoUploaderProps {
  setImage: (image: File) => void;
}

const PhotoUploader = ({ setImage }: PhotoUploaderProps) => {
  const [preview, setPreview] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type.startsWith("image/")) {
      setPreview(URL.createObjectURL(file));
      setImage(file);
    } else {
      alert("Please select an image file!");
    }
  };

  const resetPreview = () => {
    setPreview(null);
  };

  return (
    <div className="photo-uploader">
      <label className="photo-uploader__dropzone">
        <input type="file" accept="image/*" onChange={handleFileChange} className="hidden" />
        {preview ? (
          <img src={preview} alt="Preview" className="photo-uploader__preview" />
        ) : (
          <span className="photo-uploader__dropzone-text">Add image</span>
        )}
      </label>
      {preview && (
        <button className="photo-uploader__reset-button" onClick={resetPreview}>
          Reset
        </button>
      )}
    </div>
  );
};

export default PhotoUploader;
