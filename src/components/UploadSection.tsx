import React, { useState } from 'react';
import { Upload, Camera, Image as ImageIcon } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const UploadSection: React.FC<{
  onImageSelected: (image: File | null) => void;
}> = ({ onImageSelected }) => {
  const { t } = useTranslation();
  const [dragActive, setDragActive] = useState(false);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  const handleFile = (file: File) => {
    if (!file.type.match('image.*')) {
      alert('Veuillez sélectionner une image');
      return;
    }
    
    setSelectedImage(file);
    setPreviewUrl(URL.createObjectURL(file));
    onImageSelected(file);
  };

  const triggerFileInput = () => {
    const fileInput = document.getElementById('file-upload');
    fileInput?.click();
  };

  const resetImage = () => {
    setSelectedImage(null);
    setPreviewUrl(null);
    onImageSelected(null);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
        {t('scan.title')}
      </h2>
      <p className="text-gray-600 text-center mb-6">
        {t('scan.subtitle')}
      </p>

      {!previewUrl ? (
        <div
          className={`border-2 border-dashed rounded-lg p-6 text-center ${
            dragActive ? 'border-green-500 bg-green-50' : 'border-gray-300'
          } transition-colors`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          <input
            type="file"
            id="file-upload"
            className="hidden"
            accept="image/*"
            onChange={handleChange}
          />

          <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-500 mb-2">
            {t('scan.upload.dragDrop')}
          </p>
          <div className="flex justify-center gap-4 mt-4">
            <button
              className="flex items-center gap-2 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors"
              onClick={triggerFileInput}
            >
              <ImageIcon className="h-5 w-5" />
              {t('scan.upload.browse')}
            </button>
            <button
              className="flex items-center gap-2 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Camera className="h-5 w-5" />
              {t('scan.upload.takePhoto')}
            </button>
          </div>
        </div>
      ) : (
        <div className="text-center">
          <div className="mb-4 relative">
            <img
              src={previewUrl}
              alt="Aperçu de l'image"
              className="max-h-80 max-w-full mx-auto rounded-lg"
            />
          </div>
          <div className="flex justify-center gap-4">
            <button
              className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition-colors"
              onClick={resetImage}
            >
              {t('scan.upload.delete')}
            </button>
            <button
              className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors"
              onClick={() => {}}
            >
              {t('scan.upload.analyze')}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UploadSection;