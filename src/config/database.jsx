import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { v4 } from 'uuid'

const firebaseConfig = {
  apiKey: 'AIzaSyCwfu2ZtC9y2CiE5ugLK5t6jmxgrOHUqBc',
  authDomain: 'web-final-36924.firebaseapp.com',
  projectId: 'web-final-36924',
  storageBucket: 'web-final-36924.appspot.com',
  messagingSenderId: '541693206212',
  appId: '1:541693206212:web:77a6e6bf497808af893391',
}

const app = initializeApp(firebaseConfig)
export const database = getFirestore(app)
export const storage = getStorage(app)

export const subirImagen = async (file) => {
  const uploadImg = ref(storage, v4())
  await uploadBytes(uploadImg, file)
  const urlImg = await getDownloadURL(uploadImg)
  return urlImg
}
