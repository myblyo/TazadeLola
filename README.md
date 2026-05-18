# ☕ Taza de Lola

Web para una cafetería construida con React, TypeScript y Vite. Incluye un menú interactivo con soporte offline mediante fallback a datos locales cuando el servidor no está disponible.

🌐 **Demo:** [tazadelola.vercel.app](https://tazadelola.vercel.app)

---

## 🛠️ Stack

- **Frontend:** React 19 + TypeScript + Vite
- **Estilos:** Tailwind CSS 4
- **Routing:** React Router DOM 7
- **Backend:** Express 5 + tsx
- **Linting:** ESLint + typescript-eslint

---

## 📁 Estructura del proyecto

```
TazadeLola/
├── public/
│   └── menu.json          # Menú local (fallback offline)
├── server/
│   └── app.ts             # API REST con Express
├── src/
│   ├── hooks/
│   │   └── useMenu.ts     # Hooks con fallback a datos locales
│   └── ...
├── docs/
├── index.html
├── vite.config.ts
└── package.json
```

---

## 🚀 Instalación y uso

### Requisitos

- Node.js 18+

### Instalar dependencias

```bash
npm install
```

### Desarrollo (solo frontend)

El frontend funciona sin necesidad de levantar el backend, ya que carga el menú desde `public/menu.json` automáticamente si la API no está disponible.

```bash
npm run dev
```

### Desarrollo (frontend + backend)

Si quieres usar la API local, abre dos terminales:

```bash
# Terminal 1 — backend
npm run server

# Terminal 2 — frontend
npm run dev
```

### Build para producción

```bash
npm run build
```

---

## 🔌 API

El servidor corre por defecto en `http://localhost:3000`.

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET | `/api/menu` | Devuelve todos los productos |
| GET | `/api/menu/categoria/:categoria` | Filtra por categoría |

**Categorías disponibles:** `bebida`, `bolleria`, `pan`, `salado`, `oferta`

---

## 🪝 Hooks

### `useMenu()`

Carga todos los productos del menú.

```tsx
const { data, loading, error, source } = useMenu()
// source: 'api' | 'local'
```

### `useMenuByCategoria(categoria)`

Filtra productos por categoría.

```tsx
const { data, loading, error, source } = useMenuByCategoria('bebida')
```

Ambos hooks intentan la API primero (timeout de 3 segundos) y caen automáticamente al `menu.json` local si el backend no está disponible. El campo `source` indica el origen de los datos.

---

## 📦 Scripts

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Inicia el frontend en modo desarrollo |
| `npm run build` | Compila el proyecto para producción |
| `npm run preview` | Previsualiza el build de producción |
| `npm run server` | Inicia el servidor Express |
| `npm run lint` | Ejecuta ESLint |

---

## 🗂️ Datos del menú

El archivo `public/menu.json` contiene el catálogo completo con 26 productos organizados por categoría. Sirve como fuente de datos cuando el backend no está activo.

```json
{
  "id": 1,
  "nombre": "Espresso",
  "descripcion": "Café solo concentrado, intenso y aromático",
  "precio": 1.5,
  "categoria": "bebida",
  "temperatura": "caliente",
  "disponible": true
}
```