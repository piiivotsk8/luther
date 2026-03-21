## Guía para correr el proyecto en Web

1. Asegúrate de haber instalado las dependencias del proyecto (si no lo has hecho aún):

   ```bash
   npm install
   ```

2. Inicia el servidor de desarrollo específicamente para web usando el siguiente comando:

   ```bash
   npm run web
   ```

   _(También puedes usar `npx expo start --web` o ejecutar `npm start` y presionar la tecla `w` en la consola)._

3. El proyecto se abrirá automáticamente en tu navegador predeterminado (usualmente en la dirección `http://localhost:8081`).
4. Cualquier cambio que guardes en los archivos del código se reflejará instantáneamente en tu navegador.

## Guía para correr el proyecto en Expo Go

1. Descarga la aplicación **Expo Go** en tu dispositivo móvil desde la App Store (iOS) o Google Play Store (Android).

2. Asegúrate de que tu computadora y tu teléfono estén conectados a la misma red Wi-Fi.

3. En la terminal de tu proyecto, inicia el servidor de desarrollo:

   ```bash
   npm start
   ```

   _(O alternativamente, `npx expo start`)._

4. Se mostrará un código QR en tu terminal.
   - **En Android**: Abre la aplicación Expo Go y selecciona "Scan QR code" para escanear el código.
   - **En iOS**: Abre la aplicación de Cámara predeterminada de tu iPhone, escanea el código QR y toca la notificación que aparece para abrir Expo Go.

5. ¡Listo! La aplicación se cargará en tu dispositivo y los cambios que hagas en el código se actualizarán en tiempo real.
