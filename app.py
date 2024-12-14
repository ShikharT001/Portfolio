
from flask import Flask, render_template, request,Blueprint
from views import url
app = Flask(__name__)



app.register_blueprint(url)


if __name__=="__main__":
    app.run(debug=True)