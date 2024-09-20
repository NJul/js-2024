import React, { useState, useEffect } from 'react';
import { View, Image } from 'react-native';
import LoadingIndicator from './LoadingIndicator'; // Імпорт компонента індикатора завантаження

// Функція для отримання реальних даних (зображення)
const fetchData = async () => {
  try {
    const response = await fetch('https://picsum.photos/300/200');
    return response.url; // Повертаємо URL зображення
  } catch (error) {
    throw new Error('Не вдалося завантажити зображення');
  }
};

const ImageFetcher = () => {
  const [imageUrl, setImageUrl] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Виклик асинхронної функції для завантаження даних
    fetchData()
      .then(result => {
        setImageUrl(result); // Встановлюємо URL зображення в стан
        setLoading(false); // Зупиняємо індикатор завантаження
      })
      .catch(error => {
        console.error('Помилка завантаження даних:', error);
        setLoading(false);
      });
  }, []); // Порожній масив залежностей, щоб ефект викликався тільки один раз

  // Відображення індикатора завантаження або зображення
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {loading
        ? <LoadingIndicator />
        : <Image
            source={{ uri: imageUrl }}
            style={{ width: 300, height: 200 }}
          />}
    </View>
  );
};

export default ImageFetcher;
