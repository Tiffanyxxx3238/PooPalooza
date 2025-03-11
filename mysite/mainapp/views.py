from django.shortcuts import render

def map(request):
    return render(request, "mainapp/map.html")

def test(request):
    return render(request, "mainapp/test.html")

def test2(request):
    return render(request, "mainapp/test2.html")

def index(request):
    return render(request, "mainapp/index.html")

def article(request):
    return render(request, "mainapp/article.html")

def education(request):
    return render(request, "mainapp/education.html")

def newindex(request):
    return render(request, "mainapp/newindex.html")

def takephoto(request):
    return render(request, "mainapp/takephoto.html")

def takeupdate_photo(request):
    return render(request, "mainapp/takeupdate_photo.html")

def updatephoto(request):
    return render(request, "mainapp/updatephoto.html")

def calander(request):
    return render(request, "mainapp/calander.html")

def login(request):
    return render(request, "mainapp/login.html")

def register(request):
    return render(request, "mainapp/register.html")

def loading(request):
    return render(request, "mainapp/loading.html")

def service_details(request):
    return render(request, "mainapp/service_details.html")

def starter_page(request):
    return render(request, "mainapp/starter_page.html")
