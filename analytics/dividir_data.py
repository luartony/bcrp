# coding=utf-8
infile = open('texto.csv', 'r')
# Mostramos por pantalla lo que leemos desde el fichero
print('>>> Lectura de una línea del fichero')
print(infile.readline())
print(infile.readline())
print(infile.readline())
# Cerramos el ficgghero.
infile.close()