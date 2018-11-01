from django.shortcuts import render
from django.http import HttpResponse

def index(request):
    context{
        
    }
    return render(request, "index.html", context)

def detalhe_curso(request):
    return render(request, "detalhe_curso.html")

def disciplina(request):
    return render(request, "disciplina.html")

def listadecurso(request):
    return render(request, "listadecurso.html")

def login(request):
    return render(request, "login.html")

def noticia(request):
    return render(request, "noticia.html")
# Create your views here.
