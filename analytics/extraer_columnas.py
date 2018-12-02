# coding=utf-8

import csv
a = 0
columnas_export = []
archive_export = []
index_columnas = []
columnas = open("columnas.txt", "r")
for linea in columnas.readlines():
    columnas_export.append(linea.replace("\n",""))

with open('columnas_export.csv', 'wb') as f:  # el fllag 'b' es requerido en ciertas plataformas
	writer = csv.writer(f)
	with open('train.csv', 'rb') as f:  # el flag 'b' es requerido en ciertas plataformas
		reader = csv.reader(f)
		list_data = list(reader)
		list_data0 = list_data[0]
		for columna in columnas_export:
			index_columnas.append(list_data0.index(columna))
		print index_columnas	
		for fila in list_data:
			new_fila = []
			for col in index_columnas:				
				new_fila.append(fila[col])
			writer.writerows([new_fila])
			a += 1
			print a
print "proceso terminado"