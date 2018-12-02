from django.shortcuts import render

# Create your views here.

from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.renderers import JSONRenderer
from rest_framework.parsers import JSONParser
from apps.billete import models,serializers
from rest_framework import viewsets



class BilleteViewSet(viewsets.ModelViewSet):
    queryset = models.Billete.objects.all()
    serializer_class = serializers.BilleteSerializer