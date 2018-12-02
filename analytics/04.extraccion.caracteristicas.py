#!/usr/bin/env python
# -*- coding: utf-8 -*-
# Librerías a utilizar
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import matplotlib
import os, sys

from PIL import Image
from sklearn import preprocessing
from sklearn import neighbors

#directorio donde se encuentra las imagenes
path = "data/digitos.jpg/"
#obtine los archivos dentro del directorio data 
dirs = os.listdir( path )
#nombre variables
nombre_variables = ['label', 'caract0', 'caract1', 'caract2', 'caract3', 'caract4', 'caract5', 'caract6', 'caract7', 'caract8', 'caract9', 'caract10', 'caract11', 'caract12', 'caract13', 'caract14', 'caract15', 'caract16', 'caract17', 'caract18', 'caract19', 'caract20', 'caract21', 'caract22', 'caract23', 'caract24', 'caract25', 'caract26', 'caract27', 'caract28', 'caract29', 'caract30', 'caract31', 'caract32', 'caract33', 'caract34', 'caract35', 'caract36', 'caract37', 'caract38', 'caract39', 'caract40', 'caract41', 'caract42', 'caract43', 'caract44', 'caract45', 'caract46', 'caract47', 'caract48', 'caract49', 'caract50', 'caract51', 'caract52', 'caract53', 'caract54', 'caract55', 'caract56', 'caract57', 'caract58', 'caract59', 'caract60', 'caract61', 'caract62', 'caract63', 'caract64', 'caract65', 'caract66', 'caract67', 'caract68', 'caract69', 'caract70', 'caract71', 'caract72', 'caract73', 'caract74', 'caract75', 'caract76', 'caract77', 'caract78', 'caract79', 'caract80', 'caract81', 'caract82', 'caract83', 'caract84', 'caract85', 'caract86', 'caract87', 'caract88', 'caract89', 'caract90', 'caract91', 'caract92', 'caract93', 'caract94', 'caract95', 'caract96', 'caract97', 'caract98', 'caract99']
print "proceso iniciado"
df = pd.DataFrame(columns=nombre_variables)
for file in dirs:
  #construimos la ubicacion para cada imagen dentro del directorio
  image_file = 'data/digitos.jpg/'+file
  #abrimos la imagen
  image = Image.open(image_file)
  w, h = image.size
  pix = image.load()
  #print file[-5]
  caracts = [ int(file[-5]) ]
  for i in range( w ):
    for j in range( h ):
      caracts.append( pix[ i , j ] )
  df.loc[ len( df ) ] = caracts
df.to_csv( 'data/digitos_train_e.csv' , header=False , index=False )
print "proceso terminado"