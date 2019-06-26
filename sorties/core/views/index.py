from django.shortcuts import render

# Index Page

def index(request):
    return render(request, 'core/index.html')