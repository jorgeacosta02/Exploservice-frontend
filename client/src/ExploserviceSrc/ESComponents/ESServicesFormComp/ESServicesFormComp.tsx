import { useState } from 'react';
import { useDrop } from 'react-dnd';
import ImageUploading, { ImageListType } from 'react-images-uploading';
import axios from 'axios';
import styles from './_ESServicesFormComp.module.scss';


const ESServicesFormComp = () => {
  
  // const cloudinaryName: string | undefined = process.env.REACT_APP_CLOUDINARY_NAME;

  // console.log(cloudinaryName);

  const [images, setImages] = useState<ImageListType>([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const [, drop] = useDrop({
    accept: 'image',
    drop: (item: any) => handleDrop(item),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
      canDrop: !!monitor.canDrop(),
    }),
    options: { dropEffect: 'copy' },
  });

  const handleDrop = async (item: any) => {
    try {
      const formData = new FormData();
      formData.append('file', item.file);
      formData.append('upload_preset', 'Presets_react');

      const cloudinaryResponse = await axios.post(
        `https://api.cloudinary.com/v1_1/duyhgdoqn/image/upload`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
        
      console.log(cloudinaryResponse.data)

      const imageUrl = cloudinaryResponse.data.secure_url;

      setImages((prevImages) => [...prevImages, { dataURL: imageUrl }]);
    } catch (error) {
      console.error('Error al cargar la imagen a Cloudinary:', error);
    }
  };

  const handleRemove = (index: number) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  const handleSubmit = async () => {
    try {
      // 1. Cargar cada imagen a Cloudinary y obtener las URLs
      const uploadPromises = images.map(async (image) => {
        // Verificar si image.file es definido antes de usarlo
        if (image.file) {
          const formData = new FormData();
          formData.append('file', image.file);
          formData.append('upload_preset', 'Presets_react');
      
          const cloudinaryResponse = await axios.post(
            `https://api.cloudinary.com/v1_1/duyhgdoqn/image/upload`,
            formData,
            {
              headers: {
                'Content-Type': 'multipart/form-data',
              },
            }
          );
      
          return cloudinaryResponse.data.secure_url;
        }
      
        // En este caso, el elemento no tiene una propiedad 'file', así que puedes manejarlo según tus necesidades
        return null;
      });
  
      // 2. Obtener todas las URLs de las imágenes
      const uploadedImageUrls = await Promise.all(uploadPromises);
  
      // 3. Crear el objeto formData para enviar al servidor
      const formData = new FormData();
      formData.append('title', title);
      formData.append('description', description);
  
      // 4. Agregar las URLs de las imágenes al formData
      uploadedImageUrls.forEach((imageUrl, index) => {
        formData.append(`images[${index}]`, imageUrl);
      });
  
      // 5. Realizar la solicitud POST al servidor
      const response = await axios.post('/exploservice/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
  
      // 6. Manejar la respuesta del servidor
      console.log('Respuesta del servidor:', response.data);
  
      // 7. Limpiar el formulario después de la carga exitosa
      setImages([]);
      setTitle('');
      setDescription('');
    } catch (error) {
      // Manejar los errores de carga
      console.error('Error al enviar formulario:', error);
    }
  };
  

  return (
    <div ref={drop}>
      <div className={styles.container}>
        <h1>AGREGAR SERVICIO</h1>
        <div className={styles.dataContainer}>
          <div className={styles.textContainer}>
            <div className={styles.inputBlock}>
              <label>Nombre:</label>
              <input
                type="text"
                value={title}
                placeholder='Ingrese nombre del servicio...'
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className={styles.inputBlock}>
              <label>Descripción:</label>
              <textarea
                value={description}
                placeholder='Ingrese descripción del servicio...'
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
          </div>
          <ImageUploading
            multiple
            value={images}
            onChange={(imageList) => setImages(imageList)}
            maxNumber={6}
          >
            {({ onImageUpload }) => (
              <div className={styles.mediaContainer}>
                <button onClick={onImageUpload} className={styles.imgButton}>
                  Seleccionar Imágenes
                </button>
                <div className={styles.imgContainer}>
                  {images.map((image, index) => (
                    <div className={styles.imgBlock} key={index}>
                      {/* Muestra la imagen seleccionada */}
                      <img
                        src={image.dataURL}
                        alt={`img-${index}`}
                      />
                      <button
                        onClick={() => handleRemove(index)}
                        className={styles.xButton}
                      >
                        X
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </ImageUploading>
        </div>
        <button onClick={handleSubmit} className={styles.imgButton}>
          Cargar Servicio
        </button>
      </div>
    </div>
  );
};

export default ESServicesFormComp;

















// import { useState } from 'react';
// import { useDrop } from 'react-dnd';
// // import { HTML5Backend } from 'react-dnd-html5-backend';
// import ImageUploading, { ImageListType } from 'react-images-uploading';
// import axios from 'axios';
// import styles from './_ESServicesFormComp.module.scss';

// const ESServicesFormComp = () => {
//   // Estado para almacenar la lista de imágenes seleccionadas
//   const [images, setImages] = useState<ImageListType>([]);

//   // Estados para el título y la descripción del formulario
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');

//   // Hook de react-dnd para habilitar la funcionalidad de arrastrar y soltar
//   const [, drop] = useDrop({
//     accept: 'image', // Acepta elementos arrastrables con el tipo 'image'
//     drop: (item: any) => handleDrop(item), // Llama a la función handleDrop cuando se suelta un elemento
//     collect: (monitor) => ({
//       isOver: !!monitor.isOver(),
//       canDrop: !!monitor.canDrop(),
//     }),
//     options: { dropEffect: 'copy' }, // Indica que se debe copiar el elemento
//   });

//   // Función para manejar el evento de soltar una imagen
//   const handleDrop = (item: any) => {
//       // Crea una copia del objeto de la imagen
//     const copiedImage = Object.assign({}, item);

//      // Agrega la imagen copiada a la lista de imágenes seleccionadas
//     setImages((prevImages) => [...prevImages, { file: copiedImage.file }])




//     // // Agrega la imagen a la lista de imágenes seleccionadas
//     // setImages((prevImages) => [...prevImages, { file: item.file }]);
//   };

//   // Función para manejar la eliminación de una imagen de la lista
//   const handleRemove = (index: number) => {
//     setImages((prevImages) => prevImages.filter((_, i) => i !== index));
//   };

//   // Función para manejar el envío del formulario
//   const handleSubmit = async () => {
//     try {
//       // Crea un objeto FormData para enviar datos al servidor
//       const formData = new FormData();

//       // Agrega el título y la descripción al FormData
//       formData.append('title', title);
//       formData.append('description', description);

//       // Itera sobre la lista de imágenes seleccionadas
//       images.forEach((image, index) => {
//         // Verifica que la propiedad file de la imagen no sea undefined
//         if (image.file) {
//           // Agrega la imagen al FormData, usando el índice para diferenciarlas
//           formData.append(`images[${index}]`, image.file);
//         }
//       });

//       // Realiza una solicitud POST al servidor con Axios
//       const response = await axios.post('/exploservice/upload', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data', // Especifica el tipo de contenido como multipart/form-data
//         },
//       });

//       // Maneja la respuesta del servidor (puede mostrar un mensaje de éxito, etc.)
//       console.log('Respuesta del servidor:', response.data);

//       // Limpia el formulario después de la carga exitosa
//       setImages([]);
//       setTitle('');
//       setDescription('');
//     } catch (error) {
//       // Maneja los errores de carga
//       console.error('Error al enviar formulario:', error);
//     }
//   };

//   // Renderiza el componente del formulario
//   return (
//     <div ref={drop}>
//       <div className={styles.container}>
//         <h1>AGREGAR SERVICIO</h1>
//         <div className={styles.dataContainer}>
//           <div className={styles.textContainer}>
//             <div className={styles.inputBlock}>
//               {/* Input para el título del formulario */}
//               <label>Nombre:</label>
//               <input
//                 type="text"
//                 value={title}
//                 placeholder='Ingrese nombre del servicio...'
//                 onChange={(e) => setTitle(e.target.value)}
//               />
//             </div>
//             <div className={styles.inputBlock}>
//               {/* Textarea para la descripción del formulario */}
//               <label>Descripción:</label>
//               <textarea
//                 value={description}
//                 placeholder='Ingrese descripción del servicio...'
//                 onChange={(e) => setDescription(e.target.value)}
//               />
//             </div>
//           </div>
//           {/* Componente ImageUploading para manejar la carga de imágenes */}
//           <ImageUploading
//             multiple
//             value={images}
//             onChange={(imageList) => setImages(imageList)}
//             maxNumber={6}
//             >
//             {({ onImageUpload }) => (
//               <div className={styles.mediaContainer}>
//                 {/* Botón para iniciar la carga de imágenes */}
//                 <button
//                   onClick={onImageUpload}
//                   className={styles.imgButton}
//                   >
//                   Seleccionar Imágenes
//                 </button>
//                 {/* Mapea sobre la lista de imágenes seleccionadas */}
//                 <div className={styles.imgContainer}>
//                   {images.map((image, index) => (
//                     <div className={styles.imgBlock} key= {index}
//                     >
//                       {/* Muestra la imagen seleccionada */}
//                       <img
//                         src={image.dataURL}
//                         alt={`img-${index}`}
//                         />
//                       {/* Botón para quitar la imagen de la lista */}
//                       <button
//                         onClick={() => handleRemove(index)}
//                         className={styles.xButton}
//                         >
//                         X
//                       </button>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}
//           </ImageUploading>
//         </div>
//         {/* Botón para enviar el formulario */}
//         <button
//           onClick={handleSubmit}
//           className={styles.imgButton}
//           >
//           Cargar Servicio
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ESServicesFormComp;
