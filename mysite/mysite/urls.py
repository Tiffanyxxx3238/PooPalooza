"""
URL configuration for mysite project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from mainapp import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path("map/", views.map, name="map"),
    path("test/", views.test, name="test"),
    path("test2/", views.test2, name="test2"),
    path("", views.index, name="index"),
    path("article/", views.article, name="article"),
    path("education/", views.education, name="education"),
    path("newindex/", views.newindex, name="newindex"),
    path("takephoto/", views.takephoto, name="takephoto"),
    path("takeupdate_photo/", views.takeupdate_photo, name="takeupdate_photo"),
    path("updatephoto/", views.updatephoto, name="updatephoto"),
    path("calander/", views.calander, name="calander"),
    path("login/", views.login, name="login"),
    path("register/", views.register, name="register"),
    path("loading/", views.loading, name="loading"),
    path("service_details/", views.service_details, name="service_details"),
    path("starter_page/", views.starter_page, name="starter_page")
]
