from django.shortcuts import render
from django.core import serializers
from django.http import JsonResponse, HttpResponse
from . import models
from .models import Entity


# Create your views here.

def index(request):
    entity = Entity.objects.all().first();
    return render(request, 'index.html', {"rock1":"test", "entity":entity.value_text})
    # return render(request, 'index.html', {"rock1":"test", "entity":"entity"})
