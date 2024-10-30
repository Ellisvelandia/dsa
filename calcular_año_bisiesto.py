def determinar_bisiesto():
    año = int(input("Ingresar un año: "))
    
    
    if año % 4 == 0:
        if año % 100 == 0 and año % 400 != 0:
            print(f"El año {año} no es un año bisiesto")
        else:
            print(f"El {año} es un año bisiesto")
    else:
         print(f"El {año} no es un año bisiesto")            
         
         
determinar_bisiesto()         

# OUTPUT         
# $ python calcular_año_bisiesto.py
# Ingresar un año: 2024
# El 2024 es un año bisiesto