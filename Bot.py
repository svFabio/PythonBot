import requests
import time


def sendMessage(para, mensaje):
    url = 'http: //localhost:3001/lead'
    data = {
        "message": mensaje,
        "phone": para
    }
    headers = {
        'Content-Type': 'application/json'
    }
