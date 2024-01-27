from django.urls import path
from django.contrib import admin
from .views import *

urlpatterns = [
    path('users/', usersView.as_view()),
    path('user/post', usersView.as_view()),
    path('users/<int:pk>/', usersDetail.as_view()),
    path('users/get/<int:pk>/', usersDetail.as_view()),
    path('users/put/<int:pk>/', usersDetail.as_view()),
    path('users/delete/<int:pk>/', usersDetail.as_view()),



]