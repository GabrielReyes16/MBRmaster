from django.shortcuts import render
from rest_framework.response import Response
from rest_framework import status
from rest_framework import viewsets
from rest_framework.views import APIView
from rest_framework.decorators import api_view
from django.http import Http404
from django.http import JsonResponse

from .models import *
from .serializer import *
# Create your views here.

class bancoView(viewsets.ModelViewSet):
    serializer_class=BancoSerializer
    queryset=Banco.objects.all()


class usersView(APIView):
    def get(self, request):
        Users = users.objects.all()
        serializer = usersSerializer(Users, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = usersSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            print("error", serializer.errors)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        
class usersDetail(APIView):
    def get_object(self, pk):
        try:
            return users.objects.get(pk=pk)
        except users.DoesNotExist:
            raise Http404

    def get(self, request, pk):
        Users = self.get_object(pk)
        serializer = usersSerializer(Users)
        return Response(serializer.data)

    def put(self, request, pk):
        Users = self.get_object(pk)
        serializer = usersSerializer(Users, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            print("error", serializer.errors)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        Users = self.get_object(pk)
        Users.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    
@api_view(['POST'])
def nueva_unidad(request):
    if request.method == 'POST':
        serializer = UnidadSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'status': 'success'})
        else:
            return Response({'status': 'error', 'errors': serializer.errors}, status=400)

@api_view(['POST'])
def nueva_area(request):
    if request.method == 'POST':
        serializer = AreaSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'status': 'success'})
        else:
            return Response({'status': 'error', 'errors': serializer.errors}, status=400)

@api_view(['GET'])
def consultar(request):
    unidades = Unidad.objects.all()
    areas = Area.objects.all()
    
    unidad_serializer = UnidadSerializer(unidades, many=True)
    area_serializer = AreaSerializer(areas, many=True)

    data = {
        'unidades': unidad_serializer.data,
        'areas': area_serializer.data,
    }
    
    return Response(data)