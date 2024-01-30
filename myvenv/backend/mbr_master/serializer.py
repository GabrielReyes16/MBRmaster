from rest_framework import serializers
from .models import *


class usersSerializer(serializers.ModelSerializer):
    class Meta:
        model = users
        fields = '__all__'

class UnidadSerializer(serializers.ModelSerializer):
    class Meta:
        model = Unidad
        fields = ['id', 'nombre']

class AreaSerializer(serializers.ModelSerializer):
    unidad_nombre = serializers.ReadOnlyField(source='unidad.nombre')

    class Meta:
        model = Area
        fields = ['id', 'nombre', 'unidad', 'unidad_nombre']

class BancoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Banco
        fields = '__all__'