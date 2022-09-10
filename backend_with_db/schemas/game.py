from lib2to3.pytree import Base
from pydantic import BaseModel

class Game(BaseModel):
    id:int
    name:str
    description:str
    price:str
    rating:str
    img:str