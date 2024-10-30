def calcular_edad():
   
    dia_nacimiento = int(input("Ingrese el dia de nacimiento: "))
    mes_nacimiento = int(input("Ingrese el mes de nacimiento: "))
    año_nacimiento = int(input("Ingrese el año de nacimiento: "))
   
    dia_actual = int(input("Ingrese el dia actual: ")) 
    mes_actual = int(input("Ingrese el mes actual: ")) 
    año_actual = int(input("Ingrese el año actual: ")) 
    
    edad_en_años = año_actual - año_nacimiento
    
    if mes_actual < mes_nacimiento or (mes_actual == mes_nacimiento and dia_actual < dia_nacimiento):
        edad_en_años -= 1
    else:
        print("ingrese de nuevo los datos...")
    
    print(f"La edad actual es ${edad_en_años} años")

calcular_edad()             

# OUTPUT
# Ingrese el dia de nacimiento: 21
# Ingrese el mes de nacimiento: 05
# Ingrese el año de nacimiento: 1993
# Ingrese el dia actual: 08
# Ingrese el mes actual: 05
# Ingrese el año actual: 2024
# La edad actual es $30 años