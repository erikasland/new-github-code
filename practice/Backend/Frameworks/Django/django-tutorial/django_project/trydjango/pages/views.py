from django.http import HttpResponse
from django.shortcuts import render

def home_view(request, *args, **kwargs):
    context = {
        "stuff" : [1,2,3,4]
    }
    return render(request, "home.html", context)

def contact_view(request, *args, **kwargs):
    return render(request, "contact.html", {})

def about_view(request, *args, **kwargs):
    return render(request, "about.html", {})

def social_view(request, *args, **kwargs):
    return render(request, "social.html", {})
