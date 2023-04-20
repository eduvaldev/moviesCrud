<h1>MOVIES</h1>

<h1>Como Correr el proyecto</h1>
<ul>
<li>Crea una base de de datos en Postgresql llamada movies</li>
<li>Crea un archivo dentro de la carpeta "api" llamado env.js con el siguiente contenido:
<pre>
<code>
const DB_HOST='localhost:tuURLMongo
</code>
</pre>
</li>
<li>Posicionate en api y ejecuta npm install</li>
<li>En una terminal ejecuta npm start</li>
</ul>

<h2>USUARIO MODERADOR</h2>
<p>
    Para crear un usuario moderador, debes abrir tu postman y crear este usuario de la siguiente forma:. .
</p>
<h4>DATOS PARA CREAR MODERADOR</h4>

<ul>
    <li>RUTA: http://localhost:3001/users</li>
    <li>POST</li>
    <li>Objeto ejemplo admin
    <pre>
    <code>
{
    "name":"Moderador",
    "email":"moderadorn@gmail.com",
    "password":"123456",
    "role": "admin"
}
    </code>
    </pre>
    </li>
</ul>

<h1>RESUMEN</h1>

<p>
    Estas fueron todas las configuraciones que debes hacer para correr el proyecto.
</p>


<div>
    <h1> TECNOLOGIAS USADAS </h1>
        <h2>BACKEND</h2>
        <ul>
            <li>Nodejs</li>
            <li>Express JS</li>
            <li>Mongoose (MongoDB)</li>
            <li>Passport</li>
        </ul>
</div>



