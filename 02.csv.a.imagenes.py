#!/usr/bin/python
# coding=utf-8
from PIL import Image
from PIL import ImageFilter
import csv

print "proceso iniciado"
with open('data/digitos_train.csv', 'rb') as f: 
	#lectura archivo
	reader = csv.reader(f)
	list_data = list(reader)
	p = 0
	#asignado el valor de cada dpixel a una imagen plantilla
	for fila in list_data:
		im1 = Image.open("data/plantilla.jpg")
		pix = im1.load()
		m = 1
		if( p == 0 ):
			print "cabeceras"
		else:
			for i in range(im1.size[0]):
				for j in range(im1.size[1]):
						pix[j,i] = int(fila[m])
						m = m + 1
			#construyendo el nombre del archivo
			file = "image"+str(p)+".d"+fila[0]+".jpg"
			im1 = im1.resize((10, 10), Image.BILINEAR)
			#Guardando la imagen
			im1.save("data/digitos.jpg/"+file)
		p = p + 1
print "proceso terminado"