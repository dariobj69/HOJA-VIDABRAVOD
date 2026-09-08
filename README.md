# Dario Wladimir Bravo Jimbo | Hoja de Vida

Sitio web estático, responsive y preparado para GitHub Pages. Está construido exclusivamente con HTML5 semántico, CSS3 y JavaScript vanilla.

## Estructura

```text
/
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── script.js
├── assets/
│   ├── images/
│   └── icons/
│       └── favicon.svg
└── README.md
```

## Ejecutar en GitHub Codespaces

1. Abre el repositorio en GitHub Codespaces.
2. En la terminal ejecuta:

```bash
python3 -m http.server 8000
```

3. Abre el puerto `8000` cuando Codespaces lo solicite.

También puedes abrir `index.html` directamente en el navegador para una revisión rápida.

## Personalizar

- Reemplaza los textos entre corchetes en `index.html` con tu perfil, experiencia, estudios y habilidades.
- Añade tu fotografía como `assets/images/foto-profesional.jpg` y sustituye el bloque `.photo-placeholder` por una imagen si lo deseas.
- Coloca tu archivo PDF en `assets/Dario-Bravo-CV.pdf` para activar el botón de descarga.
- Los porcentajes de habilidades se configuran con la variable `--progress` en cada barra.
- El formulario valida los datos en el navegador, pero necesita un servicio externo o backend para enviar mensajes realmente.

## Publicar en GitHub Pages

1. Sube los cambios a la rama `main`.
2. En GitHub abre **Settings > Pages**.
3. En **Build and deployment**, selecciona `Deploy from a branch`.
4. Selecciona la rama `main` y la carpeta `/ (root)`.
5. Guarda y espera a que GitHub Pages publique el sitio.

El enlace de WhatsApp ya está configurado para el número `0986693396` usando el formato internacional de Ecuador.
