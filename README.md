# FastApi

## Objetivo: 
Crear una API simple en Python con FastAPI que exponga un endpoint para obtener una lista de nombres.

Pasos:
1. Importaciones:

from fastapi import FastAPI

2. Aplicación FastAPI:

app = FastAPI()

3. Endpoints:
@app.get("/nombres") 
async def obtener_nombres(): 
  return ["Juan", "María", "Pedro"]

4. Ejecutar la aplicación:
if __name__ == "__main__": 
  import uvicorn 
  uvicorn.run(app, port=8000)

Explicación:
La clase FastAPI de la librería fastapi proporciona la funcionalidad para crear la API.
El decorador @app.get("/nombres") define una ruta GET para el endpoint /nombres.
La función obtener_nombres es la función que se ejecuta cuando se llama al endpoint /nombres.
La función devuelve una lista de nombres como respuesta.
El comando uvicorn.run(app, port=8000) inicia la aplicación FastAPI en el puerto 8000.
Beneficios de usar FastAPI:
Fácil de usar: FastAPI es una librería fácil de usar para crear APIs en Python.
Rápido: FastAPI es una librería muy rápida y eficiente.
Flexible: FastAPI es una librería muy flexible que permite crear APIs con diferentes funcionalidades.
Documentación: FastAPI tiene una excelente documentación que facilita el aprendizaje y el uso de la librería.
Recursos adicionales:
Documentación de FastAPI: https://fastapi.tiangolo.com/
Tutoriales de FastAPI: https://fastapi.tiangolo.com/tutorial/
Ejemplos de APIs con FastAPI: [se quitó una URL no válida]
Nota: Este es un ejemplo sencillo para ilustrar el uso de FastAPI. Puedes adaptar este ejemplo a tus necesidades específicas. Subir el link de tu repositorio de github.

## Resultados
Link: https://fastapi-deploy-uonp.onrender.com/heroes

![image](https://github.com/guzhdz/FastApi/assets/89165084/39ede6f7-2f6b-46c8-95f2-0c8a160aea64)
