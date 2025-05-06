# 🧠 educar-cuentos-ia

Generador de cuentos educativos con inteligencia artificial, construido con NestJS + Next.js + PostgreSQL. Combina dos artículos de [educ.ar](https://www.educ.ar/recursos-especiales) para crear historias narrativas adaptadas a docentes, alumnos o invitados.

## 🌐 Demo

Podés ver una demo local ejecutando:

```bash
podman-compose up --build -d
# o
docker compose up --build -d
```

Visitalo en: [http://localhost:3000](http://localhost:3000)

---

## ✨ Características principales

- 🔍 Lectura de artículos desde educ.ar
- 🧠 Generación de historias vía IA (OpenAI / Ollama / Hugging Face)
- 📤 Exportación de cuentos en PDF (`pdfkit`)
- 👥 Roles diferenciados (docente, alumno, invitado)
- 🧪 Generación local o remota con control de proveedor

---

## 🛠 Tecnologías

- NestJS + Next.js (TypeScript)
- PostgreSQL
- Podman/Docker
- IA vía LLMs (OpenAI / Local)

---

## 📦 Estructura

```
educar-cuentos-ia/
├── backend/         # NestJS API + generación IA
├── frontend/        # Interfaz Next.js
├── pdfs/            # Cuentos PDF generados
```

---

## ⚙️ API de generación (ejemplo)

```bash
curl -X POST http://localhost:3000/stories/generate \
  -H "Content-Type: application/json" \
  -d '{"url1":"https://www.educ.ar/recursos/152773/...", "url2":"https://www.educ.ar/recursos/115888/..."}'
```

---

## 📄 Licencia

MIT © [adolfourso](https://github.com/adolfourso)