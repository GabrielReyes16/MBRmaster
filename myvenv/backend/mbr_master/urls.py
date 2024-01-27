from django.urls import path
from django.contrib import admin
from .views import *

urlpatterns = [
    # Rutas para usuarios
    path('users/', usersView.as_view()),
    path('users/<int:pk>/', usersDetail.as_view()),
    path('users/post/', usersView.as_view()),
    path('users/get/<int:pk>/', usersDetail.as_view()),
    path('users/put/<int:pk>/', usersDetail.as_view()),
    path('users/delete/<int:pk>/', usersDetail.as_view()),

    # Rutas para la API
    path('api/nueva_unidad/', nueva_unidad, name='nueva_unidad_api'),
    path('api/nueva_area/', nueva_area, name='nueva_area_api'),
    path('api/consultar/', consultar, name='consultar_api'),
]