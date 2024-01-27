from rest_framework import serializers
from .models import users, Unidad, Area

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