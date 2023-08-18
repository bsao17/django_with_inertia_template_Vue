from inertia import render


def home(request):
    return render(request, 'main', props={
        'events': ["better chance number", "explanation concept"]
    })


def index(request):
    return render(request, 'index')
