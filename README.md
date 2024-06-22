# Aplicación de Clima

Esta aplicación permite visualizar el clima y otros datos meteorológicos de cualquier ciudad ingresada en el campo de búsqueda. Para obtener esta información, se utiliza la API gratuita de Weather Stack.

## Características

- Visualización del clima y datos meteorológicos.
- Campo de búsqueda para consultar el clima de cualquier ciudad.
- Información predeterminada de la Ciudad de México.

## Información Predeterminada

Por defecto, la aplicación muestra la información meteorológica de la Ciudad de México. **Nota:** Esta información predeterminada esta desactualizada. Para obtener datos climáticos actualizados de la Ciudad de México, es necesario buscar la ciudad en el campo de búsqueda.

La razón para esta configuración es la limitación de 250 solicitudes por mes impuesta por la API. Aunque lo ideal sería usar el hook `useEffect()` para obtener datos en tiempo real de la Ciudad de México, he optado por esta configuración predeterminada para conservar las solicitudes disponibles.

## Tecnologías Utilizadas

- **Next.js**
- **TypeScript**
- **Tailwind CSS**
- **React.js**

## Despliegue

El despliegue de la aplicación se realizó en [Vercel](https://vercel.com) para simplificar el proceso de compartir la aplicación, evitando la necesidad de proporcionar instrucciones detalladas de despliegue.

[Link de la App:](https://yuhu-weather-app.vercel.app/)
