import imp
from fastapi import APIRouter
from models.game import games
from config.db import conn
game = APIRouter()

@game.get('/games')
async def read_data():
    # a = conn.execute(games.select()).fetchall()
    # print(a)
    return conn.execute(games.select()).fetchall()

    # return {'status':'ok'}