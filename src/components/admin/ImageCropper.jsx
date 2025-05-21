import React, { useState, useCallback } from 'react';
import Cropper from 'react-easy-crop';
import { Button, Slider } from '@mui/material';
import getCroppedImg from '../../utils/cropImage'; // Funcție utilitară (vezi mai jos)

export default function ImageCropper({ image, onComplete, onCancel }) {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);

  const onCropComplete = useCallback((_, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const handleCrop = async () => {
    const croppedImage = await getCroppedImg(image, croppedAreaPixels);
    onComplete(croppedImage);
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
      }}
    >
      <div style={{ position: 'relative', width: '50%', height: 600 }}>
      <Cropper
          image={image}
          crop={crop}
          zoom={zoom}
          aspect={3 / 2}
          onCropChange={setCrop}
          onZoomChange={setZoom}
          onCropComplete={onCropComplete}
        />
        <Slider
          min={1}
          max={3}
          step={0.1}
          value={zoom}
          onChange={(e, zoom) => setZoom(zoom)}
          sx={{ mt: 2 }}
        />
        <div style={{ marginTop: 10 }}>
          <Button onClick={handleCrop} variant="contained" sx={{ mr: 1 }}>
            Crop & Save
          </Button>
          <Button onClick={onCancel}>Cancel</Button>
        </div>
      </div>
    </div>
  );
}
