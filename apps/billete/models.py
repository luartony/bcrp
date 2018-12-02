from django.db import models
from PIL import Image

# Create your models here.

class Billete(models.Model):
	valor = models.IntegerField()
	tipo = models.IntegerField()
	serieinf = models.CharField(max_length=9)
	seriesup = models.CharField(max_length=9)
	url_imagen = models.ImageField(default = "default.png")
	url_imagen_reverso = models.ImageField(default = "default.png")
	gif= models.ImageField(default = "default.gif")




