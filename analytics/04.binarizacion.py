#!/usr/bin/python
import os, sys
from PIL import Image

#directorio donde se encuentra las imagenes
path = "data/digitos.jpg/"
#obtine los archivos dentro del directorio data 
dirs = os.listdir( path )
#definicion del umbral
umbral = 90
print "proceso iniciado"
for file in dirs:
  #construimos sla ubicacion para cada imagen dentro del directorio
  image_file = 'data/digitos.jpg/'+file
  #abrimos la imagen
  image = Image.open(image_file)
  w, h = image.size
  pix = image.load()
  for i in range(w):
    for j in range(h):
      if pix[i, j] >= umbral: pix[i, j] = 255
      else: pix[i, j] = 0
  #guardamos la imagen
  image.save('data/digitos.jpg/'+file)
print "proceso terminado"