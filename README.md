# 🧠 educar-cuentos-ia

Aplicación que genera cuentos con inteligencia artificial a partir del contenido de dos notas del sitio [educ.ar](https://www.educ.ar/recursos-especiales).

Permite a docentes, alumnos o invitados generar historias educativas personalizadas, exportarlas a PDF y mantener un historial de generación.

---

## 🚀 Tecnologías utilizadas

- **NestJS** – API backend modular y escalable (TypeScript)
- **Next.js** – Interfaz web SSR con React
- **PostgreSQL** – Base de datos relacional
- **Podman** – Contenedores sin daemon
- **pdfkit** – Generación de archivos PDF
- **TypeScript** – Código fuertemente tipado

---

## 📁 Estructura del proyecto

```
educar-cuentos-ia/
├── backend/         # NestJS (servicio IA + generación de PDF)
├── frontend/        # Next.js (interfaz de usuario)
├── pdfs/            # Cuentos generados como PDF
├── .gitignore
├── package.json
└── README.md
```

---

## ⚙️ Cómo ejecutar el proyecto

### ✅ Opción 1: localmente

#### Backend (NestJS)
```bash
cd backend
npm install
npm run start:dev
```

Esto levanta la API en `http://localhost:3001`.

#### Frontend (Next.js)
```bash
cd frontend
npm install
npm run dev
```

Esto levanta la web en `http://localhost:3000`.

---

### ✅ Opción 2: con Podman

Si tenés `podman` y `podman-compose` instalados, podés levantar todo junto:

```bash
podman-compose up --build -d
```

(Recordá tener los puertos 3000 y 3001 disponibles)

---

### 🐳 Opción alternativa: Docker (opcional)

```bash
docker compose up --build -d
```

Podés crear un `docker-compose.yml` si necesitás que lo armemos.

---

## 🧪 Cómo usar la app

1. Ingresá a `http://localhost:3000`
2. Pegá dos URLs válidas de notas de educ.ar
3. El sistema usa IA para generar un cuento educativo combinando ambas
4. Podés exportarlo a PDF y acceder al historial

---

## 📝 Exportación a PDF

- Los cuentos generados se guardan en `/pdfs/`
- El nombre del archivo es: `cuento-<id>.pdf`

---

## 👥 Roles de usuario

- **Docente**: puede generar, ver historial completo y exportar cuentos
- **Alumno**: genera y ve solo su historial
- **Invitado**: puede generar un cuento sin historial ni exportación

---

## 🙌 Contribuciones

¡Se aceptan sugerencias, issues y pull requests!  
Este proyecto busca potenciar el aprendizaje creativo con IA libre y abierta.

---

## 📄 Licencia

MIT © [adolfourso](https://github.com/adolfourso)