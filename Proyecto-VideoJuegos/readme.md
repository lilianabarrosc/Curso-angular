# Proyecto basado en Catalogo de Video Juegos

Proyecto en node express que provee los servicios simulando un catalogo de video juegos. Los video juegos se pueden agrupar por clasificacion, genero, desarrollador o distribuidor. Además a cada video juego mostrado en el catalogo, es posible agregar commentarios de los usuarios que visitan el catalogo.

El modelo de base de datos esta realizado en Moon Modeler, el cual se encuentra dentro del repositorio en el directorio Curso-angular\Model-videoJuegos.

### BD disponible en:
Base de datos no relacional, modelado en mongo y utilizada en el node con mongosee. Dentro de los archivos disponibles del repositorio se adjunta un archivo llamado modeloCatalogoVideoJuevos.dmm el cual puede se abierto por la aplicación Moon Modeler y visto de forma gráfica.

BD Access: mongodb+srv://user:EedUYFzY36FqBrkC@clusterliliana.zvzpi.mongodb.net/catalogoVideoJuegos 

### Servicios disponibles:
Documenacoión disponible en:
https://documenter.getpostman.com/view/16313346/TzeahQnQ

Restricciones por roles:

1. Clasificacion
   - list clasificaciones --> free
   - get clasificacion --> necesita token de usuario
   - guardar clasificacion --> necesita token de usuario admin
   - eliminar clasificacion --> necesita token de usuario admin 
   - actualizar clasificacion --> necesita token de usuario admin

2. Comentario
   - list comentario por video juego --> necesita token de usuario
   - guardar comentario --> necesita token de usuario
   - eliminar comentario --> necesita token de usuario 
   - actualizar comentario --> necesita token de usuario

3. Desarrollador
   - list desarrolladores --> free
   - get desarrollador --> necesita token de usuario admin
   - guardar desarrollador --> necesita token de usuario admin
   - eliminar desarrollador --> necesita token de usuario admin 
   - actualizar desarrollador --> necesita token de usuario admin

4. Favoritos
   - list favoritos --> necesita token de usuario
   - agregar desarrollador --> necesita token de usuario
   - eliminar desarrollador --> necesita token de usuario

5. Genero
   - list generos --> free
   - get genero --> necesita token de usuario admin
   - guardar genero --> necesita token de usuario admin
   - eliminar genero --> necesita token de usuario admin 
   - actualizar genero --> necesita token de usuario admin

6. Login-token
   - login --> necesita usuario y contraseña de usuario registrado
   - registrarse --> free
   - refresh token --> necesita token de usuario

7. Usuarios
   - list usuarios --> necesita token de usuario admin
   - get usuario --> necesita token de usuario admin
   - guardar usuario --> necesita token de usuario admin
   - eliminar usuario --> necesita token de usuario admin 
   - actualizar usuario --> necesita token de usuario admin

8. Video Juegos
   - list videoJuegos --> free
   - get videoJuego --> free
   - get videoJuegos x genero --> free
   - get videoJuegos x clasificacion --> free
   - get videoJuegos x distrubuidor --> free
   - get videoJuegos x desarrollador --> free
   - guardar videoJuego --> necesita token de usuario admin
   - eliminar videoJuego --> necesita token de usuario admin 
   - actualizar videoJuego --> necesita token de usuario admin


