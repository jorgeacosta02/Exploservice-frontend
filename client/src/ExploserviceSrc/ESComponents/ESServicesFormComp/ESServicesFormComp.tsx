import React, { useState } from 'react';
import { useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import ImageUploading, { ImageListType } from 'react-images-uploading';
import axios from 'axios';

const ESServicesFormComp = () => {
  // Estado para almacenar la lista de imágenes seleccionadas
  const [images, setImages] = useState<ImageListType>([]);

  // Estados para el título y la descripción del formulario
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  // Hook de react-dnd para habilitar la funcionalidad de arrastrar y soltar
  const [, drop] = useDrop({
    accept: 'image', // Acepta elementos arrastrables con el tipo 'image'
    drop: (item: any) => handleDrop(item), // Llama a la función handleDrop cuando se suelta un elemento
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
      canDrop: !!monitor.canDrop(),
    }),
    options: { dropEffect: 'copy' }, // Indica que se debe copiar el elemento
  });

  // Función para manejar el evento de soltar una imagen
  const handleDrop = (item: any) => {
      // Crea una copia del objeto de la imagen
    const copiedImage = Object.assign({}, item);

     // Agrega la imagen copiada a la lista de imágenes seleccionadas
    setImages((prevImages) => [...prevImages, { file: copiedImage.file }])




    // // Agrega la imagen a la lista de imágenes seleccionadas
    // setImages((prevImages) => [...prevImages, { file: item.file }]);
  };

  // Función para manejar la eliminación de una imagen de la lista
  const handleRemove = (index: number) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  // Función para manejar el envío del formulario
  const handleSubmit = async () => {
    try {
      // Crea un objeto FormData para enviar datos al servidor
      const formData = new FormData();

      // Agrega el título y la descripción al FormData
      formData.append('title', title);
      formData.append('description', description);

      // Itera sobre la lista de imágenes seleccionadas
      images.forEach((image, index) => {
        // Verifica que la propiedad file de la imagen no sea undefined
        if (image.file) {
          // Agrega la imagen al FormData, usando el índice para diferenciarlas
          formData.append(`images[${index}]`, image.file);
        }
      });

      // Realiza una solicitud POST al servidor con Axios
      const response = await axios.post('/api/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data', // Especifica el tipo de contenido como multipart/form-data
        },
      });

      // Maneja la respuesta del servidor (puede mostrar un mensaje de éxito, etc.)
      console.log('Respuesta del servidor:', response.data);

      // Limpia el formulario después de la carga exitosa
      setImages([]);
      setTitle('');
      setDescription('');
    } catch (error) {
      // Maneja los errores de carga
      console.error('Error al enviar formulario:', error);
    }
  };

  // Renderiza el componente del formulario
  return (
    <div ref={drop}>
      <div>
        <div>
          {/* Input para el título del formulario */}
          <label>Title:</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div>
          {/* Textarea para la descripción del formulario */}
          <label>Description:</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>
        {/* Componente ImageUploading para manejar la carga de imágenes */}
        <ImageUploading
          multiple
          value={images}
          onChange={(imageList) => setImages(imageList)}
          maxNumber={5}
        >
          {({ onImageUpload }) => (
            <div>
              {/* Botón para iniciar la carga de imágenes */}
              <button onClick={onImageUpload}>Subir Imágenes</button>
              {/* Mapea sobre la lista de imágenes seleccionadas */}
              {images.map((image, index) => (
                <div key={index} style={{ position: 'relative', display: 'inline-block' }}>
                  {/* Muestra la imagen seleccionada */}
                  <img
                    src={image.dataURL}
                    alt={`img-${index}`}
                    style={{ width: '100px', height: '100px', marginRight: '5px' }}
                  />
                  {/* Botón para quitar la imagen de la lista */}
                  <button
                    onClick={() => handleRemove(index)}
                    style={{ position: 'absolute', top: '5px', right: '5px', cursor: 'pointer' }}
                  >
                    Quitar
                  </button>
                </div>
              ))}
            </div>
          )}
        </ImageUploading>
        {/* Botón para enviar el formulario */}
        <button onClick={handleSubmit}>Enviar Formulario</button>
      </div>
    </div>
  );
};

export default ESServicesFormComp;
