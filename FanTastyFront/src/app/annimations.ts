import {animate, animateChild, group, query, style, transition, trigger} from "@angular/animations";

// Routable animations
export const slideAnimation =
  trigger('routeAnimation', [
    transition('* <=> *', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ]),
      query(':enter', [
        style({ left: '-100%' })
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('1000ms ease-out', style({  height: '100%', top: 0, left: 0, opacity: 1, 'background-color': 'black' }))
        ]),
        query(':enter', [
          animate('1000ms ease-out', style({ height: '100%', top: 0, left: 0, opacity: 1, 'background-color': 'black' }))
        ]),
        query('@*', animateChild(), {optional: true})
      ]),
    ])
  ]);


// Routable animations
export const slideAnimationUniverse =
  trigger('routeAnimation', [
    transition('* <=> *', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ]),
      query(':enter', [
        style({ left: '-100%' })
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('1000ms ease-out', style({  height: '100%', top: 0, left: 0, opacity: 1, 'background-color': 'black' }))
        ]),
        query(':enter', [
          animate('1000ms ease-out', style({ height: '100%', top: 0, left: 0, opacity: 1, 'background-color': 'black' }))
        ]),
        query('@*', animateChild(), {optional: true})
      ]),
    ])
  ]);

/*export const slideAnimation =
  trigger('routeAnimation', [
    transition('* <=> *', [
      style({position : 'relative'}),
      query(':enter, :leave',  [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          'background-color': 'black'
        }),
        query(':enter', [
          style({ left: '-100%'})
        ]),
        query(':leave', animateChild(), {optional : true}),
        group([
          query(':leave', [
            animate('3000ms ease-out', style({ left: '100%', 'background-color': 'black'}))
          ]),
          query(':enter', [
            animate('3000ms ease-out', style({left: '0%', 'background-color': 'black'}))
          ])
        ]),
        query('@*', animateChild(), {optional : true})
      ], )
    ])
  ]);*/


export const narutoAnimation =
  trigger('naruto', []);
