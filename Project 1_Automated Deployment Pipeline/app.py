from fastapi import FastAPI, HTTPException
import requests

app = FastAPI()

@app.get("/{id}")
def read_root(id: int):
    url = f"https://pokeapi.co/api/v2/pokemon/{id}"
    try:
        response = requests.get(url)
        response.raise_for_status()
        pokemon_data = response.json()
        return {
            "message": f"Hello World! You requested Pokémon with ID {id}",
            "pokemon": pokemon_data
        }
    except requests.exceptions.RequestException as e:
        raise HTTPException(status_code=404, detail=f"Pokemon with ID {id} not found or API error: {str(e)}")