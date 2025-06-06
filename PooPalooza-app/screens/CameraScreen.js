import React, { useEffect, useRef, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Camera} from 'expo-camera';   // v14 沒有 CameraType 也 OK

export default function CameraScreen({ navigation }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [photoUri, setPhotoUri] = useState(null);
  const cameraRef = useRef(null);

  /* 申請相機權限 */
  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  /* 拍照 */
  const takePhoto = async () => {
    if (cameraRef.current) {
      const { uri } = await cameraRef.current.takePictureAsync();
      setPhotoUri(uri);
    }
  };

  /* 導向結果 */
  const goToResult = () =>
    navigation.navigate('Result', { poopType: 'loose', score: 4, uri: photoUri });

  /* 重拍 */
  const retake = () => setPhotoUri(null);

  /* 權限畫面 */
  if (hasPermission === null) return <Centered text="請求權限中…" />;
  if (hasPermission === false) return <Centered text="無相機權限，請至設定開啟" />;

  /* 取得相容的後鏡頭常數 */
  const backType =
    CameraType?.back ?? Camera.Constants.Type.back;   // v15 取 CameraType.back，否則用舊常數

  return (
    <View style={styles.container}>
      {!photoUri ? (
        <>
          <Camera
            ref={cameraRef}
            style={styles.camera}
            type={Camera.Constants.Type.back}
            ratio="4:3"
          />
          <TouchableOpacity style={styles.button} onPress={takePhoto}>
            <Text style={styles.btnTxt}>拍照</Text>
          </TouchableOpacity>
        </>
      ) : (
        <>
          <Image source={{ uri: photoUri }} style={styles.preview} />
          <TouchableOpacity style={styles.button} onPress={goToResult}>
            <Text style={styles.btnTxt}>去看結果</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.gray]} onPress={retake}>
            <Text style={styles.btnTxt}>重拍</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
}

/* 共用置中文字元件 */
const Centered = ({ text }) => (
  <View style={styles.container}>
    <Text style={styles.status}>{text}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5EEDC', alignItems: 'center', justifyContent: 'center' },
  camera:    { width: '100%', height: '70%' },
  preview:   { width: '100%', height: '70%', resizeMode: 'contain' },
  button:    { backgroundColor: '#A67243', paddingVertical: 12, paddingHorizontal: 34,
               borderRadius: 10, marginTop: 22 },
  gray:      { backgroundColor: '#999' },
  btnTxt:    { color: '#fff', fontSize: 18, fontFamily: 'Fredoka', fontWeight: 'bold' },
  status:    { fontSize: 16, fontFamily: 'Fredoka', color: '#333' },
});
