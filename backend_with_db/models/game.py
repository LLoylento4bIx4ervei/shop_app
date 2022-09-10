from sqlalchemy.sql.sqltypes import Integer,String
from sqlalchemy import Table,Column
from config.db import meta
games = Table(
    'games',meta,
    Column('ID',String(50)),
    Column('Name',String(50)),
    Column('Description',String(255)),
    Column('Price',String(50)),
    Column('Rating',String(50)),
    Column('Image',String(255))
)