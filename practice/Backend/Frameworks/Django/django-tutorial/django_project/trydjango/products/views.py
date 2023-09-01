from django.shortcuts import render

from .models import Product

def detail_view(request):
    obj = Product.objects.get(id=1)
    context = {
        'obj': obj,
    }
    return render(request, "product/detail.html", context)
