from django.urls import path 
from . import views 

urlpatterns = [
    path('functionspart1/', views.functionspart1, name="1"),
]