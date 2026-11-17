## importamos flask 
from flask import Flask 
app = Flask(__name__)

# definimos la ruta principal 
@app.route("/")
def HolaFlask():
    return "<h1>¡Hola Flask!</h1> <hr>"

## definimos una segunda ruta 
@app.route("/ruta2")
def ruta2():
    return "<strong> Estamos en la segunda ruta </strong> <hr>"

## definimos una tercera ruta 
@app.route("/ruta3")
def ruta3(): 
    return "<em> Estamos en la tercera ruta </em> <hr>"


if __name__=='__main__': 
    ## el valor true indica que la app se deja en modo debug 
    app.run(debug=True)
    
