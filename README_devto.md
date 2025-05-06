# 🧠 educar-cuentos-ia: Cuentos educativos con IA a partir de contenido de educ.ar

Imaginá que podés pegar dos links de artículos educativos y obtener un cuento didáctico personalizado, listo para compartir con tus estudiantes en PDF. Eso es lo que hace **educar-cuentos-ia**: una app fullstack con IA generativa que combina NestJS, Next.js y PostgreSQL.

## ✨ ¿Qué hace?

- Toma 2 URLs de artículos de [educ.ar](https://www.educ.ar)
- Usa inteligencia artificial (OpenAI, Ollama o modelos locales) para entenderlos
- Crea una narración coherente y educativa
- Permite exportarla en PDF y guardar el historial
- Roles de usuario: docente, alumno, invitado

## 🧠 IA integrada

Soporta:

- 🔌 OpenAI GPT-3.5 / GPT-4
- 🧱 Modelos locales con Ollama (LLaMA, Mistral, etc.)
- 🧪 Posibilidad de integrar Transformers.js

## ⚙️ Tecnologías

- **NestJS** + **Next.js**
- **PostgreSQL**
- **Docker/Podman**
- **pdfkit**

## 👀 Demo local

```bash
podman-compose up --build -d
```

Accedé en `http://localhost:3000` y empezá a crear historias educativas.

---

**GitHub**: [adolfourso/educar-cuentos-ia](https://github.com/adolfourso/educar-cuentos-ia)