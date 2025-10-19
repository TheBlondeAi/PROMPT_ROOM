export class TrendChart {
  el: SVGElement; opts: any;
  constructor(el: SVGElement, opts: any = {}) { this.el = el; this.opts = opts; }
  render(points: Array<{x:number;y:number}> = []) {
    // минимал: рисуем одну ось
    const ns = 'http://www.w3.org/2000/svg';
    const line = document.createElementNS(ns, 'line');
    line.setAttribute('x1','40'); line.setAttribute('y1','220');
    line.setAttribute('x2','920'); line.setAttribute('y2','220');
    line.setAttribute('class','svg-grid-line');
    this.el.appendChild(line);
  }
}
