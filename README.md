# ElectroGame Service

Proyecto de desarrollo full-stack para la unidad 1, creado con un backend en Node.js + Express y un frontend en React + TypeScript + Vite.

## Descripción

ElectroGame Service es una pequeña API REST y una interfaz web que presenta información del proyecto y del estudiante. El backend expone datos en formato JSON y el frontend consume esa API para mostrar la información en pantalla.

## Tecnologías utilizadas

- Frontend: React, TypeScript, Vite
- Backend: Node.js, Express, TypeScript
- CORS para comunicación entre cliente y servidor

## Estructura del proyecto

```text
Gonzalez_Uriel_Unidad1/
├── backend/
│   ├── package.json
│   ├── tsconfig.json
│   └── src/
│       └── server.ts
├── frontend/
│   ├── package.json
│   ├── index.html
│   ├── vite.config.ts
│   └── src/
│       ├── App.tsx
│       ├── main.tsx
│       ├── App.css
│       └── index.css
├── README.md
└── .gitignore
```

## Backend

El backend se encuentra en `backend/src/server.ts` y expone lo siguiente:

- GET `/` → mensaje principal del servidor
- GET `/api/informacion` → devuelve un JSON con información del proyecto y del estudiante

### Ejecutar backend

```bash
cd Gonzalez_Uriel_Unidad1/backend
npm install
npm start
```

El servidor corre en:

- http://localhost:3000

## Frontend

La interfaz principal se encuentra en `frontend/src/App.tsx`. El frontend se ejecuta con Vite y se conecta con el backend.

### Ejecutar frontend

```bash
cd Gonzalez_Uriel_Unidad1/frontend
npm install
npm run dev -- --host 0.0.0.0
```

La aplicación queda disponible en:

- http://localhost:5173

## Endpoint principal

```json
{
  "componente": "API REST",
  "tecnologia": "Node.js, Express y TypeScript",
  "estudiante": "Uriel Antonio González Zurita",
  "matricula": "25308160"
}
```

## Estudiante

- Uriel Antonio González Zurita
- Matrícula: 25308160

## Instrucciones rápidas

1. Instalar dependencias del backend
2. Iniciar el backend
3. Instalar dependencias del frontend
4. Iniciar el frontend
5. Abrir la URL del frontend para consumir la API

## Nota

Este proyecto está diseñado como práctica full-stack con separación por capas: frontend para la interfaz de usuario y backend para la lógica y servicios REST.
