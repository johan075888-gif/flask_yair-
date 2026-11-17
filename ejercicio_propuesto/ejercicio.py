import math
from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


@app.route("/")
def HolaFlask():
    return "<h1>¡Hola Flask!</h1> <hr>"


# 1.) Haga un programa que calcule la siguiente ecuación: Y = X * Z + Z + X
@app.route("/ecuacion")
@app.route("/ecuacion/<float:x>/<float:z>")
def ecuacion(x=0, z=0):
    y = x * z + z + x
    return f"<h1>El resultado es: {y}</h1> <hr>"


# 2.) Realizar programa que, capturado un número, realice la tabla de multiplicar de ese número hasta el 10.
@app.route("/tabla")
@app.route("/tabla/<int:numero>")
def tabla(numero=0):
    salida = f"<h1>Tabla del {numero}</h1>"
    for i in range(1, 11):
        salida += f"<p>{numero} x {i} = {numero * i}</p>"
    return salida + "<hr>"


# 3.) Realizar el programa que calcule las áreas de un círculo, cuadrado y triángulo.
@app.route("/areas")
@app.route("/areas/<int:figura>/<float:v1>")
@app.route("/areas/<int:figura>/<float:v1>/<float:v2>")
def areas(figura=0, v1=0, v2=0):
    if figura == 1:
        area = math.pi * (v1**2)
        return f"<h1>El área del círculo es: {area:.2f}</h1> <hr>"
    elif figura == 2:
        area = v1 * v1
        return f"<h1>El área del cuadrado es: {area:.2f}</h1> <hr>"
    elif figura == 3:
        area = (v1 * v2) / 2
        return f"<h1>El área del triángulo es: {area:.2f}</h1> <hr>"
    else:
        return "<h1>Opción no válida</h1> <hr>"


if __name__ == "__main__":
    app.run(debug=True)