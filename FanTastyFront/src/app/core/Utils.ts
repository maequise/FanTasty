import {Renderer2} from "@angular/core";
import {Router} from "@angular/router";

export class Utils {
  private static href: string = '';
  private static hrefComponent : string = '';

  static loadStyle(render : Renderer2, router: Router) : void {
    let styleLoaded: HTMLCollectionOf<HTMLLinkElement> = document.getElementsByTagName('link');

    for (let i = 0 ; i < styleLoaded.length ; i++) {
      console.log('looping again !')
      let value: String = styleLoaded[i].href;

      if (value.match(/(.*)\/assets\/css\/([a-z]*)(\.univers\.component\.css)/)
        || value.match(/(.*)\/assets\/css\/([a-z]*)(\.component\.css)/)) {
        //console.log('in universe condition')
        render.removeChild(document.head, styleLoaded[i]);

        i--; //decrement as the collection is actually live
      }
    }



    let tag = render.createElement('link');
    this.getStyleUnivers(router);

    render.setProperty(tag, 'rel', 'stylesheet');
    render.setProperty(tag, 'href', this.href);

    render.appendChild(document.head, tag);
    //this.render.insertBefore(document.head, tag, document.head.getElementsByTagName('link')[0]);

    tag = render.createElement('link');

    render.setProperty(tag, 'rel', 'stylesheet');
    render.setProperty(tag, 'href', this.hrefComponent);

    render.appendChild(document.head, tag);
    //this.render.insertBefore(document.head, tag, document.head.getElementsByTagName('link')[0]);

  }

  private static getStyleUnivers(router : Router): string {
    let urlUniverse: String = router.url;

    if (urlUniverse.startsWith('/naruto')) {
      this.href = '/assets/css/naruto.univers.component.css';
      this.hrefComponent = '/assets/css/naruto.component.css';
    } else if (urlUniverse.startsWith('/disney')) {
      this.href = '/assets/css/disney.univers.component.css';
      this.hrefComponent = '/assets/css/disney.component.css';
    } else if (urlUniverse.startsWith('/harrypotter')) {
      this.href = '/assets/css/harrypotter.univers.component.css';
      this.hrefComponent = '/assets/css/harrypotter.component.css';
    } else if (urlUniverse.startsWith('/marvel')) {
      this.href = '/assets/css/marvel.univers.component.css';
      this.hrefComponent = '/assets/css/marvel.component.css';
    }

    return this.href;
  }
}
