# Córdoba Básquet - Backend

Backend de la aplicación **Córdoba Básquet**, desarrollado con Node.js, Express, Handlebars y MySQL.

---

## 🚀 Tecnologías utilizadas

- **Node.js** (v14 o superior)
- **Express** (framework web)
- **Handlebars** (motor de vistas)
- **MySQL** (base de datos relacional)
- **express-session** (gestión de sesiones)
- **dotenv** (variables de entorno)

---

## ⚙️ Instalación y configuración

1. **Clona el repositorio:**

   ```sh
   git clone <url-del-repo>
   cd back
   ```

2. **Instala las dependencias:**

   ```sh
   npm install
   ```

3. **Configura las variables de entorno:**

   Crea un archivo `.env` en la raíz del proyecto con el siguiente contenido:

   ```
   MYSQL_HOST=localhost
   MYSQL_DB_NAME=cordoba-basquet
   MYSQL_USER=root
   MYSQL_PASSWORD=
   PORT=3000
   SESSION_SECRET=tu_clave_secreta
   ```

   > Cambia los valores según tu entorno y agrega una clave secreta segura para las sesiones.

4. **Prepara la base de datos:**

   - Crea la base de datos `cordoba-basquet` en MySQL.
   - Crea las tablas necesarias: `usuarios`, `noticias`, `categorias`, etc.
   - Asegúrate de que el usuario y contraseña de MySQL coincidan con los del archivo `.env`.

---

## 🏁 Ejecución

Inicia el servidor con:

```sh
npm start
```

El servidor estará disponible en [http://localhost:3000](http://localhost:3000).

---

## 📁 Estructura del proyecto

- `app.js`: Configuración principal de la aplicación Express.
- `models/`: Modelos de acceso a datos (MySQL).
- `routes/`: Rutas de la aplicación (públicas y de administración).
- `views/`: Vistas Handlebars.
- `public/`: Archivos estáticos (CSS, imágenes).
- `bin/www`: Script de arranque del servidor.

---

## 🔐 Funcionalidades principales

- Login de administrador.
- Panel de gestión de noticias protegido por sesión.
- ABM de noticias (Alta, Baja, Modificación).
- Gestión de sesiones con `express-session`.
- Listado y filtrado de noticias por categorías.

---

## 📝 Notas

- El acceso a `/admin/noticias` está protegido y requiere autenticación.
- Personaliza las vistas en la carpeta `views/` según tus necesidades.
- Puedes agregar más modelos y rutas para ampliar la funcionalidad.
- El proyecto está pensado para fines académicos y puede ser extendido según los requerimientos.

---

## 👨‍💻 Créditos

Desarrollado por el equipo de Córdoba Básquet.

---

## 📄 Licencia

Proyecto de uso académico y sin fines comerciales.