#!/usr/bin/python
import os, sys
from PIL import Image

#directorio donde se encuentra las imagenes
path = "data/digitos.jpg/"
#obtine los archivos dentro del directorio data 
dirs = os.listdir( path )

print "proceso iniciado"
for file in dirs:
	#construimos  la ubicacion para cada imagen dentro del directorio
	image_file = 'data/digitos.jpg/'+file
	#abrimos la imagen
	im = Image.open(image_file)
	#Reducimos la imagen
	im = im.resize((10, 10), Image.BILINEAR)		
	#Guardando la imagen
	im.save(image_file)

print "proceso terminado"