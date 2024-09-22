import requests
import time

def sendMessage(para, mensaje):
    url = 'http://localhost:3000/lead'
    data = {
        "message": mensaje,
        "phone": para
    }
    headers = {
        'Content-Type': 'application/json'
    }

    print(data)
    response = requests.post(url, json=data, headers=headers)
    time.sleep(10)  # ajusta como quieras
    return response

sendMessage('59160769694', 'Hola')