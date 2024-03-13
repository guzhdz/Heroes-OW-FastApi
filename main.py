import requests
# Realizar una solicitud GET

from fastapi import FastAPI
from fastapi.responses import HTMLResponse, FileResponse
from fastapi.staticfiles import StaticFiles

app = FastAPI()

app.mount("/static", StaticFiles(directory = "./dist/fast-api-page"), name = "static")

@app.get("/", response_class = HTMLResponse)
def root():
    html_address = "./dist/fast-api-page/index.html"
    return FileResponse(html_address, status_code = 200)

@app.get("/heroes", response_class = HTMLResponse)
def root():
    html_address = "./dist/fast-api-page/index.html"
    return FileResponse(html_address, status_code = 200)

@app.get("/all-heroes")
def getHeroes():
    response = requests.get('https://overfast-api.tekrop.fr/heroes')
    data = response.text
    if(data):
        return(data)
    else:
        return(None)