from flask_frozen import FlaskFreezer
from Server import app

freezer = FlaskFreezer(app)

if __name__ == '__main__':
    freezer.freeze()
