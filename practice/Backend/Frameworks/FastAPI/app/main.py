from typing import Union
from fastapi import FastAPI

app = FastAPI()

fake_items_db = [{"item_name": "Foo"},{"item_name": "Bar"}, {"item_name": "Baz"}]

@app.get("/items/")
async def read_item(item_id: str, q: Union[str, None] = None):
    if q:
        return {"item_id": item_id, "q": q}
    return {"item_id": item_id}