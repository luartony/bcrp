#!/usr/bin/python
# coding=utf-8
from PIL import Image
from PIL import ImageFilter
import operator

import csv

#Inicializamos el diccionario para obtener frecuencia de digitos
frecuenciaDigitos = {'0':0,'1':0,'2':0,'3':0,'4':0,'5':0,'6':0,'7':0,'8':0,'9':0}

with open('train.csv', 'rb') as f: 
	reader = csv.reader(f)
	list_data = list(reader)
	list_data0 = list_data[0]
	p = 0
	for fila in list_data:
		print fila[0]
		im = Image.open("plantilla.jpg")
		im1 = im.convert("L")
		pix = im1.load()
		m = 1
		if( p == 0 ):
			print "cabedceras"
		else:
			for i in range(im.size[0]):
				for j in range(im.size[1]):
						print fila[m]
						pix[j,i] = int(fila[m])
						m = m + 1	
		file = "img"+str(p)+".jpg"		
		im1 = im1.crop((0,0,28,28))
		im1.save("images/"+file) 
		p = p + 1
print "proceso terminado"