import diff from '../src/diff'
import VNode from '../src/vdom/vnode'
import { PatchType } from '../src/patch'

describe('diff', () => {
  test('no difference', () => {
    const node = new VNode('div')
    expect(diff(node, node)).toEqual([])
  })

  test('text diff', () => {
    const node = new VNode('div', {}, 'Hello')
    const nextNode = new VNode('div', {}, 'World')
    const patches = diff(node, nextNode)
    expect(patches.length).toBe(1)
    expect(patches[0].type).toBe(PatchType.TEXT)
    expect(patches[0].patch).toBe('World')
  })

  test('remove diff', () => {
    const node = new VNode('div', {}, 'Hello')
    const nextNode = new VNode('div', {})
    const patches = diff(node, nextNode)
    expect(patches.length).toBe(1)
    expect(patches[0].type).toBe(PatchType.REMOVE)
  })
})
