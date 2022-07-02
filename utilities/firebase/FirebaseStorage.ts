import firebaseApp from './Firebase';
import {
  getStorage,
  ref,
  uploadBytes,
  uploadString,
  getDownloadURL,
} from 'firebase/storage';
import { v4 as uuidv4 } from 'uuid';

const storage = getStorage(firebaseApp);
const storageRef = ref(storage);

export const uploadFileToFirstore = async (imageFile: Blob) => {
  const filename = uuidv4();
  const imageRef = ref(storageRef, `images/${filename}`);
  return await uploadBytes(imageRef, imageFile)
    .then(async (snapshot) => {
      console.log('[uploadFile] snapshot', snapshot.ref.fullPath);
      const downloadUrl = await getDownloadURL(snapshot.ref);
      return {
        success: 1,
        file: {
          url: downloadUrl,
          filename: filename,
        },
      };
    })
    .catch((err) => {
      console.log('Upload file failed.  Error message: ', err);
      return {
        success: 0,
      };
    });
};

export const uploadFileUrlToFirestore = async (fileUrl: string) => {
  const filename = uuidv4();

  const imageRef = ref(storageRef, filename);

  return await uploadString(imageRef, fileUrl)
    .then(async (snapshot) => {
      console.log(
        '[uploadFileUrlToFirestore] returned ref:',
        snapshot.ref.fullPath
      );
      const downloadUrl = await getDownloadURL(snapshot.ref);
      return {
        success: 1,
        file: {
          url: downloadUrl,
          filename: filename,
        },
      };
    })
    .catch((err) => {
      return {
        success: 0,
      };
    });
};
