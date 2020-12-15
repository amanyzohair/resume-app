import { animate, keyframes, style, transition, trigger } from '@angular/animations';


export let slide = trigger('slide',[
    transition(':enter',[
        style({
            transform: 'translateX(-70%)',
            opacity: 0.5
        }), animate(1000)
    ]),
    transition(':leave',[
        style({
            transform: 'translateX(-100%)',
            opacity:0.5 
        }), animate(1000)
    ])
]);
export let smoothFadeIn =trigger ('smoothFadeIn',[
    transition('void =>*',[
        style({
            opacity:0,
        }),
    animate('1000ms',
    style({
        height:'*',
        opacity:1,
        
    })),
    animate('1000ms'), 
    ])
])
export let fadeIn = trigger('fadeIn',
[
    transition('void => *',
    [
        // initial state
        style({
            height:0,
            opacity:0,
            transform: 'translateX(100%)',
            'margin-bottom':0,
            'padding-top':0,
            'padding-bottom':0,
            'padding-left':0,
            'padding-right':0
        }),
        animate('800ms',
        style({
            height:'*',
            opacity:1,
            transform: 'translateX(0)',
            'margin-bottom':'*',
            'padding-top':'*',
            'padding-bottom':'*',
            'padding-left':'*',
            'padding-right':'*'
        })),
        animate('800ms'), 
    ]),
]);

export let fadeOut = trigger('fadeOut',
[
    transition('* => void',[
        animate('500ms',
        style({
            transform:'scale(1)',
            opacity:0,
        })),
        animate('200ms',
        style({
            'margin-bottom':0,
            'padding-top':0,
            'padding-bottom':0,
            'padding-left':0,
            'padding-right':0
        }))
    ]),
]);

export let sideBar = trigger('sideBar',
[
    transition('void => *',
    [
        // initial state
        style({
            opacity:0,
            transform: 'translateX(-100%)',
            'margin-bottom':0,
            'padding-top':0,
            'padding-bottom':0,
            'padding-left':0,
            'padding-right':0
        }),
        animate('800ms',
        style({
            opacity:1,
            transform: 'translateX(0)',
            'margin-bottom':'*',
            'padding-top':'*',
            'padding-bottom':'*',
            'padding-left':'*',
            'padding-right':'*'
        })),
        animate('800ms'), 
    ]),
    transition('* => void',[
        animate('500ms',
        style({
            transform:'scale(-100%)',
            opacity:0,
        })),
        animate('200ms',
        style({
            'margin-bottom':0,
            'padding-top':0,
            'padding-bottom':0,
            'padding-left':0,
            'padding-right':0
        }))
    ])
]);

export let progress1 = trigger('progress1',[
    transition(':enter',[animate('2s ease-out', keyframes([
        style({
            offset: 0,
            width: '0%'
        }),
        style({
            offset: 1,
            width: '90%'
        }),
    ]))])
])
export let progress2= trigger('progress2',[
    transition(':enter',[animate('3s ease-out', keyframes([
        style({
            offset: 0,
            width: '0%'
        }),
        style({
            offset: 1,
            width: '80%'
        }),
    ]))])
]);
export let progress3= trigger('progress3',[
    transition(':enter',[animate('2s ease-out', keyframes([
        style({
            offset: 0,
            width: '0%'
        }),
        style({
            offset: 1,
            width: '87%'
        }),
    ]))])
]);
export let progress4= trigger('progress4',[
    transition(':enter',[animate('2s ease-out', keyframes([
        style({
            offset: 0,
            width: '0%'
        }),
        style({
            offset: 1,
            width: '70%'
        }),
    ]))])
])