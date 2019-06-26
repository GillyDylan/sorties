from django.shortcuts import render
from django.http import  HttpResponse
from . import forms
# Create your views here.


def workspace(request):
    participantForm = forms.ParticipantForm().__str__()
    return HttpResponse(participantForm)
