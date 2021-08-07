from django.urls import path

from api.views import getAds

urlpatterns = [
    path('list/', getAds)
]
