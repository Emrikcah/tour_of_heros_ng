import { Injectable } from '@angular/core';
import { Hero } from './models/hero';
import { HEROES } from './data/mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  //method to return the mock heroes
  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }

  constructor(private messageService: MessageService) { }
}

//@Injectable marks the class as one that participates in the dependency injection system.
/**You must make the HeroService available to the dependency injection system before Angular can inject it into the HeroesComponent by registering a provider. A provider is something that can create or deliver a service. In this case, it instantiates the HeroService class to provide the service.

To make sure that the HeroService can provide this service, register it with the injector. The injector is the object that chooses and injects the provider where the application requires it. By default, ng generate service registers a provider with the root injector for your service by including provider metadata, that's providedIn: 'root' in the @Injectable() decorator. */

/**Observable HeroService
Observable is one of the key classes in the RxJS library.

In the tutorial on HTTP, you can see how Angular's HttpClient methods return RxJS Observable objects. This tutorial simulates getting data from the server with the RxJS of() function.

Open the HeroService file and import the Observable and of symbols from RxJS. */