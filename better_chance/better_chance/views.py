from inertia import render


def index(request):
    return render(request, 'Events/index', props={
        'events': ["better chance number", "explanation concept"]
    })
