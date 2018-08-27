import createElement from './createElement'
import { VNode } from './vdom'

export default (vnode: VNode, root: HTMLElement) => {
  const elm = createElement(vnode)
  root.appendChild(elm)
}
