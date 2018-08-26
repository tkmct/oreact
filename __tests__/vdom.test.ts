import { h, VNode } from '../src/vdom'

describe('Test h', () => {
  test('simple', () => {
    const vnode = h('div', {})
    expect(vnode.tagName).toBe('div')
    expect(vnode.attrs).toEqual({})
    expect(vnode.key).toBeUndefined()
    expect(vnode.children).toBeUndefined()
  })

  test('with attributes', () => {
    const vnode = h('div', { className: 'container' })
    expect(vnode.attrs.className).toEqual('container')
  })

  test('with key attr', () => {
    const vnode = h('div', { key: 'key' })
    expect(vnode.key).toEqual('key')
  })

  test('with children', () => {
    const vnode = h(
      'div',
      { className: 'parent' },
      h('a', { href: 'google.com' })
    )
    expect(vnode.children).toEqual(new VNode('a', { href: 'google.com' }))
  })

  test('with children of array', () => {
    const vnode = h('div', { className: 'parent' }, [
      h('a', { href: 'google.com' }),
      h('p', {}, 'Hello, world')
    ])

    expect(Array.isArray(vnode.children)).toBe(true)
    expect((vnode.children as VNode[]).length).toBe(2)
  })
})
