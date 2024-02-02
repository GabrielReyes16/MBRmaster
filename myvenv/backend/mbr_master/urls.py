from django.urls import path
from django.contrib import admin
from .views import *
from . import views
from rest_framework_simplejwt.views import TokenRefreshView

urlpatterns = [
    #Autenticación
    path('/token', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('/register/', views.RegisterView.as_view(), name='auth_register'),
    # path('test/', views.testEndPoint, name='test'),
    # path('get_routes', views.getRoutes),

    #Users
    path('users/', usersView.as_view()),
    path('user/post', usersView.as_view()),
    path('users/<int:pk>/', usersDetail.as_view()),
    path('users/get/<int:pk>/', usersDetail.as_view()),
    path('users/put/<int:pk>/', usersDetail.as_view()),
    path('users/delete/<int:pk>/', usersDetail.as_view()),

    # Rutas para la API
    path('api/nueva_unidad/', nueva_unidad, name='nueva_unidad_api'),
    path('api/nueva_area/', nueva_area, name='nueva_area_api'),
    path('api/consultar/', consultar, name='consultar_api'),

]