from django.shortcuts import render
from django.http.response import JsonResponse
from django.views.decorators.csrf import csrf_exempt

from api.models import Ad


@csrf_exempt
def getAds(request):
    ads = Ad.objects.all()
    response = [ad.to_json() for ad in ads]
    return JsonResponse(response, safe=False)

