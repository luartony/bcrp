from rest_framework import serializers
from apps.billete import models

class BilleteSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Billete
        fields = ('id', 'valor', 'tipo','serieinf', 'seriesup','url_imagen','url_imagen_reverso','gif')
